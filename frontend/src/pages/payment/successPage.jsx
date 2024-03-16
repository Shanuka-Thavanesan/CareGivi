import React from "react";
import styled from "styled-components";

const CheckoutSuccess = () => {
 

  return (
    <Container>
               <div className="w-full max-w-xl mx-auto mr-2 mt-12  border-yellowGreen border-4 rounded-md px-6 py-6 filter drop-shadow-md md:drop-shadow-xl ">
      <h2>Checkout Successful</h2>
      <p>Your order might take some time to process.</p>
      <p>Check your order status at your profile after about 10mins.</p>
      <p>
        Incase of any inqueries contact the support at{" "}
        <strong>support to CareGivi</strong>
      </p>
      </div>
    </Container>
  );
};

export default CheckoutSuccess;

const Container = styled.div`
  min-height: 80vh;
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }
  `;
