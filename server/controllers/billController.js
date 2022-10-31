const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');
const sendEmail = require('../utils/sendEmail');
const db = require('../config/db');

// get all bills for admin
exports.getBills = asyncErrorHandler(async (req, res, next) => {
  const { rows } = await db.query('SELECT * FROM service_order_bills');

  res.status(200).json({
    success: true,
    bills: rows,
  });
});

// get logged in seller's bills
exports.getSellerBills = asyncErrorHandler(async (req, res, next) => {
  const { rows } = await db.query(
    'SELECT * FROM service_order_bills WHERE user_id= $1',
    [req.user.user_id]
  );

  res.status(200).json({
    success: true,
    bill: rows[0],
  });
});
