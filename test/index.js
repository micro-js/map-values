/**
 * Imports
 */

var mapValues = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(mapValues(add1, {a: 1, b: 2, c: 3}), [2, 3, 4])
  t.end()
})

test('takes a key', function (t) {
  t.deepEqual(
    mapValues(join, {keep: 'calm', and: 'test on'}),
    ['keep calm', 'and test on']
  )
  t.end()
})

/**
 * Helpers
 */

function join (val, key) {
  return key + ' ' + val
}

function add1 (n) {
  return n + 1
}
