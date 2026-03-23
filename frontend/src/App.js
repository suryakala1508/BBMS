import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import DonorPage from './pages/donorpage';
import ReceiverPage from './pages/recieverpage';
import Signup from './pages/signup';
import Login from './pages/login';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donor" element={<DonorPage />} />
        <Route path="/receiver" element={<ReceiverPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
