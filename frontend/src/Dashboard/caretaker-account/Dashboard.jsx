import React from "react";
import { useContext, useState } from "react";
import userImg from "../../assets/images/userImg.png"
import { authContext } from "../../context/AuthContext";
import TakerProfile from "./TakerProfile";
import Neederdetails from "./careneederOrder"
import Loader from "../../componets/Loader/Loading"
import Error from "../../componets/Error/Error"
import useGetProfile from "../../hooks/usefetchData"
import { BASE_URL } from "../../config";

const Dashboard = () => {

    const { dispatch } = useContext(authContext);
    const [tab, setTab] = useState('settings');

    const {user, role , token}=useContext(authContext)
    const { data, loading, error } = useGetProfile(`${BASE_URL}/caretakers/profile/me`);

    console.log(data, "data");

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <section>
            <div className="max-w-[1170px] px-5 mx-auto mt-10">
                {loading && !error && <Loader />}
                {error && !loading && <Error />}

                {
                    !loading && !error && (
                        // <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
                            <div className="grid md:grid-cols-2 gap-10 ">

                                <div className="pb-[50px] px-[30px] rounded-md  mb-10px">
                                    <div className="flex items-center justify-center">

                                        <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                                            <img
                                                src={userImg}
                                                className="w-full h-full"
                                                alt="" />
                                        </figure>
                                    </div>

                                    <div className="text-center mt-4">
                                        <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                                        {user.name}
                                        </h3>
                                        <p className="text-textColor text-[15px] leading-6 font-medium">
                                           {user.name}
                                        </p>
                                    </div>
                                    

                                    <div className="mt-[25px] md:mt-[50px]">
                                        <button
                                            onClick={handleLogout}
                                            className="w-full bg-yellowGreen text-primaryColor p-3 text-[16px] leading-7 rounded-md">LogOut</button>
                                        <button className="w-full bg-yellowGreen text-primaryColor mt-4 p-3 text-[16px] leading-7 rounded-md ">Delete Account</button>
                                    </div>

                                    {/* caretaker approve*/}
                                    <section className="mt-5">
                                    <div className="lg:col-span-2">
                                        {data.isApproved ==="pending" && (
                                        <div className="flex p-4 mb-4 text-primaryColor-800 bg-peach rounded-lg"> 
                                        <svg
                                        aria-hidden="true"
                                        className="flex-shrink-0 w-5 h-5"
                                        fill="#97A97C "
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000
                                            2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clipRule="evenodd"
                                            >
                                            </path>
                                        </svg>
                                            <span className="sr-only ">Info</span>
                                                <div className="ml-3 text-sm font-medium text-primaryColor">
                                                    To get approval please complete your profile. We'll
                                                    review manually and approve  with in 3 days.
                                                </div>
                                            
                                        </div>
                                        )}

                                        

                                    </div>
                                    </section>
                                    <Neederdetails/>

                                </div>

                                <div className="md:col-span-1 md:px-[30px] items-center">
                                    <button
                                        onClick={() => setTab('settings')}
                                        className={`${tab == 'settings' && 'bg-yellowGreen'} py-2 px-5 rounded-md text-primaryColor font-semibold text-[16px] leading-7
                                        border border-solid border-yellowGreen`}
                                    >
                                        Profile Setting
                                    </button>

                                    {
                                        tab == 'settings' && <TakerProfile caretaker={data} />
                                    }
                                </div>
                            </div>
                            
                        // </div>
                    )
                }


            </div>
        </section>
    )
}

export default Dashboard;