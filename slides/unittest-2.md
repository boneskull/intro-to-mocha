## A Unit Test (2/6)

<span>Create a test with `it(title, callback)`.</span>  
<!-- .element: class="fragment" -->

```js
// test/request-time.spec.js
const assert = require('assert'); 
const requestTime = require('../lib/request-time');

describe('requestTime middleware', function () {
  it('should add a `requestTime` property to the `req` parameter', function () {
    // call function
    // make assertion
  });
});
```
<!-- .element: class="fragment" -->

note:

The title should read like a sentence. 

**next**: call func, make assertion
