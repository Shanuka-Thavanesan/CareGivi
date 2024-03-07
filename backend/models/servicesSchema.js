import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    title: { type: String },
    need: { type: String },
    type: { type: String },
    benifit: { type: String },
    servicePerDay:{type:String},
    tax:{type:String},
    security:{type:String}


})

const Services = mongoose.model('Services', ServiceSchema );
export {Services};