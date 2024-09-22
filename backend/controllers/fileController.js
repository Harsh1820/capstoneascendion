// const File = require('../models/File');

// exports.uploadFile = (req, res) => {
//   const file = req.file;

//   if (!file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   // Save file details to database
//   const newFile = new File({
//     filename: file.filename,
//     path: file.path,
//     size: file.size,
//     mimetype: file.mimetype
//   });

//   newFile.save()
//     .then(file => res.status(201).json({ file }))
//     .catch(err => res.status(500).json({ message: 'Error saving file', error: err }));
// };

// exports.getFile = (req, res) => {
//   File.findById(req.params.id)
//     .then(file => {
//       if (!file) {
//         return res.status(404).json({ message: 'File not found' });
//       }
//       res.sendFile(file.path, { root: '.' }); 
//     })
//     .catch(err => res.status(500).json({ message: 'Error retrieving file', error: err }));
// };


// const File = require('../models/File');
// const Otp = require('../models/Otp');
// const twilio = require('twilio');
// const dotenv = require('dotenv');
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


// dotenv.config();
// const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// // Function to upload a file and send OTP
// exports.uploadFileAndSendOtp = async (req, res) => {
//   const file = req.file;
//   const { phoneNumber } = req.body;

//   if (!file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   try {
//     // Save file details to database
//     const newFile = new File({
//       filename: file.filename,
//       path: file.path,
//       size: file.size,
//       mimetype: file.mimetype,
//     });

//     const savedFile = await newFile.save();

//     // Generate OTP
//     const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
//     const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // OTP valid for 15 minutes

//     // Save OTP and file ID to database
//     await Otp.create({ phoneNumber, otp, expiresAt, fileId: savedFile._id });

//     // Send OTP via Twilio
//     await client.messages.create({
//       body: `Your OTP is ${otp}`,
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to: phoneNumber,
//     });

//     res.status(201).json({ message: 'File uploaded and OTP sent successfully!', file: savedFile });
//   } catch (error) {
//     res.status(500).json({ message: 'Error uploading file or sending OTP', error });
//   }
// };

// // Function to verify OTP and return associated file
// exports.verifyOtpAndGetFile = async (req, res) => {
//   const { phoneNumber, otp } = req.body;

//   try {
//     const otpRecord = await Otp.findOne({ phoneNumber, otp }).populate('fileId');
    
//     if (!otpRecord) {
//       return res.status(400).json({ message: 'Invalid OTP' });
//     }

//     // Check if OTP has expired
//     if (otpRecord.expiresAt < new Date()) {
//       return res.status(400).json({ message: 'OTP has expired' });
//     }

//     // OTP is valid, get the associated file
//     const file = await File.findById(otpRecord.fileId);
//     if (!file) {
//       return res.status(404).json({ message: 'Associated file not found' });
//     }

//     // OTP is valid, return file and delete OTP record
//     await Otp.deleteOne({ phoneNumber, otp });

//     res.status(200).json({ message: 'OTP verified successfully!', file });
//   } catch (error) {
//     res.status(500).json({ message: 'Error verifying OTP', error });
//   }
// };

// const File = require('../models/File');
// const Otp = require('../models/Otp');
// const twilio = require('twilio');
// const dotenv = require('dotenv');
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// dotenv.config();
// const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// // Google Form link for rating
// const GOOGLE_FORM_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSd1mQUFrehjyfZAFYW-aVpg-CkpNo9slJCedMW4VLILsm069g/viewform?vc=0&c=0&w=1&flr=0'; // Replace with your actual Google Form link

// // Function to upload a file and send OTP
// exports.uploadFileAndSendOtp = async (req, res) => {
//   const file = req.file;
//   const { phoneNumber } = req.body;

//   if (!file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   try {
//     // Save file details to database
//     const newFile = new File({
//       filename: file.filename,
//       path: file.path,
//       size: file.size,
//       mimetype: file.mimetype,
//     });

//     const savedFile = await newFile.save();

//     // Generate OTP
//     const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
//     const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // OTP valid for 15 minutes

//     // Save OTP and file ID to database
//     await Otp.create({ phoneNumber, otp, expiresAt, fileId: savedFile._id });

//     // Send OTP via Twilio
//     await client.messages.create({
//       body: `Your OTP is ${otp}`,
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to: phoneNumber,
//     });

//     res.status(201).json({ message: 'File uploaded and OTP sent successfully!', file: savedFile });
//   } catch (error) {
//     res.status(500).json({ message: 'Error uploading file or sending OTP', error });
//   }
// };

// // Function to verify OTP and return associated file
// exports.verifyOtpAndGetFile = async (req, res) => {
//   const { phoneNumber, otp } = req.body;

//   try {
//     const otpRecord = await Otp.findOne({ phoneNumber, otp }).populate('fileId');
    
//     if (!otpRecord) {
//       return res.status(400).json({ message: 'Invalid OTP' });
//     }

