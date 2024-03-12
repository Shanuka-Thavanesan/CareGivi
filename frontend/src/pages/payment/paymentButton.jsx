import axios from "axios";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext"; 



const PayButton = ({ totalAmount }) => {
  const { user, role, token } = useContext(authContext)
  
  const handleCheckout = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/checkout", {
        totalAmount: totalAmount,user // Pass the totalAmount to the backend
      });

      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <button onClick={handleCheckout}>Check out</button>
  );
};

export default PayButton;
