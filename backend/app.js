var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var dotenv = require('dotenv');
var mongoose = require('mongoose');

// Load environment variables
dotenv.config();

// MongoDB Connection
let mongoConnUrl = process.env.MONGO_URI || "mongodb://localhost:27017/service-booking-app";
mongoose.connect(mongoConnUrl);

let db = mongoose.connection;
db.on('error', function () {
  console.log('Error in connecting to MongoDB');
});
db.once('open', function () {
  console.log('MongoDB Connected Successfully');
});


const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const otpRoutes = require('./routes/otpRoutes');
const fileRoutes = require('./routes/fileRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const bookingRoutes = require('./routes/bookingRoutes');  // Booking routes
const ratingRoutes = require('./routes/ratingRoutes'); 






var app = express();

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors()); 
// app.js
const { authMiddleware } = require('./middleware/authMiddleware');

// Add admin middleware for category routes
app.use('/categories', require('./routes/categoryRoutes'));


// API Routes
app.use('/api/auth', authRoutes);
app.use('/categories', categoryRoutes);
app.use('/api/otp', otpRoutes);
app.use('/api', fileRoutes);
app.use('/api/services', serviceRoutes); 
app.use('/api/bookings', bookingRoutes);
app.use('/api/ratings', ratingRoutes);



const session = require('express-session');
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));



// Serve static files (for React build)
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Catch-all handler to serve React's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error details in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Send error response
  res.status(err.status || 500);
  res.json({ error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
 