import mongoose from "mongoose";
import Caretaker  from "./caretakerSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    caretaker: {
      type: mongoose.Types.ObjectId,
      ref: "Caretaker",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/,function(next){

  this.populate({
    path:'user',
    select:"name pahoto",
  });

  next();

});

reviewSchema.statics.calcAverageRatings = async function (caretakerId){

// this points the current review
const stats = await this.aggregate([{

$match:{caretaker:caretakerId}

},
{
  $group:{
    _id:'$caretaker',
    numOfRating:{$sum:1},
    avgRating:{$avg:'$rating'}
  }
}
])
  
  await Caretaker.findByIdAndUpdate(caretakerId,{
    totalRating:stats[0].numOfRating,
    averageRating:stats[0].avgRating,
  });

};

reviewSchema.post('save',function(){

this.constructor.calcAverageRatings(this.caretaker);

})

export default mongoose.model("Review", reviewSchema);
