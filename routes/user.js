const express = require('express');

const {getAllUsersDetails, getSingleUserDetails, updateUserDetails,deleteuserDetails} = require('../controllers/user');

const checkAPI = require('../middleware/auth')
//Initialize router object.
const router = express.Router();


router.get('/', getAllUsersDetails)
router.get('/:userID', getSingleUserDetails)
router.patch('/:userID', updateUserDetails)
router.delete('/:userID', deleteuserDetails)


module.exports = router;
