import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from backend (example)
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: '#333' }}>My React App</h1>
      <p style={{ fontSize: '16px', color: '#666' }}>Data from backend:</p>
      <ul>
        {data.map((item, index) => (
          <li key={index} style={{ listStyleType: 'none', marginBottom: '5px' }}>
            {item.name} - {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;