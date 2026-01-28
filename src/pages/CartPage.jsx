import React from 'react';

function CartPage({ cart, removeFromCart, updateQuantity, calculateTotal }) {
  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image"/>
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <div className="quantity-controls">
                    <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      value={item.quantity || 1}
                      min="1"
                      onChange={(e) => updateQuantity(item, e.target.value)}
                    />
                  </div>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total: ${calculateTotal()}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;