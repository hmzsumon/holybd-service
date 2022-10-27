const User = require('../models/userModel');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const sendToken = require('../utils/sendToken');
const ErrorHandler = require('../utils/errorHandler');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const cloudinary = require('cloudinary');
const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// create new seller

exports.createSeller = asyncErrorHandler(async (req, res, next) => {
  const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
    folder: 'avatars',
    width: 150,
    crop: 'scale',
  });

  // create 6 digit customer id
  const crypto_id = crypto.randomBytes(3).toString('hex');
  const customer_id = `seller-${crypto_id}`;

  const {
    username,
    name,
    business_name,
    email,
    phone,
    password,
    address,
    city,
    state,
    country,
    zip,
    gender,
  } = req.body;

  // check if user already exists
  const { rows: existsUser } = await db.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );

  if (existsUser.length > 0) {
    return next(
      new ErrorHandler(`${existsUser[0].email}  already exists`, 400)
    );
  }

  // check username
  const { rows: existsUsername } = await db.query(
    'SELECT * FROM users WHERE username = $1',
    [username]
  );

  if (existsUsername.length > 0) {
    return next(
      new ErrorHandler(`${existsUsername[0].username}  already exists`, 400)
    );
  }

  // check phone
  const { rows: existsPhone } = await db.query(
    'SELECT * FROM users WHERE phone = $1',
    [phone]
  );

  // password encryption
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const { rows } = await db.query(
    'INSERT INTO users (username, name, business_name, email, phone, password, role, address, city, state, country, zip, gender, avatar_url, avatar_public_id, customer_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *',
    [
      username,
      name,
      business_name,
      email,
      phone,
      hashedPassword,
      'seller',
      address,
      city,
      state,
      country,
      zip,
      gender,
      myCloud.secure_url,
      myCloud.public_id,
      customer_id,
    ]
  );

  res.status(200).json({
    success: true,
    seller: rows[0],
  });
});

// get all sellers by role is seller

exports.getAllSellers = asyncErrorHandler(async (req, res, next) => {
  const { rows } = await db.query('SELECT * FROM users WHERE role = $1', [
    'seller',
  ]);

  res.status(200).json({
    success: true,
    sellers: rows,
  });
});
