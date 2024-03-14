
import React, { useContext, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from "../../utils/uploadCloudinary.js";
import { authContext } from '../../context/AuthContext.jsx';

const CareTakerForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dateOfBirth, setDob] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [genderRequirement, setGenderRequirement] = useState('');
  const [services, setServices] = useState('');
  const [experiences, setExperiences] = useState('');
  const [acadamicCertificate, setAcadamic] = useState('');
  const [characterCertificate, setCharacter] = useState('');
  const [healthCondition, setHealth] = useState('');
  const [identityProof, setIdentity] = useState('');

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPeviewURL] = useState('');
  const { token}=useContext(authContext)
  const navigate = useNavigate()

  const handlenameChange = (e) => {
    setName(e.target.value);
  };

  const handlephoneChange = (e) => {
    setPhone(e.target.value);
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
  const handleservicesChange = (e) => {
    setServices(e.target.value);
  };
  const handleexperiencesChange = (e) => {
    setExperiences(e.target.value);
  };
  const handleacadamicChange = (e) => {
    setAcadamic(e.target.value);
  };
  const handlecharacterChange = (e) => {
    setCharacter(e.target.value);
  };
  const handlehealthChange = (e) => {
    setHealth(e.target.value);
  };
  // const handleidentityChange = (e) => {
  //   setIdentity(e.target.value);
  // };
  const handleFileInputChange = async (e) => {

    const file = e.target.files[0];

    const data = await uploadImageToCloudinary(file);

    // setPeviewURL(data.url)
    // setSelectedFile(data.url)
    setIdentity({ identityProof: data.url });
    setAcadamic({ acadamicCertificate: data.url });
    setCharacter({ characterCertificate: data.url });


    // use cloudinary
  };


  const uploadHandler = async (e) => {
    e.preventDefault()
    // setLoading(true)

    try {

      const response = await axios.post('http://localhost:5000/api/v1/taker/createtaker',
        {
          name, phone, dateOfBirth, age, address, gender, genderRequirement, services,
          experiences, acadamicCertificate, characterCertificate, identityProof,
          healthCondition},
          {headers: {'Authorization': 'Bearer '+token}});
     
      if (response.statusText == "OK") {
        console.log('Upload successful!');
        navigate("/caretakers/profile/me")
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error('Error uploading:', error);
    }
  };
  return (
    <section className="mb-12 ">
      <div className="w-full max-w-xl mx-auto mt-12  border-yellowGreen border-4 rounded-md px-6 py-6 filter drop-shadow-md md:drop-shadow-xl ">
        <form onSubmit={(e) => uploadHandler(e)}>
          
          <h2 className="text-2xl font-bold mb-6 text-primaryColor filter drop-shadow-md md:drop-shadow-xl">Care Needer Details Registration</h2>
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="grid grid-cols-1">
                <label htmlFor="name"
                  className="text-sm font-medium text-primaryColor"
                >Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => handlenameChange(e)}
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
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
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1">
                <label htmlFor="dateOfBirth"
                  className="text-sm font-medium text-primaryColor"
                >Date Of Birth:</label>
                <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={(e) => handledateOfBirthChange(e)} required
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
              <div className="grid grid-cols-1">
                <label htmlFor="age"
                  className="text-sm font-medium text-primaryColor"
                >Age:</label>
                <input type="number" id="age" value={age} onChange={(e) => handleageChange(e)} required
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
            </div>
            <label htmlFor="address"
              className="text-sm font-medium text-primaryColor"
            >Address:</label>
            <input type="string" id="address" value={address} onChange={(e) => handleaddressChange(e)} required
              className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
            <div className="grid grid-cols-2 gap-4  ">
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
            </div>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="grid grid-cols-1">
                <label htmlFor="services"
                  className="text-sm font-medium text-primaryColor"
                >Services:</label>
                <input type="text" id="services" value={services} onChange={(e) => handleservicesChange(e)} required
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
              <div className="grid grid-cols-1">
                <label htmlFor="experiences"
                  className="text-sm font-medium text-primaryColor"
                >Experiences:</label>
                <input type="text" id="experiences" value={experiences} onChange={(e) => handleexperiencesChange(e)} required
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="grid grid-cols-1">
                <label htmlFor="healthCondition"
                  className="text-sm font-medium text-primaryColor"
                >Health Condition:</label>
                <input type="text" id="healthCondition" value={healthCondition} onChange={(e) => handlehealthChange(e)} required
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
              <div className="grid grid-cols-1">
                <label htmlFor="identityProof" className="text-sm font-medium text-primaryColor" >
                  Identity Proof
                </label>
                <input
                  type="file"
                  name=""

                  id="identityProof"
                  onChange={(e) => handleFileInputChange(e)} required
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 ">
              <div className="grid grid-cols-1">
                <label htmlFor="acadamicCertificate" className="text-sm font-medium text-primaryColor">
                  Acadamic Certificate
                </label>
                <input
                  type="file"
                  name=""

                  id="acadamicCertificate"
                  onChange={(e) => handleFileInputChange(e)} required
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
                />
              </div>
              <div className="grid grid-cols-1">


                <label htmlFor="characterCertificate" className="text-sm font-medium text-primaryColor">
                  Character Certificate
                </label>
                <input
                  type="file"
                  name=""

                  id="characterCertificate"
                  onChange={(e) => handleFileInputChange(e)} required
                  className="block w-full px-3 py-2  border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />

              </div>
            </div>
          </div>




          <div className="grid grid-cols-1 gap-4 mb-4">
            <button type="submit"
              className="bg-peach hover:bg-blue-700 text-primaryColor font-bold py-2 px-4 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Register
            </button>
          </div>
          {/* </div> */}
        </form>

      </div>

    </section>
  );
};
export default CareTakerForm;









