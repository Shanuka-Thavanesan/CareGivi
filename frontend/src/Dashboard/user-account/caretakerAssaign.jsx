import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { authContext } from "../../context/AuthContext";

const TakerAssaign =()=>{
    const {id}=needer.taker;
    const { user, role, token } = useContext(authContext)

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
      
}

export default TakerAssaign;