/**
 * liteAPI
 * The **liteAPI** can be used to to do the following  Get room rates & availability for a set of hotels Select a specific hotel with room availability and make a booking Manage the bookings - retrieve and cancel existing bookings Get static content for hotels, search hotels by destination
 *
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RatesBookPostRequestGuestInfo model module.
 * @module model/RatesBookPostRequestGuestInfo
 * @version 2.0.0
 */
class RatesBookPostRequestGuestInfo {
    /**
     * Constructs a new <code>RatesBookPostRequestGuestInfo</code>.
     * @alias module:model/RatesBookPostRequestGuestInfo
     * @param guestFirstName {Object} traveler first name
     * @param guestLastName {Object} traveler last name
     * @param guestEmail {Object} traveler email
     */
    constructor(guestFirstName, guestLastName, guestEmail) { 
        
        RatesBookPostRequestGuestInfo.initialize(this, guestFirstName, guestLastName, guestEmail);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, guestFirstName, guestLastName, guestEmail) { 
        obj['guestFirstName'] = guestFirstName;
        obj['guestLastName'] = guestLastName;
        obj['guestEmail'] = guestEmail;
    }

    /**
     * Constructs a <code>RatesBookPostRequestGuestInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RatesBookPostRequestGuestInfo} obj Optional instance to populate.
     * @return {module:model/RatesBookPostRequestGuestInfo} The populated <code>RatesBookPostRequestGuestInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RatesBookPostRequestGuestInfo();

            if (data.hasOwnProperty('guestFirstName')) {
                obj['guestFirstName'] = ApiClient.convertToType(data['guestFirstName'], Object);
            }
            if (data.hasOwnProperty('guestLastName')) {
                obj['guestLastName'] = ApiClient.convertToType(data['guestLastName'], Object);
            }
            if (data.hasOwnProperty('guestEmail')) {
                obj['guestEmail'] = ApiClient.convertToType(data['guestEmail'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RatesBookPostRequestGuestInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RatesBookPostRequestGuestInfo</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RatesBookPostRequestGuestInfo.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

RatesBookPostRequestGuestInfo.RequiredProperties = ["guestFirstName", "guestLastName", "guestEmail"];

/**
 * traveler first name
 * @member {Object} guestFirstName
 */
RatesBookPostRequestGuestInfo.prototype['guestFirstName'] = undefined;

/**
 * traveler last name
 * @member {Object} guestLastName
 */
RatesBookPostRequestGuestInfo.prototype['guestLastName'] = undefined;

/**
 * traveler email
 * @member {Object} guestEmail
 */
RatesBookPostRequestGuestInfo.prototype['guestEmail'] = undefined;






export default RatesBookPostRequestGuestInfo;

