import mongoose from "mongoose";

const takerFormSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Caretaker",
    required:true

  },

  name: {
    type: String
  },
  phone: {
    type: String
  },



  // Fields for caretakers only
  age: {
    type: Number
  },
  address: {
    type: String
  },
  dateOfBirth: { type: Date },
  // qualifications: { type: String, },
  gender: { type: String, enum: ["male", "female", "other"] },
  genderRequirement: { type: String, enum: ["male", "female", "other"] },
  services: { type: String },
  acadamicCertificate:{acadamicCertificate:String},

  experiences: {
    type: String,
  },
  services: { type: String },  
  characterCertificate:{characterCertificate:String},
  identityProof:{identityProof:String},


  healthCondition: { type: String },


  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },

  // appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});
const Taker = mongoose.model("Taker", takerFormSchema);
export default Taker


