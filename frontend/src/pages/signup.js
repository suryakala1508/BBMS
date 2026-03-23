import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Signup successful!');
        navigate('/login');
      } else {
        const data = await res.json();
        alert(data.message || 'Signup failed');
      }
    } catch (err) {
      alert('Error connecting to the server');
    }
  };

  return (
    <div className="auth-container">
      <h2>Blood Bank Management System</h2>
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
        /><br /><br />
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
        <button type="submit" className="red-button">Signup</button>
      </form>
      <p style={{ marginTop: '10px' }}>
        Already have an account? <Link to="/login" className="auth-link">Login here</Link>
      </p>
    </div>
  );
}

export default Signup;
