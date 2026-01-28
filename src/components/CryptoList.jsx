import React from 'react';
import CryptoItem from './CryptoItem';

function CryptoList({ cryptoData }) {
  return (
    <ul>
      {cryptoData.map(crypto => (
        <CryptoItem key={crypto.id} crypto={crypto} />
      ))}
    </ul>
  );
}

export default CryptoList;