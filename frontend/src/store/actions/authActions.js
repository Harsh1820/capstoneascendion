// import axios from 'axios';

// export const loginUser = (userData) => async (dispatch) => {
//   try {
//     const res = await axios.post('http://localhost:5000/api/auth/login', userData);
//     dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
//   } catch (error) {
//     dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
//   }
// };

// export const registerUser = (userData) => async (dispatch) => {
//   try {
//     const res = await axios.post('http://localhost:5000/api/auth/register', userData);
//     dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
//   } catch (error) {
//     dispatch({ type: 'REGISTER_FAIL', payload: error.response.data.message });
//   }
// };


import axios from 'axios';

// Action for logging in a user
export const loginUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', userData);
    console.log('API Response:', res.data);
    
    // Save the token in localStorage
    localStorage.setItem('token', res.data.token);

    // Dispatch the success action
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
  }
};

// Action for registering a user
export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/api/auth/register', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAIL', payload: error.response.data.message });
  }
};

export const logoutUser = () => (dispatch) => {
  // Remove the token from localStorage
  localStorage.removeItem('token');

  // Dispatch logout action
  dispatch({ type: 'LOGOUT' });
};

