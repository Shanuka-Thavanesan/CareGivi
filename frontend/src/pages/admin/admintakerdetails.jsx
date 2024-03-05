import React,{useState,useEffect,Fragment, useContext} from "react";
import { authContext } from "../../context/AuthContext";
import { useParams , Link} from "react-router-dom";
function AdminTaker ()  {
    const [caretaker, setcaretaker] = useState([]);
    const {token}=useContext(authContext);
    const {id}=useParams()
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
    return(
  
    <div className="mt-20 mb-20">
  <div className="grid grid-cols-2 gap-4 items-center ">
  <div className="col-span-1">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Name -</p>
      <p className="whitespace-nowrap">{caretaker.name}</p>
    
  </div>
  
  <div className="col-span-1">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth -</p>
    
      <p className="whitespace-nowrap">{caretaker.dateOfBirth}</p>
   
  </div>

  <div className="col-span-1">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Age -</p>
    
      <p className="whitespace-nowrap">{caretaker.age}</p>
   
  </div>

  <div className="col-span-1">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Address -</p>
   
      <p className="whitespace-nowrap">{caretaker.address} </p>
    
  </div>

  <div className="col-span-1">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Phone -</p>
   
      <p className="whitespace-nowrap">{caretaker.phone} -</p>
    
  </div>


  <div className="col-span-1">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Health Condition -</p>
   
      <p className="whitespace-nowrap">{caretaker.healthCondition}</p>
    
  </div>

  <div className="col-span-1">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Experiences -</p>
   
      <p className="whitespace-nowrap">{caretaker.experiences}</p>
    
  </div>

  <div className="col-span-1">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Service -</p>
   
      <p className="whitespace-nowrap">{caretaker.services}</p>
    
  </div>


  <div className="col-span-1">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Gender -</p>
   
      <p className="whitespace-nowrap">{caretaker.gender}</p>
    
  </div>

  <div className="col-span-1">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Gender Requirement -</p>
   
      <p className="whitespace-nowrap">{caretaker.genderRequirement}</p>
   
  </div>

  <div className="col-span-1">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Accadamic Certificate -</p>
   
      <Link to className="whitespace-nowrap">{caretaker.acadamicCertificate?.acadamicCertificate}</Link>
   
  </div>

  <div className="col-span-1">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Character Certificate -</p>
   
      <Link to ="/" className="whitespace-nowrap">{caretaker.characterCertificate?.characterCertificate}</Link>
   
  </div>

  <div className="col-span-1">
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Identity Proof -</p>
   
      <Link to className="whitespace-nowrap">{caretaker.identityProof?.identityProof}</Link>
   
  </div>


  <div className="cols-2">
  <div className="cols-1">
    <p className="text-xs font-medium text-gray-500 uppercase ">Status -</p>
    <div className="cols-">
      <p key={caretaker._id} className="whitespace-nowrap">{caretaker.isApproved}</p>
    </div>
  </div>
</div>

</div>
<br />

<div class="flex justify-center">
<button className="btn">Approve</button>
<button className="btn">Cancel</button>
</div>



</div>

    );
}
export default AdminTaker;