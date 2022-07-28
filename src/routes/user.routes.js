const express = require('express');
const {
 userData,
 getAllApplicants,
} = require('../controllers/user.Controllers');
const user = require('../models/user');
const router = express.Router();

router.post('/Fill_Data', userData);
router.get('/studentsData', getAllApplicants);

module.exports = router;
