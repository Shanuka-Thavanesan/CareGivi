

import asyncHandler from "express-async-handler";
import Taker from "../models/takerFormSchema.js";


const createTaker = asyncHandler(async (req, res) => {
  try{
  const {
    name,
    phone,
    dateOfBirth,
    age,
    address,
    gender,
    genderRequirement,
    services,
    experiences,
    acadamicCertificate,
    characterCertificate,
    identityProof,
    healthCondition,
  
  } = req.body;
  // console.log(req.body);

 

  
  const createdtaker = await Taker.create({userId:req.userId,name,phone,dateOfBirth,age,address,gender, 
    genderRequirement,services,experiences,acadamicCertificate,characterCertificate,identityProof,
    healthCondition,});
    console.log(createdtaker);
 
  res.status(200).json(createdtaker);} 
  catch (error){
    throw new Error(error);
  }
  
});

// export const updateTaker= async(req,res)=>{
//   const id= req.params.id

//   try {

//       const updatedTaker= await Caretaker.findByIdAndUpdate(id,{$set:req.body},{new:true});

//       res.status(200).json({success:true,message:"Successfully Updated", data:updatedTaker});
      
//   } catch (err) {
//       res.status(500).json({success:false,message:"Failed to Update"});
//   }
// };


export const updateTaker = async (req, res) => {
  const id = req.params.id;

  try {
    // Find and update the Taker document by ID
    const updatedTaker = await Taker.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
    });

    if (updatedTaker) {
      // If update was successful, respond with the updated document
      res.status(200).json({ success: true, message: 'Successfully updated', data: updatedTaker });
    } else {
      // If no Taker document found for the ID, respond with 404
      res.status(404).json({ success: false, message: 'Taker not found' });
    }
  } catch (err) {
    // Handle errors and respond with an error message
    console.error('Error updating Taker:', err);
    res.status(500).json({ success: false, message: 'Failed to update Taker' });
  }
};


export const deleteTaker= async(req,res)=>{
  const id= req.params.id

  try {

       await Taker.findByIdAndDelete(id);

      res.status(200).json({success:true,message:"Successfully Deleted"});
      
  } catch (err) {
      res.status(500).json({success:false,message:"Failed to delete"});
  }
};

export const getSingleTaker= async(req,res)=>{
  const {id}= req.params

  try {
    
      const caretaker= await Taker.findOne({userId:id}).populate("userId","name").select('-password');

      res.status(200).json({success:true,message:"Caretaker found", data:caretaker});
      
  } catch (err) {
      res.status(404).json({success:false,message:err});
  }
};


export const getAllTaker= async(req,res)=>{
    

  try {

      const {query}=req.query
      let caretakers;

      if(query){
          caretakers=await Taker.find({isApproved:'approved',
          $or:[
          {name:{$regex:query,$options:"i"}},
          {specialization:{$regex:query,$options:"i"}}],
      }).select("-password");
      }else{
           caretakers= await Taker.find({isApproved:'approved'}).select('-password');
      }

      

      res.status(200).json({success:true,message:"Caretakers found", data:caretakers});
      
      
  } catch (err) {
      res.status(404).json({success:false,message:"Not found"});
  }
};

export const getTakerProfile = async(req,res)=>{
  const caretakerId = req.userId

  try {
      const caretaker = await Taker.findById(caretakerId)

      if(!caretaker){
          return res.status(404).json({success:false, message:'Caretaker not found'})
      }

      const {password, ...rest} = caretaker._doc;
      const appoinments =await Booking.find({caretaker:caretakerId})

      res.status(200)
      .json({success:true, message:'Profile info is getting', data:{...rest, appoinments}})

      
  } catch (err) {
      res.status(500)
      .json({success:false,message:"Something went wrong, cannot get"});
      
      
  }
};




export{createTaker};

