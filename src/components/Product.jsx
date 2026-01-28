import React from 'react';

function Product({ product }) {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default Product;