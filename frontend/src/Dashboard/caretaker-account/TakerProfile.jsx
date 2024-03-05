
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { toast } from 'react-toastify';
// import { FaCamera } from "react-icons/fa";
// import uploadImageToCloudinary from "../../utils/uploadCloudinary.js";

// const takerProfile = ({ caretaker }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     gender: "",
//     dob: "",
//     age: "",
//     address: "",
//     phonenumber: "",
//     experiences: "",
//     genderRequirement:"",
//     service: "",
//     characterCertificate: "",
//     acadamicCertificate: "",
//     healthCondition:"",
//   });

//   useEffect(() => {
//     setFormData({
//       name: caretaker.name,
//       email: caretaker.email,
//       gender: caretaker.gender,
//       dob: caretaker.dob,
//       age: caretaker.age,
//       address: caretaker.address,
//       phonenumber: caretaker.phonenumber,
//       experiences: caretaker.experiences,
//       genderRequirement: caretaker.genderRequirement,
//       service: caretaker.serviceneed,
//       healthCondition: caretaker.healthCondition,
//       acadamicCertificate: caretaker.acadamicCertificate,
//       characterCertificate: caretaker.  characterCertificate
//     });
//   }, [caretaker]);

//   const [selectedFile, setSelectedFile] = useState(null);
//     const [previewURL, setPeviewURL] = useState('');
    

//   const handleFileInputChange = async (event) => {

//     const file = event.target.files[0];

//     const data = await uploadImageToCloudinary(file);

//     setPeviewURL(data.url)
//     setSelectedFile(data.url)
//     setFormData({ ...formData, photo: data.url });


//     // use cloudinary
// };

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [selectedImage, setSelectedImage] = useState(null);
//   const handleImageChange = (event) => {
//     setSelectedImage(event.target.files[0]);
//   };

//   const onSubmit = async (data) => {
//     try {
//       const response = await fetch(`${BASE_URL}/api/profile/${caretaker.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
      
//       if (!response.ok) {
//         throw new Error('Failed to update profile');
//       }

//       const updatedUser = await response.json();
//       console.log('Profile updated:', updatedUser);
//       toast.success('Profile updated successfully');
//     } catch (error) {
//       console.error('Error updating profile:', error.message);
//       toast.error('Failed to update profile');
//     }
//   };

//   return (
//     <section className="mb-12">
//       <div className="w-full max-w-md mx-auto mt-12 border border-peach border-4 rounded-md px-6 py-6 filter drop-shadow-md md:drop-shadow-xl">
//         <form onSubmit={handleSubmit(onSubmit)} className="hover:shadow-lg">
//           <h2 className="text-2xl font-bold mb-6 text-primaryColor filter drop-shadow-md md:drop-shadow-xl">
//             Caretaker Details
//           </h2>

