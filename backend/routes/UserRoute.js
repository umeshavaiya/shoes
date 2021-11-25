const express = require('express');
const router = express.Router();
const { authController, getuserProfile, registerUser, updateUserProfile } = require('../controllers/userController')
const { protect } = require('../middlewares/authMiddleware')

// user regisration
router.route('/').post(registerUser)

// post email and password auth
router.post('/login', authController)

// get user profile Private Route
router.route("/profile").get(protect, getuserProfile).put(protect, updateUserProfile)

module.exports = router;