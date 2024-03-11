import {Services} from '../models/servicesSchema.js';

import asyncHandler from 'express-async-handler';
// import cloudinary from './../';


/// @desc  POST Serives
const service = asyncHandler(async (req, res) => {
    const { title, need, type,benifit,servicePerDay,tax, security } = req.body;
    //     const result = await cloudinary.uploader.upload(req.file.path, {
    //       folder: 'Services',
    //   });
    const data = await Services.create({
        title, need, type,benifit,servicePerDay,tax, security
    });
    if (data) {
        res.status(201).json(data);
    } else {
        res.status(400)
        throw new Error(" Service Invaild data")
    }
});

/// @desc Get all Services
const getservices= async(req,res)=>{
    try {
        const service= await Services.find({});
       
        res.status(200).json({success:true,message:"services found", data:service});
        console.log(service);
    } catch (err) {
        res.status(500).json({success:false,message:"Not found"});
    }
};

// @desc Get a single Servies by ID
const getserviceId = asyncHandler(async (req, res) => {
    const serviceID = await Services.findById(req.params.id);
    if (serviceID) {
        res.json(serviceID);
    } else {
        res.status(404);
        throw new Error('Service not found');
    }
});

// @desc Delete Servies by ID
const deleteserviesId = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteservies = await Services.findOneAndDelete(id)
        res.json({ message: 'Service deleted', deleteservies });
    } catch {
        res.status(404);
        throw new Error('Service not found');
    }
});

/// @desc  UpdateService
const UpdateService = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        const title = req.body;
        const need = req.body;
        const type = req.body;
        const benifit = req.body;
        const servicePerDay = req.body;
        const result = await Services.findByIdAndUpdate(
            id, title, need,type,benifit,servicePerDay
        )
        res.send(result)
    }
    catch (error) {
        res.status(400);
        throw new Error('Service not update')
    }
})
export { service, getservices, getserviceId, deleteserviesId, UpdateService };