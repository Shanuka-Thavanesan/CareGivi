import stripePackage from "stripe";
import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoute from "./Routes/auth.js"
import userRoute from "./Routes/user.js"
import caretakerRoute from "./Routes/caretaker.js"
import reviewRoute from "./Routes/review.js"
import caretakerFormRoute from "./Routes/caretakerFormRoute.js"
import neederRoute from "./Routes/neederRoute.js"
import serviceRoute from "./Routes/services.js"
import paymentRoute from "./Routes/payment.js"
import User from "./models/UserSchema.js"
// import adminRoutes from "./Routes/admin.js"

// const adminRoutes = require('./routes/adminRoutes');


dotenv.config();


const app=express();
const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.END_POINT_SECRET
app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];
  let event;
  let data;
  let eventType;
  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    console.log(err);
    return;
  }
      data = event.data.object;
      eventType = event.type;
      if (eventType === "checkout.session.completed") {
        stripe.customers
          .retrieve(data.customer)
          .then(async (customer) => {
            try {
              const userId = customer.metadata.user;
              console.log(userId);
              const user = await User.findOne({ _id: userId });
              if (user) {
                user.isPaid = true;
                const updatedUser = await user.save();
                return updatedUser;
              } else {
                throw new Error('User not found');
              }
            } catch (error) {
              console.error('Error:', error.message);
              throw error;
            }
          })
          .catch((err) => console.error(err.message));
      }
      // Return a 200 response to acknowledge receipt of the event
      response.send().end();
    });

const port=process.env .PORT || 8000;

const corsOptions={
    origin:true
}

app.get('/',(req,res)=>{
    res.send('Api is working');
})

// database connection
mongoose.set('strictQuery',false)
const connectDB =async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL,{
            
            useUnifiedTopology:true,
        })
    console.log('MongoDB database is connected');

    } catch (err) {
        console.log('MongoDB database is connection failed') ;
    }
}

// midleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoute); 

app.use('/api/v1/users',userRoute);  

app.use('/api/v1/caretakers',caretakerRoute); 

app.use('/api/v1/reviews',reviewRoute); 

app.use('/api/v1/taker',caretakerFormRoute);

app.use('/api/v1/needer',neederRoute);

app.use('/api/v1',serviceRoute);

app.use('/api/v1',paymentRoute);

// app.use('/admin', adminRoutes);






app.listen (port,()=>{
    connectDB();
    console.log("Server is running on port"+port);
})