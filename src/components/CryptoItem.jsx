import React from 'react';

function CryptoItem({ name, symbol, price, change }) {
  const changeColor = change >= 0 ? 'green' : 'red';

  return (
    <li style={{ 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      borderBottom: '1px solid #eee',
    }}>
      <span>{name} ({symbol})</span>
      <span>${price}</span>
      <span style={{ color: changeColor }}>{change}%</span>
    </li>
  );
}

export default CryptoItem;