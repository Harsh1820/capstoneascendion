// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const BookingForm = () => {
//   const [serviceId, setServiceId] = useState('');
//   const [providerId, setProviderId] = useState('');
//   const [paymentInfo, setPaymentInfo] = useState({
//     method: 'credit_card',
//     amount: 300,
//     cardNumber: '',
//     expiry: '',
//     cvv: ''
//   });
//   const [status, setStatus] = useState('');

//   const fetchBookingData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/bookings/all');
//       const data = response.data;
//       if (data.length > 0) {
//         const firstBooking = data[0];
//         setServiceId(firstBooking.service._id);
//         setProviderId(firstBooking.provider._id);
//       } else {
//         console.error('No booking data available');
//         setStatus('No booking data available');
//       }
//     } catch (error) {
//       console.error('Error fetching booking data:', error);
//       setStatus('Error fetching booking data');
//     }
//   };

//   const postBooking = async () => {
//     if (!serviceId || !providerId) {
//       console.error('Missing serviceId or providerId');
//       setStatus('Missing serviceId or providerId');
//       return;
//     }

//     const bookingData = {
//       serviceId: serviceId,
//       providerId: providerId,
//       paymentInfo: paymentInfo
//     };

//     try {
//       const response = await axios.post('http://localhost:5000/api/bookings/book', bookingData);
//       setStatus('Booking successful');
//       console.log('Booking successful:', response.data);
//     } catch (error) {
//       console.error('Error posting booking:', error);
//       setStatus('Error posting booking: ' + (error.response ? error.response.data.message : error.message));
//     }
//   };

//   useEffect(() => {
//     fetchBookingData();
//   }, []);

//   return (
//     <div>
//       <h2>Book a Service</h2>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           postBooking();
//         }}
//       >
//         <div>
//           <label htmlFor="serviceId">Service ID:</label>
//           <input
//             type="text"
//             id="serviceId"
//             value={serviceId}
//             onChange={(e) => setServiceId(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="providerId">Provider ID:</label>
//           <input
//             type="text"
//             id="providerId"
//             value={providerId}
//             onChange={(e) => setProviderId(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <h3>Payment Information</h3>
//           <label htmlFor="method">Payment Method:</label>
//           <select
//             id="method"
//             value={paymentInfo.method}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, method: e.target.value })}
//             required
//           >
//             <option value="credit_card">Credit Card</option>
//             <option value="paypal">PayPal</option>
//             {/* Add more payment methods if needed */}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="amount">Amount:</label>
//           <input
//             type="number"
//             id="amount"
//             value={paymentInfo.amount}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, amount: e.target.value })}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="cardNumber">Card Number:</label>
//           <input
//             type="text"
//             id="cardNumber"
//             value={paymentInfo.cardNumber}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="expiry">Expiry Date:</label>
//           <input
//             type="text"
//             id="expiry"
//             value={paymentInfo.expiry}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, expiry: e.target.value })}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="cvv">CVV:</label>
//           <input
//             type="text"
//             id="cvv"
//             value={paymentInfo.cvv}
//             onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
//             required
//           />
//         </div>
//         <button type="submit">Book Now</button>
//       </form>
//       {status && <p>{status}</p>}
//     </div>
//   );
// };

// export default BookingForm;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Button, Card, CardContent, Grid, Select, MenuItem, FormControl, InputLabel, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

const BookingForm = () => {
  const [serviceId, setServiceId] = useState('');
  const [providerId, setProviderId] = useState('');
  const [paymentInfo, setPaymentInfo] = useState({
    method: 'credit_card',
    amount: 300,
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [status, setStatus] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const fetchBookingData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/bookings/all');
      const data = response.data;
      if (data.length > 0) {
        const firstBooking = data[0];
        setServiceId(firstBooking.service._id);
        setProviderId(firstBooking.provider._id);
      } else {
        setStatus('No booking data available');
        setSnackbarOpen(true);
      }
    } catch (error) {
      setStatus('Error fetching booking data');
      setSnackbarOpen(true);
    }
  };

  const postBooking = async () => {
    if (!serviceId || !providerId) {
      setStatus('Missing serviceId or providerId');
      setSnackbarOpen(true);
      return;
    }

    const bookingData = {
      serviceId,
      providerId,
      paymentInfo
    };

    try {
      const response = await axios.post('http://localhost:5000/api/bookings/book', bookingData);
      setStatus('Booking successful');
      setSnackbarOpen(true);
    } catch (error) {
      setStatus('Error posting booking: ' + (error.response ? error.response.data.message : error.message));
      setSnackbarOpen(true);
    }
  };

  useEffect(() => {
    fetchBookingData();
  }, []);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ padding: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundImage: 'url(https://img.freepik.com/free-vector/appointment-booking-with-smartphone-woman_23-2148559138.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '52vw',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            variant="outlined"
            sx={{
              maxWidth: 550,
              margin: '0 auto',
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.9)', // White background for form
              // maxHeight:700
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 3 }}>
                Book a Service
              </Typography>
              
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  postBooking();
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Service ID"
                      value={serviceId}
                      onChange={(e) => setServiceId(e.target.value)}
                      required
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Provider ID"
                      value={providerId}
                      onChange={(e) => setProviderId(e.target.value)}
                      required
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth required sx={{ mb: 2 }}>
                      <InputLabel>Payment Method</InputLabel>
                      <Select
                        value={paymentInfo.method}
                        onChange={(e) => setPaymentInfo({ ...paymentInfo, method: e.target.value })}
                      >
                        <MenuItem value="credit_card">Credit Card</MenuItem>
                        <MenuItem value="paypal">PayPal</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Amount"
                      value={paymentInfo.amount}
                      onChange={(e) => setPaymentInfo({ ...paymentInfo, amount: e.target.value })}
                      required
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Card Number"
                      value={paymentInfo.cardNumber}
                      onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                      required
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Expiry Date (MM/YY)"
                      value={paymentInfo.expiry}
                      onChange={(e) => setPaymentInfo({ ...paymentInfo, expiry: e.target.value })}
                      required
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="CVV"
                      type="password"
                      value={paymentInfo.cvv}
                      onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                      required
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ borderRadius: 2, fontWeight: 'bold' }}>
                      Book Now
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={status.includes('Error') ? 'error' : 'success'}>
          {status}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BookingForm;

