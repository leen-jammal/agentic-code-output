import React, { useState, useEffect } from 'react';

function CryptoData() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCryptoData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {cryptoData.map((crypto) => (
        <div key={crypto.id}>
          <h2>{crypto.name}</h2>
          <img src={crypto.image} alt={crypto.name} style={{ width: '50px', height: '50px' }} />
          <p>Symbol: {crypto.symbol}</p>
          <p>Current Price: ${crypto.current_price}</p>
          <p>Market Cap: {crypto.market_cap}</p>
        </div>
      ))}
    </div>
  );
}

export default CryptoData;