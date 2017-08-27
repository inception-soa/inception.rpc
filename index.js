'use strict';
/**
 * @file RPC mechanisms for Inception
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
  path: require('path')
};
const RpcSpecification = require('../rpc_specification');
const RpcTransport = require('../rpc_transport');
const RpcError = require('../rpc_error');
const _ = require('lodash');


/**
 * Export the interface
 * @type {Object}
 */
const Rpc = exports = module.exports;


/**
 * A list of supported rpc specifications
 * @type {Object}
 */
Rpc.SPECIFICATIONS = {};


/**
 * A list of supported rpc transports
 * @type {Object}
 */
Rpc.TRANSPORTS = {};


/**
 * Registers a new RPC specification
 *
 * @param {Object} args Arguments for the operation
 * @param {String} args.name A unique name for the RpcSpecification
 * @param {RpcSpecification} args.spec A constructor for the RpcSpecification
 * @return {Promise}
 */
Rpc.registerSpecification = function (args) {
  if (_.isNil(args.name)) {
    throw 'no name supplied for RpcSpecification!';
  }

  if (Rpc.TRANSPORTS[args.name]) {
    throw `${args.name} is already a registed RpcSpecification!`;
  }

  if (_.isNil(args.spec) || !(args.spec instanceof RpcSpecification)) {
    throw 'supplied specification is not a valid RpcSpecification!';
  }

  Rpc.SPECIFICATIONS[args.name] = args.spec;
  return Promise.resolve();
};


/**
 * Registers a new RPC transport
 *
 * @param {Object} args Arguments for the operation
 * @param {String} args.name A unique name for the RpcTransport
 * @param {RpcTransport} args.transport A constructor for the RpcTransport
 * @return {Promise}
 */
Rpc.registerTransport = function (args) {
  if (_.isNil(args.name)) {
    throw 'no name supplied for RpcTransport!';
  }

  if (Rpc.TRANSPORTS[args.name]) {
    throw `${args.name} is already a registed RpcTransport!`;
  }

  if (_.isNil(args.transport) || !(args.transport instanceof RpcTransport)) {
    throw 'supplied transport is not a valid RpcTransport!';
  }

  Rpc.TRANSPORTS[args.name] = args.transport;
  return Promise.resolve();
};


/**
 * Creates a new remote procedure
 *
 * @param {Object} args Arguments for the operation
 * @param {String} args.name A unique name for the procedure
 * @param {String} args.description A human-readable description of the procedure
 * @param {String} [args.inputType='application/json'] The MIME-type of the input to the function
 * @param {String} [args.outputType='application/json'] The MIME-type of the input to the function
 * @param {Object} args.input The description of the input for the procedure
 * @param {Object} args.output The description of the output for the procedure
 * @param {PrimitiveError[]} args.errors A list of errors that the procedure may raise
 * @param {Object} args.config Configuration options for the procedure
 * @param {Boolean} [args.config.external=false] Whether or not this procedure should be exposed externally
 * @param {Function} args.handler The function that implements the procedure
 * @return {Promise}
 */
Rpc.createProcedure = function (args) {
  return Promise.resolve(new RpcProcedure(args));
};


/**
 * Routes the incoming request to the requested procedure
 *
 * @param {IncomingMessage} req The incoming request
 * @param {ServerResponse} res The outgoing response
 * @return {Promise}
 */
Rpc.route = function (req, res) {
  return new Promise((resolve, reject) => {

  });
};


(function main() {
  // Register all specifications

  // Register all transports
  
}());
