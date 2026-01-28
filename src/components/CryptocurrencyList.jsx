import React from 'react';

function CryptocurrencyList({ cryptocurrencies }) {
  return (
    <ul>
      {cryptocurrencies.map(crypto => (
        <li key={crypto.id}>
          {crypto.name} ({crypto.symbol}): ${crypto.current_price}
        </li>
      ))}
    </ul>
  );
}

export default CryptocurrencyList;