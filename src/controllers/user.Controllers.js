const User = require('../models/user');

exports.userData = async (req, res) =>{
try {
const {
name,
email,
phoneNo,
yourReason,
    } = req.body;
const newUser = new User ({
    name,
    email,
    phoneNo,
     yourReason,
});
const save_student_data_to_db = await newUser.save();
return res.status(201).json(save_student_data_to_db);
} catch (error) {
    console.log(error);
    return res.status(500).json({
        message: 'Internal Server Error'
    });
}

};

exports.getAllApplicants = async(req, res) => {
try {
    const Students = await User.find();
    return res.status(200).json({
     Allapplicants_data: Students.length,
     data: Students,
    });
} catch (error) {
    console.log(error);
    return res.status(500).json({
        message: 'Internal Server Error'
    });
}

};