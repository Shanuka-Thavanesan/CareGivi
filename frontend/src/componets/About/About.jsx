
import React from 'react';
import{aboutus} from '../../assets/images/about us.png';

const About =()=>{
    return <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">

            {/*================== about image =================== */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                <img src={aboutus} alt="" />
            </div>

            </div>

            {/* ===================== about content ================== */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                <h2 className='heading'>OUR MISSION</h2>
                <p className='text_para'>CAREGIVI has a special purpose — to help people have a safe home life with comfort,
                     independence, and dignity. CAREGIVI provides nursing, rehabilitative, therapeutic, hospice, 
                     adults, and seniors worldwide. We care for our clients 24 hours a day, 7 days a week.</p>
                <p className='text_para mt-[30px]'>Families coping with significant illness or disability need help and support while caring for a family member. Our goal at CAREGIVI is to provide the 
                    highest quality home health care services available.
                     We believe our clients and their families deserve home health care 
                    delivered with compassion, excellence, and reliability, our CAREGIVI core values.</p>

                    <Link to='/'><button className='btn'>Learn more</button></Link>
            </div>

        </div>
    </section>  
};

export default About;

 