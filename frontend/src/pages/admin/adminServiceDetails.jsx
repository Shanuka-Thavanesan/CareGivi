
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import {toast} from "react-toastify";
import axios from "axios";
import ServiceUpdate from "./adminServiceUpdate"


function Services (params,data)  {
    const [service, setservice] = useState([]);
    

    
    useEffect(() => {
        loadUser();
      }, []);
      const loadUser = async () =>
      
      {
         try
         {
             const response = await fetch('http://localhost:5000/api/v1/services/get',);
              const data = await response.json();
              setservice(data.data);
              console.log(data);
            
            }
            catch (error)
            { console.error('Error fetching data:', error); } };

            const handleDelete = async (id) => {
              axios.delete(`http://localhost:5000/api/v1/services/delete/${id}`).then((res) => {
                toast.success("Service deleted succesfully!")
              })
              window.location.reload();
            };

  return (

    <div className="user11 mx-auto w-full lg:w-5/6 mt-10 mb-20">
      <div className='flex justify-end'>
      <Link to="/adminservice">
    <button className='rounded bg-primaryColor px-2 py-2 text-white'>Upload Service</button>
    </Link>
</div>
<br />
    <table className="min-w-full divide-y divide--200 ">
      <thead className="text-center">
        <tr>
          <th scope="col" className="py-3 text-xs font-medium text-700 uppercase">
            ID
          </th>
          <th scope="col" className="py-3 text-xs font-medium text-700 uppercase">
            Title
          </th>
          <th scope="col" className="py-3 text-xs font-medium text-700 uppercase">
            Need of the service
          </th>
          <th scope="col" className="py-3 text-xs font-medium text-700 uppercase">
            Type of the service
          </th>
          <th scope="col" className="py-3 text-xs font-medium text-700 uppercase">
            Benefit of the service
          </th>
          <th scope="col" className="py-3 text-xs font-medium text-700 uppercase">
            Service per day
          </th>
          <th scope="col" className="py-3 text-xs font-medium text-700 uppercase">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide--200 text-center">
        {Array.isArray(service) &&
          service.map((service) => (
            <tr key={service._id}>
              <td className="py-4">{service._id}</td>
              <td className="py-4">{service.title}</td>
              <td className="py-4">{service.need}</td>
              <td className="py-4">{service.type}</td>
              <td className="py-4">{service.benifit}</td>
              <td className="py-4">{service.servicePerDay}</td>
              <td className="py-4">
              <Link to={`/ServiceUpdate/${service._id}`}><button  className="rounded bg-beigeColor px-2 ">Update</button> </Link>
                <div className="py-1">
                  <button onClick={() => handleDelete(params.id)}className="rounded bg-red px-3 text-white">Delete</button>
                </div>
                
              </td>
            </tr>
          ))}
      </tbody>
    </table>
    
  </div>
  

  );
}
export default Services;