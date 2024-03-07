import React from "react";

const PaymentReceipt = ({ startDate,endDate,serviceAmount, taxAmount, securityAmount, externalServiceAmount }) => {
  const totalAmount = serviceAmount + taxAmount + securityAmount + externalServiceAmount;

  return (
    <div className="max-w-lg mx-auto shadow-lg p-6 border border-solid border-yellowGreen rounded-lg filter drop-shadow-md md:drop-shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Payment Receipt</h2>

      <div className="flex justify-between mb-2">
        <span>Reservation Start Date:</span>
        <span>{startDate}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Reservation End Date:</span>
        <span>{endDate}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Amount of Service per Day:</span>
        <span>{serviceAmount}LKR</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Amount of Tax Charge:</span>
        <span>{taxAmount}LKR</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Amount of Security Charge:</span>
        <span>{securityAmount}LKR</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Amount of External Service Charge:</span>
        <span>{externalServiceAmount}LKR</span>
      </div>

      <div className="flex justify-between mt-4 border-t border-yellowGreen pt-2">
        <span>Total Amount:</span>
        <span>{totalAmount}LKR</span>
      </div>
    </div>
  );
};

export default PaymentReceipt;
