import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/message')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setMessage(data.message))
      .catch(error => {
        console.error("Fetching failed:", error);
        setError("Failed to load message. Please try again later.");
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {error && <div className="error">{error}</div>}
        {message ? <p>{message}</p> : <p>Loading message...</p>}
      </header>
    </div>
  );
}

export default App;