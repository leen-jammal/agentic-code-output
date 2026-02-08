import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(''); // Add URL input state
  const [notFound, setNotFound] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setNotFound(false); // Reset notFound state

    try {
      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 404) {
          setNotFound(true);
          setData(null);
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
      } else {
        const json = await response.json();
        setData(json);
      }
    } catch (e) {
      setError(e.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="App">
      <h1>Data Fetcher</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
        />
        <button type="submit">Fetch Data</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {notFound && <p>Error: Resource not found (404)</p>} {/* Display 404 message */}
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

export default App;