'use strict';
/**
 * @file
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
 * Routes incoming requests to the appropriate procedure
 *
 * @param {Object} opts Configuration options for the routeter
 * @constructor
 */
function RpcRouter(opts) {
  RpcRouter.super_.call(this, opts);
}
node.util.inherits(RpcRouter, inception.primitives.EventEmitter);


RpcRouter.prototype.route = function () {
  
};


/**
 * Export the class
 * @type {RpcRouter}
 */
module.exports = RpcRouter;
