/**
 * Alfresco Content Services REST API
 * **Search API**  Provides access to the search features of Alfresco Content Services.
 *
 * OpenAPI spec version: 1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.RequestPagination = factory(root.AlfrescoContentServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RequestPagination model module.
   * @module model/RequestPagination
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RequestPagination</code>.
   * @alias module:model/RequestPagination
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>RequestPagination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {any} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestPagination} obj Optional instance to populate.
   * @return {module:model/RequestPagination} The populated <code>RequestPagination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('maxItems')) {
        obj['maxItems'] = ApiClient.convertToType(data['maxItems'], 'Number');
      }
      if (data.hasOwnProperty('skipCount')) {
        obj['skipCount'] = ApiClient.convertToType(data['skipCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The maximum number of items to return in the query results
   * @member {number} maxItems
   */
  exports.prototype['maxItems'] = undefined;
  /**
   * The number of items to skip from the start of the query set
   * @member {number} skipCount
   */
  exports.prototype['skipCount'] = undefined;



  return exports;
}));


