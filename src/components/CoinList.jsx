import React from 'react';
import CoinCard from './CoinCard';
import './CoinList.css';

function CoinList({ coins }) {
  return (
    <div className="coin-list">
      {coins.map(coin => (
        <CoinCard
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          price={coin.current_price}
          marketcap={coin.market_cap}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
        />
      ))}
    </div>
  );
}

export default CoinList;