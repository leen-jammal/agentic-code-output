import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // You can add some initial data fetching or setup here
    setData([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ]);
  }, []);

  return (
    <div className="App">
      <h1>My React App</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;