import React from 'react';
// import About from '../componets/About/About';
import CareGivilogo from '../assets/images/CareGivilogo.png';
import CareGiviLOGO from "../assets/images/heroIMG.png"
import caretaker2 from '../assets/images/caretaker2.png';
import { Link } from 'react-router-dom';
import { BsArrowRight, } from 'react-icons/bs';
import ServiceList from '../componets/Services/ServicesList';
import CaretakerList from '../componets/Caretakers/CaretakersList';
import FaqList from '../componets/Faq/FaqList';
import Feedback from './Feedback';
// import Testimonial from '../componets/Testimonial/Testimonial';
// import {caregiver1} from '../assets/images/caregiver1.png';
// import{aboutus} from '../../assets/images/about us.png';

const Home = () => {
    return <>

        {/* ================== hero section ============== */}

        <section className='hero_section drop-shadow-md md:drop-shadow-xl 2xl:h-[900] '>
            <div className='container'>
                <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between '>

                    {/* ================= hero content ================ */}
                    <div>
                        <div className='lg:w-[570px] filter  '>
                            <h1 className='text-[36px] leading-[46px] text-primaryColor font-[800] md:text-[60px] md:leading-[70px] drop-shadow-md md:drop-shadow-xl '>
                                Improving <span className='text-yellowGreen filter drop-shadow-md md:drop-shadow-xl'> Health Care </span> at Home
                            </h1>
                            <br />
                            <p className='text_para md:font-bold py-2 text-[black]'>
                                CAREGIVI teams take pride in being watchful health care advocates, working closely with you, your loved ones,
                                your doctor and case manager to provide the personalized circle of care that meets your needs.
                            </p>
                            <br />
                            <Link to='/Services'><button className='btn hover:bg-yellowGreen hover:text-primaryColor filter drop-shadow-md md:drop-shadow-xl'>Services of CareGivi</button></Link>
                        </div>

                        {/* ================ hero content =============== */}
                        <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>

                            <div>
                                <h6 className='text-[36px] leading-[56px] lg:text-[44px] font-[700] text-primaryColor filter drop-shadow-md md:drop-shadow-xl'>Find Your Caretakers</h6>
                                <br />
                                {/* <span className='w-[350px] h-2 bg-peach rounded-full block mt-[-14px] '></span> */}
                            </div>

                        </div>


                    </div>
                    {/* ================= hero contant ==================*/}


                    <div className='flex gap-[30px] mb-5 justify-end py-12'>
                        <div>
                        <img className='py-12 mt-20 mb-20  w-full h-full' src={CareGiviLOGO} alt="" /> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* ================== hero section end ============== */}


        {/* <section>
        <div className='container'>
            <div className='lg:w-[470] mx-auto'>
                <h2 className='heading text-center text-yellowGreen'>Giving the best Care Giving Services</h2>

                <p className='text_para text-center py-5'>Our Expert CareGivers Are Dedicated To Providing 
                The Highest Quality Private Nursing 
                And Homecare Services For Your Loved Ones</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

            {/* ================ 1 ================= */}

        {/* <div className='py-[30px] px-5'>
                    <div className='flex items-center justify-center'>
                        <img src={caretaker2} alt=""  height="300px" width="250px" />
                    </div>
                    <div className='mt-[30px]'>
                    <h2 className='text-[26px] leading-9 text-primaryColor font-[700] text-center'>Find a Caretaker</h2>
                    <p className='text-[16px] leading-7 '>CAREGIVI has a special purpose — to help people have a safe home 
                    life with comfort, independence, and dignity.</p>
                    <Link to='/caretakers' className='w-[35px] h-[30px] rounded-full border border-solid border-primaryColor mt-[30px]
                     mt-auto flex items-center justify-center group hover:bg-peach hover:border-none  '>
                        <BsArrowRight className='group-hover:text-primaryColor w-6 h-6 items-center justify-center ' />
                    </Link>
                    </div>
                </div> */}

        {/* ================ 2 ================= */}

        {/* <div className='py-[30px] px-5'>
                    <div className='flex items-center justify-center'>
                        <img src={caretaker2} alt=""  height="300px" width="250px" />
                    </div>
                    <div className='mt-[30px]'>
                    <h2 className='text-[26px] leading-9 text-primaryColor font-[700] text-center'>Find a Caretaker</h2>
                    <p className='text-[16px] leading-7 '>CAREGIVI has a special purpose — to help people have a safe home 
                    life with comfort, independence, and dignity.</p>
                    <Link to='/caretakers' className='w-[35px] h-[30px] rounded-full border border-solid border-primaryColor mt-[30px]
                     mt-auto flex items-center justify-center group hover:bg-peach hover:border-none '>
                        <BsArrowRight className='group-hover:text-primaryColor w-6 h-6 items-center justify-center' />
                    </Link>
                    </div>
                </div> */}

        {/* ================ 3 ================= */}

        {/* <div className='py-[30px] px-5'>
                    <div className='flex items-center justify-center'>
                        <img src={caretaker2} alt=""  height="300px" width="250px" />
                    </div>
                    <div className='mt-[30px]'>
                    <h2 className='text-[26px] leading-9 text-primaryColor font-[700] text-center'>Find a Caretaker</h2>
                    <p className='text-[16px] leading-7 '>CAREGIVI has a special purpose — to help people have a safe home 
                    life with comfort, independence, and dignity.</p>
                    <Link to='/caretakers' className='w-[35px] h-[30px] rounded-full border border-solid border-primaryColor mt-[30px]
                     mt-auto flex items-center justify-center group hover:bg-peach hover:border-none '>
                        <BsArrowRight className='group-hover:text-primaryColor w-6 h-6 items-center justify-center' />
                    </Link>
                    </div>
                </div>

            </div>

        </div>
    </section> */}



        {/* ============================= About Us ========================== */}
        <section className='bg- py-6  '>
            <div className="container py-20  " >
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">

                    {/*================== about image =================== */}
                    <div className="relative lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 rounded-tr-full    bg-peach ">
                        <img src={caretaker2} className='filter drop-shadow-md md:drop-shadow-xl px-6  ' alt="" />
                    </div>



                    {/* ===================== about content ================== */}
                    <div className="w-full py-2 lg:w-1/2 xl:w-[670px] mt-2  mb-2 px-6 order-1 lg:order-2 mt-10   text-center justify-between">
                        <h2 className='heading text-primaryColor '>OUR MISSION</h2>
                        <br />
                        <div className=' text-justify '>
                            <p className='text_para'>CAREGIVI has a special purpose — to help people have a safe home life with comfort,
                                independence, and dignity. CAREGIVI provides nursing, rehabilitative, therapeutic, hospice,
                                adults, and seniors worldwide. We care for our clients 24 hours a day, 7 days a week.</p>
                            <br />
                            <p className='text_para '>Families coping with significant illness or disability need help and support while caring for a family member. Our goal at CAREGIVI is to provide the
                                highest quality home health care services available.
                                We believe our clients and their families deserve home health care
                                delivered with compassion, excellence, and reliability, our CAREGIVI core values.</p>
                            <br />
                        </div>


                        {/* <Link to='/'><button className='btn hover:bg-yellowGreen hover:text-primaryColor '>Learn more</button></Link> */}
                    </div>
                </div>
            </div>
        </section>
        {/* ============================= About Us End ====================== */}

        {/* <span className='w-[550px] h-2 bg-peach rounded-full block mt-[-5px] items-center justify-between '></span> */}
        {/* <About /> */}
        <br />
        <br />

        {/* =========================== services section ====================== */}
        <section className=' '>
            <div className="container  filter drop-shadow-md md:drop-shadow-xl py-6 rounded-br-full rounded-rl-full">
                <div className="xl:w-[470px] mx-auto text-center relative">
                    <h2 className="heading text-primaryColor mb-4">Our Services</h2>
                    {/* <span className="w-[150px] h-2 bg-peach rounded-full block absolute top-1/2 left-1/3 transform -translate-y-1/2"></span> */}
                    <p className="text_para text-center ">Our Clients Are Our Purpose</p>
                </div>
                {/* Assuming ServiceList is a React component */}
                <div className='items-center'>
                <ServiceList />
                </div>
            </div>
        </section>


        {/* =========================== services section end ====================== */}

        {/* ========================= feature section ========================== */}
        {/* 
    <section className='bg-peach'>
        <div className="container py-10 filter drop-shadow-md md:drop-shadow-xl">
            {/* <img src={backgroundImg} alt="" /> */}
        {/* <div className='flex items-center justify-between flex-col lg:flex-row'>

                {/* ------------fearure content--------------- */}
        {/* <div className='xl:w-[670px] py-6 filter drop-shadow-md md:drop-shadow-xl'>
                    <h2 className='heading text-primaryColor filter drop-shadow-md md:drop-shadow-xl'>Get your best Care giver</h2>
                    {/* <span className='w-[550px] h-2 bg-peach rounded-full block mt-[-5px] items-center justify-between '></span> */}
        {/* <ul className='pl-4 py-6'>
                        <li className='text_para py-3'>
                         Shedule your appoinment directly 
                        </li>
                        <li className='text_para py-3'>
                         Search your services here and contact with us.
                        </li> */}
        {/* <li className='text_para py-3'>
                        We can arrange your need as well.
                        </li>
                    </ul>
                    <Link to='/findcaretaker'><button className='btn hover:bg-peach hover:text-primaryColor'>Learn more</button></Link>
                </div> */}
        {/* --------------------feature Image------------------ */}
        {/* <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
                    <img src={caretaker2} className='w-3/4 filter drop-shadow-md md:drop-shadow-xl' alt="" />
                </div>
            </div>
        </div>
    </section> */}

        {/* ========================= feature section end ========================== */}

        <br />

        {/* caregivers */}

        <section className='mt-2'>
            <div className="container py-10">
                <div className='xl:w-[470px] mx-auto filter drop-shadow-md md:drop-shadow-xl  '>
                    <h2 className='heading text-center text-primaryColor'>Our Best Care Givers</h2>
                    <p className='text_para text-center  text-primaryColor'>CAREGIVI has become a trusted leader in providing a full range of clinical care and support services at home for adults.</p>
                </div>

                <CaretakerList />
            </div>
        </section>

        {/* caregivers end */}

        {/* ======================== faq start ========================== */}

        <section className=''>
            <div className='container filter drop-shadow-md md:drop-shadow-xl'>
                <div className='flex justify-between gap-[50px] lg:gap-0 py-7'>
                    <div className='w-full md:w-1/2 py-10'>
                        <h2 className='heading text-primaryColor filter drop-shadow-md md:drop-shadow-xl'>Most Questions By Our Beloved Patients</h2>
                        <FaqList />
                    </div>
                    <div className='mt-12 ml-6 hidden md:block py-12 rounded-tl-full rounded-bl-full  bg-peach h-25%'>
                        <img src={caretaker2} className='filter drop-shadow-md md:drop-shadow-xl ' alt="" />
                    </div>


                </div>
            </div>
        </section>

        {/* ======================== faq end ============================ */}

        {/* ======================== Testimonial ============================ */}

        {/* <section>
    <div className="container">
    <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center text-peach'>What Our Client Say</h2>
            <p className='text_para text-center py-6 text-primaryColor'>CAREGIVI has become a trusted leader in providing a full range of clinical care and support services at home for adults.</p>
        </div> 
        <Testimonial/>
    </div>
</section> */}

        {/* ======================== Testimonial  end======================== */}

        {/* ======================= Feedback ================================ */}
        <section className=' py-20   '>
            <div className="xl:w-[470px] mx-auto text-center relative filter drop-shadow-md md:drop-shadow-xl rounded-br-3xl rounded-bl-3xl rounded-tr-3xl rounded-tl-3xl bg-peach  w-full">
                <h2 className="heading text-primaryColor mb-4">Give your Feedback</h2>
                <Feedback />
            </div>
        </section>

    </>
};

export default Home;