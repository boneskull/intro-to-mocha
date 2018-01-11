## Your First Test (3/6)

Let's execute the middleware and make an assertion with `assert.ok()`.

```js
describe('requestTime middleware', function () {
  it('should add a timestamp `requestTime` prop to `req`', function () {
    // requestTime() just needs an object; it doesn't 
    // know about Express
    const req = {};
    requestTime(req);
    // a timestamp is a number
    assert.ok(req.requestTime > 0);
  });
});
```

> Don't spoil the surprise, smartypants.
