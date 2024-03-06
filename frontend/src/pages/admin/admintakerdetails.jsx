import React,{useState,useEffect,Fragment, useContext} from "react";
import { authContext } from "../../context/AuthContext";
import { useParams , Link} from "react-router-dom";
import axios from "axios";
function AdminTaker ()  {
    const [caretaker, setcaretaker] = useState([]);
    const {token}=useContext(authContext);
    const {id}=useParams();
    const [status, setstatus] = useState('');
    // console.log(token);
    useEffect(() => {
        loadUser(id);
        
      }, []);
      async function loadUser(id) {
        try {
          const response = await fetch(`http://localhost:5000/api/v1/taker/get/${id}`, {
            headers: {
              "Content-Type": "application/json",
              'Authorization': 'Bearer '+token,

            },
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
          setcaretaker(data.data);
     console.log(data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      
     console.log(caretaker);
     const handlestatusChange = (e) => {
      setstatus(e.target.value);
    };

    const submitHandler = async (e) => {
      e.preventDefault()

     try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/taker/updatetaker/${id}`,
        { status},
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
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Name -</p>
      <p className="whitespace-nowrap">{caretaker.name}</p>
    
  </div>
  
  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth -</p>
    
      <p className="whitespace-nowrap">{caretaker.dateOfBirth}</p>
   
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Age -</p>
    
      <p className="whitespace-nowrap">{caretaker.age}</p>
   
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Address -</p>
   
      <p className="whitespace-nowrap">{caretaker.address} </p>
    
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Phone -</p>
   
      <p className="whitespace-nowrap">{caretaker.phone} -</p>
    
  </div>


  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Health Condition -</p>
   
      <p className="whitespace-nowrap">{caretaker.healthCondition}</p>
    
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Experiences -</p>
   
      <p className="whitespace-nowrap">{caretaker.experiences}</p>
    
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Service -</p>
   
      <p className="whitespace-nowrap">{caretaker.services}</p>
    
  </div>


  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Gender -</p>
   
      <p className="whitespace-nowrap">{caretaker.gender}</p>
    
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Gender Requirement -</p>
   
      <p className="whitespace-nowrap">{caretaker.genderRequirement}</p>
   
  </div>

  <div className="col-span-1">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Accadamic Certificate -</p>
   
      <Link to className="whitespace-nowrap">{caretaker.acadamicCertificate?.acadamicCertificate}</Link>
   
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Character Certificate -</p>
   
      <Link to ="/" className="whitespace-nowrap">{caretaker.characterCertificate?.characterCertificate}</Link>
   
  </div>

  <div className="col-span-1 py-2">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Identity Proof -</p>
   
      <Link to className="whitespace-nowrap">{caretaker.identityProof?.identityProof}</Link>
   
  </div>


 
  <div className="cols-1 py-2">
    <p className="text-xs font-medium text-gray-500 uppercase ">Status -</p>
    
      <p key={caretaker._id} className="whitespace-nowrap">{caretaker.isApproved}</p>
   
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
  
      {/* End of form inputs */}
      <div className="grid grid-cols-1 gap-4 mb-4 py-4">
            <button type="submit"
              className="bg-peach hover:bg-beigeColor-700 text-primaryColor font-bold py-2 px-4 rounded focus:ring-2 focus:ring-beigeColor-500 focus:outline-none">
              Register
            </button>
          </div>
          </div>
    </form>



</div>

    );
}
export default AdminTaker;