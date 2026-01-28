import React from 'react';

function CryptoList({ cryptoData }) {
  return (
    <ul>
      {cryptoData.map(crypto => (
        <li key={crypto.id}>
          {crypto.name} ({crypto.symbol.toUpperCase()}): ${crypto.current_price}
        </li>
      ))}
    </ul>
  );
}

export default CryptoList;