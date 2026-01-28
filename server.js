const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const apiKey = 'YOUR_API_KEY'; // Replace with your actual CoinAPI key

app.get('/crypto-data', async (req, res) => {
  try {
    const symbolId = req.query.symbol_id || 'BTC/USD';
    const apiUrl = `https://rest.coinapi.io/v1/exchangerate/${symbolId}`;

    const response = await axios.get(apiUrl, {
      headers: {
        'X-CoinAPI-Key': apiKey,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    res.status(500).json({ error: 'Failed to fetch crypto data' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));