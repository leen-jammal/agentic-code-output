import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.title} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotal()}</p>
        </>
      )}
    </div>
  );
}

export default Cart;