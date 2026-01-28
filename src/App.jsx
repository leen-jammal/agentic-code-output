import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is mounted

    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        if (isMounted) {
          setData(json);
        }
      } catch (error) {
        console.error("Could not fetch data:", error);
        if (isMounted) {
          setData([{error: "Failed to load data"}]);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Set the flag to false when the component unmounts
    };
  }, []);

  return (
    <div className="App">
      <h1>Data from API:</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;