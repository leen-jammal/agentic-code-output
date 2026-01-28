import React from 'react';
import './CryptoData.css';

function CryptoData({ crypto }) {
  return (
    <div className="crypto-card">
      <h2>{crypto.name} ({crypto.symbol})</h2>
      <p>Price (USD): {parseFloat(crypto.priceUsd).toFixed(2)}</p>
      <p>Market Cap (USD): {parseFloat(crypto.marketCapUsd).toFixed(2)}</p>
      <p>Change (24hr): {parseFloat(crypto.changePercent24Hr).toFixed(2)}%</p>
    </div>
  );
}

export default CryptoData;