const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
    console.error("OPENAI_API_KEY environment variable not set. Please set it in your .env file.");
    process.exit(1);
}

app.get('/api/apikey', (req, res) => {
    res.json({ apiKey: apiKey });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));