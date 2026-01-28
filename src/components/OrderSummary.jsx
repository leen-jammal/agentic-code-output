import React from 'react';

function OrderSummary({ order }) {
  return (
    <div>
      <h2>Order Summary</h2>
      <p>Total Items: {order.items.length}</p>
      <p>Total Amount: ${order.total}</p>
    </div>
  );
}

export default OrderSummary;