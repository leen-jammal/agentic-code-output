import React from 'react';
import './CoinCard.css';

function CoinCard({ name, image, symbol, price, volume, priceChange, marketcap }) {
  return (
    <div className="coin-card">
      <img src={image} alt={name} className="coin-image" />
      <div className="coin-details">
        <span className="coin-name">{name}</span>
        <span className="coin-symbol">{symbol.toUpperCase()}</span>
      </div>
      <p className="coin-price">Price: ${price}</p>
      <p className="coin-volume">Volume: ${volume.toLocaleString()}</p>
      {priceChange < 0 ? (
        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
      ) : (
        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
      )}

      <p className="coin-marketcap">
        Mkt Cap: ${marketcap.toLocaleString()}
      </p>
    </div>
  );
}

export default CoinCard;