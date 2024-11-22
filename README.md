# is-inside-ci

Quick zero-dependency tool to check if a value is [`inside-ci`](https://www.npmjs.com/package/inside-ci)

# API

```js
import isInsideCi from "is-inside-ci";
if (isInsideCi(value)) {
  // value is `inside-ci`!
}
```

Returns true if the value is inside CI. Otherwise returns false.
