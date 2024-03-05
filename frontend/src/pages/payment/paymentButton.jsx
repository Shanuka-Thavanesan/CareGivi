import axios from "axios";
// import { useSelector } from "react-redux";


  
const PayButton = () => {

  const handleCheckout = () => {

    axios .post(`http://localhost:5000/api/v1/checkout`, {
        
           
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button onClick={() => handleCheckout()}>Check out</button>
    </>
  );
};

export default PayButton;
