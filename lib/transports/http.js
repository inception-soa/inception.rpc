'use strict';
/**
 * @file RPC over HTTP
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
  http: require('http'),
  https: require('https'),
  util: require('util')
};
const inception = {
  debug: require('inception.debug')('inception:rpc:transport:http')
};
const RpcTransport = require('../rpc_transport');
const _ = require('lodash');


/**
 * An implementation of an RPC transport over HTTP
 *
 * @param {Object} opts Configuration options for the transport
 * @param {String} opts.name A unique name for the transport
 * @param {String[]} opts.endpoints One or more remote nodes that execute the request
 * @param {Boolean} [opts.secure=false] Whether or not to use HTTP over TLS/SSL
 * @constructor
 */
function HttpRpcTransport(opts) {
  _.deepDefaults(opts, {
    type: HttpRpcTransport.NAME,
    secure: false
  });
  HttpRpcTransport.super_.call(this, opts);

  this._client = this.secure ? node.https : node.http;
}
node.util.inherits(HttpRpcTransport, RpcTransport);


/**
 * The name of the RpcTransport
 * @type {String}
 */
HttpRpcTransport.NAME = 'http';


/**
 * Fires off a request
 *
 * @param {Object} args Arguments for the operation
 * @param {String} [args.method='GET'] The HTTP method to use
 * @param {String} [args.path='/'] The HTTP request path
 * @param {Object} [args.headers] A list of HTTP request headers
 * @param {String} [args.auth] Basic authentication to compute an HTTP Authorization header
 * @param {String|Buffer} [args.pfx] CA certificates/certificate/private key to use for SSL
 * @param {String|Buffer|String[]|Buffer[]} [args.ca] Trusted certificates in PEM format
 * @param {String|Buffer} [args.cert] Public x509 certificate to use for SSL
 * @param {String|Buffer} [args.key] Private key to use for SSL
 * @param {String|Buffer} [args.passphrase] Passphrase for the private key/pfx
 * @param {String|Buffer|Stream} [args.data] Data to be sent along with the HTTP request
 * @param {Object} [opts] Configuration options for the operation
 * @param {String} [opts.strategy] Endpoint-selection strategy to use
 * @return {Promise}
 */
HttpRpcTransport.prototype.request = function (args) {
  _.deepDefaults(args, {
    hostname: null, // TODO (anand) Fix this!
    method: 'GET',
    path: '/'
  });

  return Promise.resolve(this._client.request(args));
};


/**
 * Routes an incoming request to the correct procedure
 *
 * @param {IncomingMessage} req The incoming request
 * @param {ServerResponse} res The outgoing response
 * @return {Promise}
 */
HttpRpcTransport.prototype.route = function (req, res) {
  return new Promise((resolve, reject) => {
    
  });
};


/**
 * Export the class
 * @type {HttpRpcTransport}
 */
module.exports = HttpRpcTransport;
