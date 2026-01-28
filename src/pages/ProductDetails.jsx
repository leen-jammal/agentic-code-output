import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext);


  useEffect(() => {
    // Fetch product details from API using the ID (replace with your actual API endpoint)
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ maxWidth: '200px', maxHeight: '200px' }} />
      <p>${product.price}</p>
      <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;