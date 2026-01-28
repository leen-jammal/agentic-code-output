import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API (replace with your actual API endpoint)
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', width: '200px' }}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} style={{ maxWidth: '100px', maxHeight: '100px' }} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;