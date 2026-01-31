import React from 'react';
import './CryptoCard.css';

function CryptoCard({ name, symbol, image, price, change24h, changePercentage24h }) {
  return (
    <div className="crypto-card">
      <img src={image} alt={name} className="crypto-image" />
      <h2 className="crypto-name">{name} ({symbol.toUpperCase()})</h2>
      <p className="crypto-price">Price: ${price}</p>
      <p className="crypto-change">24h Change: ${change24h}</p>
      <p className={`crypto-change-percentage ${changePercentage24h > 0 ? 'positive' : 'negative'}`}>
        24h Change Percentage: {changePercentage24h.toFixed(2)}%
      </p>
    </div>
  );
}

export default CryptoCard;