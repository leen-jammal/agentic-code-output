import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = '/api/movies';
        if (searchTerm) {
          url += `?query=${searchTerm}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {results.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;