import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const FeedbackForm =()=>{

    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);
    const [reviewText,setReviewText]=useState("");

    const handleSubmitReview=async e =>{
        e.preventDefault();

        // later we will use api
        
    };

    return <form action="">
        <div className='bg-peach'>
            <h3 className='text-primaryColor text-[16px] leading-6 font-semibold mb-4 mt-0 filter drop-shadow-md md:drop-shadow-xl'>
                How would you rate the overall experience?
                </h3>

                <div>
                    {[...Array(5).keys()].map((_,index)=>{
                        index+=1;

                        return (
                        <button
                         key={index} 
                         type='button'
                         className={`${
                            index<=((rating && hover) || hover) 
                            ? 'text-yellowColor'
                            :'text-textColor-400'
                        }bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                         onClick={()=> setRating(index)} 
                         onMouseEnter={()=> setHover(index)}
                         onMouseLeave={()=> setHover(rating)}
                         onDoubleClick={()=>{
                            setHover(0);
                            setRating(0);
                         }}
                         >
                            <span>
                                <AiFillStar/>
                                </span>
                                </button>
                        ); console.log(Feedback)
                    })}
                </div>
        </div>


        <div className='mt-[30px]'>
        <h3 className='text-primaryColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
                Share your feedback or suggestions
                </h3>

                <textarea className='border border-solid border-yellowGreen focus:outline outline-primaryColor w-2/3
                 px-4 py-3 rounded-md'  rows="5"
                 placeholder='Write your message'
                 onChange={(e)=> setReviewText(e.target.value)}
                 ></textarea>
        </div>

        <button type='submit' onClick={handleSubmitReview} className='btn hover:bg-yellowGreen hover:text-primaryColor'>Submit Feedback</button>
    </form> 
};

export default FeedbackForm;