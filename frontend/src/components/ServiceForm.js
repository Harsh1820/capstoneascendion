import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: '400px', // Reduced width for compactness
  margin: '20px auto',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '500px',
  },
}));

const Header = styled(Typography)({
  textAlign: 'center',
  color: '#333',
  marginBottom: '20px',
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '15px',
  '&:hover': {
    animation: 'hoverEffect 0.3s ease-in-out',
  },
  '@keyframes hoverEffect': {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' },
    '100%': { transform: 'scale(1)' },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '10px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#45a049',
    animation: 'hoverEffect 0.3s ease-in-out',
  },
}));

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    providers: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/services/add', formData);
      console.log('Service created:', response.data);
      // Reset the form after submission
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        providers: [],
      });
    } catch (error) {
      console.error('Error creating service:', error);
    }
  };

  return (
    <StyledContainer>
      <Header variant="h5">Add New Service</Header>
      <form onSubmit={handleSubmit}>
        <StyledTextField
          fullWidth
          label="Service Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          size="small" // Smaller input field
        />
        <StyledTextField
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={2} // Reduced row count for compactness
          size="small" // Smaller input field
        />
        <StyledTextField
          fullWidth
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          variant="outlined"
          size="small" // Smaller input field
        />
        <StyledTextField
          fullWidth
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          variant="outlined"
          size="small" // Smaller input field
        />
        <StyledTextField
          fullWidth
          label="Providers (comma-separated IDs)"
          name="providers"
          value={formData.providers}
          onChange={(e) =>
            setFormData({ ...formData, providers: e.target.value.split(',') })
          }
          variant="outlined"
          size="small" // Smaller input field
        />
        <Box textAlign="center">
          <StyledButton type="submit" variant="contained" size="medium">
            Create Service
          </StyledButton>
        </Box>
      </form>
    </StyledContainer>
  );
};

export default ServiceForm;
