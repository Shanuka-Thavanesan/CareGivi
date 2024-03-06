import mongoose from "mongoose";


const neederSchema = new mongoose.Schema({
  // email: { type: String, required: true},
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true

  },
  name: { type: String},
  dateOfBirth:{type:Date},
  age: { type: Number },
  adderess:{type:String},
  phone: { type: Number },
  photo: { url: String },
  emergencyPhone: { type: Number },
  healthCondition:{type:String},
  serviceNeed: { type: String },
  behaviour: { type: String },

  totalDays:{type:String},
 
  role: {
    type: String,
    enum: ["careneeder", "admin"],
    default: "careneeder",
  },
  gender: { type: String, enum: ["male", "female", "other"] },
  genderRequirement: { type: String, enum: ["male", "female", "other"] },
  startDate:{type:Date},
  endDate:{type:Date},
  servicePerDay:{type:Number},
  tax:{type:Number},
  securityFee:{type:Number},
  externalService:{type:Number},
  price:{type:String},
  // appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },
});

const Needer =mongoose.model("Needer", neederSchema);

export default Needer;
