// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // For navigation
// import axios from 'axios';
// import { Box, Typography, Card, CardContent, CircularProgress, Grid } from '@mui/material';

// const ProviderDashboard = () => {
//   const [bookings, setBookings] = useState([]);
//   const [status, setStatus] = useState('');
//   const navigate = useNavigate();

//   const providerId = '66ed30bf04c47aa4f3b37a3a'; 

//   const fetchProviderBookings = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/bookings/provider/${providerId}`);
//       setBookings(response.data);
//       setStatus('Bookings fetched successfully');
//     } catch (error) {
//       console.error('Error fetching provider bookings:', error);
//       setStatus('Error fetching provider bookings');
//     }
//   };

//   useEffect(() => {
//     fetchProviderBookings();
//   }, []);

//   const handleBookingClick = (bookingId) => {
//     // Navigate to file upload page with bookingId
//     navigate(`/upload-file/${bookingId}`);
//   };

//   return (
//     <Box sx={{ padding: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Provider Dashboard
//       </Typography>
//       {status && <Typography variant="body1" color={status.includes('Error') ? 'error' : 'success'}>{status}</Typography>}
//       {bookings.length === 0 ? (
//         <Box textAlign="center" mt={4}>
//           <CircularProgress />
//           <Typography variant="body1" mt={2}>Fetching bookings...</Typography>
//         </Box>
//       ) : (
//         <Box>
//           <Typography variant="h5" gutterBottom>
//             Bookings:
//           </Typography>
//           <Grid container spacing={3}>
//             {bookings.map((booking) => (
//               <Grid item xs={12} md={6} lg={4} key={booking._id}>
//                 <Card
//                   variant="outlined"
//                   sx={{ borderRadius: 2, cursor: 'pointer' }}
//                   onClick={() => handleBookingClick(booking._id)} // Click handler to navigate
//                 >
//                   <CardContent>
//                     <Typography variant="h6" color="primary">
//                       {booking.service.name}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {booking.service.description}
//                     </Typography>
//                     <Typography variant="body1" mt={1}>
//                       Price: ${booking.service.price}
//                     </Typography>
//                     <Typography variant="body2">
//                       Booking ID: {booking._id}
//                     </Typography>
//                     <Typography variant="body2">
//                       Provider ID: {booking.provider}
//                     </Typography>
//                     <Typography variant="body2" mt={1}>
//                       Status: <strong>{booking.status}</strong>
//                     </Typography>
//                     <Typography variant="body2" color={booking.isCompleted ? 'success.main' : 'error.main'}>
//                       {booking.isCompleted ? 'Completed' : 'Pending'}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default ProviderDashboard;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Box, Typography, Card, CardContent, CircularProgress, Grid, Chip, Button } from '@mui/material';

// // Main Provider Dashboard component
// const ProviderDashboard = () => {
//   const [bookings, setBookings] = useState([]);
//   const [status, setStatus] = useState('');
//   const navigate = useNavigate();

//   const providerId = '66ed30bf04c47aa4f3b37a3a'; // Replace with actual provider ID

//   const fetchProviderBookings = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/bookings/provider/${providerId}`);
//       setBookings(response.data);
//       setStatus('Bookings fetched successfully');
//     } catch (error) {
//       console.error('Error fetching provider bookings:', error);
//       setStatus('Error fetching provider bookings');
//     }
//   };

//   useEffect(() => {
//     fetchProviderBookings();
//   }, []);

//   const handleBookingClick = (bookingId) => {
//     navigate(`/upload-file/${bookingId}`);
//   };

//   // Conditional status colors
//   const getStatusChipColor = (status) => {
//     switch (status) {
//       case 'Completed':
//         return 'success';
//       case 'Pending':
//         return 'warning';
//       case 'Canceled':
//         return 'error';
//       default:
//         return 'default';
//     }
//   };

//   return (
//     <Box 
//       sx={{ 
//         padding: '40px', 
//         minHeight: '100vh', 
//         // backgroundImage: 'url(https://img.freepik.com/free-vector/gradient-abstract-wireframe-background_23-2149020364.jpg?ga=GA1.1.1284379022.1726814244&semt=ais_hybrid)', 
//         backgroundSize: 'cover', 
//         backgroundPosition: 'center' 
//       }}
//     >
//       <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 4, borderRadius: 2 }}>
//         <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
//           Provider Dashboard
//         </Typography>
        
//         {status && (
//           <Typography
//             variant="body1"
//             sx={{ color: status.includes('Error') ? 'error.main' : 'success.main', textAlign: 'center', mb: 3 }}
//           >
//             {status}
//           </Typography>
//         )}

//         {bookings.length === 0 ? (
//           <Box textAlign="center" mt={4}>
//             <CircularProgress />
//             <Typography variant="body1" mt={2}>
//               Fetching bookings...
//             </Typography>
//           </Box>
//         ) : (
//           <Box>
//             <Typography variant="h5" sx={{ textAlign: 'center', mb: 4 }}>
//               Your Bookings
//             </Typography>
            
