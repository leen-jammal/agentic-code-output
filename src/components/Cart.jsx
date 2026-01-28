import React from 'react';

function Cart({ cart, onRemoveFromCart, onCheckout }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              {item.name} - ${item.price}
              <button onClick={() => onRemoveFromCart(item)}>Remove</button>
            </div>
          ))}
          <p>Total: ${totalPrice}</p>
          <button onClick={onCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;