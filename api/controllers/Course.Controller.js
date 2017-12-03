const Cousre = require('../models/Course.Model.js');



module.exports.getAllCourses = (req, res) => {
  res.status(200).json({message: "Get All Courses"});
}

module.exports.getCourse = (req, res) => {
  res.status(200).json({message: "Get All Courses"});
}

module.exports.createCourse = (req, res) => {
  res.status(200).json({message: "Create a New Course"});
}

module.exports.updateCourse = (req, res) => {
  res.status(200).json({message: "Get All Courses"});
}

module.exports.deleteCourse = (req, res) => {
  res.status(200).json({message: "Get All Courses"});
}