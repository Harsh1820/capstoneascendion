// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../store/actions/authActions';
// import { useNavigate } from 'react-router-dom';
// import { Container, TextField, Button, Typography, Alert, Box, CircularProgress } from '@mui/material';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { token, error, loading } = useSelector((state) => state.auth);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser({ email, password }));
//   };

//   useEffect(() => {
//     if (token) {
//       // Redirect to the Category component after successful login
//       navigate('/categories');
//     }
//   }, [token, navigate]);

//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           marginTop: '8px',
//           padding: '16px',
//           borderRadius: '8px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         }}
//       >
//         <Typography variant="h5">Login</Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
//           </Button>
//           {error && <Alert severity="error">{error}</Alert>}
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Login;


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/actions/authActions';
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { Container, TextField, Button, Typography, Alert, Box, CircularProgress, Grid } from '@mui/material';
import backgroundImage from '../../assets/background.jpg'; // Path to your background image
import { Formik } from 'formik';
import * as Yup from 'yup';
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, error, loading } = useSelector((state) => state.auth);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values) => {
    dispatch(loginUser({ email: values.email, password: values.password }));
  };

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const userRole = decodedToken.role;
      if (userRole === 'admin') {
        navigate('/admin');
      } else if (userRole === 'provider') {
        navigate('/provider');
      } else {
        navigate('/categories');
      }
    }
  }, [token, navigate]);

  return (
    <Container component="main" maxWidth="lg" sx={{ height: '100vh' }}>
      <Grid container sx={{ height: '100vh' }}>
        {/* Left side with background image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Right side with the login form */}
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
              Welcome Back
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '32px', color: '#555' }}>
              Please login to your account
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
                <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
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
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    sx={{
                      marginBottom: '20px',
                      '& .MuiInputLabel-root': { color: '#555' },
                      '& .MuiInputBase-root': { borderRadius: '8px' },
                    }}
                  />
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
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
                  </Button>
                  {error && <Alert severity="error" sx={{ marginTop: '20px' }}>{error}</Alert>}
                </Box>
              )}
            </Formik>

            {/* Hyperlink for new users */}
            <Typography variant="body2" sx={{ marginTop: '16px', color: '#555' }}>
              New user?{' '}
              <Link to="/register" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 'bold' }}>
                Register here
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
