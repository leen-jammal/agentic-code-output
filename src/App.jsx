import React, { useState, useEffect } from 'react';
import CryptoList from './components/CryptoList';
import './App.css';

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
      const data = await response.json();
      setCryptos(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCryptos = cryptos.filter(crypto =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Crypto Tracker</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search a crypto"
          className="search-input"
          onChange={handleChange}
        />
      </div>
      <CryptoList cryptos={filteredCryptos} />
    </div>
  );
}

export default App;