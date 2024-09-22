// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from '../../store/actions/authActions';
// import { useNavigate } from 'react-router-dom';
// import { Container, TextField, Button, Typography, Alert, Box, CircularProgress, MenuItem, Select, InputLabel, Grid } from '@mui/material';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('consumer');  // consumer, provider, or admin
//   const [services, setServices] = useState('');  // For providers only
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { success, error, loading } = useSelector((state) => state.auth);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userData = { name, email, password, role, services: role === 'provider' ? services.split(',') : [] };
//     dispatch(registerUser(userData));
//   };

//   useEffect(() => {
//     if (success) {
//       navigate('/');
//     }
//   }, [success, navigate]);

//   return (
//     <Container component="main" maxWidth="lg" sx={{ height: '100vh' }}>
//       <Grid container sx={{ height: '50vh' }}>
//         {/* Left side with background image */}
//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{
//             backgroundImage: 'url(https://img.freepik.com/premium-vector/login-screen-vector-illustration-flat-2_764382-63514.jpg?w=740)',
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />

//         {/* Right side with the registration form */}
//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: '0 32px',
//             backgroundColor: '#f7f7f7',
//           }}
//         >
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               backgroundColor: 'rgba(255, 255, 255, 0.8)',
//               padding: '40px',
//               borderRadius: '16px',
//               boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
//               backdropFilter: 'blur(10px)', // Frosted glass effect
//               width: '100%',
//               maxWidth: '400px',
//             }}
//           >
//             <Typography variant="h4" sx={{ fontWeight: '600', marginBottom: '24px', color: '#333' }}>
//               Create an Account
//             </Typography>
//             <Typography variant="body1" sx={{ marginBottom: '32px', color: '#555' }}>
//               Join us by creating your account
//             </Typography>
//             <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="name"
//                 label="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 sx={{
//                   marginBottom: '20px',
//                   '& .MuiInputLabel-root': { color: '#555' },
//                   '& .MuiInputBase-root': { borderRadius: '8px' },
//                 }}
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 sx={{
//                   marginBottom: '20px',
//                   '& .MuiInputLabel-root': { color: '#555' },
//                   '& .MuiInputBase-root': { borderRadius: '8px' },
//                 }}
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="password"
//                 label="Password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 sx={{
//                   marginBottom: '20px',
//                   '& .MuiInputLabel-root': { color: '#555' },
//                   '& .MuiInputBase-root': { borderRadius: '8px' },
//                 }}
//               />

//               <InputLabel id="role-label" sx={{ color: '#555', marginTop: '10px' }}>Role</InputLabel>
//               <Select
//                 labelId="role-label"
//                 id="role"
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 fullWidth
//                 sx={{
//                   marginBottom: '20px',
//                   '& .MuiInputBase-root': { borderRadius: '8px' },
//                 }}
//               >
//                 <MenuItem value="consumer">Consumer</MenuItem>
//                 <MenuItem value="provider">Provider</MenuItem>
//                 <MenuItem value="admin">Admin</MenuItem>
//               </Select>

//               {role === 'provider' && (
//                 <TextField
//                   margin="normal"
//                   fullWidth
//                   id="services"
//                   label="Services (comma-separated)"
//                   value={services}
//                   onChange={(e) => setServices(e.target.value)}
//                   sx={{
//                     marginBottom: '20px',
//                     '& .MuiInputLabel-root': { color: '#555' },
//                     '& .MuiInputBase-root': { borderRadius: '8px' },
//                   }}
//                 />
//               )}

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{
//                   mt: 3,
//                   mb: 2,
//                   backgroundColor: '#1976d2',
//                   padding: '12px',
//                   fontSize: '16px',
//                   fontWeight: 'bold',
//                   textTransform: 'none',
//                   borderRadius: '8px',
//                   '&:hover': {
//                     backgroundColor: '#155a9e',
//                   },
//                 }}
//               >
//                 {loading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
//               </Button>
//               {error && <Alert severity="error" sx={{ marginTop: '20px' }}>{error}</Alert>}
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Register;


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Typography,
  Alert,
  Box,
  CircularProgress,
  MenuItem,
  Select,
  InputLabel,
  Grid,
} from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('consumer');
  const [services, setServices] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, error, loading } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Please verify that you are not a robot.');
      return;
    }

    const userData = {
      name,
      email,
      password,
      role,
      services: role === 'provider' ? services.split(',') : [],
    };
    dispatch(registerUser(userData));
  };

  useEffect(() => {
    if (success) {
      navigate('/');
    }
  }, [success, navigate]);

  return (
    <Container component="main" maxWidth="lg" sx={{ height: '100vh' }}>
      <Grid container sx={{ height: '50vh' }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/premium-vector/login-screen-vector-illustration-flat-2_764382-63514.jpg?w=740)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 32px',
            backgroundColor: '#f7f7f7',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(10px)',
              width: '100%',
              maxWidth: '400px',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: '600', marginBottom: '24px', color: '#333' }}>
              Create an Account
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '32px', color: '#555' }}>
              Join us by creating your account
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  marginBottom: '20px',
                  '& .MuiInputLabel-root': { color: '#555' },
                  '& .MuiInputBase-root': { borderRadius: '8px' },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  marginBottom: '20px',
                  '& .MuiInputLabel-root': { color: '#555' },
                  '& .MuiInputBase-root': { borderRadius: '8px' },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  marginBottom: '20px',
                  '& .MuiInputLabel-root': { color: '#555' },
                  '& .MuiInputBase-root': { borderRadius: '8px' },
                }}
              />

              <InputLabel id="role-label" sx={{ color: '#555', marginTop: '10px' }}>Role</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                fullWidth
                sx={{
                  marginBottom: '20px',
                  '& .MuiInputBase-root': { borderRadius: '8px' },
                }}
              >
                <MenuItem value="consumer">Consumer</MenuItem>
                <MenuItem value="provider">Provider</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>

              {role === 'provider' && (
                <TextField
                  margin="normal"
                  fullWidth
                  id="services"
                  label="Services (comma-separated)"
                  value={services}
                  onChange={(e) => setServices(e.target.value)}
                  sx={{
                    marginBottom: '20px',
                    '& .MuiInputLabel-root': { color: '#555' },
                    '& .MuiInputBase-root': { borderRadius: '8px' },
                  }}
                />
              )}

              {/* reCAPTCHA Component with custom styles */}
              <div style={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }}>
                <ReCAPTCHA
                  sitekey="6LeOw0sqAAAAAETRVZxbi-QJJrobwsLMMs0LLUOi" // Replace with your reCAPTCHA site key
                  onChange={(value) => setCaptchaValue(value)}
                />
              </div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#1976d2',
                  padding: '12px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#155a9e',
                  },
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
              </Button>
              {error && <Alert severity="error" sx={{ marginTop: '20px' }}>{error}</Alert>}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
