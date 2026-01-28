import React from 'react';

function Confirmation({ confirmation }) {
  return (
    <div>
      <h2>Order Confirmation</h2>
      <p>Thank you for your order!</p>
      <p>Order ID: {confirmation.orderId}</p>
      <p>Name: {confirmation.name}</p>
      <p>Email: {confirmation.email}</p>
      <p>Address: {confirmation.address}</p>
    </div>
  );
}

export default Confirmation;