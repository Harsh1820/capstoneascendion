// const twilio = require('twilio');
// const Otp = require('../models/Otp');
// const dotenv = require('dotenv');
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


// dotenv.config();

// const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// // Function to send OTP
// exports.sendOtp = async (req, res) => {
//     const { phoneNumber } = req.body;

//     try {
//         const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
//         const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // OTP valid for 15 minutes

//         // Save OTP to database
//         await Otp.create({ phoneNumber, otp, expiresAt });

//         // Send OTP via Twilio
//         await client.messages.create({
//             body: `Your OTP is ${otp}`,
//             from: process.env.TWILIO_PHONE_NUMBER,
//             to: phoneNumber,
//         });

//         res.status(200).json({ message: 'OTP sent successfully!' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error sending OTP', error });
//     }
// };

// // Function to verify OTP
// exports.verifyOtp = async (req, res) => {
//     const { phoneNumber, otp } = req.body;

//     try {
//         const otpRecord = await Otp.findOne({ phoneNumber, otp });
        
//         if (!otpRecord) {
//             return res.status(400).json({ message: 'Invalid OTP' });
//         }

//         // Check if OTP has expired
//         if (otpRecord.expiresAt < new Date()) {
//             return res.status(400).json({ message: 'OTP has expired' });
//         }

//         // OTP is valid, delete OTP record
//         await Otp.deleteOne({ phoneNumber, otp });

//         res.status(200).json({ message: 'OTP verified successfully!' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error verifying OTP', error });
//     }
// };


const { body, validationResult } = require('express-validator');
const twilio = require('twilio');
const Otp = require('../models/Otp');
const dotenv = require('dotenv');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Function to send OTP
exports.sendOtp = [
    // Validation rules
    body('phoneNumber').isMobilePhone('any').withMessage('Invalid phone number format'),

    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { phoneNumber } = req.body;

        try {
            const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
            const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // OTP valid for 15 minutes

            // Save OTP to database
            await Otp.create({ phoneNumber, otp, expiresAt });

            // Send OTP via Twilio
            await client.messages.create({
                body: `Your OTP is ${otp}`,
                from: process.env.TWILIO_PHONE_NUMBER,
                to: phoneNumber,
            });

            res.status(200).json({ message: 'OTP sent successfully!' });
        } catch (error) {
            res.status(500).json({ message: 'Error sending OTP', error });
        }
    }
];

// Function to verify OTP
exports.verifyOtp = [
    // Validation rules
    body('phoneNumber').isMobilePhone('any').withMessage('Invalid phone number format'),
    body('otp').isLength({ min: 6, max: 6 }).withMessage('OTP must be 6 digits'),

    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { phoneNumber, otp } = req.body;

        try {
            const otpRecord = await Otp.findOne({ phoneNumber, otp });
            
            if (!otpRecord) {
                return res.status(400).json({ message: 'Invalid OTP' });
            }

            // Check if OTP has expired
            if (otpRecord.expiresAt < new Date()) {
                return res.status(400).json({ message: 'OTP has expired' });
            }

            // OTP is valid, delete OTP record
            await Otp.deleteOne({ phoneNumber, otp });

            res.status(200).json({ message: 'OTP verified successfully!' });
        } catch (error) {
            res.status(500).json({ message: 'Error verifying OTP', error });
        }
    }
];

