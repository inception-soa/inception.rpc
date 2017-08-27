'use strict';
/**
 * @file A base class for all RPC transports
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
  primitives: require('inception.primitives')
};


/**
 * A base class for all RPC transports
 *
 * @param {Object} opts Configuration options for the transport
 * @param {String} opts.name A unique name for the transport
 * @param {String} opts.type The type of the transport
 * @param {String|String[]} opts.endpoints One or more remote nodes that execute the request
 * @constructor
 */
function RpcTransport(opts) {
  RpcTransport.super_.call(this, opts);
}
node.util.inherits(RpcTransport, inception.primitives.stream.Duplex);


/**
 * The unique name for the transport instance
 * @name RpcTransport#name
 * @type {String}
 */
Object.defineProperty(RpcTransport.prototype, 'name', {
  enumerable: true,
  get: function () {
    return this._properties.name;
  }
});


/**
 * The type of the transport
 * @name RpcTransport#type
 * @type {String}
 */
Object.defineProperty(RpcTransport.prototype, 'type', {
  enumerable: true,
  get: function () {
    return this._properties.type;
  }
});


/**
 * A list of one or more remote nodes that execute the request
 * @name RpcTransport#endpoints
 * @type {String[]}
 */
Object.defineProperty(RpcTransport.prototype, 'endpoints', {
  enumerable: true,
  get: function () {
    return this._properties.endpoints;
  }
});


/**
 * Fires off a request
 *
 * @param {Object} args Arguments for the operation
 * @param {Object} opts Configuration options for the operation
 * @return {Promise}
 */
RpcTransport.prototype.request = function (args) {
  throw 'not implemented!';
};


/**
 * Export the class
 * @type {RpcTransport}
 */
module.exports = RpcTransport;
