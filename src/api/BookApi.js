/**
 * liteAPI
 * The **liteAPI** can be used to to do the following  Get room rates & availability for a set of hotels Select a specific hotel with room availability and make a booking Manage the bookings - retrieve and cancel existing bookings Get static content for hotels, search hotels by destination
 *
 *
 */


import ApiClient from "../ApiClient";
import RatesBookPostRequest from '../model/RatesBookPostRequest';

/**
* Book service.
* @module api/BookApi
* @version 2.0.0
*/
export default class BookApi {

    /**
    * Constructs a new BookApi. 
    * @alias module:api/BookApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ratesBookPost operation.
     * @callback module:api/BookApi~ratesBookPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * hotel rate book
     * This API confirms a booking when the prebook Id and the rate Id from the pre book stage along with the guest and payment information are passed.  The guest information is an object that should include the guest first name, last name and email.  The payment information is an object that should include the name, credit card number, expiry and CVC number.  The response will confirm the booking along with a booking Id and a hotel confirmation code. It will also include the booking details including the dates, price and the cancellation policies.   Example API key for test: sand_c0155ab8-c683-4f26-8f94-b5e92c5797b9
     * @param {Object} opts Optional parameters
     * @param {module:model/RatesBookPostRequest} [ratesBookPostRequest] 
     * @param {module:api/BookApi~ratesBookPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    ratesBookPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['ratesBookPostRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/rates/book', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ratesPrebookPost operation.
     * @callback module:api/BookApi~ratesPrebookPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * hotel rate prebook
     * This API is used to confirm if the room and rates for the search criterion. The input to the endpoint is a specific rate Id coming from the **GET** hotel full rates availability API. In response, the API generates a prebook Id, a new rate Id and contains information if  price, cancellation policy or boarding information has changed. Example API key for test sand_c0155ab8-c683-4f26-8f94-b5e92c5797b9
     * @param {Object} opts Optional parameters
     * @param {Object} [body] 
     * @param {module:api/BookApi~ratesPrebookPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    ratesPrebookPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/rates/prebook', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}