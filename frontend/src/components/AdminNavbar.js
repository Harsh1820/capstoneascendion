import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/actions/authActions';

const AdminNavbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Use dispatch to call actions

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatch logout action
    navigate('/'); // Redirect to login page
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span style={linkStyle}>
            Manage <span style={iconStyle}>▼</span>
          </span>
          {isDropdownOpen && (
            <ul style={dropdownStyle}>
              <li style={dropdownItemStyle}>
                <Link style={linkStyle} to="/create-user">Create User</Link>
              </li>
              <li style={dropdownItemStyle}>
                <Link style={linkStyle} to="/create-category">Manage Categories</Link>
              </li>
              <li style={dropdownItemStyle}>
                <Link style={linkStyle} to="/manage-services">Manage Services</Link>
              </li>
            </ul>
          )}
        </li>
        <li style={liStyle}>
          <button style={logoutButtonStyle} onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

// Styling for components
const navStyle = {
  backgroundColor: '#333',
  padding: '15px 20px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
};

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'flex-start',
};

const liStyle = {
  margin: '0 15px',
  position: 'relative',
};

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  padding: '10px 15px',
  borderRadius: '4px',
  transition: 'background-color 0.3s, color 0.3s',
  fontWeight: '500',
};

const dropdownStyle = {
  position: 'absolute',
  backgroundColor: '#444',
  padding: '10px 0',
  margin: '0',
  borderRadius: '4px',
  zIndex: 1000,
};

const dropdownItemStyle = {
  padding: '8px 15px',
};

const iconStyle = {
  marginLeft: '5px',
  fontSize: '12px',
};

const logoutButtonStyle = {
  backgroundColor: '#f50057',
  color: '#fff',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: '500',
  transition: 'background-color 0.3s',
  marginLeft:970
};

export default AdminNavbar;
