import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // You can add any initial setup or data fetching here
    setData(['Item 1', 'Item 2', 'Item 3']);
  }, []);

  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;