const express = require('express');
const {
    userData,
    getApplicants,
    getAllApplicants,
    applicantsUpdate,
} = require('../controllers/user.Controllers');
// const user = require('../models/User.models');
const router = express.Router();

router.post('/create', userData);
router.get('/students', getApplicants);
router.get('/counts', getAllApplicants);
router.put('/students/:id', applicantsUpdate);

module.exports = router;
