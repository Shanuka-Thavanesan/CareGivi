import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Caretaker from "../models/caretakerSchema.js";
import Needer from "../models/neederSchema.js";
import asyncHandler from "express-async-handler";

export const updateUser= async(req,res)=>{
    const id= req.params.id

    try {

        const updatedUser= await User.findByIdAndUpdate(id,{$set:req.body},{new:true});

        res.status(200).json({success:true,message:"Successfully Updated", data:updatedUser});
        
    } catch (err) {
        res.status(500).json({success:false,message:"Failed to Update"});
    }
};


export const deleteUser= async(req,res)=>{
    const id= req.params.id

    try {

         await User.findByIdAndDelete(id);

        res.status(200).json({success:true,message:"Successfully Deleted"});
        
    } catch (err) {
        res.status(500).json({success:false,message:"Failed to delete"});
    }
};

export const getSingleUser= async(req,res)=>{
    const {id}= req.params
    

    try {
        console.log(id);
        const user= await User.findById(id)
        let needer;
        if(user){
            needer=await Needer.findOne({userId:id})
            
        }
        console.log(user);
        console.log(needer);

        res.status(200).json({success:true,message:"User found",data:user,needer});
        
    } catch (err) {
        res.status(404).json({success:false,message:"No user found",err:err.message});
    }
};






  
// export const getAllUser= async(req,res)=>{
    

    // try {

        // const users= await User.find({}).select('-password');

        // res.status(200).json({success:true,message:"Users found", data:users});
        // console.log(users);
        
    // } catch (err) {
        // res.status(404).json({success:false,message:"Not found"});
    // }
// };

// get all users
export const getAllUser= asyncHandler(async (req, res) => {
    const UserDetails= await User.find({});
    res.json(UserDetails);
  });

export const getUserProfile = async(req, res)=>{
    const userId = req.userId
   
    try {
        const user = await User.findById(userId)

        if(!user){
            return res.status(404).json({success:false, message:'User not found'})
        }
 
        const neederDetails= await Needer.findOne({userId}).populate("userId","name");
        console.log(neederDetails);
        const {password, ...rest} = user._doc

        res.status(200)
        .json({success:true, message:'Profile info is getting', data:{...rest},neederDetails})

        
    } catch (err) {
        res.status(500)
        .json({success:false,message:"Something went wrong, cannot get"});
        
        
    }
};

export const getMyAppointment = async(req,res)=>{
    try {


        // step -1 : retrieve appointment from booking for specific user
        const bookings = await Booking.find({user:req.userId})

        // step -2 : extract caretakers ids from appoinment booking
        const caretakerIds = bookings.map(el=>el.caretaker.id)

        // step -3 : retrieve caretakers ising caretaker ids
        const caretakers = await Caretaker.find({_id:{$in:caretakerIds}}).select('-password')

        res.status(200)
        .json({
            success:true,
             message:'Appoinments are getting',
              data:caretakers
            });
        
    } catch (err) {
        res.status(500)
        .json({success:false,message:"Something went wrong, cannot get"});
    }
}
