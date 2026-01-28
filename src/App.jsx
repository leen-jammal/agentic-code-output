import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

function App() {
  const [data, setData] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('dataUpdate', (newData) => {
        setData(newData);
      });
    }
  }, [socket]);

  return (
    <div className="App">
      <h1>Real-time Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            ID: {item.id}, Value: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;