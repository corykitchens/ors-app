const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CourseSchema = new Schema({
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
      sequenceId: ObjectId,
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
    }
  }
})


module.exports = mongoose.model('Course', CourseSchema);
