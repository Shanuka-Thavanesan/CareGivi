import Needer from "../models/neederSchema.js"; 
import Booking from "../models/BookingSchema.js";
import Caretaker from "../models/caretakerSchema.js";
import asyncHandler from "express-async-handler";

// ===================update caretakers =====================
export const updateCaretaker = async (req, res) => {
    const id = req.params.id

    try {

        const updatedCaretaker = await Caretaker.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json({ success: true, message: "Successfully Updated", data: updatedCaretaker });

    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to Update" });
    }
};

// =======================delete caretakers==================
export const deleteCaretaker = async (req, res) => {
    const id = req.params.id

    try {

        await Caretaker.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: "Successfully Deleted" });

    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete" });
    }
};

// ===========================get single caretaker=====================
export const getSingleCaretaker = async (req, res) => {
    const id = req.params.id

    try {

        const caretaker = await Caretaker.findById(id).populate('reviews').select('-password');

        res.status(200).json({ success: true, message: "Caretaker found", data: caretaker });

    } catch (err) {
        res.status(404).json({ success: false, message: "No Caretaker found" });
    }
};

// ========================get all caretakers===================================
export const getAllCaretaker = asyncHandler(async (req, res) => {
    const caretaker = await Caretaker.find({});
    res.json(caretaker);
});
// =======================only shoing the approved caretakers=================
// export const getAllCaretaker= async(req,res)=>{
//     try {
//         const {query}=req.query
//         let caretakers;
//         if(query){
//             caretakers=await Caretaker.find({isApproved:'approved',
//             $or:[
//             {name:{$regex:query,$options:"i"}},
//             {specialization:{$regex:query,$options:"i"}}],
//         }).select("-password");
//         }else{
//              caretakers= await Caretaker.find({isApproved:'approved'}).select('-password');
//         }
//         res.status(200).json({success:true,message:"Caretakers found", data:caretakers});
//     } catch (err) {
//         res.status(404).json({success:false,message:"Not found"});
//     }
// };

// =========================get caretakers profile========================
export const getCaretakerProfile = async (req, res) => {
    const caretakerId = req.userId

    try {
        const caretaker = await Caretaker.findById(caretakerId)

        if (!caretaker) {
            return res.status(404).json({ success: false, message: 'Caretaker not found' })
        }

        const { password, ...rest } = caretaker._doc;
        const appoinments = await Booking.find({ caretaker: caretakerId })

        res.status(200)
            .json({ success: true, message: 'Profile info is getting', data: { ...rest, appoinments } })


    } catch (err) {
        res.status(500)
            .json({ success: false, message: "Something went wrong, cannot get" });


    }
}

//========================get needer details=======================
export const takerProfile = async (req, res) => {
    try {
      const neederDetails = await Needer.findOne({ taker: req.userId }).populate("userId", "name");
      if (!neederDetails) {
        return res.status(404).json({ success: false, message: "No CareNeeder found" });
      }
      res.status(200).json({ success: true, message: "CareNeeder found", data: neederDetails });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };