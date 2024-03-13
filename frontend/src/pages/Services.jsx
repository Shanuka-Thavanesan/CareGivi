import { useState, useEffect } from 'react';    
import { Link } from 'react-router-dom';
// import {mainservice} from "../assets/data/mainservice";
// import Services2 from "../pages/Services2";
import service from "../assets/images/service.png"


function Services ()  {
    const [service, setservice] = useState([]);
    useEffect(() => {
        loadUser();
      }, []);
      const loadUser = async () =>
      
      {
         try
         {
             const response = await fetch('http://localhost:5000/api/v1/services/get',);
              const data = await response.json();
              setservice(data.data);
              console.log(data);
            
            }
            catch (error)
            { console.error('Error fetching data:', error); } };

    return <section className='mb-20 mt-10' >
        <div className="container py-6 filter   ">
        <div className="xl:w-[470px] mx-auto text-center relative ">
      <h2 className="heading text-primaryColor mb-4 filter drop-shadow-md md:drop-shadow-xl ">Our Services</h2>
      {/* <span className="w-[150px] h-2 bg-peach rounded-full block absolute top-1/2 left-1/3 transform -translate-y-1/2"></span> */}
      <p className="text_para text-center py-4 ">Our Clients Are Our Purpose</p>
    </div>
    <br />
<div className=" mb-20">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] '>
        {Array.isArray(service)&& service.map((service) => (
        <div className='py-[5px] px-3 lg:px-5 border border-solid rounded-md border-primaryColor bg-peach '>
      <h2 className='text-[26px] leading-9 font-[700] text-primaryColor '><h1 key={service._id}></h1></h2>
          {/* <h2 className='text-[26px] leading-9 font-[700] text-primaryColor '>{service._id}</h2> */}
        <h2 className='text-[26px] leading-9 font-[700] text-primaryColor '>{service.title}</h2>
     
        <p className='text-[16px] leading-7 font-[400] mt-4 '><b>Need- </b>  {service.need}</p>
        <p className='text-[16px] leading-7 font-[400] mt-4 '><b>Type- </b>  {service.type}</p>
        <p className='text-[16px] leading-7 font-[400] mt-4 '><b> Benifit-</b>{service.benifit}</p>
        
        <button className='btn text-[16px] leading-7 font-[400] mt-2 mb-2 px-2 py-1    '><b>Service per day- </b>  {service.servicePerDay}</button>
        
        </div> 
 ))}
        
        </div>
        </div>  
        </div>
        <div class="flex justify-center">
        <Link to='/findcaretaker'><button className='btn hover:bg-peach hover:text-primaryColor filter drop-shadow-md md:drop-shadow-xl'>Need of Caretaker</button></Link>
        </div>
    </section> 
};

export default Services;