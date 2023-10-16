import React, { useState } from 'react';
import "./Login.css"

const LoginPage = () => {
  // State for storing input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., sending data to a server)
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="login-container flex__center app__bg">
      <h1>Welcome to GERICHT </h1>
      <form onSubmit={handleSubmit}>
        <div className="input">
            <div className="form-group">
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div className="form-group">
            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
