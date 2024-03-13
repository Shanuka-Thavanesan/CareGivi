import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { authContext } from "../../context/AuthContext";  

const TakerAssaign =({id})=>{
    // const {id}=needer.taker;
    const [caretaker, setcaretaker] = useState([]);
    const { user, role, token } = useContext(authContext)

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
      
      return(
        <div className="max-w-lg mx-auto shadow-lg p-6 border border-solid border-yellowGreen rounded-lg filter drop-shadow-md md:drop-shadow-xl">
      <h2 className="text-2xl font-semibold mb-4 color-primaryColor">Here is your Caretaker!</h2>
      <div className="flex justify-between mb-2">
        <span>Name:</span>
        <span>{caretaker.name}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Phone number:</span>
        <span>{caretaker.phone}</span>
      </div>
    </div>
      )
}

export default TakerAssaign;