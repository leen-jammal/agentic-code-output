const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json());

// Historical data API endpoint
app.get('/api/historical/:symbol/:date', async (req, res) => {
  const { symbol, date } = req.params;
  const apiKey = process.env.HISTORICAL_API_KEY || 'YOUR_HISTORICAL_API_KEY'; // Replace with your actual API key or environment variable

  try {
    const response = await axios.get(`https://api.polygon.io/v1/open-close/${symbol}/${date}?adjusted=true&apiKey=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching historical data:', error);
    res.status(500).json({ error: 'Failed to fetch historical data' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));