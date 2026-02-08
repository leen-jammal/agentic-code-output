import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="App">
      <h1>My Blog</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
}

export default App;