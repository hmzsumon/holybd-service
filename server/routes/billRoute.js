const express = require('express');

const { getBills, getSellerBills } = require('../controllers/billController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

const router = express.Router();

router
  .route('/admin/bills')
  .get(isAuthenticatedUser, authorizeRoles('admin'), getBills);

router
  .route('/seller/bill')
  .get(isAuthenticatedUser, authorizeRoles('seller'), getSellerBills);

module.exports = router;