//             <Grid container spacing={3}>
//               {bookings.map((booking) => (
//                 <Grid item xs={12} sm={6} md={4} key={booking._id}>
//                   <Card
//                     variant="outlined"
//                     sx={{
//                       borderRadius: 4,
//                       backgroundColor: '#ffffff',
//                       transition: 'transform 0.3s, box-shadow 0.3s',
//                       boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//                       '&:hover': {
//                         transform: 'translateY(-5px)',
//                         boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
//                       },
//                       cursor: 'pointer',
//                     }}
//                     onClick={() => handleBookingClick(booking._id)}
//                   >
//                     <CardContent>
//                       <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>
//                         {booking.service.name}
//                       </Typography>
                      
//                       <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
//                         {booking.service.description}
//                       </Typography>

//                       <Typography variant="body1" sx={{ mb: 1 }}>
//                         Price: <strong>${booking.service.price}</strong>
//                       </Typography>

//                       <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
//                         Booking ID: {booking._id}
//                       </Typography>

//                       <Typography variant="body2" sx={{ mb: 1 }}>
//                         Provider ID: {booking.provider}
//                       </Typography>

//                       <Typography variant="body2" sx={{ mb: 1 }}>
//                         Status: <Chip label={booking.status} color={getStatusChipColor(booking.status)} />
//                       </Typography>

//                       <Typography variant="body2" sx={{ mt: 2 }}>
//                         {booking.isCompleted ? (
//                           <Chip label="Completed" color="success" />
//                         ) : (
//                           <Chip label="Pending" color="warning" />
//                         )}
//                       </Typography>

//                       <Button
//                         variant="contained"
//                         color="primary"
//                         fullWidth
//                         sx={{ mt: 2, backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#115293' } }}
//                         onClick={() => handleBookingClick(booking._id)}
//                       >
//                         Manage Booking
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default ProviderDashboard;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Box, Typography, Card, CardContent, CircularProgress, Grid, Chip, Button } from '@mui/material';
import { logoutUser } from '../store/actions/authActions';

// Main Provider Dashboard component
const ProviderDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [status, setStatus] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Use dispatch to call actions

  const providerId = '66ed2f2b04c47aa4f3b37a2c'; // Replace with actual provider ID

  const fetchProviderBookings = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/bookings/provider/${providerId}`);
      setBookings(response.data);
      setStatus('Bookings fetched successfully');
    } catch (error) {
      console.error('Error fetching provider bookings:', error);
      setStatus('Error fetching provider bookings');
    }
  };

  useEffect(() => {
    fetchProviderBookings();
  }, []);

  const handleBookingClick = (bookingId) => {
    navigate(`/upload-file/${bookingId}`);
  };

  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatch logout action
    navigate('/'); // Redirect to login page
  };

  // Conditional status colors
  const getStatusChipColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Canceled':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box 
      sx={{ 
        padding: '40px', 
        minHeight: '100vh', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <Box sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        padding: 4, 
        borderRadius: 2,
        position: 'relative' // To position the button absolutely
      }}>
        <Button 
          variant="outlined" 
          color="secondary" 
          onClick={handleLogout} 
          sx={{ 
            position: 'absolute', 
            top: 16, 
            right: 16, 
            padding: '8px 16px',
            backgroundColor: '#f50057',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#c51162',
            },
          }} // Styling the logout button
        >
          Logout
        </Button>

        <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
          Provider Dashboard
        </Typography>
        
        {status && (
          <Typography
            variant="body1"
            sx={{ color: status.includes('Error') ? 'error.main' : 'success.main', textAlign: 'center', mb: 3 }}
          >
            {status}
          </Typography>
        )}

        {bookings.length === 0 ? (
          <Box textAlign="center" mt={4}>
            <CircularProgress />
            <Typography variant="body1" mt={2}>
              Fetching bookings...
            </Typography>
          </Box>
        ) : (
          <Box>
            <Typography variant="h5" sx={{ textAlign: 'center', mb: 4 }}>
              Your Bookings
            </Typography>
            
            <Grid container spacing={3}>
              {bookings.map((booking) => (
                <Grid item xs={12} sm={6} md={4} key={booking._id}>
                  <Card
                    variant="outlined"
                    sx={{
                      borderRadius: 4,
                      backgroundColor: '#ffffff',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                      },
                      cursor: 'pointer',
                    }}
                    onClick={() => handleBookingClick(booking._id)}
                  >
                    <CardContent>
                      <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {booking.service.name}
                      </Typography>
                      
                      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                        {booking.service.description}
                      </Typography>

                      <Typography variant="body1" sx={{ mb: 1 }}>
                        Price: <strong>${booking.service.price}</strong>
                      </Typography>

                      <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                        Booking ID: {booking._id}
                      </Typography>

                      <Typography variant="body2" sx={{ mb: 1 }}>
                        Provider ID: {booking.provider}
                      </Typography>

                      <Typography variant="body2" sx={{ mb: 1 }}>
                        Status: <Chip label={booking.status} color={getStatusChipColor(booking.status)} />
                      </Typography>

                      <Typography variant="body2" sx={{ mt: 2 }}>
                        {booking.isCompleted ? (
                          <Chip label="Completed" color="success" />
                        ) : (
                          <Chip label="Pending" color="warning" />
                        )}
                      </Typography>

                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2, backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#115293' } }}
                        onClick={() => handleBookingClick(booking._id)}
                      >
                        Manage Booking
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProviderDashboard;
