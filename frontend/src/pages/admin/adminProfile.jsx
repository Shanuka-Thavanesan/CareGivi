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

    const { user, role, token } = useContext(authContext)
    const { data, loading, error } = useGetProfile(`${BASE_URL}/caretakers/profile/admin`);

    console.log(data, "data");

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <section>
    <div className="max-w-[1170px] px-5 mx-auto mt-20 mb-20">
        {loading && !error && <Loader />}
        {error && !loading && <Error />}

        {
            !loading && !error && (
                <div className="grid md:grid- gap-10 mb-10 py-6 ">

                    <div className="pb-[50px] px-[30px] rounded-md  mb-10px">
                        <div className="flex items-center justify-center">

                            <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                                <img
                                    src={userImg}
                                    className="w-full h-full"
                                    alt="" />
                            </figure>
                        </div>

                        <div className="text-center mt-4 py-7">
                            <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                                {user.name}
                            </h3>
                            <p className="text-textColor text-[15px] leading-6 font-medium">
                                {user.email}
                            </p>
                        </div>


                        <div className=" flex justify-center mb-20 "> 
                            <button onClick={handleLogout}className="w-1/2 bg-yellowGreen text-primaryColor p-3 text-[16px] leading-7 rounded-md mx-auto ">LogOut</button> 
                            <br />
                            <br />
                            <button className="w-1/2 bg-yellowGreen text-primaryColor  p-3 text-[16px] leading-7 rounded-md mx-auto">Delete Account</button> 
                        </div>
                    </div>
                </div>
            )
        }
    </div>
</section>

    )
}

export default AdminDashboard;