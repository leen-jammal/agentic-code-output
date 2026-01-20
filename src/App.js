import React, { useState, useEffect } from 'react';
 import axios from 'axios';

 function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchData = async () => {
  setLoading(true);
  setError(null); // Reset error state

  try {
  const response = await axios.get('/api/data');
  setData(response.data);
  } catch (err) {
  setError(err.message || 'An unexpected error occurred.');
  } finally {
  setLoading(false);
  }
  };

  fetchData();
  }, []);

  if (loading) {
  return <div>Loading...</div>;
  }

  if (error) {
  return <div>Error: {error}</div>;
  }

  return (
  <div>
  {data ? (
  <pre>{JSON.stringify(data, null, 2)}</pre>
  ) : (
  <div>No data to display.</div>
  )}
  </div>
  );
 }

 export default App;