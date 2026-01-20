const express = require('express');
 const app = express();
 const port = 3001;

 app.get('/api/data', (req, res) => {
  // Simulate a delay to test loading state
  setTimeout(() => {
  // Simulate an error sometimes
  if (Math.random() < 0.2) {
  return res.status(500).json({ message: 'Simulated server error' });
  }
  res.json({ message: 'Hello from the server!', data: [1, 2, 3] });
  }, 1000);
 });

 app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
 });