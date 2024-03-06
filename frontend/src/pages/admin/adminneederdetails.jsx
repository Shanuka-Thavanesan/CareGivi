import React,{useState,useEffect,Fragment, useContext} from "react";
import { authContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import axios from "axios";


function AdminNeeder ()  {
    const [needer, setneeder] = useState([]);
    const {token}=useContext(authContext);
    const {id}=useParams();
    const [status, setstatus] = useState('');
    const [servicePerDay, setservicePerDay] = useState('');
    const [tax, settax] = useState('');
    const [securityFee, setsecurityFee] = useState('');
    const [externalService, setexternalService] = useState('');
    const [price, setPrice] = useState('');
    // console.log(token);
    useEffect(() => {
        loadUser(id);
        
      }, []);
      async function loadUser(id) {
        try {
          const response = await fetch(`http://localhost:5000/api/v1/needer/${id}`, {
            headers: {
              "Content-Type": "application/json",
              'Authorization': 'Bearer '+token,

            },
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
          setneeder(data.data);
          console.log(data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      
     console.log(needer);
     const handlestatusChange = (e) => {
      setstatus(e.target.value);
    };
    const handleservicePerDayChange = (e) => {
      setservicePerDay(e.target.value);
    }
    const handletaxChange = (e) => {
      settax(e.target.value);
    }
    const handlesecurityFeeChange = (e) => {
      setsecurityFee(e.target.value);
    }
    const handleexternalServiceChange = (e) => {
      setexternalService(e.target.value);
    }
    const handlepriceChange = (e) => {
      setPrice(e.target.value);
    }

    const submitHandler = async (e) => {
      e.preventDefault()
     
  
      try {
        const response = await axios.put(
          `http://localhost:5000/api/v1/needer/updateneeder/${id}`,
          { status, price },
          { headers: { Authorization: 'Bearer ' + token } }
        );
        
        if (response.status === 200) {
          console.log('Upload successful!');
          // You may perform additional actions here upon successful update
        } else {
          console.log('Upload failed. Response:', response);
          // You may handle the failure case accordingly
        }
      } catch (error) {
        console.error('Error uploading:', error);
      }
    }    
    return(
  
    <div className="mt-20 mb-20 flex justify-center">
  <div className="grid grid-cols-2 gap-x-4  w-2/4 ">
  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text--500 uppercase tracking-wider">Name -</p>
    
      <p key={needer._id} className="whitespace-nowrap">{needer.name}</p>
    
  </div>
  
  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text--500 uppercase tracking-wider">Date of Birth -</p>
    
      <p key={needer._id} className="whitespace-nowrap">{needer.dateOfBirth}</p>
   
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text--500 uppercase tracking-wider">Age -</p>
    
      <p key={needer._id} className="whitespace-nowrap">{needer.age}</p>
   
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text--500 uppercase tracking-wider">Address -</p>
   
      <p key={needer._id} className="whitespace-nowrap">{needer.address} </p>
    
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text--500 uppercase tracking-wider">Phone -</p>
   
      <p key={needer._id} className="whitespace-nowrap">{needer.phone} -</p>
    
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text--500 uppercase tracking-wider">Emergency Phone -</p>
   
      <p key={needer._id} className="whitespace-nowrap">{needer.emergencyPhone} -</p>
    
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text--500 uppercase tracking-wider">Health Condition -</p>
   
      <p key={needer._id} className="whitespace-nowrap">{needer.healthCondition}</p>
    
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text--500 uppercase tracking-wider">Behavioural Consideration -</p>
   
      <p key={needer._id} className="whitespace-nowrap">{needer.behaviour}</p>
    
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text--500 uppercase tracking-wider">Reservation start date -</p>
   
      <p key={needer._id} className="whitespace-nowrap">{needer.startDate}</p>
    
  </div>
 
  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text--500 uppercase tracking-wider">Reservation end date -</p>
   
      <p key={needer._id} className="whitespace-nowrap">{needer.endDate}</p>
    
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text--500 uppercase tracking-wider">Amount for service -</p>
   
      <p key={needer._id} className="whitespace-nowrap">{needer.price}</p>
    
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text--500 uppercase tracking-wider">Period of service -</p>
   
      <p key={needer._id} className="whitespace-nowrap">{needer.period}</p>
    
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Role -</p>
   
      <p key={needer._id} className="whitespace-nowrap">{needer.role}</p>
   
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Gender -</p>
   
      <p key={needer._id} className="whitespace-nowrap">{needer.gender}</p>
    
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Gender Requirement -</p>
   
      <p key={needer._id} className="whitespace-nowrap">{needer.genderRequirement}</p>
   
  </div>

 
  <div className="cols-1 py-2">
    <p className="text-xs font-medium text-gray-500 uppercase ">Status -</p>
   
      <p key={needer._id} className="whitespace-nowrap">{needer.isApproved}</p>
    
  </div>


</div>
<br />


{/* ===============================Admin Controller============================== */}
<form onSubmit={(e) => submitHandler(e)}>
      <h2 className="text-2xl font-bold mb-6 text-primaryColor">Admin Controller</h2>
      <div className="mb-8">
        <div className="grid grid-cols-2 gap-4">
          <label htmlFor="status" className="text-sm font-medium text-primaryColor">
            Status:
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => handlestatusChange(e)}
            className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-beigeColor-500 focus:border-beigeColor-500"
          >
            <option value="pending">Pending...</option>
            <option value="approved">Approved</option>
            <option value="cancel">camcel</option>
            
          </select>
        </div>
        <div className="grid grid-cols-1">
          <label htmlFor="servicePerDay" className="text-sm font-medium text-primaryColor">
            Service Amount
          </label>
          <input
            type="number"
            id="servicePerDay"
            value={servicePerDay}
            onChange={(e) => handleservicePerDayChange(e)}
            className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
          />
        </div>
        
        <div className="grid grid-cols-1">
          <label htmlFor="tax" className="text-sm font-medium text-primaryColor">
            Tax Amount
          </label>
          <input
            type="number"
            id="tax"
            value={tax}
            onChange={(e) => handletaxChange(e)}
            className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
          />
        </div>
        <div className="grid grid-cols-1">
          <label htmlFor="securityFee" className="text-sm font-medium text-primaryColor">
            Security Charge
          </label>
          <input
            type="number"
            id="securityFee"
            value={securityFee}
            onChange={(e) => handlesecurityFeeChange(e)}
            className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
          />
        </div>
        <div className="grid grid-cols-1">
          <label htmlFor="externalService" className="text-sm font-medium text-primaryColor">
            Extra Service Charge
          </label>
          <input
            type="number"
            id="externalService"
            value={externalService}
            onChange={(e) => handleexternalServiceChange(e)}
            className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
          />
        </div>
        <div className="grid grid-cols-1">
          <label htmlFor="price" className="text-sm font-medium text-primaryColor">
            Total Amount
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => handlepriceChange(e)}
            className="block w-full px-3 py-2 border border-yellowGreen border-2 rounded shadow-sm focus:ring-1 focus:ring-peach-500 focus:border-peach-500"
          />
        </div>
     
      

      {/* End of form inputs */}
      <div className="grid grid-cols-1 gap-4 mb-4 py-4">
            <button type="submit"
              className="bg-peach hover:bg-beigeColor-700 text-primaryColor font-bold py-2 px-4 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Register
            </button>
          </div>
          </div>
    </form>


</div>

    );
}
export default AdminNeeder;