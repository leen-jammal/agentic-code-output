// controllers/dataController.js
const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];

const getData = (req, res) => {
    try {
        // Simulate potential error
        // throw new Error('Simulated error in data retrieval');

        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: 'Failed to retrieve data' });
    }
};


module.exports = {
    getData
};