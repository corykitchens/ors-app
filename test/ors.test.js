const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const Course = require('../api/models/Course.Model.js');
const OnlineRegistration = require('ors-cp');


const expectedData = {
  totalReservedSeats: 14,
  enabledReserevedSeats: 12,
  reservedSeatsAvailable: 9,
  totalOpenSeats: 18,
  openSeatsAvailable: 17
};

// const osr = new OnlineRegistration(classData);

describe('OnlineRegistration usage', () => {
  it('should be usable with an instance of a Course', function(done) {
    // 
    Course.findOne({name: 'PHIL 316 - Professional Ethics'}, (err, course) => {
      if (err) {
        throw err;
        done();
      } else {
        const ors = new OnlineRegistration(course);
        expect(ors.getTotalReservedSeats()).to.equal(expectedData.totalReservedSeats);
        expect(ors.getEnabledReservedSeats()).to.equal(expectedData.enabledReserevedSeats);
        expect(ors.getReservedSeatsAvailable()).to.equal(expectedData.reservedSeatsAvailable);
        expect(ors.getTotalOpenSeats()).to.equal(expectedData.totalOpenSeats);
        expect(ors.getOpenSeatsAvailable()).to.equal(expectedData.openSeatsAvailable);
        const obj = ors.showCourseEnrollment();
        expect(obj.openSeatsAvailable).to.equal(expectedData.openSeatsAvailable);
        expect(obj.reservedSeatsAvailable).to.equal(expectedData.reservedSeatsAvailable);
        done();
      }
    });
  });
});