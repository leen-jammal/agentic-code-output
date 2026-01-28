import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function StockChart({ stockData, symbol }) {
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `Historical Stock Data for ${symbol}`,
            },
        },
    };

    if (!stockData || !stockData.labels || !stockData.datasets) {
        return <p>Loading chart...</p>;
    }


    return <Line options={options} data={stockData} />;
}

export default StockChart;