import React from 'react';

function CryptoItem({ crypto }) {
  return (
    <div className="crypto-item">
      <h3>{crypto.name} ({crypto.symbol})</h3>
      <p>Price: ${crypto.current_price}</p>
      <p>Market Cap: ${crypto.market_cap}</p>
      <p>24h Change: {crypto.price_change_percentage_24h}%</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default CryptoItem;