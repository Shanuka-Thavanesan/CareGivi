import React from "react";
import styled from "styled-components";

const CheckoutSuccess = () => {
 

  return (
    <Container>
               <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 ">
      <h2>Checkout Successful</h2>
      <br />
      <p>Your order might take some time to process.</p>
      <br />
      <p>Check your order status at your profile after about 10mins.</p>
      <br />
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
