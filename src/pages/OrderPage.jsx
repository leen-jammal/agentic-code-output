import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function OrderPage() {
  const { id } = useParams();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Simulate order success after a delay
    const timer = setTimeout(() => {
      setSuccess(true);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <div>
      <h1>Order {id}</h1>
      {success ? (
        <div className="alert alert-success" role="alert">
          Order placed successfully!
        </div>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
}

export default OrderPage;