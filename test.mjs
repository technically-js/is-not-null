import assert from 'assert';

import { isNotNull } from './index.mjs';

assert(isNotNull(1) === true);
assert(isNotNull('a') === true);
assert(isNotNull(0) === true);
assert(isNotNull('') === true);
assert(isNotNull(undefined) === true);
assert(isNotNull(null) === false);