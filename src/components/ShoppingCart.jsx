import React from 'react';

function ShoppingCart() {
  // Placeholder data for cart items
  const cartItems = [
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 },
  ];

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;