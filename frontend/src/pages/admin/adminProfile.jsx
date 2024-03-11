import React from "react";
import { useContext, useState } from "react";
import userImg from "../../assets/images/userImg.png"
import { authContext } from "../../context/AuthContext";

import Loader from "../../componets/Loader/Loading"
import Error from "../../componets/Error/Error"
import useGetProfile from "../../hooks/usefetchData"
import { BASE_URL } from "../../config";

const AdminDashboard = () => {

    const { dispatch } = useContext(authContext);
    const [tab, setTab] = useState('settings');

    const {user, role , token}=useContext(authContext)
    const { data, loading, error } = useGetProfile(`${BASE_URL}/caretakers/profile/admin`);

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
                            <div className="grid md:grid- gap-10 ">

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
                                           {user.email}
                                        </p>
                                    </div>
                                    

                                    <div className="mt-[25px] md:mt-[50px]">
                                        <button
                                            onClick={handleLogout}
                                            className="w-full bg-yellowGreen text-primaryColor p-3 text-[16px] leading-7 rounded-md">LogOut</button>
                                        <button className="w-full bg-yellowGreen text-primaryColor mt-4 p-3 text-[16px] leading-7 rounded-md ">Delete Account</button>
                                    </div>

                                    {/* caretaker approve*/}
                                   
                                </div>

                               
                            </div>
                            
                        // </div>
                    )
                }


            </div>
        </section>
    )
}

export default AdminDashboard;