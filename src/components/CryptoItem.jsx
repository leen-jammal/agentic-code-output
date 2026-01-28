import React from 'react';

function CryptoItem({ crypto }) {
  return (
    <li>
      {crypto.name} ({crypto.symbol}): ${parseFloat(crypto.priceUsd).toFixed(2)}
    </li>
  );
}

export default CryptoItem;