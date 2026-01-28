import React from 'react';
import CryptoItem from './CryptoItem';
import './CryptoList.css';

function CryptoList({ cryptos }) {
  return (
    <div className="crypto-list">
      {cryptos.map(crypto => (
        <CryptoItem
          key={crypto.id}
          name={crypto.name}
          image={crypto.image}
          symbol={crypto.symbol}
          price={crypto.current_price}
          volume={crypto.market_cap}
          priceChange={crypto.price_change_percentage_24h}
        />
      ))}
    </div>
  );
}

export default CryptoList;