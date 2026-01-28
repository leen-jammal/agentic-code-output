import React from 'react';
import { useCart } from '../contexts/CartContext';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart } = useCart();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id} className="cart-item">
              {item.name} - ${item.price}
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;