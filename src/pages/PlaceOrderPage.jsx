import React from 'react';
import { useNavigate } from 'react-router-dom';

function PlaceOrderPage() {
  const shippingAddress = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {};
  const paymentMethod = localStorage.getItem('paymentMethod') || '';
  const navigate = useNavigate();

  const placeOrderHandler = () => {
    // Simulate order placement
    localStorage.removeItem('cartItems');
    navigate('/order/123'); // Redirect to order page with a fake order id
  };

  return (
    <div>
      <h1>Place Order</h1>
      <p>Shipping Address: {shippingAddress.address}, {shippingAddress.city}, {shippingAddress.postalCode}, {shippingAddress.country}</p>
      <p>Payment Method: {paymentMethod}</p>
      <button className="btn btn-primary" onClick={placeOrderHandler}>Place Order</button>
    </div>
  );
}

export default PlaceOrderPage;