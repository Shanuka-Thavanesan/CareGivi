import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/CareGiviLOGO.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillFacebook, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { list } from 'postcss';

const socialLinks = [
    {
        path: "https://www.facebook.com/shanuka.thavanesan.3?mibextid=kFxxJD",
        icon: <AiFillFacebook className='group-hover:text-white w-4 h-5' />
    },
    // {
    //     path:"https://github.com/Shanuka-Thavanesan",
    //     icon:<AiFillGithub className='group-hover:text-white w-4 h-5'/>
    // },
    {
        path: "https://www.instagram.com/shanuka_2331/",
        icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />
    },
    {
        path: "https://www.linkedin.com/in/shanuka-thavanesan-5a3489281/",
        icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />
    }
];

const quickLink01 = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/",
        display: "About Us",
    },
    {
        path: "/services",
        display: "Services",
    },
];

const quickLink02 = [
    {
        path: "/find-a-caretaker",
        display: "Find A Caretaker",
    },
    {
        path: "/career",
        display: "Career",
    },

];

const quickLink03 = [
    {
        path: "/contact",
        display: "Contact Us",
    },

];

const Footer = () => {

    const year = new Date().getFullYear()

    return <footer className='pb-16 pt-10 bg-peach filter  '>
        <div className="container filter  ">
            <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px] '>
                <div>
                    <img src={logo} alt="" width='50px' height='100px' />
                    <p className='text-[16px] leading-7 font-[400] md:font-bold  mt-4'>
                        Copyright © {year} developed by CAREGIVI all right reserved.
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        {socialLinks.map((link, index) => (
                            <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-primaryColor
                        rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                </div>



                <div>
                    <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-primaryColor md:font-bold'>
                        Quick Links
                    </h2>
                    <ul>
                        {quickLink01.map((item, index) => <li key={index} className='mb-4'>
                            <Link to={item.path} className='text-[16px] leading-7 font-[400] text md:font-bold'>{item.display}</Link>
                        </li>
                        )}
                    </ul>
                </div>

                <div>
                    <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-primaryColor md:font-bold'>
                        I want to:
                    </h2>
                    <ul>
                        {quickLink02.map((item, index) => <li key={index} className='mb-4'>
                            <Link to={item.path} className='text-[16px] leading-7 font-[400] md:font-bold'>{item.display}</Link>
                        </li>
                        )}
                    </ul>
                </div>

                <div>
                    <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-primaryColor md:font-bold'>
                        Support
                    </h2>
                    <ul>
                        {quickLink03.map((item, index) => <li key={index} className='mb-4'>
                            <Link to={item.path} className='text-[16px] leading-7 font-[400] md:font-bold   '>{item.display}</Link>
                        </li>
                        )}
                    </ul>
                </div>

            </div>
        </div>
    </footer>
};

export default Footer;