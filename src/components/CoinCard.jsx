import React from 'react';

const CoinCard = ({ coin }) => {
  return (
    <div className="coin-card">
      <h3>{coin.name}</h3>
      <p>Symbol: {coin.symbol}</p>
      <p>Price: {coin.current_price}</p>
      <img src={coin.image} alt={coin.name} />
    </div>
  );
};

export default CoinCard;