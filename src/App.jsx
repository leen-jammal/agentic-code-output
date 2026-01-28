import React, { useState, useEffect } from 'react';
import './App.css';
import StockData from './components/StockData';
import Header from './components/Header';
import Footer from './components/Footer';
import StockList from './components/StockList';
import StockSearch from './components/StockSearch';
import HistoricalChart from './components/HistoricalChart';

function App() {
  const [stockSymbol, setStockSymbol] = useState('AAPL');
  const [historicalData, setHistoricalData] = useState([]);

  const handleStockSelect = (symbol) => {
    setStockSymbol(symbol);
  };

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data['Time Series (Daily)']) {
          const formattedData = Object.entries(data['Time Series (Daily)']).map(([date, values]) => ({
            date,
            open: parseFloat(values['1. open']),
            high: parseFloat(values['2. high']),
            low: parseFloat(values['3. low']),
            close: parseFloat(values['4. close']),
            volume: parseInt(values['6. volume']),
          })).reverse();
          setHistoricalData(formattedData);
        } else {
          console.error("Error fetching historical data:", data['Error Message']);
          setHistoricalData([]);
        }
      } catch (error) {
        console.error("Error fetching historical data:", error);
        setHistoricalData([]);
      }
    };

    fetchHistoricalData();
  }, [stockSymbol]);

  return (
    <div className="App">
      <Header />
      <StockSearch onStockSelect={handleStockSelect} />
      <StockData symbol={stockSymbol} />
      <HistoricalChart historicalData={historicalData} symbol={stockSymbol} />
      <StockList onStockSelect={handleStockSelect} />
      <Footer />
    </div>
  );
}

export default App;