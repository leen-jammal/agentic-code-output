import React from 'react';
import Badge from './components/Badge';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My App</h1>
      <Badge count={5} />
    </div>
  );
}

export default App;