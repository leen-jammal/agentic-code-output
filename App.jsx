import React, { useState, useEffect } from 'react';

function App() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div className="App">
      <h1>Crypto Tracker</h1>
      {cryptoData.map(crypto => (
        <div key={crypto.id}>
          <p>{crypto.name}: {crypto.current_price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;