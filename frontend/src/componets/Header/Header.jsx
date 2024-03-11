import {useEffect, useRef, useContext} from 'react';
import logo from '../../assets/images/LOGO-.png';

import {NavLink, Link} from 'react-router-dom';
import {BiMenu} from 'react-icons/bi';
import { authContext } from '../../context/AuthContext';

const navLinks =[
    {
        path:'/home',
        display:"Home"
    },
    {
        path:'/findcaretaker',
        display:"Find a caretaker"
    },
    {
        path:'/Services',
        display:"Services"
    },
    {
        path:'/career',
        display:"Career"
    },
    {
        path:'/contact',
        display:"Contact"
    }
]

const AdminNavLinks =[
    {
        path:'/home',
        display:"Home"
    },
    {
        path:'/Users',
        display:"Careneeders"
    },
    {
        path:'/adminservicedetails',
        display:"Services"
    },
    {
        path:'/Taker',
        display:"Caretakers"
    },
    {
        path:'/contact',
        display:"Contact"
    },
    {
        path:'/contact',
        display:"Payment"
    }
]

const Header =()=>{
    const headerRef =useRef(null);
    const menuRef =useRef(null);
    const {user, role , token}=useContext(authContext)

    const handleStickyHeader=()=>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
                headerRef.current.classList.add('sticky_header')
            }else{
                headerRef.current.classList.remove('sticky_header')  
            }
        });
    };

    useEffect(()=>{
        handleStickyHeader()

        return ()=> window.removeEventListener('scroll',handleStickyHeader)
    });

    const toggleMenu =()=> menuRef.current.classList.toggle('show_menu')

    return (
    <header className='header flex items-center filter drop-shadow-md md:drop-shadow-xl ' ref={headerRef}>
    <div className='container'>
        <div className='flex items-center justify-between '>
            {/* ====================  Logo =================== */}
            <div className="filter drop-shadow-md md:drop-shadow-xl">
                <img src={logo} className='filter drop-shadow-md md:drop-shadow-xl ' alt="" width='50px' height='100px' />
            </div>

            {/* ====================== menu ===================== */}
            <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                <ul className='menu flex items-center gap-[2.7rem]'>
                    {role ==="admin"?
                      <>
                      {
                        AdminNavLinks.map((link,index)=><li key={index}>
                            <NavLink to={link.path} className={navClass=>navClass.isActive 
                            ? 'text-primaryColor text-[16px] leading-7 font-[700]'
                            :'text- text-[16px] leading-7 font-[500] hover:text-primarycolor cursor-pointer  '}> {link.display}
                            </NavLink>
                        </li>)
                    }
                      
                      </>:
                      <>
                      {
                        navLinks.map((link,index)=><li key={index}>
                            <NavLink to={link.path} className={navClass=>navClass.isActive 
                            ? 'text-primaryColor text-[16px] leading-7 font-[700]'
                            :'text- text-[16px] leading-7 font-[500] hover:text-primarycolor cursor-pointer  '}> {link.display}
                            </NavLink>
                        </li>)
                    }
                      
                      
                      </>

                    }
                    
                </ul>
            </div>

            {/* ===================== nav right =================== */}
            <div className='flex items-center gap-4'>

                    {
                        token && user ?(
                         <div >
                        < Link to={`${
                            role=='caretaker' 
                            ? '/caretakers/profile/me'
                            :role=="admin"?
                            "/adminProfile":
                             '/users/profile/me'
                            
                            
                            }`}>
                                 <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[35px]
                     flex items-center justify-ceneter rounded-[50px] hover:bg-yellowGreen hover:text-primaryColor 
                     filter drop-shadow-md md:drop-shadow-xl'>
                        {user.name}
                        </button>
                                
                            {/* <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                                <img 
                                src={user ?.photo} 
                                className='w-full rounded-full' 
                                alt="" />
                            </figure> */}

                            {/* <h2>{user?.name}</h2> */}
                            
                        </Link>

                    </div>
                    ) :(
                         <Link to='/login'>
                    <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[35px]
                     flex items-center justify-ceneter rounded-[50px] hover:bg-yellowGreen hover:text-primaryColor 
                     filter drop-shadow-md md:drop-shadow-xl'>
                        Login
                        </button>
                         </Link>
                    )}
                
                
                

                <span className='md:hidden' onClick={toggleMenu}>
                    <BiMenu className='w-6 h-6 cursor-pointer' />
                </span>
            </div>

        </div>
    </div> 
    </header> 
    );
};

export default Header;