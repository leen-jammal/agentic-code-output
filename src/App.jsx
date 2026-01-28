import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Placeholder data fetching - replace with actual API call
    const fetchData = async () => {
      setData([
        { id: 1, name: 'Item 1', value: 10 },
        { id: 2, name: 'Item 2', value: 20 },
        { id: 3, name: 'Item 3', value: 30 },
      ]);
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>My Dashboard</h1>
      </header>
      <main className="dashboard-content">
        <section className="data-section">
          <h2>Data Overview</h2>
          <ul className="data-list">
            {data.map(item => (
              <li key={item.id} className="data-item">
                {item.name}: {item.value}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="dashboard-footer">
        <p>&copy; 2024 My Dashboard</p>
      </footer>
    </div>
  );
}

export default App;