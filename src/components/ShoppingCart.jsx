import React from 'react';
import { useCart } from '../contexts/CartContext';

function ShoppingCart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image"/>
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>Quantity: {item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            Total: ${calculateTotal()}
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;