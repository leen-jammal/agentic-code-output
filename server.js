const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});