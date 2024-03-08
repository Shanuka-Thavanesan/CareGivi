import axios from "axios";

const PayButton = ({ totalAmount }) => {
  const handleCheckout = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/checkout", {
        totalAmount: totalAmount // Pass the totalAmount to the backend
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
