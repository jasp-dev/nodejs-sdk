/**
 * liteAPI
 * The **liteAPI** can be used to to do the following  Get room rates & availability for a set of hotels Select a specific hotel with room availability and make a booking Manage the bookings - retrieve and cancel existing bookings Get static content for hotels, search hotels by destination
 *
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LiteApi);
  }
}(this, function(expect, LiteApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LiteApi.RatesBookPostRequestPayment();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RatesBookPostRequestPayment', function() {
    it('should create an instance of RatesBookPostRequestPayment', function() {
      // uncomment below and update the code to test RatesBookPostRequestPayment
      //var instance = new LiteApi.RatesBookPostRequestPayment();
      //expect(instance).to.be.a(LiteApi.RatesBookPostRequestPayment);
    });

    it('should have the property holderName (base name: "holderName")', function() {
      // uncomment below and update the code to test the property holderName
      //var instance = new LiteApi.RatesBookPostRequestPayment();
      //expect(instance).to.be();
    });

    it('should have the property number (base name: "number")', function() {
      // uncomment below and update the code to test the property number
      //var instance = new LiteApi.RatesBookPostRequestPayment();
      //expect(instance).to.be();
    });

    it('should have the property expireDate (base name: "expireDate")', function() {
      // uncomment below and update the code to test the property expireDate
      //var instance = new LiteApi.RatesBookPostRequestPayment();
      //expect(instance).to.be();
    });

    it('should have the property cvc (base name: "cvc")', function() {
      // uncomment below and update the code to test the property cvc
      //var instance = new LiteApi.RatesBookPostRequestPayment();
      //expect(instance).to.be();
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instance = new LiteApi.RatesBookPostRequestPayment();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new LiteApi.RatesBookPostRequestPayment();
      //expect(instance).to.be();
    });

  });

}));