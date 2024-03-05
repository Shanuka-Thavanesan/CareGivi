// import React from 'react';
// import { useState } from 'react';
// import userImg from '../assets/images/userImg.png';
// import FeedbackForm from './FeedbackForm';

// const Feedback =()=>{

//     const [showFeedbackForm, setShowFeedbackForm]= useState(false)

//     return( 
//     <div>
//         {!showFeedbackForm && (<div className='py-6'>
//     <button className="btn hover:bg-peach hover:text-primaryColor" onClick={()=> setShowFeedbackForm(true)}>
//         Give your Feedback
//         </button>
//     </div>
//     )}

//     {showFeedbackForm && <FeedbackForm/>}
//     </div> 
//     ); 
// };

// export default Feedback;

import React, { useState } from 'react';
import userImg from '../assets/images/userImg.png';
import FeedbackForm from './FeedbackForm';

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
 

  return (
    <div>
      {!showFeedbackForm && (
        <div className="py-6 ">
          <button
            className="btn hover:bg-peach hover:text-primaryColor"
            onClick={() => setShowFeedbackForm(true)}
            
          >
            Give your Feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    
      
    </div>

  );
  
};

export default Feedback;    