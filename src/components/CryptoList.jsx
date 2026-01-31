import React from 'react';

function CryptoList({ cryptoData }) {
  return (
    <div>
      {cryptoData.map(crypto => (
        <div key={crypto.id}>
          <img src={crypto.image} alt={crypto.name} style={{ width: '20px', height: '20px' }} />
          <span>{crypto.name}</span>
          <span>{crypto.current_price}</span>
        </div>
      ))}
    </div>
  );
}

export default CryptoList;