import React from 'react';
import './CryptoItem.css';

function CryptoItem({ image, name, symbol, price, volume, priceChange }) {
  return (
    <div className="crypto-item">
      <img src={image} alt={name} className="crypto-image" />
      <div className="crypto-details">
        <h2 className="crypto-name">{name}</h2>
        <p className="crypto-symbol">{symbol.toUpperCase()}</p>
      </div>
      <div className="crypto-data">
        <p className="crypto-price">Price: ${price}</p>
        <p className="crypto-volume">Market Cap: ${volume.toLocaleString()}</p>
        {priceChange < 0 ? (
          <p className="crypto-percent red">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="crypto-percent green">{priceChange.toFixed(2)}%</p>
        )}
      </div>
    </div>
  );
}

export default CryptoItem;