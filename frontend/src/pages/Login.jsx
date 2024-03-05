import { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from "../config.js";
import { toast } from "react-toastify";
import { authContext } from '../context/AuthContext.jsx';
import HashLoader from "react-spinners/HashLoader.js";

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''

    });

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { dispatch } = useContext(authContext)

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = async event => {
        event.preventDefault();
        setLoading(true);

       

        try {
            const res = await fetch(`${BASE_URL}/auth/login`, {
                method: 'post',
                Credentials:"include",
        
                
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            

            if (!res.ok) {
                throw new Error(result.message);
            }
            dispatch({ type: "LOGIN_SUCCESS",
            payload: {
                user: result.data,
                token: result.token,
                role: result.role,
            }})


            console.log(result, "login data")
            

            setLoading(false);
            toast.success(result.message);
            navigate('/home');

        } catch (err) {
            toast.error(err.message);
            setLoading(false); 
        } 
    };


    return <section className="px-5 lg:px-0  py-10 mt-20 mb-20">

        <div className="  w-full max-w-[570px] mx-auto rounded-lg filter drop-shadow-md md:drop-shadow-xl  md:p-10 ">
            <h1 className="text-yellowGreen text-[22px] leading-9 font-bold mb-10 text-center"> Hello!
                <span className="text-primaryColor"> Welcome</span> Back
            </h1>
            {/* <img src="" alt="" /> */}
            <form className="py-4 md:py-0" onSubmit={submitHandler}>
                <div className="mb-5">
                    <input type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-b border-solid border-peach focus:outline-none
                focus:border-b-peach text-[16px] leading-7 text-headingColor
                placeholder:text-yellowGreen rounded-md cursor-pointer"
                        required
                    />
                </div>

                <div className="mb-5">
                    <input type="password"
                        placeholder="Password"
                        name="password" value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-b border-solid border-peach focus:outline-none
                focus:border-b-peach text-[16px] leading-7 text-headingColor
                placeholder:text-yellowGreen rounded-md cursor-pointer"
                        required
                    />
                </div>

                <div className="mt-7">
                    <button
                        type="submit"
                        className="w-full py-2 bg-peach text-primaryColor text-[18px] leading-[30px] rounded-lg px-4 py-3"
                    >
                        { loading ? <HashLoader size={25} color='#3a4539'/> : 'Login'}
                    </button>
                </div>

                <p className="mt-5 text-yellowGreen text-center">
                    Don&apos;t you have an account? <Link to='/register' className='text-primaryColor ml-1'>
                        Register</Link>
                </p>

            </form>
        </div>
    </section>
};

export default Login;