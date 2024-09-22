// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store'; // Your Redux store
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import Category from './components/Category'; // The Category component
// import ServicesByCategory from './components/ServicesByCategory';
// import Cart from './components/Cart'; // The Cart component
// import CartIcon from './components/CartIcon'; // The CartIcon component
// import AdminDashboard from './components/AdminDashboard';
// import ProviderDashboard from './components/ProviderDashboard';
// import BookingForm from './components/BookingForm'; // The Booking Page component
// import FileUploadAndOtp from  './components/FileUploadAndOtp'


// function App() {
//   const [cart, setCart] = useState([]);

//   return (
//     <Provider store={store}>
//       <Router>
//         <header style={{ marginLeft: '1200px' }}> {/* Apply margin-left here */}
//           <CartIcon cart={cart} />
//         </header>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/categories" element={<Category />} />
//           <Route path="/services/category/:categoryId" element={<ServicesByCategory cart={cart} setCart={setCart} />} />
//           <Route path="/cart" element={<Cart cart={cart} />} /> {/* Route for Cart */}
//           <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/provider" element={<ProviderDashboard />} />
//         <Route path="/booking" element={<BookingForm cart={cart} setCart={setCart} />} /> {/* Route for Booking */}
//         <Route path="/upload-file/:bookingId" element={<FileUploadAndOtp />} /> {/* Route for file upload */}

        

//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store'; // Your Redux store
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import Category from './components/Category'; // The Category component
// import ServicesByCategory from './components/ServicesByCategory';
// import Cart from './components/Cart'; // The Cart component
// import CartIcon from './components/CartIcon'; // The CartIcon component
// import AdminDashboard from './components/AdminDashboard'; // Import AdminDashboard
// import ProviderDashboard from './components/ProviderDashboard';
// import BookingForm from './components/BookingForm'; // The Booking Page component
// import FileUploadAndOtp from './components/FileUploadAndOtp';
// import AdminNavbar from './components/AdminNavbar'; // Import AdminNavbar
// import CreateCategory from './components/CreateCategory'; // Admin-only component
// import Home from './components/Home';

// function App() {
//   const [cart, setCart] = useState([]);
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const userRole = JSON.parse(atob(token.split('.')[1])).role;
//       setIsAdmin(userRole === 'admin');
//     }
//   }, []);

//   return (
//     <Provider store={store}>
//       <Router>
//         <header style={{ marginLeft: '1200px' }}>
//           <CartIcon cart={cart} />
//         </header>

//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/categories" element={<Category />} />
//           <Route path="/services/category/:categoryId" element={<ServicesByCategory cart={cart} setCart={setCart} />} />
//           <Route path="/cart" element={<Cart cart={cart} />} /> {/* Route for Cart */}

//           {/* Admin-specific route */}
//           <Route
//             path="/admin"
//             element={
//               isAdmin ? (
//                 <>
//                   <AdminNavbar /> {/* Show Admin Navbar */}
//                   <AdminDashboard /> {/* Admin Dashboard for creating users */}
//                 </>
//               ) : (
//                 <Navigate to="/" /> // Redirect to login if not admin
//               )
//             }
//           />

//           {/* Route for creating a user */}
//           <Route
//             path="/create-user"
//             element={
//               isAdmin ? (
//                 <>
//                   <AdminNavbar />
//                   <AdminDashboard /> {/* Use AdminDashboard for user creation */}
//                 </>
//               ) : (
//                 <Navigate to="/" />
//               )
//             }
//           />

//           {/* Other admin routes */}
//           <Route
//             path="/create-category"
//             element={
//               isAdmin ? (
//                 <>
//                   <AdminNavbar />
//                   <CreateCategory />
//                 </>
//               ) : (
//                 <Navigate to="/" />
//               )
//             }
//           />

//           <Route path="/provider" element={<ProviderDashboard />} />
//           <Route path="/booking" element={<BookingForm cart={cart} setCart={setCart} />} /> {/* Route for Booking */}
//           <Route path="/upload-file/:bookingId" element={<FileUploadAndOtp />} /> {/* Route for file upload */}
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; // Your Redux store
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Category from './components/Category'; // The Category component
import ServicesByCategory from './components/ServicesByCategory'; // The component to show CartIcon
import Cart from './components/Cart'; // The Cart component
import CartIcon from './components/CartIcon'; // The CartIcon component
import AdminDashboard from './components/AdminDashboard'; // AdminDashboard component
import ProviderDashboard from './components/ProviderDashboard'; // ProviderDashboard component
import BookingForm from './components/BookingForm'; // Booking Form component
import FileUploadAndOtp from './components/FileUploadAndOtp'; // File Upload and OTP component
import AdminNavbar from './components/AdminNavbar'; // Admin Navbar component
import CreateCategory from './components/CreateCategory'; // Admin-specific component
import ServiceForm from './components/ServiceForm'; // Service Form component

function App() {
  const [cart, setCart] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userRole = JSON.parse(atob(token.split('.')[1])).role;
      setIsAdmin(userRole === 'admin');
    }
  }, []);

  useEffect(() => {
    setCurrentRoute(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <Provider store={store}>
      <Router>
        <header style={{ marginLeft: '1200px' }}>
          {/* Conditionally render CartIcon only in ServicesByCategory route */}
          {currentRoute.includes('/services/category') && <CartIcon cart={cart} />}
        </header>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/services/category/:categoryId" element={<ServicesByCategory cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />

          {/* Admin-specific routes */}
          <Route
            path="/admin"
            element={
              isAdmin ? (
                <>
                  <AdminNavbar />
                  <AdminDashboard />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/create-user"
            element={
              isAdmin ? (
                <>
                  <AdminNavbar />
                  <AdminDashboard />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/create-category"
            element={
              isAdmin ? (
                <>
                  <AdminNavbar />
                  <CreateCategory />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />

          {/* Service Management Route */}
          <Route
            path="/manage-services"
            element={
              isAdmin ? (
                <>
                  <AdminNavbar />
                  <ServiceForm />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />

          {/* Other routes */}
          <Route path="/provider" element={<ProviderDashboard />} />
          <Route path="/booking" element={<BookingForm cart={cart} setCart={setCart} />} />
          <Route path="/upload-file/:bookingId" element={<FileUploadAndOtp />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
