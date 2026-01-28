import React, { useState } from 'react';

function StockSearch({ onSearch }) {
    const [symbol, setSymbol] = useState('');

    const handleChange = (event) => {
        setSymbol(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(symbol);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Stock Symbol"
                value={symbol}
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default StockSearch;