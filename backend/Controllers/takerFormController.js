
import Needer from "../models/neederSchema.js";
import asyncHandler from "express-async-handler";
import Taker from "../models/takerFormSchema.js";


const createTaker = asyncHandler(async (req, res) => {
  try {
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




    const createdtaker = await Taker.create({
      userId: req.userId, name, phone, dateOfBirth, age, address, gender,
      genderRequirement, services, experiences, acadamicCertificate, characterCertificate, identityProof,
      healthCondition,
    });
    console.log(createdtaker);

    res.status(200).json(createdtaker);
  }
  catch (error) {
    throw new Error(error);
  }

});

export const updateTaker = async (req, res) => {
  const userId = req.params.id; // Access userId from req.params
  console.log(userId)
  const {  status} = req.body; 

  try {
    // Find the Taker document by userId
    const takerToUpdate = await Taker.findOne({ userId });
    const takerStatus = await User.findById( userId );

    if (takerToUpdate) {
     
      if (status !== undefined) {
        takerToUpdate.isApproved = status;
        takerStatus.isApproved = status;
      }
     
      // Save the updated taker document
      const updatedtaker = await takerToUpdate.save();
      const updatedStatus = await takerStatus.save();

      // Respond with the updated taker document
      res.status(200).json(updatedtaker);
    } else {
      // If no Taker document found for the userId, respond with 404
      res.status(404).json({ message: 'Taker not found' });
    }
  } catch (error) {
    // Handle errors and respond with an error message
    console.error('Error updating Taker:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const deleteTaker = async (req, res) => {
  const id = req.params.id

  try {

    await Taker.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Successfully Deleted" });

  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

export const getSingleTaker = async (req, res) => {
  const { id } = req.params

  try {

    const caretaker = await Taker.findOne({ userId: id }).populate("userId", "name").select('-password');

    res.status(200).json({ success: true, message: "Caretaker found", data: caretaker });

  } catch (err) {
    res.status(404).json({ success: false, message: err });
  }
};


export const getAllTaker = async (req, res) => {


  try {

    const { query } = req.query
    let caretakers;

    if (query) {
      caretakers = await Taker.find({
        isApproved: 'approved',
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } }],
      }).select("-password");
    } else {
      caretakers = await Taker.find({ isApproved: 'approved' }).select('-password');
    }



    res.status(200).json({ success: true, message: "Caretakers found", data: caretakers });


  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

export const getTakerProfile = async (req, res) => {
  const caretakerId = req.userId

  try {
    const caretaker = await Taker.findById(caretakerId)

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
};





export { createTaker };

