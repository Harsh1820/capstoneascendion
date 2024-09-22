// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom'; // To access bookingId from URL
// import axios from 'axios';
// import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';

// const FileUploadAndOtp = () => {
//   const [file, setFile] = useState(null);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [statusMessage, setStatusMessage] = useState('');
//   const { bookingId } = useParams(); // Get bookingId from the route

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file || !phoneNumber) {
//       setStatusMessage('Please upload a file and enter a phone number.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('phoneNumber', phoneNumber);
//     formData.append('bookingId', bookingId); // Send bookingId to backend

//     try {
//       setLoading(true);
//       const response = await axios.post('http://localhost:5000/api/upload-and-send-otp', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       setStatusMessage(response.data.message);
//     } catch (error) {
//       console.error('Error uploading file or sending OTP:', error);
//       setStatusMessage('Error uploading file or sending OTP.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box sx={{ padding: 4 }}>
//       <Typography variant="h4" gutterBottom>Upload File and Send OTP for Booking {bookingId}</Typography>

//       {loading ? (
//         <CircularProgress />
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <Box mb={2}>
//             <input type="file" onChange={handleFileChange} />
//           </Box>
//           <Box mb={2}>
//             <TextField
//               label="Phone Number"
//               value={phoneNumber}
//               onChange={handlePhoneNumberChange}
//               fullWidth
//               required
//             />
//           </Box>
//           <Button type="submit" variant="contained" color="primary">Submit</Button>
//         </form>
//       )}

//       {statusMessage && <Typography mt={2} color="error">{statusMessage}</Typography>}
//     </Box>
//   );
// };

// export default FileUploadAndOtp;




// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom'; // To access bookingId from URL and navigate
// import axios from 'axios';
// import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';

// const FileUploadAndOtp = () => {
//   const [file, setFile] = useState(null);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [statusMessage, setStatusMessage] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const { bookingId } = useParams(); // Get bookingId from the route
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   const handleFileUploadSubmit = async (e) => {
//     e.preventDefault();
//     if (!file || !phoneNumber) {
//       setStatusMessage('Please upload a file and enter a phone number.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('phoneNumber', phoneNumber);
//     formData.append('bookingId', bookingId);

//     try {
//       setLoading(true);
//       const response = await axios.post('http://localhost:5000/api/upload-and-send-otp', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       setStatusMessage(response.data.message);
//       setIsOtpSent(true);
//     } catch (error) {
//       console.error('Error uploading file or sending OTP:', error);
//       setStatusMessage('Error uploading file or sending OTP.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     if (!otp) {
//       setStatusMessage('Please enter the OTP.');
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await axios.post('http://localhost:5000/api/verify-otp', {
//         phoneNumber,
//         otp,
//       });

//       setStatusMessage(response.data.message);
//       console.log(response)
//       // Navigate back to the provider dashboard after successful verification
//       if (response.status === 200) {
//         navigate('/provider'); // Adjust the path as needed
//       }
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//       setStatusMessage('Error verifying OTP. Please check the OTP and try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box sx={{ padding: 4 }}>
//       <Typography variant="h4" gutterBottom>Upload File and Send OTP for Booking {bookingId}</Typography>

//       {loading ? (
//         <CircularProgress />
//       ) : (
//         <form onSubmit={handleFileUploadSubmit}>
//           <Box mb={2}>
//             <input type="file" onChange={handleFileChange} />
//           </Box>
//           <Box mb={2}>
//             <TextField
//               label="Phone Number"
//               value={phoneNumber}
//               onChange={handlePhoneNumberChange}
//               fullWidth
//               required
//             />
//           </Box>
//           <Button type="submit" variant="contained" color="primary">Submit</Button>
//         </form>
//       )}

//       {statusMessage && <Typography mt={2} color="error">{statusMessage}</Typography>}

//       {isOtpSent && (
//         <form onSubmit={handleOtpSubmit} style={{ marginTop: '20px' }}>
//           <Box mb={2}>
//             <TextField
//               label="Enter OTP"
//               value={otp}
//               onChange={handleOtpChange}
//               fullWidth
//               required
//             />
//           </Box>
//           <Button type="submit" variant="contained" color="secondary">Verify OTP</Button>
//         </form>
//       )}
//     </Box>
//   );
// };

// export default FileUploadAndOtp;


import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
import './FileUploadAndOtp.css'; // Add a separate CSS file

const FileUploadAndOtp = () => {
  const [file, setFile] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const { bookingId } = useParams(); 
  const navigate = useNavigate(); 

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleFileUploadSubmit = async (e) => {
    e.preventDefault();
    if (!file || !phoneNumber) {
      setStatusMessage('Please upload a file and enter a phone number.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('phoneNumber', phoneNumber);
    formData.append('bookingId', bookingId); 

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/upload-and-send-otp', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setStatusMessage(response.data.message);
      setIsOtpSent(true);
    } catch (error) {
      console.error('Error uploading file or sending OTP:', error);
      setStatusMessage('Error uploading file or sending OTP.');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      setStatusMessage('Please enter the OTP.');
      return;
    }

    try {
      setLoading(true);
      const otpResponse = await axios.post('http://localhost:5000/api/verify-otp', {
        phoneNumber,
        otp,
      });

      setStatusMessage(otpResponse.data.message);

      if (otpResponse.status === 200) {
        await axios.post('http://localhost:5000/api/update-status', {
          bookingId,
          status: 'Completed'
        });

        navigate('/provider'); 
      }
    } catch (error) {
      console.error('Error verifying OTP or updating booking status:', error);
      setStatusMessage('Error verifying OTP or updating booking status. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="file-upload-otp-wrapper">
      {/* Image section */}
      <Box className="image-section">
        <img src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5488.jpg?size=626&ext=jpg&ga=GA1.1.1284379022.1726814244&semt=ais_hybrid" alt="Two-factor authentication illustration" />
      </Box>

      {/* Form section */}
      <Box className="file-upload-otp-container">
        <Typography variant="h4" gutterBottom className="title">
          Upload File and Send OTP for Booking {bookingId}
        </Typography>

        {loading ? (
          <CircularProgress className="loading-spinner" />
        ) : (
          <form onSubmit={handleFileUploadSubmit} className="form-container">
            <Box className="file-input-wrapper">
              <input type="file" onChange={handleFileChange} className="file-input" />
            </Box>
            <Box mb={2}>
              <TextField
                label="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                fullWidth
                required
                className="input-field"
              />
            </Box>
            <Button type="submit" variant="contained" color="primary" className="submit-button">
              Submit
            </Button>
          </form>
        )}

        {statusMessage && <Typography mt={2} color="error" className="status-message">{statusMessage}</Typography>}

        {isOtpSent && (
          <form onSubmit={handleOtpSubmit} style={{ marginTop: '20px' }}>
            <Box mb={2}>
              <TextField
                label="Enter OTP"
                value={otp}
                onChange={handleOtpChange}
                fullWidth
                required
                className="input-field"
              />
            </Box>
            <Button type="submit" variant="contained" color="secondary" className="otp-button">
              Verify OTP
            </Button>
          </form>
        )}
      </Box>
    </Box>
  );
};

export default FileUploadAndOtp;
