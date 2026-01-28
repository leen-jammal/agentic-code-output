import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Product Catalog</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product._id}>
            {product.name} - ${product.price}
          </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;