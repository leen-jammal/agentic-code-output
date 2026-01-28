import React, { useState } from 'react';

function CheckoutForm({ onSubmit, onError }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email) {
            onError("Please fill in all fields.");
            return;
        }
    onSubmit({ name, address, email });
  };

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default CheckoutForm;