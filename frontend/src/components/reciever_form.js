import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './re_css.css';

const ReceiverForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    bloodType: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/receivers/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Receiver submitted successfully');
        setFormData({ name: '', bloodType: '', email: '', phone: '' });
        navigate('/home'); // Navigate to home after successful submission
      } else {
        alert(data.message || 'Failed to submit receiver');
      }
    } catch (err) {
      alert('Error connecting to the server');
    }
  };

  return (
    <div className="receiver-form-container">
      <h2>Receiver Form</h2>
      <form onSubmit={handleSubmit} className="receiver-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <input
          type="text"
          name="bloodType"
          placeholder="Blood Type"
          onChange={handleChange}
          value={formData.bloodType}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          value={formData.phone}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReceiverForm;
