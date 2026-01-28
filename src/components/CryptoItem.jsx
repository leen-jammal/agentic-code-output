import React from 'react';

function CryptoItem({ crypto }) {
  return (
    <div className="crypto-item">
      <h3>{crypto.name} ({crypto.symbol})</h3>
      <p>Price (USD): {crypto.current_price}</p>
      <p>Market Cap: {crypto.market_cap}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default CryptoItem;