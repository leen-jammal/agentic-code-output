import React, { useState } from 'react';
import './App.css';

function App() {
  const [order, setOrder] = useState({
    name: '',
    email: '',
    product: '',
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder(prevOrder => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Order submitted:', order);
    alert('Order submitted!'); // Replace with actual submission logic
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Order Form</h1>
      </header>
      <main className="App-main">
        <form onSubmit={handleSubmit} className="order-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={order.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={order.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product">Product:</label>
            <select
              id="product"
              name="product"
              value={order.product}
              onChange={handleChange}
              required
            >
              <option value="">Select a product</option>
              <option value="Widget">Widget</option>
              <option value="Gadget">Gadget</option>
              <option value="Thingamajig">Thingamajig</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={order.quantity}
              onChange={handleChange}
              min="1"
            />
          </div>
          <button type="submit">Submit Order</button>
        </form>
      </main>
    </div>
  );
}

export default App;