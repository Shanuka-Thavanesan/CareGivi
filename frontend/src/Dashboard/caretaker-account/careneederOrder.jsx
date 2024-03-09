import React,{useState,useEffect, useContext} from "react";
import { authContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";

function Neederdetails(){

    const [needer, setneeder] = useState([]);
    const {token}=useContext(authContext);
    const {id}=useParams();

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
      
      return(
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  <div className="bg-white overflow-hidden shadow-md rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Name</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">{needer.name}</p>
    </div>
  </div>

  <div className="bg-white overflow-hidden shadow-md rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Date of Birth</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">{needer.dateOfBirth}</p>
    </div>
  </div>


</div>

      )
};

export default Neederdetails;