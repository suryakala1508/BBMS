import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [donors, setDonors] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleSearch = async () => {
    const query = searchTerm.trim(); // no uppercase needed, backend is case-insensitive
    if (!query) return alert('Please enter a blood type');

    try {
      const res = await fetch(`http://localhost:5000/api/donors/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();

      if (res.ok && Array.isArray(data) && data.length > 0) {
        setDonors(data);
        setShowResults(true);
      } else if (res.ok && data.length === 0) {
        alert('No matching donors found');
      } else {
        alert(data.message || 'Search failed');
      }
    } catch (err) {
      alert('Error connecting to the server');
    }
  };

  const handleCloseResults = () => {
    setShowResults(false);
    setDonors([]);
    setSearchTerm('');
  };

  return (
    <div className="home-container">
      <h1 className="main-heading">Blood Bank Management System</h1>

      <div className="button-group">
        <button className="red-button" onClick={() => navigate('/donor')}>Donor</button>
        <button className="red-button" onClick={() => navigate('/receiver')}>Receiver</button>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for donors by blood group (e.g., A+, O-)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="red-button" onClick={handleSearch}>Search</button>
      </div>

      {showResults && donors.length > 0 && (
        <div className="donor-results-container">
          <div className="donor-results-header">
            <h3>Available Donors</h3>
            <button className="close-button" onClick={handleCloseResults}>Close</button>
          </div>
          <div className="donor-card-list">
            {donors.map((donor) => (
              <div className="donor-card" key={donor._id}>
                <p><strong>Name:</strong> {donor.name}</p>
                <p><strong>Blood Group:</strong> {donor.bloodType}</p>
                <p><strong>Email:</strong> {donor.email}</p>
                <p><strong>Phone:</strong> {donor.phone}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="logout-button-wrapper">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Home;
