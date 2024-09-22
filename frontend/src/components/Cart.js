import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Card, CardContent, Grid } from '@mui/material';
import './Cart.css'; // Import the external CSS file

const Cart = ({ cart }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/booking');
  };

  return (
    <div className="cart-container">
      <Typography variant="h4" gutterBottom className="cart-title">
        Your Cart
      </Typography>
      <Grid container spacing={3}>
        {cart.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Card className="cart-item">
              <CardContent>
                <Typography variant="h5" className="item-name">
                  {item.name}
                </Typography>
                <Typography variant="body2" className="item-description">
                  {item.description}
                </Typography>
                <Typography variant="h6" className="item-price">
                  ${item.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCheckout}
        className="checkout-button"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Cart;
