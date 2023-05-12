const assert = require('assert');

const { isNotNull } = require('./index');

assert(isNotNull(1) === true);
assert(isNotNull('a') === true);
assert(isNotNull(0) === true);
assert(isNotNull('') === true);
assert(isNotNull(undefined) === true);
assert(isNotNull(null) === false);