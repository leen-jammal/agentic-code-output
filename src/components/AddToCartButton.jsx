import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import './AddToCartButton.css';

function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleClick = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <button className={`add-to-cart-button ${isAdding ? 'adding' : ''}`} onClick={handleClick} disabled={isAdding}>
      {isAdding ? 'Adding...' : 'Add to Cart'}
    </button>
  );
}

export default AddToCartButton;