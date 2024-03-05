import Needer from "../models/neederSchema.js"; 
import asyncHandler from "express-async-handler";
import {request} from "express";

const createNeeder = asyncHandler(async (req, res) => {
  try{
  const {
    name,
    phone,
    emergencyPhone,
    age,
    dateOfBirth,
    address,
    gender,
    genderRequirement,
    serviceneed,
    healthCondition,
    behaviour,totalDays,
    startDate,
    endDate,
    price

  } = req.body;
  
console.log(req.userId);

  const needer = new Needer({
    userId:req.userId,
    name,
    phone,
    emergencyPhone,
    age,
    dateOfBirth,
    address,
    gender,
    genderRequirement,
    serviceneed, 
    healthCondition,
    behaviour,totalDays,
    startDate,
    endDate,
    price});
  
    const createNeeder =await needer.save()
  console.log(createNeeder);
  res.status(200).json(createNeeder);}
  catch (error){
    throw new Error(error);
  }
});

export const updateNeeder= async(req,res)=>{
  const id= req.params.id

  try {

      const updatedNeeder= await Caretaker.findByIdAndUpdate(id,{$set:req.body},{new:true});

      res.status(200).json({success:true,message:"Successfully Updated", data:updatedNeeder});
      
  } catch (err) {
      res.status(500).json({success:false,message:"Failed to Update"});
  }
};

export const deleteNeeder= async(req,res)=>{
  const id= req.params.id

  try {

       await Needer.findByIdAndDelete(id);

      res.status(200).json({success:true,message:"Successfully Deleted"});
      
  } catch (err) {
      res.status(500).json({success:false,message:"Failed to delete"});
  }
};

export const getSingleNeeder= async(req,res)=>{
  const {id}= req.params
  

  try {
    
 
        const neederDetails= await Needer.findOne({userId:id}).populate("userId","name");
        

      // const careneeder= await Needer.findById(id).populate('reviews').select('-password');
      // console.log(careneeder);
      res.status(200).json({success:true,message:"CareNeeder found", data:neederDetails});
      
  } catch (err) {
      res.status(404).json({success:false,message:"No CareNeeder found"});
  }
};

export const getAllNeeder= async(req,res)=>{
    

  try {

      const {query}=req.query
      let careneeders;

      if(query){
          careneeders=await Needer.find({isApproved:'approved',
          $or:[
          {name:{$regex:query,$options:"i"}},
          {specialization:{$regex:query,$options:"i"}}],
      }).select("-password");
      }else{
           careneeders= await Needer.find({isApproved:'approved'}).select('-password');
      }

      

      res.status(200).json({success:true,message:"CareNeeders found", data:careneeders});
      
  } catch (err) {
      res.status(404).json({success:false,message:"Not found"});
  }
};

export const getNeederProfile = async(req,res)=>{
  const careNeederId = req.neederId

  try {
      const careneeder = await Needer.findById(neederId)

      if(!careneeder){
          return res.status(404).json({success:false, message:'CareNeeder not found'})
      }

      const {password, ...rest} = careneeder._doc;
      const appoinments =await Booking.find({needer:neederId})

      res.status(200)
      .json({success:true, message:'Profile info is getting', data:{...rest, appoinments}})

      
  } catch (err) {
      res.status(500)
      .json({success:false,message:"Something went wrong, cannot get"});
      
      
  }
};


  export {createNeeder};

