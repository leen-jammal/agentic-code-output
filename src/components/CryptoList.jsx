import React from 'react';
import CryptoItem from './CryptoItem';

function CryptoList({ cryptos }) {
  return (
    <ul>
      {cryptos.map((crypto) => (
        <CryptoItem key={crypto.id} crypto={crypto} />
      ))}
    </ul>
  );
}

export default CryptoList;