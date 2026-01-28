import React, { useState, useEffect } from 'react';

function CryptoList() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    // Fetch crypto data here (replace with actual API call)
    const fetchData = async () => {
      try {
        // Simulate API call
        const mockData = [
          { id: 1, name: 'Bitcoin', symbol: 'BTC', price: 50000 },
          { id: 2, name: 'Ethereum', symbol: 'ETH', price: 3000 },
          { id: 3, name: 'Litecoin', symbol: 'LTC', price: 200 },
        ];
        setCryptoData(mockData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Crypto List</h2>
      <ul>
        {cryptoData.map(crypto => (
          <li key={crypto.id}>
            {crypto.name} ({crypto.symbol}): ${crypto.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CryptoList;