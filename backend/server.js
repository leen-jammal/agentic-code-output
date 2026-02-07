const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/feedback', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});


const feedbackRouter = require('./routes/feedbackRoutes');
app.use('/feedback', feedbackRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});