
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCamera } from "react-icons/fa";
import uploadImageToCloudinary from "../../utils/uploadCloudinary.js";

function CareTakerForm() {

  const [formState, setFormState] = useState({
    email:"",
    name:"",
    phone:"",
    age:"",
    address:"",
    dateOfBirth:"",
    // qualifications,
    gender:"",
    genderRequirement:"",
    // services,
    // acadamicCertificate,
    // experiences,
    // characterCertificate,
    healthCondition:"",
  });

 // Define a function to handle form submission
 const handleSubmit = (event) => {
  event.preventDefault();

//   const [submitted, setSubmitted] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const [formData, setFormData] = useState();

//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewURL, setPeviewURL] = useState('');
  

// const handleFileInputChange = async (event) => {

//   const file = event.target.files[0];

//   const data = await uploadImageToCloudinary(file);

//   setPeviewURL(data.url)
//   setSelectedFile(data.url)
//   setFormData({ ...formData, photo: data.url });


//   // use cloudinary
// };

  // Submit form data and image to your backend (implement actual logic)
  const formData = new FormData();

  formData.append("name", formState.name);
  formData.append("email", formState.email);
  formData.append("phone", formState.phone);
  formData.append("address", formState.address);
  formData.append("dob",formState.dob);
  formData.append("age", formState.age);
  formData.append("gender", formState.gender);
  formData.append("genderRequirement", formState.genderRequirement);
  formData.append("healthCondition", formState.healthCondition);

  // formData.append("identityProof", selectedFile);
  // formData.append("services", data.services);

fetch('http://localhost:5000/api/v1/createtaker',
{
    body: formData,
    method: "POST"
})
    // Log the formData for demonstration purposes
    
    .then((response) => {
      // Handle the response from the backend
      if (response.ok) {
        // If the request was successful, reset the form state
        setFormState({
          email:"",
          name:"",
          phone:"",
          age:"",
          address:"",
          dateOfBirth:"",
          // qualifications,
          gender:"",
          genderRequirement:"",
          // services,
          // acadamicCertificate,
          // experiences,
          // characterCertificate,
          healthCondition:"",
        });
      } else {
        throw new Error('Failed to create customer');
      }
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error(error);
    });
};

// Define a function to handle changes to the form fields
const handleChange = (event) => {
  // Update the form state with the new value
  setFormState({
    ...formState,
    [event.target.name]: event.target.value,
  });
};

  return (
    <section className="mt-12 mb-12">
      <div className="w-full max-w-md mx-auto  border border-peach border-4 rounded-md px-6 py-6 filter drop-shadow-md md:drop-shadow-xl ">
  
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6 text-primaryColor filter drop-shadow-md md:drop-shadow-xl">Care Taker Registration</h2>

            {/* Personal Information */}
            <div className="mb-8">
              <div className="grid grid-cols-2 gap-4 ">
                <div className="grid grid-cols-1 gap-4">
                  <label htmlFor="name" className="text-sm font-medium text-primaryColor">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {/* {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>} */}
                </div>
                {/* Email */}
                <div className="grid grid-cols-1 gap-4">
                  <label htmlFor="email" className="text-sm font-medium text-primaryColor">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    // {...register("email", { required: "Email is required" })}
                    value={formState.email}
                    onChange={handleChange}

                    className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {/* {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>} */}
                </div>

              </div>
            </div>

            {/* <div className="mb-8"> */}

              {/* Image Uploader */}
              {/* <div className=" grid grid-cols-1">
                <label htmlFor="image" className="text-sm text-primaryColor font-medium">
                  Profile Picture
                </label>
                <div className="flex items-center border border-yellowGreen border-2 rounded shadow-sm px-3 py-2">
                  {selectedImage && (
                    <img
                      className="h-10 w-10 rounded-full mr-2"
                      src={URL.createObjectURL(selectedImage)}
                      alt="Profile Picture"
                    />
                  )}
                  <label htmlFor="image">
                    <span className="inline-flex items-center text-center text-yellowGreen text-sm font-medium mr-2">
                      Image
                      <FaCamera className="ml-2 text-blue-500" />
                    </span>
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

            </div> */}


            {/* Date Of Birth */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="grid grid-cols-1">
                <label htmlFor="dob" className="text-sm font-medium text-primaryColor">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  // {...register("dob", { required: "Date of Birth is required" })}
                  value={formState.dob}
                  onChange={handleChange}

                  className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                {/* {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>} */}
              </div>

              {/* Age */}
              <div className="grid grid-cols-1">
                <label htmlFor="age" className="text-sm font-medium text-primaryColor">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  // {...register("age", { required: "Age is required" })}
                  value={formState.age}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                {/* {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>} */}
              </div>
            </div>

            {/* Gender */}
            <div className="mb-8">
              <div className="grid grid-cols-2 gap-4 ">
                <div className="grid grid-cols-1">
                  <label htmlFor="gender" className="text-sm font-medium text-primaryColor">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formState.gender}
                    onChange={handleChange}
                    // {...register("gender", { required: "Gender is required" })}
                    className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" className="text-yelloGreen">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  
                </div>

                {/* gender requirement */}

                <div className="grid grid-cols-1 ">
                  <label htmlFor="gender" className="text-sm font-medium text-primaryColor">
                    Gender Requirement
                  </label>
                  <select
                    id="genderRequirement"
                    name="genderRequirement"

                    // {...register("gender", { required: "Gender REquirement is required" })}
                    value={formState.genderRequirement}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" className="text-yelloGreen">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {/* {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>} */}
                </div>
              </div>
            </div>
            {/* address */}
            <div className="mb-8">
              <div className="grid grid-cols-2 gap-4 ">
                <div className="grid grid-cols-1">
                  <label htmlFor="address" className="text-sm font-medium text-primaryColor">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
name="address"
                    // {...register("address", { required: "Address is required" })}
                    value={formState.address}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
                  />
                  {/* {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>} */}
                </div>
                {/* phone number */}
                <div className="grid grid-cols-1">
                  <label htmlFor="phone" className="text-sm font-medium text-primaryColor">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    // {...register("phone", { required: "Phone Number is required" })}
                    value={formState.phone}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-s focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {/* {errors.phone&& <p className="text-red-500 text-sm">{errors.phone.message}</p>} */}
                </div>
              </div>
            </div>



            {/* Experience */}
            {/* <div className="mb-8">
              {/* <h3 className="font-semibold mb-4">Personal Information</h3> */}
              {/* <div className="grid grid-cols-2 gap-4 ">
                <div className="grid grid-cols-1 ">
                  <label htmlFor="experience" className="text-sm font-medium text-primaryColor">
                    Your Experience
                  </label>
                  <input
                    type="text"
                    id="experience"
                    {...register("experience", { required: "Experience is required" })}
                    className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.experience && <p className="text-red-500 text-sm">{errors.experience.message}</p>}
                </div>


                <div className="grid grid-cols-1 ">
                  <label htmlFor="services" className="text-sm font-medium text-primaryColor">
                    Services
                  </label>
                  <input
                    type="text"
                    id="services"
                    {...register("services", { required: "Services is required" })}
                    className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.services && <p className="text-red-500 text-sm">{errors.services.message}</p>}
                </div>

              </div>
            </div> */} 
              
            {/* <div className="mb-8">
            <div className="grid grid-cols-2 gap-4 "> */}
              {/* Acadamic certificate */}
              {/* <div className=" grid grid-cols-1">
                <label htmlFor="image" className="text-sm text-primaryColor font-medium">
                Acadamic certificate
                </label>
                <div className="flex items-center border border-yellowGreen border-2 rounded shadow-sm px-3 py-2">
                  {selectedImage && (
                    <img
                      className="h-10 w-10 rounded-full mr-2"
                      src={URL.createObjectURL(selectedImage)}
                      alt="Acadamic certificate"
                    />
                  )}
                  <label htmlFor="image">
                    <span className="inline-flex items-center text-center text-yellowGreen text-sm font-medium mr-2">
                      pdf
                      <FaCamera className="ml-2 text-blue-500" />
                    </span>
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div> */}
              {/* Character certificate */}
              {/* <div className=" grid grid-cols-1">
                <label htmlFor="image" className="text-sm text-primaryColor font-medium">
                  Character Certificate
                </label>
                <div className="flex items-center border border-yellowGreen border-2 rounded shadow-sm px-3 py-2">
                  {selectedImage && (
                    <img
                      className="h-10 w-10 rounded-full mr-2"
                      src={URL.createObjectURL(selectedImage)}
                      alt="Character Certificate"
                    />
                  )}
                  <label htmlFor="image">
                    <span className="inline-flex items-center text-center text-yellowGreen text-sm font-medium mr-2">
                      pdf
                      <FaCamera className="ml-2 text-blue-500" />
                    </span>
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
              </div>
              </div> */}

            {/* Health Information */}
            <div className="mb-8">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="grid grid-cols-1">
                <label htmlFor="healthcondition" className="text-sm font-medium text-primaryColor">
                  Describe Your Health Condition
                </label>
                <input
                  type="text"
                  id="healthcondition"
                  name="healthCondition"
                  // {...register("healthcondition", { required: "Health Condition is required" })}
                  value={formState.healthCondition}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
                />
                {/* {errors.healthcondition && <p className="text-red-500 text-sm">{errors.healthcondition.message}</p>} */}
              </div>
            
            {/* <div className=" grid grid-cols-1">
                <label htmlFor="image" className="text-sm text-primaryColor font-medium">
                Identity Proof
                </label>
                <div className="flex items-center border border-yellowGreen border-2 rounded shadow-sm px-3 py-2">
                  {selectedImage && (
                    <img
                      className="h-10 w-10 rounded-full mr-2"
                      src={URL.createObjectURL(selectedImage)}
                      alt="identityProof"
                    />
                  )}
                  <label htmlFor="image">
                    <span className="inline-flex items-center text-center text-yellowGreen text-sm font-medium mr-2">
                      pdf
                      <FaCamera className="ml-2 text-blue-500" />
                    </span>
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div> */}
              </div>
              </div>




            {/* Submit Button */}
            <div className="grid grid-cols-1 gap-4 mb-4">
              <button
                type="submit"
                className="bg-peach hover:bg-blue-700 text-primaryColor font-bold py-2 px-4 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Register
              </button>
            </div>
          </form>

        {/* {submitted && (
          <div className="text-center text-green-500 mt-4">
            Registration successful!
          </div>
        )} */}
      </div>
    </section>
  )
      };


export default CareTakerForm;