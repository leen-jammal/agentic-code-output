import React from 'react';

function CryptoItem({ crypto }) {
  return (
    <div className="crypto-item" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>{crypto.name} ({crypto.symbol})</h3>
      <p>Price: {crypto.priceUsd}</p>
      <p>Market Cap: {crypto.marketCapUsd}</p>
      <p>Change (24h): {crypto.changePercent24Hr}</p>
    </div>
  );
}

export default CryptoItem;