import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Placeholder for data fetching
    setData([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ]);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
      </header>
      <main className="App-main">
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 My App</p>
      </footer>
    </div>
  );
}

export default App;