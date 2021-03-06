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
    root.AlfrescoContentServicesRestApi.RequestFacetSet = factory(root.AlfrescoContentServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RequestFacetSet model module.
   * @module model/RequestFacetSet
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RequestFacetSet</code>.
   * The interval to Set
   * @alias module:model/RequestFacetSet
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>RequestFacetSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {any} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestFacetSet} obj Optional instance to populate.
   * @return {module:model/RequestFacetSet} The populated <code>RequestFacetSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'String');
      }
      if (data.hasOwnProperty('end')) {
        obj['end'] = ApiClient.convertToType(data['end'], 'String');
      }
      if (data.hasOwnProperty('startInclusive')) {
        obj['startInclusive'] = ApiClient.convertToType(data['startInclusive'], 'Boolean');
      }
      if (data.hasOwnProperty('endInclusive')) {
        obj['endInclusive'] = ApiClient.convertToType(data['endInclusive'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * A label to use to identify the set
   * @member {string} label
   */
  exports.prototype['label'] = undefined;
  /**
   * The start of the range
   * @member {string} start
   */
  exports.prototype['start'] = undefined;
  /**
   * The end of the range
   * @member {string} end
   */
  exports.prototype['end'] = undefined;
  /**
   * When true, the set will include values greater or equal to \"start\"
   * @member {boolean} startInclusive
   * @default true
   */
  exports.prototype['startInclusive'] = true;
  /**
   * When true, the set will include values less than or equal to \"end\"
   * @member {boolean} endInclusive
   * @default true
   */
  exports.prototype['endInclusive'] = true;



  return exports;
}));


