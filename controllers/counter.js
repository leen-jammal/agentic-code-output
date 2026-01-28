const Counter = require('../models/Counter');

exports.incrementCounter = async (req, res) => {
    try {
        let counter = await Counter.findOne();

        if (!counter) {
            counter = new Counter({ count: 1 });
        } else {
            counter.count += 1;
        }

        await counter.save();

        res.json({ count: counter.count });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};