import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const caretakerSchema = new mongoose.Schema({
  
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number},
  photo: { url: String },
  
  role: {
    type: String,
  },

 
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRating: {
    type: Number,
    default: 0,
  },
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },
  
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});
caretakerSchema.pre('save',async function(next){
  if (!this.isModified('password')){
 next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password =await bcrypt.hash(this.password,salt)
});
caretakerSchema.methods.matchPassword= async function(enteredPassword){
return await bcrypt.compare(enteredPassword, this.password)
};


export default mongoose.model("Caretaker", caretakerSchema);
