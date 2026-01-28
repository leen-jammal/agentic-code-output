import React, { useState, useEffect } from 'react';

function OrderForm({ updateOrder }) {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = () => {
    if (itemName && itemPrice) {
      const price = parseFloat(itemPrice);
      const newItem = { name: itemName, price: price };
      setItems([...items, newItem]);
      setItemName('');
      setItemPrice('');
    }
  };

  useEffect(() => {
    const newTotal = items.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
    updateOrder({ items: items, total: newTotal });
  }, [items, updateOrder]);

  return (
    <div>
      <h2>Create Order</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Item Price"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <div>
        <h3>Order Items:</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Order Total: ${total}</h3>
      </div>
    </div>
  );
}

export default OrderForm;