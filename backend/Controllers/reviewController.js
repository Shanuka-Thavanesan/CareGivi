
import Review from '../models/ReviewSchema.js'
import Caretaker from '../models/caretakerSchema.js'

// get all reviews
export const getAllReviews= async(req,res)=>{
    try {
        
        const reviews= await Review.find({})

        res.status(200).json({success:true, message:'Successful', data:reviews})

    } catch (err) {
        res.status(404).json({success:false, message:'Not found'})
    }
};

// create review
export const createReview=async(req,res)=>{
    if(!req.body.caretaker)req.body.caretaker=req.params.caretakerId
    if(!req.body.user)req.body.user=req.userId

    const newReview= new Review(req.body)

    try {

        const savedReview= await newReview.save()

        await Caretaker.findByIdAndUpdate(req.body.caretaker,{
            $push:{reviews:savedReview._id}
        })

        res.status(200).json({success:true, message:'Review submitted',data:savedReview})
        
    } catch (err) {
        res.status(500).json({success:false, message:err.message})  
    }
}