//           {/* Personal Information */}
//           <div className="mb-8">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="grid grid-cols-1">
//                 <label htmlFor="name" className="text-sm font-medium text-primaryColor">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   {...register("name", { required: "Name is required" })}
//                   defaultValue={formData.name}
//                   className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
//                 />
//                 {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
//               </div>
//               {/* Add similar fields for other form inputs */}
//               <div className="grid grid-cols-1">
//                 <label htmlFor="email" className="text-sm font-medium text-primaryColor">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   {...register("email", { required: "Email is required" })}
//                   defaultValue={formData.email}
//                   className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
//                 />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//               </div>
//               <div className="grid grid-cols-1">
//                 <label htmlFor="dob" className="text-sm font-medium text-primaryColor">
//                   Date Of Birth
//                 </label>
//                 <input
//                   type="date"
//                   id="dob"
//                   onChange={handleFileInputChange}
//                   {...register("email", { required: "Date Of Birth is required" })}
//                   defaultValue={formData.dob}
//                   className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
//                 />
//                 {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
//               </div>
//               <div className=" grid grid-cols-1">
//                 <label htmlFor="image" className="text-sm text-primaryColor font-medium">
//                   Profile Picture
//                 </label>
//                 <div className="flex items-center border border-yellowGreen border-2 rounded shadow-sm px-3 py-2">
//                   {selectedImage && (
//                     <img
//                       className="h-10 w-10 rounded-full mr-2"
//                       src={URL.createObjectURL(selectedImage)}
//                       alt="Profile Picture"
//                     />
//                   )}
//                   <label htmlFor="image">
//                     <span className="inline-flex items-center text-center text-yellowGreen text-sm font-medium mr-2">
//                       Image
//                       <FaCamera className="ml-2 text-blue-500" />
//                     </span>
//                     <input
//                       type="file"
//                       id="image"
//                       accept="image/*"
//                       onChange={handleFileInputChange}
//                       className="hidden"
//                     />
//                   </label>
//                 </div>
//               </div>
//               <div className="grid grid-cols-1">
//                 <label htmlFor="age" className="text-sm font-medium text-primaryColor">
//                   Age
//                 </label>
//                 <input
//                   type="number"
//                   id="age"
//                   {...register("age", { required: "Age is required" })}
//                   defaultValue={formData.age}
//                   className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
//                 />
//                 {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
//               </div>
//               <div className="grid grid-cols-1">
//                 <label htmlFor="gender" className="text-sm font-medium text-primaryColor">
//                   Gender
//                 </label>
//                 <select
//                   id="gender"
//                   {...register("gender", { required: "Gender is required" })}
//                   defaultValue={formData.gender}
//                   className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
//                 >
//                   <option value="" className="text-yelloGreen">Select Gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//                 {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
//               </div>
//               <div className="grid grid-cols-1">
//                 <label htmlFor="address" className="text-sm font-medium text-primaryColor">
//                   Address
//                 </label>
//                 <input
//                   type="string"
//                   id="address"
//                   {...register("address", { required: "Address is required" })}
//                   defaultValue={formData.address}
//                   className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
//                 />
//                 {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
//               </div>
//               <div className="grid grid-cols-1">
//                 <label htmlFor="phonenumber" className="text-sm font-medium text-primaryColor">
//                   Phone Number
//                 </label>
//                 <input
//                   type="number"
//                   id="phonenumber"
//                   {...register("phonenumber", { required: "Phone Number is required" })}
//                   defaultValue={formData.phonenumber}
//                   className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
//                 />
//                 {errors.phonenumber && <p className="text-red-500 text-sm">{errors.phonenumber.message}</p>}
//               </div>
//               <div className="grid grid-cols-1">
//                 <label htmlFor="heathCondition" className="text-sm font-medium text-primaryColor">
//                   Heath Condition
//                 </label>
//                 <input
//                   type="text"
//                   id="healthCondition"
//                   {...register("healthCondition", { required: "Heath Condition is required" })}
//                   defaultValue={formData.healthCondition}
//                   className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
//                 />
//                 {errors.healthCondition && <p className="text-red-500 text-sm">{errors.healthCondition.message}</p>}
//               </div>
//               <div className="grid grid-cols-1">
//                 <label htmlFor="genderRequirement" className="text-sm font-medium text-primaryColor">
//                   Gender Requirement
//                 </label>
//                 <select
//                   id="genderRequirement"
//                   {...register("genderRequirement", { required: "Gender Requirement is required" })}
//                   defaultValue={formData.genderRequirement}
//                   className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
//                 >
//                   <option value="" className="text-yelloGreen">Select Gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//                 {errors.genderRequirement && <p className="text-red-500 text-sm">{errors.genderRequirement.message}</p>}
//               </div>
//               <div className="grid grid-cols-1">
//                 <label htmlFor="services" className="text-sm font-medium text-primaryColor">
//                   Services
//                 </label>
//                 <input
//                   type="text"
//                   id="services"
//                   {...register("services", { required: "Services is required" })}
//                   defaultValue={formData.services}
//                   className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
//                 />
//                 {errors.serviceneed && <p className="text-red-500 text-sm">{errors.serviceneed.message}</p>}
//               </div>
//               <div className=" grid grid-cols-1">
//                 <label htmlFor="image" className="text-sm text-primaryColor font-medium">
//                   Acadamic Certificate
//                 </label>
//                 <div className="flex items-center border border-yellowGreen border-2 rounded shadow-sm px-3 py-2">
//                   {selectedImage && (
//                     <img
//                       className="h-10 w-10 rounded-full mr-2"
//                       src={URL.createObjectURL(selectedImage)}
//                       alt="Acadamic Certificate"
//                     />
//                   )}
//                   <label htmlFor="image">
//                     <span className="inline-flex items-center text-center text-yellowGreen text-sm font-medium mr-2">
//                       pdf
//                       <FaCamera className="ml-2 text-blue-500" />
//                     </span>
//                     <input
//                       type="file"
//                       id="image"
//                       accept="image/*"
//                       onChange={handleFileInputChange}
//                       className="hidden"
//                     />
//                   </label>
//                 </div>
//               </div>
//               <div className=" grid grid-cols-1">
//                 <label htmlFor="image" className="text-sm text-primaryColor font-medium">
//                   Character Certificate
//                 </label>
//                 <div className="flex items-center border border-yellowGreen border-2 rounded shadow-sm px-3 py-2">
//                   {selectedImage && (
//                     <img
//                       className="h-10 w-10 rounded-full mr-2"
//                       src={URL.createObjectURL(selectedImage)}
//                       alt="Character Certificate"
//                     />
//                   )}
//                   <label htmlFor="image">
//                     <span className="inline-flex items-center text-center text-yellowGreen text-sm font-medium mr-2">
//                       pdf
//                       <FaCamera className="ml-2 text-blue-500" />
//                     </span>
//                     <input
//                       type="file"
//                       id="image"
//                       accept="image/*"
//                       onChange={handleFileInputChange}
//                       className="hidden"
//                     />
//                   </label>
//                 </div>
//               </div>
//               <div className=" grid grid-cols-1">
//                 <label htmlFor="image" className="text-sm text-primaryColor font-medium">
//                 Identity Proof
//                 </label>
//                 <div className="flex items-center border border-yellowGreen border-2 rounded shadow-sm px-3 py-2">
//                   {selectedImage && (
//                     <img
//                       className="h-10 w-10 rounded-full mr-2"
//                       src={URL.createObjectURL(selectedImage)}
//                       alt="identityProof"
//                     />
//                   )}
//                   <label htmlFor="image">
//                     <span className="inline-flex items-center text-center text-yellowGreen text-sm font-medium mr-2">
//                       pdf
//                       <FaCamera className="ml-2 text-blue-500" />
//                     </span>
//                     <input
//                       type="file"
//                       id="image"
//                       accept="image/*"
//                       onChange={handleFileInputChange}
//                       className="hidden"
//                     />
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="grid grid-cols-1 gap-4 mb-4">
//             <button
//               type="submit"
//               className="bg-peach hover:bg-blue-700 text-primaryColor font-bold py-2 px-4 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             >
//               Update
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default takerProfile;



