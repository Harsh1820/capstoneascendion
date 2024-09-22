import React, { useState } from 'react';
import axios from 'axios';

const CreateCategory = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Assume token is stored in localStorage
      const response = await axios.post('http://localhost:5000/categories/add', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage(response.data.message);
      setError('');
      setFormData({ name: '', description: '' }); // Reset the form
    } catch (error) {
      setError(error.response?.data?.message || 'Error adding category');
      setMessage('');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2>Create New Category</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputContainerStyle}>
            <label style={labelStyle}>Category Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={inputContainerStyle}>
            <label style={labelStyle}>Description:</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>Create Category</button>
        </form>
        {message && <p style={successStyle}>{message}</p>}
        {error && <p style={errorStyle}>{error}</p>}
      </div>
    </div>
  );
};

// Styling
const containerStyle = {
  minHeight: '100vh',
  // backgroundImage: 'url("https://img.freepik.com/free-vector/gradient-geometric-shapes-dark-background_23-2148423542.jpg?ga=GA1.1.1284379022.1726814244&semt=ais_hybrid")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const formContainerStyle = {
  maxWidth: '500px',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputContainerStyle = {
  marginBottom: '15px',
};

const labelStyle = {
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '85%',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#5cb85c',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
  width: '92%',
};

const successStyle = {
  color: '#5cb85c',
  marginTop: '10px',
};

const errorStyle = {
  color: '#d9534f',
  marginTop: '10px',
};

export default CreateCategory;
