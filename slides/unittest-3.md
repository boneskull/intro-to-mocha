## A Unit Test (3/6)

```js
describe('requestTime middleware', function () {
  it('should add a timestamp `requestTime` prop to `req`', function () {
    const req = {};
    requestTime(req);

    assert.ok(req.requestTime > 0);
  });
});
```

*Don't spoil the surprise, smartypants.*
<!-- .element: class="fragment" -->

note:

- middleware doesn't know about Express
- just needs an object
- `requestTime` prop should be a number
  - could get more specific

**next slide**: run it
