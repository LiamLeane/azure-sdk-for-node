/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const msRest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const WebResource = msRest.WebResource;

/**
 * Query aggregated Azure subscription consumption data for a date range.
 *
 * @param {date} reportedStartTime The start of the time range to retrieve data
 * for.
 *
 * @param {date} reportedEndTime The end of the time range to retrieve data
 * for.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {boolean} [options.showDetails] `True` returns usage data in
 * instance-level detail, `false` causes server-side aggregation with fewer
 * details. For example, if you have 3 website instances, by default you will
 * get 3 line items for website consumption. If you specify showDetails =
 * false, the data will be aggregated as a single line item for website
 * consumption within the time period (for the given subscriptionId, meterId,
 * usageStartTime and usageEndTime).
 *
 * @param {string} [options.aggregationGranularity] `Daily` (default) returns
 * the data in daily granularity, `Hourly` returns the data in hourly
 * granularity. Possible values include: 'Daily', 'Hourly'
 *
 * @param {string} [options.continuationToken] Used when a continuation token
 * string is provided in the response body of the previous call, enabling
 * paging through a large result set. If not present, the data is retrieved
 * from the beginning of the day/hour (based on the granularity) passed in.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link UsageAggregationListResult} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _list(reportedStartTime, reportedEndTime, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let showDetails = (options && options.showDetails !== undefined) ? options.showDetails : undefined;
  let aggregationGranularity = (options && options.aggregationGranularity !== undefined) ? options.aggregationGranularity : 'Daily';
  let continuationToken = (options && options.continuationToken !== undefined) ? options.continuationToken : undefined;
  // Validate
  try {
    if(!reportedStartTime || !(reportedStartTime instanceof Date ||
        (typeof reportedStartTime.valueOf() === 'string' && !isNaN(Date.parse(reportedStartTime))))) {
          throw new Error('reportedStartTime cannot be null or undefined and it must be of type date.');
        }
    if(!reportedEndTime || !(reportedEndTime instanceof Date ||
        (typeof reportedEndTime.valueOf() === 'string' && !isNaN(Date.parse(reportedEndTime))))) {
          throw new Error('reportedEndTime cannot be null or undefined and it must be of type date.');
        }
    if (showDetails !== null && showDetails !== undefined && typeof showDetails !== 'boolean') {
      throw new Error('showDetails must be of type boolean.');
    }
    if (aggregationGranularity) {
      let allowedValues = [ 'Daily', 'Hourly' ];
      if (!allowedValues.some( function(item) { return item === aggregationGranularity; })) {
        throw new Error(aggregationGranularity + ' is not a valid value. The valid values are: ' + allowedValues);
      }
    }
    if (continuationToken !== null && continuationToken !== undefined && typeof continuationToken.valueOf() !== 'string') {
      throw new Error('continuationToken must be of type string.');
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/providers/Microsoft.Commerce/UsageAggregates';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  let queryParameters = [];
  queryParameters.push('reportedStartTime=' + encodeURIComponent(client.serializeObject(reportedStartTime)));
  queryParameters.push('reportedEndTime=' + encodeURIComponent(client.serializeObject(reportedEndTime)));
  if (showDetails !== null && showDetails !== undefined) {
    queryParameters.push('showDetails=' + encodeURIComponent(showDetails.toString()));
  }
  if (aggregationGranularity !== null && aggregationGranularity !== undefined) {
    queryParameters.push('aggregationGranularity=' + encodeURIComponent(aggregationGranularity));
  }
  if (continuationToken !== null && continuationToken !== undefined) {
    queryParameters.push('continuationToken=' + encodeURIComponent(continuationToken));
  }
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['UsageAggregationListResult']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * Query aggregated Azure subscription consumption data for a date range.
 *
 * @param {string} nextPageLink The NextLink from the previous successful call
 * to List operation.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link UsageAggregationListResult} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listNext(nextPageLink, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (nextPageLink === null || nextPageLink === undefined || typeof nextPageLink.valueOf() !== 'string') {
      throw new Error('nextPageLink cannot be null or undefined and it must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let requestUrl = '{nextLink}';
  requestUrl = requestUrl.replace('{nextLink}', nextPageLink);

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['UsageAggregationListResult']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @class
 * UsageAggregates
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the UsageManagementClient.
 * Initializes a new instance of the UsageAggregates class.
 * @constructor
 *
 * @param {UsageManagementClient} client Reference to the service client.
 */
class UsageAggregates {
  constructor(client) {
    this.client = client;
    this._list = _list;
    this._listNext = _listNext;
  }

  /**
   * Query aggregated Azure subscription consumption data for a date range.
   *
   * @param {date} reportedStartTime The start of the time range to retrieve data
   * for.
   *
   * @param {date} reportedEndTime The end of the time range to retrieve data
   * for.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {boolean} [options.showDetails] `True` returns usage data in
   * instance-level detail, `false` causes server-side aggregation with fewer
   * details. For example, if you have 3 website instances, by default you will
   * get 3 line items for website consumption. If you specify showDetails =
   * false, the data will be aggregated as a single line item for website
   * consumption within the time period (for the given subscriptionId, meterId,
   * usageStartTime and usageEndTime).
   *
   * @param {string} [options.aggregationGranularity] `Daily` (default) returns
   * the data in daily granularity, `Hourly` returns the data in hourly
   * granularity. Possible values include: 'Daily', 'Hourly'
   *
   * @param {string} [options.continuationToken] Used when a continuation token
   * string is provided in the response body of the previous call, enabling
   * paging through a large result set. If not present, the data is retrieved
   * from the beginning of the day/hour (based on the granularity) passed in.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<UsageAggregationListResult>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listWithHttpOperationResponse(reportedStartTime, reportedEndTime, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._list(reportedStartTime, reportedEndTime, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Query aggregated Azure subscription consumption data for a date range.
   *
   * @param {date} reportedStartTime The start of the time range to retrieve data
   * for.
   *
   * @param {date} reportedEndTime The end of the time range to retrieve data
   * for.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {boolean} [options.showDetails] `True` returns usage data in
   * instance-level detail, `false` causes server-side aggregation with fewer
   * details. For example, if you have 3 website instances, by default you will
   * get 3 line items for website consumption. If you specify showDetails =
   * false, the data will be aggregated as a single line item for website
   * consumption within the time period (for the given subscriptionId, meterId,
   * usageStartTime and usageEndTime).
   *
   * @param {string} [options.aggregationGranularity] `Daily` (default) returns
   * the data in daily granularity, `Hourly` returns the data in hourly
   * granularity. Possible values include: 'Daily', 'Hourly'
   *
   * @param {string} [options.continuationToken] Used when a continuation token
   * string is provided in the response body of the previous call, enabling
   * paging through a large result set. If not present, the data is retrieved
   * from the beginning of the day/hour (based on the granularity) passed in.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {UsageAggregationListResult} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UsageAggregationListResult} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  list(reportedStartTime, reportedEndTime, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._list(reportedStartTime, reportedEndTime, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._list(reportedStartTime, reportedEndTime, options, optionalCallback);
    }
  }

  /**
   * Query aggregated Azure subscription consumption data for a date range.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call
   * to List operation.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<UsageAggregationListResult>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listNextWithHttpOperationResponse(nextPageLink, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listNext(nextPageLink, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Query aggregated Azure subscription consumption data for a date range.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call
   * to List operation.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {UsageAggregationListResult} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UsageAggregationListResult} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listNext(nextPageLink, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listNext(nextPageLink, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listNext(nextPageLink, options, optionalCallback);
    }
  }

}

module.exports = UsageAggregates;