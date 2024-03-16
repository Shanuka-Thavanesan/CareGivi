import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { authContext } from "../context/AuthContext";

const CareNeederForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [dateOfBirth, setDob] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [genderRequirement, setGenderRequirement] = useState('');
  const [serviceneed, setServiceneed] = useState('');
  const [behaviour, setBehaviour] = useState('');
  const [healthCondition, setHealth] = useState('');
  const [totalDays, setTotalDays] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [price, setPrice] = useState('');

  const { user, role, token } = useContext(authContext)

  const navigate = useNavigate()

  const handlenameChange = (e) => {
    setName(e.target.value);
  };

  const handlephoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleemergencyChange = (e) => {
    setEmergencyPhone(e.target.value);
  };
  const handledateOfBirthChange = (e) => {
    setDob(e.target.value);
  };
  const handleageChange = (e) => {
    setAge(e.target.value);
  };
  const handleaddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handlegenderChange = (e) => {
    setGender(e.target.value);
  };
  const handlegenderRequirementChange = (e) => {
    setGenderRequirement(e.target.value);
  };
  const handleserviceneedChange = (e) => {
    setServiceneed(e.target.value);
  };
  const handlebehaviourChange = (e) => {
    setBehaviour(e.target.value);
  };
  const handlehealthChange = (e) => {
    setHealth(e.target.value);
  };
  const handlestartDateChange = (e) => {
    setStartDate(e.target.value);
  };
  const handleendDateChange = (e) => {
    setEndDate(e.target.value);
  };
 

  const uploadHandler = async (e) => {
    e.preventDefault()
   

    try {

      const response = await axios.post('http://localhost:5000/api/v1/needer/createneeder',
        {
          name, phone, emergencyPhone, dateOfBirth, age, address, gender, genderRequirement, serviceneed,
          healthCondition, behaviour, totalDays, startDate,endDate,price},
           { headers: { 'Authorization': 'Bearer ' + token } });
      if (response.statusText == "OK") {
        console.log('Upload successful!');
        navigate("/users/profile/me")
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error('Error uploading:', error);
    } navigate
  };

  function calculateDateDifference(startDate,endDate) {
    const startDateObject = new Date(startDate);
    const endDateObject = new Date(endDate);
    if (!isNaN(startDateObject.getTime()) && !isNaN(endDateObject.getTime())) {
      const differenceInMilliseconds = endDateObject - startDateObject;
      const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
      return differenceInDays;
    } else {
      return 0 ; // Invalid dates, return null
    }
  }
// Function to calculate the total price
function calculateTotalPrice( totalDays) {
  // const servicePrices = {
  //   "1": 800,
  // };
  const pricePerDay = 2450 || 0;
  if (isNaN(totalDays) || totalDays < 0) {
    return null;
  }
  const totalPrice = pricePerDay * totalDays;
  return totalPrice;
}


   useEffect(()=>{
    setTotalDays(()=>calculateDateDifference(startDate, endDate));
    setPrice(()=>calculateTotalPrice(totalDays))
   },[startDate,endDate,totalDays])



  return (
    <section className="mb-12 ">

        <form onSubmit={(e) => uploadHandler(e)}>
        <div className="grid grid-cols-2  py-2">
        <div className="grid grid-cols-1">
               <div className="w-full max-w-xl mx-auto mr-2 mt-12  border-yellowGreen border-4 rounded-md px-6 py-6 filter drop-shadow-md md:drop-shadow-xl ">
          <h2 className="text-2xl font-bold mb-6 text-primaryColor filter drop-shadow-md md:drop-shadow-xl">Care Needer Details</h2>
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="grid grid-cols-1">
                <label htmlFor="name"
                  className="text-sm font-medium text-primaryColor"
                >Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => handlenameChange(e)}
                  className="block w-full px-3 py-2 caret-peach border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
                  required />
              </div>
              <div className="grid grid-cols-1">
                <label htmlFor="phone"
                  className="text-sm font-medium text-primaryColor"
                >Phone Number:</label>
                <input type="number" id="phone" value={phone} onChange={(e) => handlephoneChange(e)}
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
                  required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="grid grid-cols-1">
                <label htmlFor="dateOfBirth"
                  className="text-sm font-medium text-primaryColor"
                >Date Of Birth:</label>
                <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={(e) => handledateOfBirthChange(e)} required
                  className="block w-full px-3 py-2 b border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
              <div className="grid grid-cols-1">
                <label htmlFor="age"
                  className="text-sm font-medium text-primaryColor"
                >Age:</label>
                <input type="number" id="age" value={age} onChange={(e) => handleageChange(e)} required
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="grid grid-cols-1">
                <label htmlFor="address"
                  className="text-sm font-medium text-primaryColor"
                >Address:</label>
                <input type="string" id="address" value={address} onChange={(e) => handleaddressChange(e)} required
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
              <div className="grid grid-cols-1">
                <label htmlFor="emergencyPhone"
                  className="text-sm font-medium text-primaryColor"
                >Emergency Phone Number:</label>
                <input type="number" id="emergencyPhone" value={emergencyPhone} onChange={(e) => handleemergencyChange(e)}
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
                  required />
              </div>
            </div>

              <div className="grid grid-cols-1">
                <label htmlFor="gender"
                  className="text-sm font-medium text-primaryColor"
                >Gender:</label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => handlegenderChange(e)} required

                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" className="text-yelloGreen">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              </div>
              </div>
              </div>

              {/* ======================================service details============================ */}
              <div className="grid grid-cols-1">
              <div className="w-full max-w-xl mx-auto ml-2 mt-12  border-yellowGreen border-4 rounded-md px-6 py-6 filter drop-shadow-md md:drop-shadow-xl ">
              <h2 className="text-2xl font-bold mb-6 text-primaryColor filter drop-shadow-md md:drop-shadow-xl">Service Details </h2>
              <div className="mb-8">
              <div className="grid grid-cols-1">
                <label htmlFor=" genderRequirement"
                  className="text-sm font-medium text-primaryColor"
                >Gender Requirement:</label>
                <select
                  id=" genderRequirement"
                  value={genderRequirement}
                  onChange={(e) => handlegenderRequirementChange(e)} required

                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" className="text-yelloGreen">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            
            <div className="grid grid-cols-2 gap-4 py-2">
            <div className="grid grid-cols-1">
                <label htmlFor="startDate"
                  className="text-sm font-medium text-primaryColor"
                >Reservation Date:</label>
                <input type="date" id="startDate" value={startDate} onChange={(e) => handlestartDateChange(e)} required
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
              <div className="grid grid-cols-1">
                <label htmlFor="endDate"
                  className="text-sm font-medium text-primaryColor"
                >Reservation End Date:</label>
                <input type="date" id="endDate" value={endDate} onChange={(e) => handleendDateChange(e)} required
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="grid grid-cols-1">
                <label htmlFor="serviceneed"
                  className="text-sm font-medium text-primaryColor"
                >What services you need:</label>
                <input type="text" id="serviceneed" value={serviceneed} onChange={(e) => handleserviceneedChange(e)} required
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
              <div className="grid grid-cols-1">
              <label htmlFor="period"
                  className="text-sm font-medium text-primaryColor"
                >Total Days:</label>
                <input type="text" id="period" value={totalDays !== null ? totalDays : (`The TotalDays are: ${totalDays} days`) }  required
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
            </div>
      
            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="grid grid-cols-1">
                <label htmlFor="behaviour"
                  className="text-sm font-medium text-primaryColor"
                >Behaviour about careneeder:</label>
                <input type="text" id="behaviour" value={behaviour} onChange={(e) => handlebehaviourChange(e)} required
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
              <div className="grid grid-cols-1">
                <label htmlFor="healthCondition"
                  className="text-sm font-medium text-primaryColor"
                >Health Condition about careneeder:</label>
                <input type="text" id="healthCondition" value={healthCondition} onChange={(e) => handlehealthChange(e)} required
                  className="block w-full px-3 py-2 border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
            </div>
          

          <div className="grid grid-cols-1 gap-4 mb-4 py-2 ">
            <button type="submit"
              className="bg-peach hover:bg-blue-700 text-primaryColor font-bold py-2 px-4 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Register
            </button>
          </div>
          </div>
          </div>
          </div>
          </div>
          
        
        </form>

      

    </section>
  );
};

export default CareNeederForm;
