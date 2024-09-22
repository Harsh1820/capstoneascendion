import React from 'react';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const CartIcon = ({ cart }) => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <IconButton color="inherit" onClick={handleCartClick}>
      <Badge badgeContent={cart.length} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartIcon;
