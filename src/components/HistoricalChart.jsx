import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './HistoricalChart.css';

function HistoricalChart({ historicalData, symbol }) {
  if (!historicalData || historicalData.length === 0) {
    return <div className="historical-chart">Loading historical data...</div>;
  }

  return (
    <div className="historical-chart-container">
      <h2>Historical Data for {symbol}</h2>
      <ResponsiveContainer width="95%" height={400}>
        <LineChart data={historicalData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['dataMin', 'dataMax']} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="close" stroke="#8884d8" name="Close Price" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HistoricalChart;