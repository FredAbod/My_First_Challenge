const express = require('express');
const {
 userData,
 getApplicants,
 getAllApplicants,
} = require('../controllers/user.Controllers');
const user = require('../models/User.models');
const router = express.Router();

router.post('/create', userData);
router.get('/students', getApplicants);
router.get('/counts', getAllApplicants);

module.exports = router;
