const express = require('express');
const {
  createSeller,
  getAllSellers,
} = require('../controllers/sellerController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

const router = express.Router();

// create seller
router
  .route('/admin/seller')
  .post(isAuthenticatedUser, authorizeRoles('admin'), createSeller);

// get all sellers
router.route('/sellers').get(getAllSellers);

module.exports = router;
