'use strict';

require('mocha');
var assert = require('assert');
var tableize = require('./');

describe('tableize-object', function() {
  it('should export a function', function() {
    assert.equal(typeof tableize, 'function');
  });

  it('should tableize an object', function() {
    assert.deepEqual(tableize({foo: {bar: 'baz'}}), {'foo.bar': 'baz'});
    assert.deepEqual(tableize({
      foo: {
        bar: 'baz',
        qux: 'fez'
      }
    }), {
      'foo.bar': 'baz',
      'foo.qux': 'fez'
    });
  });
});
