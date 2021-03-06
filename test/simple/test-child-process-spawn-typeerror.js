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

var spawn = require('child_process').spawn,
  assert = require('assert'),
  windows = (process.platform === 'win32'),
  cmd = (windows) ? 'dir' : 'ls',
  invalidcmd = (windows) ? 'ls' : 'dir',
  errors = 0;

try {
  // Ensure this throws a TypeError
  var child = spawn(invalidcmd, 'this is not an array');

  child.on('error', function (err) {
    errors++;
  });

} catch (e) {
  assert.equal(e instanceof TypeError, true);
}

// verify that args argument is optional
assert.doesNotThrow(function() {
  spawn(cmd, {});
});

process.on('exit', function() {
  assert.equal(errors, 0);
});
