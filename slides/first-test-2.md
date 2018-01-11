## Your First Test (2/6)

Create a test with `it(title, callback)`.  The title should read like a sentence.


```js
// test/request-time.spec.js
const assert = require('assert'); 
const requestTime = require('../lib/request-time');

describe('requestTime middleware', function () {
  it('should add a `requestTime` property to the `req` parameter', function () {
    // do stuff here
  });
});
```
