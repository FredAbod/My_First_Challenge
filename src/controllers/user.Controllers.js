const User = require("../models/User.models");

exports.userData = async (req, res) => {
  try {
    const { name, email, phoneNo, yourReason } = req.body;
    const newUser = new User({
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
     error:error.message,
    });
  }
};

exports.getApplicants = async (req, res) => {
  try {
    const Students = await User.find();
    return res.status(200).json({
      Applicants_data: Students.entries,
      data: Students,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getAllApplicants = async (req, res) => {
  try {
    const Students = await User.find();
    return res.status(200).json({
      allApplicantsData: `${Students.length} students have applied`,
      data: Students,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.applicantsUpdate = async (req, res) => {
try {
  const id = req.params.id;
  const { name, email, phoneNo, yourReason} = req.body;
  const updateApplicants = await User.findByIdAndUpdate(
    id,
    {
      name,
      email,
      phoneNo,
      yourReason,
    },
    {
      new: true,
    }
  );
  return res.status(200).json(updateApplicants);
} catch (error) {
  console.log(error);
  return res.status(500).json({error: 'Internal Server Error'});
}
};
