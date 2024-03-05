import mongoose from "mongoose";
// import Caretakers from "../models/caretakerSchema";

const bookingSchema = new mongoose.Schema(
  {
    caretaker: {
      type: mongoose.Types.ObjectId,
      ref: "Taker",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "Needer",
      required: true,
    },
    
    appointmentDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
