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
    }
  }
});


CourseSchema.methods.getEnrollment = function(cb) {
  const ors = new OnlineRegistration(this);
  return ors.showCourseEnrollment();
};

module.exports = mongoose.model('Course', CourseSchema);
