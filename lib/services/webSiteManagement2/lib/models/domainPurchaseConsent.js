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

var util = require('util');

/**
 * @class
 * Initializes a new instance of the DomainPurchaseConsent class.
 * @constructor
 * Domain purchase consent object representing acceptance of applicable legal
 * agreements
 *
 * @member {array} [agreementKeys] List of applicable legal agreement keys.
 * This list can be retrieved using ListLegalAgreements Api under
 * TopLevelDomain resource
 * 
 * @member {string} [agreedBy] Client IP address
 * 
 * @member {date} [agreedAt] Timestamp when the agreements were accepted
 * 
 */
function DomainPurchaseConsent() {
}

/**
 * Defines the metadata of DomainPurchaseConsent
 *
 * @returns {object} metadata of DomainPurchaseConsent
 *
 */
DomainPurchaseConsent.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DomainPurchaseConsent',
    type: {
      name: 'Composite',
      className: 'DomainPurchaseConsent',
      modelProperties: {
        agreementKeys: {
          required: false,
          serializedName: 'agreementKeys',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        agreedBy: {
          required: false,
          serializedName: 'agreedBy',
          type: {
            name: 'String'
          }
        },
        agreedAt: {
          required: false,
          serializedName: 'agreedAt',
          type: {
            name: 'DateTime'
          }
        }
      }
    }
  };
};

module.exports = DomainPurchaseConsent;