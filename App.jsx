import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [refreshRate, setRefreshRate] = useState(5000); // Default refresh rate: 5 seconds

  useEffect(() => {
    // Placeholder for fetching data - replace with actual API call
    const fetchData = () => {
      console.log("Fetching data...");
      // Simulate fetching data and updating state
      setTimeout(() => {
        const newData = [
          { id: 1, value: Math.random() },
          { id: 2, value: Math.random() },
          { id: 3, value: Math.random() },
        ];
        setData(newData);
      }, 1000); // Simulate API delay
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, refreshRate);

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [refreshRate]);

  const handleRefreshRateChange = (event) => {
    setRefreshRate(parseInt(event.target.value, 10));
  };

  return (
    <div className="App">
      <h1>Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            ID: {item.id}, Value: {item.value}
          </li>
        ))}
      </ul>

      <div>
        <label htmlFor="refreshRate">Refresh Rate (ms):</label>
        <input
          type="number"
          id="refreshRate"
          value={refreshRate}
          onChange={handleRefreshRateChange}
        />
      </div>
    </div>
  );
}

export default App;