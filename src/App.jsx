import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/posts/:id" element={<SinglePost />} />
      </Routes>
    </Router>
  );
}

export default App;