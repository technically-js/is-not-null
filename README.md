# @technically/is-not-null

[![Test](https://github.com/technically-js/is-not-null/actions/workflows/test.yml/badge.svg)](https://github.com/technically-js/is-not-null/actions/workflows/test.yml)

`@technically/is-not-null` is a micro-package to check if a value is not null. With proper TS typing!

## Usage

```ts
import { isNotNull } from '@technically/is-not-null';

const values = ['hello', 'world', null];

const uppercase = values.filter(isNotNull).map((value) => {
  return value.toUpperCase(); // OK
});
```

## Why

In Typescript, it is often needed to filter out nulls from a list of values, and then process them.

The problem is that [`Boolean` does not currently work as a type-guard in Typescript](https://github.com/microsoft/TypeScript/issues/16655):

```ts
const values = ['hello', 'world', null];

const uppercase = values.filter(Boolean).map((value) => {
  return value.toUpperCase(); // TS18047: 'value' is possibly 'null'.
});
```

To mitigate the issue you have to wrap `Boolean` into a type-guard function like this:

```ts
const values = ['hello', 'world', null];

const uppercase = values.filter((x): x is Exclude<typeof x, null> => Boolean(x)).map((value) => {
  return value.toUpperCase(); // OK
});
```

To avoid writing these ad-hoc type-guards every time, I've created this package.

## Related packages

- [`@technically/is-not-undefined`](https://github.com/technically-js/is-not-undefined)

## License

[MIT](./LICENSE)

## Credits

Authored by Ivan Voskoboinyk.
