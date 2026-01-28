import React from 'react';
import { useCart } from '../contexts/CartContext';
import productsData from '../data/products.json';

function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {productsData.products.map(product => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;