import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"

const Register = () => {
  // State for storing input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., sending data to a server)
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="login-container flex__center app__bg">
      
      <form onSubmit={handleSubmit}>
        <h1>Welcome to GERICHT </h1>
        <div className="input">
        <div className="form-group">
            <label>Fullname</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            </div>
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
            <p className="forgot">Forgot Password?</p>
        </div>
        
        <button className='custom__button'  type="submit">Register</button>
        <p className="register"><Link to="/login">Already have an account? <a>Login</a></Link></p>
      </form>
    </div>
  );
};

export default Register;
