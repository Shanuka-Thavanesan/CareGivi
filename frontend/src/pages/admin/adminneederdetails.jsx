import React,{useState,useEffect,Fragment, useContext} from "react";
import { authContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
function AdminNeeder ()  {
    const [needer, setneeder] = useState([]);
    const {token}=useContext(authContext);
    const {id}=useParams()
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
    <div className="cols-">
      <p key={needer._id} className="whitespace-nowrap">{needer.isApproved}</p>
    </div>
  </div>


</div>
<br />

<div class="flex justify-center">
  <div>
<button className="btn ">Approve</button>
</div>
<div>
<button className="btn">Cancel</button>
</div>
</div>



</div>

    );
}
export default AdminNeeder;