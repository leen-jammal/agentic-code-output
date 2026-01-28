import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setUserInfo }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    // Simulate login
    const fakeUser = {
      id: 1,
      name: 'John Doe',
      email: email,
    };
    localStorage.setItem('userInfo', JSON.stringify(fakeUser));
    setUserInfo(fakeUser);
    navigate('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;