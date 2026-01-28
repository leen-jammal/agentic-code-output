import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem('paymentMethod', paymentMethod);
    navigate('/placeorder');
  };

  return (
    <div>
      <h1>Payment Method</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="paypal"
              value="PayPal"
              checked={paymentMethod === 'PayPal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="form-check-label" htmlFor="paypal">
              PayPal
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Continue</button>
      </form>
    </div>
  );
}

export default PaymentPage;