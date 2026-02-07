import React from 'react';
import SinglePost from './components/SinglePost';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Blog</h1>
      </header>
      <main>
        <SinglePost />
      </main>
    </div>
  );
}

export default App;