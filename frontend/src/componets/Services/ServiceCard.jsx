import React from 'react';
import {Link} from 'react-router-dom';
import {BsArrowRight,} from 'react-icons/bs';


const ServiceCard =({item,index})=>{


    const {name, desc,bgColor,peach}=item

    return <div className='py-[30px] px-3 lg:px-5 border border-solid border-yellowGreen items-center filter drop-shadow-md md:drop-shadow-xl rounded'>
        <h2 className='text-[26px] leading-9 font-[700] text-primaryColor justify-center'>{name}</h2>
        {/* <p className='text-[16px] leading-7 font-[400] mt-4'>{desc}</p> */}


        <div className='flex items-center justify-between mt-[30px]'>
        <Link to='/services' className='w-[35px] h-[30px] rounded-full bg-peach mt-[30px]
                     mt-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                        <BsArrowRight className='group-hover:text-yellowGreen w-6 h-6 items-center justify-center' />
                    </Link>

        {/* <span className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]'
        style={{
            // background:`${bgColor}`,
            color:`${peach}`,
            borderRadius:"10px 0 0 10px",
        }}
        >
        {index+1}
        </span> */}

        </div>

    </div>  
};

export default ServiceCard;