//     // Check if OTP has expired
//     if (otpRecord.expiresAt < new Date()) {
//       return res.status(400).json({ message: 'OTP has expired' });
//     }

//     // OTP is valid, get the associated file
//     const file = await File.findById(otpRecord.fileId);
//     if (!file) {
//       return res.status(404).json({ message: 'Associated file not found' });
//     }

//     // OTP is valid, return file and delete OTP record
//     await Otp.deleteOne({ phoneNumber, otp });

//     // Send the rating link via Twilio
//     await client.messages.create({
//       body: `Your OTP was verified successfully. Please provide your feedback using this link: ${GOOGLE_FORM_LINK}`,
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to: phoneNumber,
//     });

//     res.status(200).json({ message: 'OTP verified successfully! Rating link sent.', file });
//   } catch (error) {
//     res.status(500).json({ message: 'Error verifying OTP', error });
//   }
// };



// // Function to retrieve file and associated phone number by file ID
// exports.getFileAndPhoneNumber = async (req, res) => {
//   const { id } = req.params;

//   try {
//     // Find the file by its ID
//     const file = await File.findById(id);
//     if (!file) {
//       return res.status(404).json({ message: 'File not found' });
//     }

//     // Find the OTP record that contains the phoneNumber associated with the file
//     const otpRecord = await Otp.findOne({ fileId: id });
//     if (!otpRecord) {
//       return res.status(404).json({ message: 'No phone number found for this file' });
//     }

//     // Send the file along with the associated phone number
//     const filePath = path.join(__dirname, '..', file.path);
//     const fileStream = fs.createReadStream(filePath);

//     res.set({
//       'Content-Type': file.mimetype,
//       'Content-Disposition': `attachment; filename="${file.filename}"`,
//     });

//     // Write phone number in the response body before streaming the file
//     fileStream.on('open', () => {
//       res.write(JSON.stringify({ phoneNumber: otpRecord.phoneNumber }));
//       fileStream.pipe(res);
//     });

//     fileStream.on('error', (error) => {
//       res.status(500).json({ message: 'Error retrieving file', error });
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving file and phone number', error });
//   }
// };


const File = require('../models/File');
const Otp = require('../models/Otp');
const Booking = require('../models/Booking'); // Import Booking model
const twilio = require('twilio');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const GOOGLE_FORM_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSd1mQUFrehjyfZAFYW-aVpg-CkpNo9slJCedMW4VLILsm069g/viewform?vc=0&c=0&w=1&flr=0'; // Replace with your actual Google Form link

exports.uploadFileAndSendOtp = async (req, res) => {
  const file = req.file;
  const { phoneNumber } = req.body;

  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const newFile = new File({
      filename: file.filename,
      path: file.path,
      size: file.size,
      mimetype: file.mimetype,
    });

    const savedFile = await newFile.save();
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await Otp.create({ phoneNumber, otp, expiresAt, fileId: savedFile._id });

    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });

    res.status(201).json({ message: 'File uploaded and OTP sent successfully!', file: savedFile });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading file or sending OTP', error });
  }
};

exports.verifyOtpAndGetFile = async (req, res) => {
  const { phoneNumber, otp, bookingId } = req.body;

  try {
    const otpRecord = await Otp.findOne({ phoneNumber, otp }).populate('fileId');
    
    if (!otpRecord) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    if (otpRecord.expiresAt < new Date()) {
      return res.status(400).json({ message: 'OTP has expired' });
    }

    const file = await File.findById(otpRecord.fileId);
    if (!file) {
      return res.status(404).json({ message: 'Associated file not found' });
    }

    await Booking.findByIdAndUpdate(bookingId, { status: 'Completed', isCompleted: true });

    await Otp.deleteOne({ phoneNumber, otp });

    await client.messages.create({
      body: `Your OTP was verified successfully. Please provide your feedback using this link: ${GOOGLE_FORM_LINK}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });

    res.status(200).json({ message: 'OTP verified successfully! Rating link sent.', file });
  } catch (error) {
    res.status(500).json({ message: 'Error verifying OTP', error });
  }
};

exports.getFileAndPhoneNumber = async (req, res) => {
  const { id } = req.params;

  try {
    const file = await File.findById(id);
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    const otpRecord = await Otp.findOne({ fileId: id });
    if (!otpRecord) {
      return res.status(404).json({ message: 'No phone number found for this file' });
    }

    const filePath = path.join(__dirname, '..', file.path);
    const fileStream = fs.createReadStream(filePath);

    res.set({
      'Content-Type': file.mimetype,
      'Content-Disposition': `attachment; filename="${file.filename}"`,
    });

    fileStream.on('open', () => {
      res.write(JSON.stringify({ phoneNumber: otpRecord.phoneNumber }));
      fileStream.pipe(res);
    });

    fileStream.on('error', (error) => {
      res.status(500).json({ message: 'Error retrieving file', error });
    });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving file and phone number', error });
  }
};
