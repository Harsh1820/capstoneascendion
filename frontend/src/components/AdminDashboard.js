import React, { useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css'; // Import the CSS file

const AdminDashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'consumer',
    services: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/api/auth/register', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message || 'Error creating user');
    }
  };

  return (
    <div className="admin-dashboard-background"> 
      <div className="dashboard-container">
        <h2>Create New User</h2>
        <form className="user-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <br/>
            <select name="role" value={formData.role} onChange={handleChange} className="select-field">
              <option value="consumer">Consumer</option>
              <option value="provider">Provider</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          {formData.role === 'provider' && (
            <div className="form-group">
              <label>Services:</label>
              <input
                type="text"
                name="services"
                value={formData.services}
                onChange={handleChange}
                placeholder="Enter services comma-separated"
                className="input-field"
              />
            </div>
          )}
          <button type="submit" className="submit-button">Create User</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default AdminDashboard;
