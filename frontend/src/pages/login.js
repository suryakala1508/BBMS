import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Login successful!');
        // Optionally save token or user data
        // localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      alert('Error connecting to the server');
    }
  };

  return (
    <div className="auth-container">
      <h2>Blood Bank Management System</h2>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        /><br /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        /><br /><br />
        <button type="submit" className="red-button">Login</button>
      </form>
      <p style={{ marginTop: '10px' }}>
        Don't have an account? <Link to="/" className="auth-link">Signup here</Link>
      </p>
    </div>
  );
}

export default Login;
