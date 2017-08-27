'use strict';
/**
 * @file The Swagger RPC specification
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
  fs: require('fs'),
  util: require('util')
};
const inception = {
  debug: require('inception.debug')('inception:rpc:spec:swagger')
};
const RpcSpecification = require('../rpc_specification');
const RpcError = require('../rpc_error');
const _ = require('lodash');


/**
 * The Swagger RPC specification
 *
 * @param {Object} opts Configuration options for the specification
 * @param {String} opts.name The unique name for the specification
 * @param {String} opts.description The description of the specification
 * @constructor
 */
function SwaggerRpcSpecification(opts) {
  opts.type = SwaggerRpcSpecification.NAME;
  SwaggerRpcSpecification.super_.call(this, opts);
}
node.util.inherits(SwaggerRpcSpecification, RpcSpecification);


/**
 * The name of the RpcSpecification
 * @type {String}
 */
SwaggerRpcSpecification.NAME = 'swagger';


/**
 * Parses an RPC specification
 *
 * @param {Object} args Arguments for the operation
 * @param {String} args.path Path to a JSON Swagger specification file
 * @return {Promise}
 */
SwaggerRpcSpecification.parse = function (args) {
  return new Promise((resolve, reject) => {
    if (_.isNil(args.path)) {
      return reject(RpcError.BadSpecification(args));
    }
  });
};


/**
 * Export the class
 * @type {SwaggerRpcSpecification}
 */
module.exports = SwaggerRpcSpecification;
