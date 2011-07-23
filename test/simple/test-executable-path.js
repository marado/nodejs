// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var common = require('../common');
var assert = require('assert');
var path = require('path');

var isDebug = (process.version.indexOf('debug') >= 0);

var debugPath = path.normalize(path.join(__dirname, '..', '..',
                                         'build', 'debug', 'node_g'));
var defaultPath = path.normalize(path.join(__dirname, '..', '..',
                                           'build', 'default', 'node'));

console.error('debugPath: ' + debugPath);
console.error('defaultPath: ' + defaultPath);
console.error('process.execPath: ' + process.execPath);

if (/node_g$/.test(process.execPath)) {
  assert.ok(process.execPath.indexOf(debugPath) == 0);
} else {
  assert.ok(process.execPath.indexOf(defaultPath) == 0);
}

