import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { authContext } from "../../context/AuthContext";

const ServiceForm = () => {
    const [title, settitle] = useState('');
    const [need, setneed] = useState('');
    const [type, settype] = useState('');
    const [benifit, setbenifit] = useState('');
    const [servicePerDay, setservicePerDay] = useState('');
   

    const { user, role, token } = useContext(authContext)

//   const navigate = useNavigate()

const handletitleChange = (e) => {
    settitle(e.target.value);
  };

  const handleneedChange = (e) => {
    setneed(e.target.value);
  };
  const handletypeChange = (e) => {
    settype(e.target.value);
  };
  const handlebenifitChange = (e) => {
    setbenifit(e.target.value);
  };
  const handleservicePerDayChange = (e) => {
    setservicePerDay(e.target.value);
  };
 

  const uploadHandler = async (e) => {
    e.preventDefault()
   

    try {

      const response = await axios.post('http://localhost:5000/api/v1/services',
        {title,need,type,benifit,servicePerDay},
           { headers: { 'Authorization': 'Bearer ' + token } });
      if (response.statusText == "OK") {
        console.log('Upload successful!');
        
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error('Error uploading:', error);
    } 
  };

  return (
    <section className="mb-12 ">
      <div className="w-full max-w-xl mx-auto mt-12 border border-yellowGreen border-4 rounded-md px-6 py-6 filter drop-shadow-md md:drop-shadow-xl ">
        <form onSubmit={(e) => uploadHandler(e)}>
          {/* <div className="ventor-form"> */}
          <h2 className="text-2xl font-bold mb-2 text-primaryColor filter drop-shadow-md md:drop-shadow-xl text-center">Service Details </h2>
          <div className="mb-8">
              <div className="grid grid-cols-1 py-2">
                <label htmlFor="title"
                  className="text-sm font-medium text-primaryColor"
                >Title of the Service:</label>
                <input type="text" id="title" value={title} onChange={(e) => handletitleChange(e)}
                  className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
                  required />
              </div>
              <div className="grid grid-cols-1 py-2">
                <label htmlFor="need"
                  className="text-sm font-medium text-primaryColor"
                >Need of the service:</label>
                <input type="text" id="need" value={need} onChange={(e) => handleneedChange(e)}
                  className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
                  required />
              </div>
           
              <div className="grid grid-cols-1 py-2">
                <label htmlFor="type"
                  className="text-sm font-medium text-primaryColor"
                >Type of the service:</label>
                <input type="text" id="type" value={type} onChange={(e) => handletypeChange(e)} required
                  className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
              <div className="grid grid-cols-1 py-2">
                <label htmlFor="benifit"
                  className="text-sm font-medium text-primaryColor"
                >Benifit of the service:</label>
                <input type="text" id="benifit" value={benifit} onChange={(e) => handlebenifitChange(e)} required
                  className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
        
            <div className="grid grid-cols-1py-2 py-2">
                <label htmlFor="servicePerDay"
                  className="text-sm font-medium text-primaryColor"
                >Amount for service per day:</label>
                <input type="string" id="servicePerDay" value={servicePerDay} onChange={(e) => handleservicePerDayChange(e)} required
                  className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500" />
              </div>
           
          </div>

          <div className="grid grid-cols-1 gap-4 mb-2">
            <button type="submit"
              className="bg-peach hover:bg-blue-700 text-primaryColor font-bold py-2 px-4 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Upload
            </button>
          </div>
        
        </form>

      </div>

    </section>
  );


};

export default ServiceForm;