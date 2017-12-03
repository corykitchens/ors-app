const express = require('express');
const router = express.Router();


//GET landing page
router.get('/', (req, res) => {
  res.send('GET landing page');
});


//Map global response to the api endpoint regardless of HTTP method
router.all('/api', (req, res) => {
  res.status(200).json({message: "Hello World!"});
});

router.get('/api/courses', (req, res) => {
  res.status(200).json({message: "Get All Courses"});
});

router.post('/api/courses/', (req, res) => {
  res.status(200).json({message: "Create a New Course"});
});

router.get('/api/courses/:courseId', (req, res) => {
  res.status(200).json({message: `Get Course ID ${req.params.courseId}` });
});

router.put('/api/courses/:courseId', (req, res) => {
  res.status(200).json({message: `Update Course ID ${req.params.courseId}` });
});

router.delete('/api/courses/:courseId', (req, res) => {
  res.status(200).json({message: `Delete Course ID ${req.params.courseId}` });
});

router.all('*', (req, res) => {
  res.status(404).json({message: "Nothing to see here"});
})



module.exports = router;