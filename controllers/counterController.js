let counter = 0;

const getCounter = (req, res) => {
  res.json({ counter });
};

const incrementCounter = (req, res) => {
  counter++;
  res.json({ counter });
};

const decrementCounter = (req, res) => {
  counter--;
  res.json({ counter });
};

const resetCounter = (req, res) => {
  counter = 0;
  res.json({ counter });
};

module.exports = {
  getCounter,
  incrementCounter,
  decrementCounter,
  resetCounter
};