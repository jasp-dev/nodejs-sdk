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
    instance = new LiteApi.StaticDataApi();
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

  describe('StaticDataApi', function() {
    describe('dataCitiesGet', function() {
      it('should call dataCitiesGet successfully', function(done) {
        //uncomment below and update the code to test dataCitiesGet
        //instance.dataCitiesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataCountriesGet', function() {
      it('should call dataCountriesGet successfully', function(done) {
        //uncomment below and update the code to test dataCountriesGet
        //instance.dataCountriesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataCurrenciesGet', function() {
      it('should call dataCurrenciesGet successfully', function(done) {
        //uncomment below and update the code to test dataCurrenciesGet
        //instance.dataCurrenciesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataHotelGet', function() {
      it('should call dataHotelGet successfully', function(done) {
        //uncomment below and update the code to test dataHotelGet
        //instance.dataHotelGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataHotelsGet', function() {
      it('should call dataHotelsGet successfully', function(done) {
        //uncomment below and update the code to test dataHotelsGet
        //instance.dataHotelsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataIataCodesGet', function() {
      it('should call dataIataCodesGet successfully', function(done) {
        //uncomment below and update the code to test dataIataCodesGet
        //instance.dataIataCodesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
