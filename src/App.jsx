import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Responsive Layout</h1>
        <nav className="App-nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <main className="App-main">
        <section className="App-section">
          <h2>Section 1</h2>
          <p>This is the first section of the page.</p>
        </section>
        <section className="App-section">
          <h2>Section 2</h2>
          <p>This is the second section of the page.</p>
        </section>
        <section className="App-section">
          <h2>Section 3</h2>
          <p>This is the third section of the page.</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 My Responsive App</p>
      </footer>
    </div>
  );
}

export default App;