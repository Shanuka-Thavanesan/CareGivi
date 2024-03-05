import React, { useState } from "react";
import axios from "axios";
import {BASE_URL} from "../../config.js"

const CareNeederForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [emergencyPhone,setEmergencyPhone] = useState('');
  const [dateOfBirth, setDob] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [genderRequirement, setGenderRequirement] = useState('');
  const [serviceneed, setServiceneed] = useState('');
  const [behaviour, setBehaviour] = useState('');
  const [healthCondition, setHealth] = useState('');
  const [period, setPeriod] = useState('');

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
  const handleperiodChange = (e) => {
    setPeriod(e.target.value);
  };

  const uploadHandler = async (e) => {
    e.preventDefault()
    // setLoading(true)

    try {

      const response = await axios.put(`${BASE_URL}/profile/${user.id}`,
        {
          name, phone,emergencyPhone, dateOfBirth, age, address, gender, genderRequirement, serviceneed,
         healthCondition,behaviour,period
        });
      if (response.statusText == "OK") {
        console.log('Update successful!');
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error('Error updating:', error);
    }
  };


return (
  <section className="mb-12 ">
    <div className="w-full max-w-xl mx-auto mt-12 border border-yellowGreen border-4 rounded-md px-6 py-6 filter drop-shadow-md md:drop-shadow-xl ">
      <form onSubmit={(e) => uploadHandler(e)}>
        {/* <div className="ventor-form"> */}
        <h2 className="text-2xl font-bold mb-6 text-primaryColor filter drop-shadow-md md:drop-shadow-xl">Care Needer Details Registration</h2>
        <div className="mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-1">
              <label htmlFor="name"
                className="text-sm font-medium text-primaryColor"
              >Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => handlenameChange(e)}
                className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
                 />
            </div>
            <div className="grid grid-cols-1">
              <label htmlFor="phone"
                className="text-sm font-medium text-primaryColor"
              >Phone Number:</label>
              <input type="number" id="phone" value={phone} onChange={(e) => handlephoneChange(e)}
                className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
                 />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-1">
              <label htmlFor="dateOfBirth"
                className="text-sm font-medium text-primaryColor"
              >Date Of Birth:</label>
              <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={(e) => handledateOfBirthChange(e)} 
                className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
            </div>
            <div className="grid grid-cols-1">
              <label htmlFor="age"
                className="text-sm font-medium text-primaryColor"
              >Age:</label>
              <input type="number" id="age" value={age} onChange={(e) => handleageChange(e)} 
                className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-1">
          <label htmlFor="address"
            className="text-sm font-medium text-primaryColor"
          >Address:</label>
           <input type="string" id="address" value={address} onChange={(e) => handleaddressChange(e)} 
            className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
          </div>
          <div className="grid grid-cols-1">
              <label htmlFor="emergencyPhone"
                className="text-sm font-medium text-primaryColor"
              >Emergency Phone Number:</label>
              <input type="number" id="emergencyPhone" value={emergencyPhone} onChange={(e) => handleemergencyChange(e)}
                className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
                 />
            </div>
          </div>
         
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-1">
              <label htmlFor="gender"
                className="text-sm font-medium text-primaryColor"
              >Gender:</label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => handlegenderChange(e)} 

                className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" className="text-yelloGreen">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="grid grid-cols-1">
              <label htmlFor=" genderRequirement"
                className="text-sm font-medium text-primaryColor"
              >Gender Requirement:</label>
              <select
                id=" genderRequirement"
                value={genderRequirement}
                onChange={(e) => handlegenderRequirementChange(e)} 

                className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" className="text-yelloGreen">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="grid grid-cols-1">
              <label htmlFor="serviceneed"
                className="text-sm font-medium text-primaryColor"
              >What services you need:</label>
              <input type="text" id="serviceneed" value={serviceneed} onChange={(e) => handleserviceneedChange(e)} 
                className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
            </div>
            <div className="grid grid-cols-1">
              <label htmlFor="period"
                className="text-sm font-medium text-primaryColor"
              >Period of Service Need:</label>
              <input type="number" id="period" value={period} onChange={(e) => handleperiodChange(e)} 
                className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 py-4">
          <div className="grid grid-cols-1">
          <label htmlFor="behaviour"
                className="text-sm font-medium text-primaryColor"
              >Behavioural Consideration about careneeder:</label>
              <input type="text" id="behaviour" value={behaviour} onChange={(e) => handlebehaviourChange(e)} 
                className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
            </div>
            <div className="grid grid-cols-1">
          <label htmlFor="healthCondition"
                className="text-sm font-medium text-primaryColor"
              >Health Condition about careneeder:</label>
              <input type="text" id="healthCondition" value={healthCondition} onChange={(e) => handlehealthChange(e)} 
                className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
            </div>
            </div>
         
         
        </div>




        <div className="grid grid-cols-1 gap-4 mb-4">
          <button type="submit"
            className="bg-peach hover:bg-blue-700 text-primaryColor font-bold py-2 px-4 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none">
            Update
          </button>
        </div>
        {/* </div> */}
      </form>

    </div>

  </section>
);
};

export default CareNeederForm;

