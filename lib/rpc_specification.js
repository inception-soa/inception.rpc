'use strict';
/**
 * @file A base class for all RPC specifications
 *
 * @author Anand Suresh <anandsuresh@gmail.com>
 * @copyright Copyright (C) 2016 - 2017 Anand Suresh
 * @license Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const node = {
  util: require('util')
};
const inception = {
  debug: require('inception.debug')('inception:rpc:spec'),
  primitives: require('inception.primitives')
};
const _ = require('lodash');


/**
 * A base class for RPC specifications
 *
 * @param {Object} opts Configuration options for the specification
 * @param {String} opts.name The unique name of the underlying service
 * @param {String} opts.title A human readable name for the underlying service
 * @param {String} opts.description The description of the underlying service
 * @param {String[]} opts.endpoints The list of hosts that serve the specification
 * @param {Object} opts.procedures The list of procedures served
 * @constructor
 */
function RpcSpecification(opts) {
  RpcSpecification.super_.call(this, opts);
}
node.util.inherits(RpcSpecification, inception.primitives.EventEmitter);


/**
 * The unique name of the specification
 * @name RpcSpecification#name
 * @type {String}
 */
Object.defineProperty(RpcSpecification.prototype, 'name', {
  enumerable: true,
  get: function () {
    return this._properties.name;
  }
});


/**
 * The description of the specification
 * @name RpcSpecification#description
 * @type {Function}
 */
Object.defineProperty(RpcSpecification.prototype, 'description', {
  enumerable: true,
  get: function () {
    return this._properties.description;
  }
});


/**
 * The list of hosts that serve the specification
 * @name RpcSpecification#endpoints
 * @type {Function}
 */
Object.defineProperty(RpcSpecification.prototype, 'endpoints', {
  enumerable: true,
  get: function () {
    return this._properties.endpoints;
  }
});


/**
 * The list of procedures served
 * @name RpcSpecification#procedures
 * @type {Function}
 */
Object.defineProperty(RpcSpecification.prototype, 'procedures', {
  enumerable: true,
  get: function () {
    return this._properties.procedures;
  }
});


/**
 * Parses an RPC specification
 *
 * @param {Object} args [description]
 * @return {Promise}
 */
RpcSpecification.parse = function (args) {
  throw 'not implemented!';
};


/**
 * Export the class
 * @type {Class}
 */
module.exports = Class;
