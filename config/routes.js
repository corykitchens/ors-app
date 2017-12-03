const express = require('express');
const router = express.Router();
const CourseController = require('../api/controllers/Course.Controller.js');


//GET landing page
router.get('/', (req, res) => {
  res.send('GET landing page');
});


//Map global response to the api endpoint regardless of HTTP method
router.all('/api', (req, res) => {
  res.status(200).json({message: "Hello World!"});
});

//Course endpoints
router.get('/api/courses', CourseController.getAllCourses);
router.post('/api/courses/', CourseController.createCourse);
router.get('/api/courses/:courseId', CourseController.getCourse);
router.put('/api/courses/:courseId', CourseController.updateCourse);
router.delete('/api/courses/:courseId', CourseController.deleteCourse);

router.all('*', (req, res) => {
  res.status(404).json({message: "Nothing to see here"});
})



module.exports = router;