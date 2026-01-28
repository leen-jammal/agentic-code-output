import React from 'react';

function ProductList({ products }) {
  return (
    <ul>
      {products.map(product => (
        <li key={product._id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;