import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage({ setUserInfo }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
        // Simulate register and login
        const fakeUser = {
            id: 1,
            name: name,
            email: email,
        };
        localStorage.setItem('userInfo', JSON.stringify(fakeUser));
        setUserInfo(fakeUser);
        navigate('/');
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;