import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CryptoList.css';

function CryptoList() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="crypto-app">
      <div className="crypto-search">
        <h1 className="crypto-text">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="crypto-input"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <div className="crypto-container" key={coin.id}>
            <div className="crypto-row">
              <div className="crypto">
                <img src={coin.image} alt="crypto" />
                <h1>{coin.name}</h1>
                <p className="crypto-symbol">{coin.symbol}</p>
              </div>
              <div className="crypto-data">
                <p className="crypto-price">${coin.current_price.toLocaleString()}</p>
                <p className="crypto-volume">${coin.market_cap.toLocaleString()}</p>
                {coin.price_change_percentage_24h < 0 ? (
                  <p className="crypto-percent red">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </p>
                ) : (
                  <p className="crypto-percent green">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </p>
                )}
                <p className="crypto-marketcap">
                  Mkt Cap: ${coin.market_cap.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CryptoList;