const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OnlineRegistration = require('ors-cp');


const CourseSchema = new Schema({
  name: String,
  enrollmentCapacity: {
    type: Number,
    default: 0
  },
  reservations: [
    {
      reservationCapacity: {
        type: Number,
        default: 0
      },
      sequenceId: Schema.ObjectId,
      effectiveStartDate: {
        type: Date,
        default: Date.now
      }
    }
  ],
  currentEnrollment: {
    effectiveDate: {
      type: Date,
      default: Date.now
    },
    reservedSeatsEnrolled: {
      type: Number,
      default: 0
    },
    openSeatsEnrolled: {
      type: Number,
      default: 0
    },
    openSeatsAvailable: {
      type: Number,
      default: 0
    },
    reservedSeatsAvailable: {
      type: Number,
      default: 0
    }
  }
});

function getSeatsAvailable(course) {
  const ors = new OnlineRegistration(course);
  return ors.showCourseEnrollment();
};

CourseSchema.pre('save', function(next) {
  const { openSeatsAvailable, reservedSeatsAvailable } = getSeatsAvailable(this);
  this.currentEnrollment.openSeatsAvailable = openSeatsAvailable;
  this.currentEnrollment.reservedSeatsAvailable = reservedSeatsAvailable;
  next();
});



module.exports = mongoose.model('Course', CourseSchema);
