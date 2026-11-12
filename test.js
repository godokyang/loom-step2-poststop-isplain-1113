/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('assert');
var isPlainObject = require('./dist/is-plain-object.js').isPlainObject;
var isNonEmptyPlainObject = require('./dist/is-plain-object.js').isNonEmptyPlainObject;

function Foo() {
  this.abc = {};
}

assert(isPlainObject(Object.create({})));
assert(isPlainObject(Object.create(Object.prototype)));
assert(isPlainObject({ foo: 'bar' }));
assert(isPlainObject({}));
assert(isPlainObject(Object.create(null)));

assert(!isPlainObject(/foo/));
assert(!isPlainObject(function() {}));
assert(!isPlainObject(1));
assert(!isPlainObject(['foo', 'bar']));
assert(!isPlainObject([]));
assert(!isPlainObject(new Foo()));
assert(!isPlainObject(null));

var sym = Symbol('foo');
var symbolOnly = {};
symbolOnly[sym] = 'bar';

assert(isNonEmptyPlainObject({ a: 1 }));
assert(isNonEmptyPlainObject({ foo: 'bar' }));
assert(isNonEmptyPlainObject(Object.assign(Object.create(null), { foo: 'bar' })));

assert(!isNonEmptyPlainObject({}));
assert(!isNonEmptyPlainObject(Object.create(null)));
assert(!isNonEmptyPlainObject(symbolOnly));
assert(!isNonEmptyPlainObject(['foo', 'bar']));
assert(!isNonEmptyPlainObject([]));
assert(!isNonEmptyPlainObject(function() {}));
assert(!isNonEmptyPlainObject(null));
assert(!isNonEmptyPlainObject(new Date()));
assert(!isNonEmptyPlainObject(new Foo()));
