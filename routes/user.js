const express = require('express');

const { getAllUsersDetails, getSingleUserDetails, updateUserDetails, deleteuserDetails } = require('../controllers/user');

const { verifyTokenAdmin, verifyTokenUserOrAdmin } = require('../middleware/auth')
//Initialize router object.
const router = express.Router();


router.get('/', verifyTokenAdmin, getAllUsersDetails)
router.get('/:userID', verifyTokenUserOrAdmin, getSingleUserDetails)
router.patch('/:userID', verifyTokenUserOrAdmin, updateUserDetails)
router.delete('/:userID', verifyTokenUserOrAdmin, deleteuserDetails)


module.exports = router;
