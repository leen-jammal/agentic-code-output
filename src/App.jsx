import React, { useState, useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    setTimerId(id);

    return () => {
      clearInterval(id);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="App">
      <h1>Current Time: {formattedTime}</h1>
    </div>
  );
}

export default App;