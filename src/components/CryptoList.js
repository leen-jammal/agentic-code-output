import React, { useState, useEffect } from 'react';

function CryptoList() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    // Fetch data from API (replace with your actual API endpoint)
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => setCoins(data));
  }, []);

  return (
    <div>
      <h2>Top 20 Cryptocurrencies</h2>
      <ul>
        {coins.map(coin => (
          <li key={coin.id}>
            <img src={coin.image} alt={coin.name} width="20" />
            {coin.name} ({coin.symbol.toUpperCase()}): ${coin.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CryptoList;