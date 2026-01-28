import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    fetchProducts();
    loadCart();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item._id === product._id);
    if (existingItem) {
      const updatedCart = cart.map(item =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      saveCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      saveCart(updatedCart);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item._id !== productId);
    setCart(updatedCart);
    saveCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity > 0) {
      const updatedCart = cart.map(item =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      );
      setCart(updatedCart);
      saveCart(updatedCart);
    } else {
      removeFromCart(productId);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const loadCart = () => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  };

  const submitOrder = async () => {
    try {
      // Implement your order submission logic here, e.g., sending the cart data to your backend
      console.log('Order submitted:', cart);
      // For now, let's just simulate a successful order and clear the cart
      setCart([]);
      saveCart([]); // Clear the cart in local storage
      setOrderSuccess(true);
    } catch (error) {
      console.error('Error submitting order:', error);
      // Handle error appropriately (e.g., display an error message)
    }
  };

  useEffect(() => {
    if(orderSuccess){
      setTimeout(() => {
        setOrderSuccess(false);
      }, 3000);
    }
  }, [orderSuccess]);


  return (
    <div className="App">
      <h1>Online Store</h1>
      <div className="products">
        {products.map(product => (
          <div key={product._id} className="product">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart">
            {cart.map(item => (
              <div key={item._id} className="cart-item">
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <p>
                  Quantity:
                  <input
                    type="number"
                    value={item.quantity}
                    min="0"
                    onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                  />
                </p>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            ))}
          </div>
          <h3>Total: ${calculateTotal()}</h3>
          <button onClick={submitOrder}>Submit Order</button>
        </>
      )}
      {orderSuccess && (
        <div className="success-message">
          Order placed successfully!
        </div>
      )}
    </div>
  );
}

export default App;