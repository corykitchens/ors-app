const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const Course = require('../api/models/Course.Model.js');
const OnlineRegistrationSystem = require('ors-cp');


describe('OnlineRegistrationSystem usage', () => {

  var ors;
  var c;

  before((done) => {
    Course.findOne({}, (err, course) => {
      if (err) throw err;
      ors = new OnlineRegistrationSystem(course);
      done();
    })
  });

  it('should have specific instance properties', () => {
    expect(ors.classData).to.not.be.null;
  });

  
})