import React, { useState } from 'react';
import axios from "axios"
import uploadImageToCloudinary from "../../utils/uploadCloudinary.js";
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

      const response = await axios.put(`${BASE_URL}/api/profile/${caretaker.id}`,
        {
          name, phone, dateOfBirth, age, address, gender, genderRequirement, services,
          experiences, acadamicCertificate, characterCertificate, identityProof,
          healthCondition
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
                  required />
              </div>
              <div className="grid grid-cols-1">
                <label htmlFor="phone"
                  className="text-sm font-medium text-primaryColor"
                >Phone Number:</label>
                <input type="number" id="phone" value={phone} onChange={(e) => handlephoneChange(e)}
                  className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
                  required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1">
                <label htmlFor="dateOfBirth"
                  className="text-sm font-medium text-primaryColor"
                >Date Of Birth:</label>
                <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={(e) => handledateOfBirthChange(e)} required
                  className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
              <div className="grid grid-cols-1">
                <label htmlFor="age"
                  className="text-sm font-medium text-primaryColor"
                >Age:</label>
                <input type="number" id="age" value={age} onChange={(e) => handleageChange(e)} required
                  className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
            </div>
            <label htmlFor="address"
              className="text-sm font-medium text-primaryColor"
            >Address:</label>
            <input type="string" id="address" value={address} onChange={(e) => handleaddressChange(e)} required
              className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1">
                <label htmlFor="gender"
                  className="text-sm font-medium text-primaryColor"
                >Gender:</label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => handlegenderChange(e)} required

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
                  onChange={(e) => handlegenderRequirementChange(e)} required

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
                <label htmlFor="services"
                  className="text-sm font-medium text-primaryColor"
                >Services:</label>
                <input type="text" id="services" value={services} onChange={(e) => handleservicesChange(e)} required
                  className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
              <div className="grid grid-cols-1">
                <label htmlFor="experiences"
                  className="text-sm font-medium text-primaryColor"
                >Experiences:</label>
                <input type="text" id="experiences" value={experiences} onChange={(e) => handleexperiencesChange(e)} required
                  className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="grid grid-cols-1">
                <label htmlFor="healthCondition"
                  className="text-sm font-medium text-primaryColor"
                >Health Condition:</label>
                <input type="text" id="healthCondition" value={healthCondition} onChange={(e) => handlehealthChange(e)} required
                  className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
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
                  className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="grid grid-cols-1">
                <label htmlFor="acadamicCertificate" className="text-sm font-medium text-primaryColor">
                  Acadamic Certificate
                </label>
                <input
                  type="file"
                  name=""

                  id="acadamicCertificate"
                  onChange={(e) => handleFileInputChange(e)} required
                  className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
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
                  className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />

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










