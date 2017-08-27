'use strict';
/**
 * @file A base class for all remote procedures
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
  debug: require('inception.debug')('inception:rpc:procedure'),
  primitives: require('inception.primitives')
};
const _ = require('lodash');


/**
 * A base class for all remote procedures
 *
 * @param {Object} opts Configuration options for the remote procedure
 * @param {String} opts.name A unique name for the procedure
 * @param {String} opts.description A human-readable description of the procedure
 * @param {String} [opts.inputType='application/json'] The MIME-type of the input to the function
 * @param {String} [opts.outputType='application/json'] The MIME-type of the input to the function
 * @param {Object} opts.input The description of the input for the procedure
 * @param {Object} opts.output The description of the output for the procedure
 * @param {PrimitiveError[]} opts.errors A list of errors that the procedure may raise
 * @param {Function} opts.handler The function that implements the procedure
 * @constructor
 */
function RpcProcedure(opts) {
  _.deepDefaults(opts, {
    inputType: 'application/json',
    outputType: 'application/json'
  });
  RpcProcedure.super_.call(this, opts);

  this.validate = RpcProcedure.createValidator(opts);
}
node.util.inherits(RpcProcedure, inception.primitives.EventEmitter);


/**
 * The unique name of the procedure
 * @name RpcProcedure#name
 * @type {String}
 */
Object.defineProperty(RpcProcedure.prototype, 'name', {
  enumerable: true,
  get: function () {
    return this._properties.name;
  }
});


/**
 * A human-readable description of the procedure
 * @name RpcProcedure#description
 * @type {String}
 */
Object.defineProperty(RpcProcedure.prototype, 'description', {
  enumerable: true,
  get: function () {
    return this._properties.description;
  }
});


/**
 * The MIME-type of the input to the function
 * @name RpcProcedure#inputType
 * @type {String}
 */
Object.defineProperty(RpcProcedure.prototype, 'inputType', {
  enumerable: true,
  get: function () {
    return this._properties.inputType;
  }
});


/**
 * The MIME-type of the output to the function
 * @name RpcProcedure#outputType
 * @type {String}
 */
Object.defineProperty(RpcProcedure.prototype, 'outputType', {
  enumerable: true,
  get: function () {
    return this._properties.outputType;
  }
});


/**
 * The description of the input for the procedure
 * @name RpcProcedure#input
 * @type {Object}
 */
Object.defineProperty(RpcProcedure.prototype, 'input', {
  enumerable: true,
  get: function () {
    return this._properties.input;
  }
});


/**
 * The description of the output for the procedure
 * @name RpcProcedure#output
 * @type {Object}
 */
Object.defineProperty(RpcProcedure.prototype, 'output', {
  enumerable: true,
  get: function () {
    return this._properties.output;
  }
});


/**
 * A list of errors that the procedure may raise
 * @name RpcProcedure#errors
 * @type {PrimitiveError[]}
 */
Object.defineProperty(RpcProcedure.prototype, 'errors', {
  enumerable: true,
  get: function () {
    return this._properties.errors;
  }
});


/**
 * The function that implements the body of the procedure
 * @name RpcProcedure#handler
 * @type {Function}
 */
Object.defineProperty(RpcProcedure.prototype, 'handler', {
  enumerable: true,
  get: function () {
    return this._properties.handler;
  }
});


RpcProcedure.prototype.processOpts = function (opts) {
  
};


/**
 * Executes the procedure
 *
 * @param {IncomingMessage} req The incoming request
 * @param {ServerResponse} res The outgoing response
 * @return {Promise}
 */
RpcProcedure.prototype.execute = function (req, res) {

};


/**
 * Export the class
 * @type {RpcProcedure}
 */
module.exports = RpcProcedure;
