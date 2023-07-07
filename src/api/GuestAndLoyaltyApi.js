/**
 * liteAPI
 * The **liteAPI** can be used to to do the following  Get room rates & availability for a set of hotels Select a specific hotel with room availability and make a booking Manage the bookings - retrieve and cancel existing bookings Get static content for hotels, search hotels by destination
 *
 *
 */


import ApiClient from "../ApiClient";

/**
* GuestAndLoyalty service.
* @module api/GuestAndLoyaltyApi
* @version 2.0.0
*/
export default class GuestAndLoyaltyApi {

    /**
    * Constructs a new GuestAndLoyaltyApi. 
    * @alias module:api/GuestAndLoyaltyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the guestsGet operation.
     * @callback module:api/GuestAndLoyaltyApi~guestsGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * guests
     * The guests API returns the unique guest ID of a user based on the users email ID
     * @param {Object} opts Optional parameters
     * @param {Object} [email] Email ID of the guest
     * @param {module:api/GuestAndLoyaltyApi~guestsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    guestsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'email': opts['email']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apikeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/guests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}