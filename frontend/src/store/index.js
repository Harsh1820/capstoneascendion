// import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import {thunk} from 'redux-thunk';

// // Example reducer (replace with your actual reducers)
// const exampleReducer = (state = {}, action) => {
//   switch (action.type) {
//     case 'EXAMPLE_ACTION':
//       return { ...state, data: action.payload };
//     default:
//       return state;
//   }
// };

// // Combine all your reducers here
// const rootReducer = combineReducers({
//   example: exampleReducer,
//   // Add more reducers as needed
// });

// // Manually enable Redux DevTools if available in the browser
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// // Create Redux store with thunk middleware and DevTools support
// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;


import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import {thunk} from 'redux-thunk';  // Correct import for thunk
import { authReducer } from './reducers/authReducer'; // Import authReducer

// Example reducer (replace with your actual reducers)
const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

// Combine all your reducers here
const rootReducer = combineReducers({
  auth: authReducer, // Add authReducer
  example: exampleReducer,
  // Add more reducers as needed
});

// Manually enable Redux DevTools if available in the browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Redux store with thunk middleware and DevTools support
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
