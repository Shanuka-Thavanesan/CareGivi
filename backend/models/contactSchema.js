import mongoose from "mongoose";
const contactSchema= mongoose.Schema(
    {
       
        email: {
            type: String,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);
const contactModel = mongoose.model('Contact', contactSchema);
export default contactModel;