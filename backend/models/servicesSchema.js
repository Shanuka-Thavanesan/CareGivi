import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    title: { type: String },
    // image: { url: String },
    need: { type: String },
    type: { type: String },
    benifit: { type: String },
    servicePerDay:{type:String},
    tax:{type:String},
    security:{type:String}
    // timestamps: true,
    // type: Date,
    // default: Date.now

})

// export default mongoose.model("Services", ServiceSchema);
const Services = mongoose.model('Services', ServiceSchema );
export {Services};