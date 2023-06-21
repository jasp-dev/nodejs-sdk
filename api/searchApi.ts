/**
 * Lite API
 * The **Lite API** can be used to to do the following  Get room rates & availability for a set of hotels Select a specific hotel with room availability and make a booking Manage the bookings - retrieve and cancel existing bookings Get static content for hotels, search hotels by destination
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.liteapi.travel/v2.0';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum SearchApiApiKeys {
    apikeyAuth,
}

export class SearchApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'apikeyAuth': new ApiKeyAuth('header', 'X-API-Key'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: SearchApiApiKeys, value: string) {
        (this.authentications as any)[SearchApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * **Hotel Minimum Rates API** is to search and return the minimum room rates that are available for a list of hotel ID\'s on the specified search dates.  For each hotel ID, the minimum room rate that is available is returned.  The API also has a built in loyalty rewards system. The system rewards return users who have made prior bookings.  If the search is coming from a known guest ID, the guest level is also returned along with pricing has more discounts.  If it is a new user, the guest ID will be generated at the time of the first confirmed booking.   Example API key for test: sand_c0155ab8-c683-4f26-8f94-b5e92c5797b9
     * @summary hotel minimum rates availability
     * @param hotelIds List of hotelIds
     * @param checkin Check in data in YYYY-MM-DD format
     * @param checkout Check out data in YYYY-MM-DD format
     * @param currency Currency code - example (USD)
     * @param guestNationality Guest nationality ISO-2 code - example (SG)
     * @param adults Number of adult guests staying
     * @param children Number of children staying if any
     * @param guestId Unique traveler ID if available
     */
    public async hotelsGet (hotelIds: string, checkin: string, checkout: string, currency: string, guestNationality: string, adults: number, children?: string, guestId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: object;  }> {
        const localVarPath = this.basePath + '/hotels';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'hotelIds' is not null or undefined
        if (hotelIds === null || hotelIds === undefined) {
            throw new Error('Required parameter hotelIds was null or undefined when calling hotelsGet.');
        }

        // verify required parameter 'checkin' is not null or undefined
        if (checkin === null || checkin === undefined) {
            throw new Error('Required parameter checkin was null or undefined when calling hotelsGet.');
        }

        // verify required parameter 'checkout' is not null or undefined
        if (checkout === null || checkout === undefined) {
            throw new Error('Required parameter checkout was null or undefined when calling hotelsGet.');
        }

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling hotelsGet.');
        }

        // verify required parameter 'guestNationality' is not null or undefined
        if (guestNationality === null || guestNationality === undefined) {
            throw new Error('Required parameter guestNationality was null or undefined when calling hotelsGet.');
        }

        // verify required parameter 'adults' is not null or undefined
        if (adults === null || adults === undefined) {
            throw new Error('Required parameter adults was null or undefined when calling hotelsGet.');
        }

        if (hotelIds !== undefined) {
            localVarQueryParameters['hotelIds'] = ObjectSerializer.serialize(hotelIds, "string");
        }

        if (checkin !== undefined) {
            localVarQueryParameters['checkin'] = ObjectSerializer.serialize(checkin, "string");
        }

        if (checkout !== undefined) {
            localVarQueryParameters['checkout'] = ObjectSerializer.serialize(checkout, "string");
        }

        if (currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, "string");
        }

        if (guestNationality !== undefined) {
            localVarQueryParameters['guestNationality'] = ObjectSerializer.serialize(guestNationality, "string");
        }

        if (adults !== undefined) {
            localVarQueryParameters['adults'] = ObjectSerializer.serialize(adults, "number");
        }

        if (children !== undefined) {
            localVarQueryParameters['children'] = ObjectSerializer.serialize(children, "string");
        }

        if (guestId !== undefined) {
            localVarQueryParameters['guestId'] = ObjectSerializer.serialize(guestId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.apikeyAuth.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apikeyAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: object;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "object");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * The Full Rates  API is to search and return all available rooms along with its rates, cancellation policies for a list of hotel ID\'s based on the search dates.   For each hotel ID, all available room information is returned.   The API also has a built in loyalty rewards system. The system rewards return users who have made prior bookings.   If the search is coming from a known guest ID, the guest level is also returned along with the pricing that\'s appropriate for the guest level.  If it is a new user, the guest ID will be generated at the time of the first confirmed booking.   Example API key for test: sand_c0155ab8-c683-4f26-8f94-b5e92c5797b9
     * @summary hotel full rates availability
     * @param hotelIds List of hotelIds
     * @param checkin Check in data in YYYY-MM-DD format
     * @param checkout Check out data in YYYY-MM-DD format
     * @param guestNationality Guest nationality ISO-2 code - example (SG)
     * @param currency Currency code - example (USD)
     * @param adults Number of adult guests staying
     * @param children Number of children staying if any
     * @param guestId Unique traveler ID if available
     */
    public async hotelsRatesGet (hotelIds: string, checkin: string, checkout: string, guestNationality: string, currency: string, adults: number, children?: string, guestId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: object;  }> {
        const localVarPath = this.basePath + '/hotels/rates';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'hotelIds' is not null or undefined
        if (hotelIds === null || hotelIds === undefined) {
            throw new Error('Required parameter hotelIds was null or undefined when calling hotelsRatesGet.');
        }

        // verify required parameter 'checkin' is not null or undefined
        if (checkin === null || checkin === undefined) {
            throw new Error('Required parameter checkin was null or undefined when calling hotelsRatesGet.');
        }

        // verify required parameter 'checkout' is not null or undefined
        if (checkout === null || checkout === undefined) {
            throw new Error('Required parameter checkout was null or undefined when calling hotelsRatesGet.');
        }

        // verify required parameter 'guestNationality' is not null or undefined
        if (guestNationality === null || guestNationality === undefined) {
            throw new Error('Required parameter guestNationality was null or undefined when calling hotelsRatesGet.');
        }

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling hotelsRatesGet.');
        }

        // verify required parameter 'adults' is not null or undefined
        if (adults === null || adults === undefined) {
            throw new Error('Required parameter adults was null or undefined when calling hotelsRatesGet.');
        }

        if (hotelIds !== undefined) {
            localVarQueryParameters['hotelIds'] = ObjectSerializer.serialize(hotelIds, "string");
        }

        if (checkin !== undefined) {
            localVarQueryParameters['checkin'] = ObjectSerializer.serialize(checkin, "string");
        }

        if (checkout !== undefined) {
            localVarQueryParameters['checkout'] = ObjectSerializer.serialize(checkout, "string");
        }

        if (guestNationality !== undefined) {
            localVarQueryParameters['guestNationality'] = ObjectSerializer.serialize(guestNationality, "string");
        }

        if (currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, "string");
        }

        if (adults !== undefined) {
            localVarQueryParameters['adults'] = ObjectSerializer.serialize(adults, "number");
        }

        if (children !== undefined) {
            localVarQueryParameters['children'] = ObjectSerializer.serialize(children, "string");
        }

        if (guestId !== undefined) {
            localVarQueryParameters['guestId'] = ObjectSerializer.serialize(guestId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.apikeyAuth.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apikeyAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: object;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "object");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
