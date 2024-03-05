import mongoose from "mongoose";
import bcrypt from 'bcrypt';
// import { number } from "prop-types";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
 
  role: {
    type: String,
    enum: ["careneeder", "admin"],
    default: "careneeder",
  },
  // photo: { url: String },
  // gender: { type: String, enum: ["male", "female", "other"] },

  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },
  
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});
UserSchema.pre('save',async function(next){
  if (!this.isModified('password')){
 next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password =await bcrypt.hash(this.password,salt)
});
UserSchema.methods.matchPassword= async function(enteredPassword){
return await bcrypt.compare(enteredPassword, this.password)
};

export default mongoose.model("User", UserSchema);
