import React, { useState, useEffect, useContext } from "react";
import { authContext } from "../../context/AuthContext";
function PaymentReceipt() {
  const [needer, setNeeder] = useState([]);
  const { token } = useContext(authContext);
  useEffect(() => {
    loadNeederDetails();
  }, []);
  async function loadNeederDetails() {
    try {
      const response = await fetch('http://localhost:5000/api/v1/needer/getpayment', {
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token,
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setNeeder(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <div className="max-w-lg mx-auto shadow-lg p-6 border border-solid border-yellowGreen rounded-lg filter drop-shadow-md md:drop-shadow-xl">
      <h2 className="text-2xl font-semibold mb-4 color-primaryColor">Payment Receipt</h2>
      <div className="flex justify-between mb-2">
        <span>Reservation Start Date:</span>
        <span>{needer.startDate}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Reservation End Date:</span>
        <span>{needer.endDate}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Amount of Service per Day:</span>
        <span>{needer.servicePerDay}LKR</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Amount of Tax Charge:</span>
        <span>{needer.tax}LKR</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Amount of Security Charge:</span>
        <span>{needer.securityFee}LKR</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Amount of External Service Charge:</span>
        <span>{needer.externalService}LKR</span>
      </div>
      <div className="flex justify-between mt-4 border-t border-yellowGreen pt-2">
        <span>Total Amount:</span>
        <span>{needer.price}LKR</span>
      </div>
    </div>
  );
}
export default PaymentReceipt;