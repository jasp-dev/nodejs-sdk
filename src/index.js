/**
 * liteAPI
 * The **liteAPI** can be used to to do the following  Get room rates & availability for a set of hotels Select a specific hotel with room availability and make a booking Manage the bookings - retrieve and cancel existing bookings Get static content for hotels, search hotels by destination
 *
 *
 */


import ApiClient from './ApiClient';
import RatesBookPostRequest from './model/RatesBookPostRequest';
import RatesBookPostRequestGuestInfo from './model/RatesBookPostRequestGuestInfo';
import RatesBookPostRequestPayment from './model/RatesBookPostRequestPayment';
import BookApi from './api/BookApi';
import BookingManagementApi from './api/BookingManagementApi';
import GuestAndLoyaltyApi from './api/GuestAndLoyaltyApi';
import SearchApi from './api/SearchApi';
import StaticDataApi from './api/StaticDataApi';


/**
* The **liteAPI** can be used to to do the following  Get room rates &amp; availability for a set of hotels Select a specific hotel with room availability and make a booking Manage the bookings - retrieve and cancel existing bookings Get static content for hotels, search hotels by destination.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var LiteApi = require('index'); // See note below*.
* var xxxSvc = new LiteApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new LiteApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new LiteApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new LiteApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The RatesBookPostRequest model constructor.
     * @property {module:model/RatesBookPostRequest}
     */
    RatesBookPostRequest,

    /**
     * The RatesBookPostRequestGuestInfo model constructor.
     * @property {module:model/RatesBookPostRequestGuestInfo}
     */
    RatesBookPostRequestGuestInfo,

    /**
     * The RatesBookPostRequestPayment model constructor.
     * @property {module:model/RatesBookPostRequestPayment}
     */
    RatesBookPostRequestPayment,

    /**
    * The BookApi service constructor.
    * @property {module:api/BookApi}
    */
    BookApi,

    /**
    * The BookingManagementApi service constructor.
    * @property {module:api/BookingManagementApi}
    */
    BookingManagementApi,

    /**
    * The GuestAndLoyaltyApi service constructor.
    * @property {module:api/GuestAndLoyaltyApi}
    */
    GuestAndLoyaltyApi,

    /**
    * The SearchApi service constructor.
    * @property {module:api/SearchApi}
    */
    SearchApi,

    /**
    * The StaticDataApi service constructor.
    * @property {module:api/StaticDataApi}
    */
    StaticDataApi
};