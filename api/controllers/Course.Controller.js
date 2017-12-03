const Course = require('../models/Course.Model.js');


module.exports.getAllCourses = (req, res) => {
  Course.find((err, courses) => {
    if (err) return responseWithError(err, res);
    return responseWithSuccess(res, courses);
  });
}

module.exports.getCourse = (req, res) => {
  Course.findOne({
    _id: req.params.courseId
  }, (err, course) => {
    if (err) return responseWithError(err, res);
    return responseWithSuccess(res, course);
  });
}

module.exports.createCourse = (req, res) => {
  const course = new Course();
  course.save((err) => {
    if (err) return responseWithError(err, res);
    return responseWithSuccess(res, course);
  })
}

module.exports.updateCourse = (req, res) => {
  Course.findOne({
    _id: req.params.courseId
  }, (err, course) => {
    if (err) return responseWithError(err, res);
    course = req.body;
    // Call save?
    return responseWithSuccess(res, course);
  });
}

module.exports.deleteCourse = (req, res) => {
  Course.remove({
    _id: req.params.courseId,
  }, (err) => {
    if (err) return responseWithError(err, res);
    return responseWithSuccess(res, { message: "success" });
  });

}


function responseWithError(err, res) {
  return res.status(500).send(err)
}

function responseWithSuccess(res, data) {
  return res.status(200).json(data);
}