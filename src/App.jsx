import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cryptoList, setCryptoList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCryptoList, setFilteredCryptoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        setCryptoList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterCrypto = () => {
      if (searchQuery) {
        const filteredList = cryptoList.filter(crypto =>
          crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCryptoList(filteredList);
      } else {
        setFilteredCryptoList(cryptoList);
      }
    };

    filterCrypto();
  }, [searchQuery, cryptoList]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="App">
      <h1>Crypto Tracker</h1>
      <input
        type="text"
        placeholder="Search for a cryptocurrency..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul>
        {filteredCryptoList.map(crypto => (
          <li key={crypto.id}>
            {crypto.name} ({crypto.symbol.toUpperCase()}) - ${crypto.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;