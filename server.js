const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const axios = require('axios');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", // Allow all origins
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Socket.IO logic to emit crypto data
io.on('connection', (socket) => {
    console.log('New client connected');

    const fetchCryptoData = async () => {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
            socket.emit('cryptoData', response.data);
        } catch (error) {
            console.error("Error fetching crypto data:", error);
            socket.emit('cryptoDataError', 'Failed to fetch crypto data');
        }
    };

    // Fetch data immediately when a client connects
    fetchCryptoData();

    // Fetch data every 5 seconds
    const intervalId = setInterval(fetchCryptoData, 5000);

    socket.on('disconnect', () => {
        console.log('Client disconnected');
        clearInterval(intervalId); // Clear the interval when a client disconnects
    });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));