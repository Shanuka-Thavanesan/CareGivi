
import { useState } from "react";
import SignupImg from '../assets/images/caregivi2.gif';
import userImg from '../assets/images/userImg.png';
import { Link, useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from "../utils/uploadCloudinary";
import { BASE_URL } from "../config";
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';

const Signup = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewURL, setPeviewURL] = useState('');
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'careneeder',
        photo: ''

    });

    const navigate = useNavigate()

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleFileInputChange = async (event) => {

        const file = event.target.files[0];

        const data = await uploadImageToCloudinary(file);

        setPeviewURL(data.url)
        setSelectedFile(data.url)
        setFormData({ ...formData, photo: data.url });


        // use cloudinary
    };


    const submitHandler = async event => {
        event.preventDefault();
        setLoading(true)


        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const { message } = await res.json()

            if (!res.ok) {
                throw new Error(message)
            }

            setLoading(false)
            toast.success(message)
            navigate('/home')

        } catch (err) {
            toast.error(err.message)
            setLoading(false)
        }
    };



    return <section className='px-5 xl:px-0 mb-10 mt-10 '>
        <div className='max-w-[1170px] mx-auto mb-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                {/* ========== image box ========= */}
                <div className=' lg:block rounded-l-lg  '>
                    <figure className='rounded-l-lg '>
                        <img src={userImg} className='mt-20 ml-0 ' alt="" />
                    </figure>
                </div>

                {/* =========== SignUp Form ======== */}
                <div className='rounded-l-lg lg:pl-16 py-10 filter drop-shadow-md md:drop-shadow-xl'>
                    <h1 className='text-yellowGreen text-[22px] leading-9 font-bold mb-10 text-center'>Create an
                        <span className='text-peach '> account</span>
                    </h1>

                    <form onSubmit={submitHandler} >
                        <div className="mb-5">
                            <input type="text"
                                placeholder="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full pr-4 px-4 py-3 border-b border-solid border-peach focus:outline-none
                focus:border-b-peach text-[16px] leading-7 text-headingColor
                placeholder:text-yellowGreen rounded-md cursor-pointer"
                                required
                            />
                        </div>

                        <div className="mb-5">
                            <input type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full pr-4 px-4 py-3 border-b border-solid border-peach focus:outline-none
                focus:border-b-peach text-[16px] leading-7 text-headingColor
                placeholder:text-yellowGreen rounded-md cursor-pointer"
                                required
                            />
                        </div>

                        <div className="mb-5">
                            <input type="password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full pr-4 px-4 py-3 border-b border-solid border-peach focus:outline-none
                focus:border-b-peach text-[16px] leading-7 text-headingColor
                placeholder:text-yellowGreen rounded-md cursor-pointer"
                                required
                            />
                        </div>

                        <div className='mb-5 flex items-center justify-between'></div>
                        <label htmlFor="" className='text-yellowGreen font-bold text-[16px] leading-7 text-center'>
                            Are you a:
                            <select
                                name='role'
                                value={formData.role}
                                onChange={handleInputChange}
                                className='text-primaryColor font-semibold text-[15px] leading-7 px-5
                        py-3 focus:outline-none rounded pr-4 hover:bg-peach ml-3'>
                                <option value="careneeder">Care Needer</option>
                                <option value="caretaker">Caretaker</option>
                                <option value="admin">Caretaker</option>
                            </select>
                        </label>

                        <div className='mb-5 flex items-center gap-3'>
                            {selectedFile && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor
                        flex items-center justify-center'>
                                <img src={previewURL} alt="" />
                            </figure>}

                            <div className='relative w-[130px] h-[50px]'>
                                <input
                                    type="file"
                                    name="photo"
                                    id="customFile"
                                    onChange={handleFileInputChange}
                                    accept=".jpg, .png"
                                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                                />

                                <label htmlFor="customFile" className='absolute top-0 left-0 w-full h- flex
                             items-center px-[15px] py-[0.375rem] text-[15px] leading-6 overflow-hidden mt-3 ml-4
                             bg-peach text-primaryColor font-semibold rounded-lg truncate cursor-pointer text-center'>
                                    Upload Photo
                                </label>
                            </div>

                        </div>

                        <div className="mt-7">
                            <button
                                disabled={loading && true}
                                type="submit"
                                className="w-full py-2 bg-peach text-primaryColor text-[18px] leading-[30px] rounded-lg px-4 py-3"
                            >
                                {loading ? (
                                    <HashLoader size={35} color="#76BA99" />
                                ) : ('Sign Up'
                                )}
                            </button>
                        </div>

                        <p className="mt-5 text-yellowGreen text-center">
                            Already have an account? <Link to='/login' className='text-primaryColor ml-1'>
                                Login</Link>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    </section>
};

export default Signup;