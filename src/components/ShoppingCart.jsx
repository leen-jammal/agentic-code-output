import React from 'react';

function ShoppingCart({ cartItems, onRemoveFromCart, onAdjustQuantity }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price} x
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => onAdjustQuantity(item.id, e.target.value)}
                />
                <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${totalPrice.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;