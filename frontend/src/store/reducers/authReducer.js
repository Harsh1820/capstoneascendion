// const initialState = {
//   token: null,
//   user: null,
//   error: null,
// };

// export const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'LOGIN_SUCCESS':
//     case 'REGISTER_SUCCESS':
//       return { ...state, token: action.payload.token, user: action.payload.user, error: null };
//     case 'LOGIN_FAIL':
//     case 'REGISTER_FAIL':
//       return { ...state, error: action.payload };
//     default:
//       return state;
//   }
// };


const initialState = {
  token: null,
  user: null,
  error: null,
  success: false, // Added success flag
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return { ...state, token: action.payload.token, user: action.payload.user, error: null, success: true };
    case 'LOGIN_FAIL':
    case 'REGISTER_FAIL':
      return { ...state, error: action.payload, success: false };
    default:
      return state;
  }
};
