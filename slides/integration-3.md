## An Integration Test

```js
// test/unix-timestamp-route.spec.js
const assert = require('assert');
const app = require('../app');
const request = require('supertest');

describe('GET /unix-timestamp', function () {
  it('should respond with JSON object containing timestamp',
  function (done) {
    // assertion goes here
  });
});
```

note:

- explain line-by-line
- server isn't actually occupying a port
