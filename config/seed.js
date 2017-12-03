const dbConfig = require('./db.config.js');
const Course = require('../api/models/Course.Model.js');

const courses = [
  {
    "name": "CMPS 350 - Programming Languages",
    "enrollmentCapacity": 20,
    "reservations": [
      {
        "reservationCapacity": 4,
        "effectiveStartDate": "2017-12-01"
      },
      {
        "reservationCapacity": 5,
        "effectiveStartDate": "2017-12-08"
      },
    ],
    "currentEnrollment": {
      "effectiveDate": "2017-12-06",
      "reservedSeatsEnrolled": 1,
      "openSeatsEnrolled": 1
    }
  },
  {
    "name": "CMPS 150 - Introduction to Unix",
    "enrollmentCapacity": 40,
    "reservations": [
      {
        "reservationCapacity": 20,
        "effectiveStartDate": "2017-12-01"
      },
      {
        "reservationCapacity": 5,
        "effectiveStartDate": "2017-12-08"
      },
    ],
    "currentEnrollment": {
      "effectiveDate": "2017-12-06",
      "reservedSeatsEnrolled": 1,
      "openSeatsEnrolled": 1
    }
  },
  {
    "name": "PHIL 316 - Professional Ethics",
    "enrollmentCapacity": 32,
    "reservations": [
      {
        "reservationCapacity": 12,
        "effectiveStartDate": "2017-12-01"
      },
      {
        "reservationCapacity": 2,
        "effectiveStartDate": "2017-12-08"
      },
    ],
    "currentEnrollment": {
      "effectiveDate": "2017-12-06",
      "reservedSeatsEnrolled": 1,
      "openSeatsEnrolled": 1
    }
  }
]

async function createCourse(courseData) {
  const course = new Course(courseData);
  try {
    await course.save();
  } catch(err) {
    return err;
  }
  return course;
}

function seedDatabaseWithMockCourses () {
  console.log(`Seeding the database with ${courses.length} courses`);
  courses.forEach((course) => {
    try {
      const createdCourse = createCourse(course);
      console.log(`Created course ${createdCourse}`);
    } catch (err) {
      console.error('Error', err);
    }
  })
  console.log('Done! Thanks async/await');
};



seedDatabaseWithMockCourses();