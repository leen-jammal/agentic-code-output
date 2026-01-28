import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.slingacademy.com/v1/sample-data/photos?limit=30')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setImages(data.photos);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const goToPreviousImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex(nextIndex => (nextIndex < images.length - 1 ? nextIndex + 1 : 0));
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <div className="image-container">
        <button onClick={goToPreviousImage}>Previous</button>
        <img src={images[currentImageIndex].url} alt={images[currentImageIndex].title} />
        <button onClick={goToNextImage} disabled={isLoading}>Next</button>
      </div>
    </div>
  );
}

export default App;