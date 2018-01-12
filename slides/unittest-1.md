## A Unit Test (1/6)

<span>We will use Node.js' [`assert`](https://nodejs.org/api/assert.html#assert_assert) module.</span>
<!-- .element: class="fragment" -->

We also need our middleware.
<!-- .element: class="fragment" -->

```js
// test/request-time.spec.js
const assert = require('assert'); 
const requestTime = require('../lib/request-time');
```
<!-- .element: class="fragment" -->

note:

- Mocha does not contain an assertion API
- in 2011 created a "market" for assertion libraries
- many userland assertion libs available
  - unexpected
  - chai
  - expect.js
  - should
  - must
  - etc
 

**next**: create test within suite
