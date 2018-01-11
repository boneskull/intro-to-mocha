## Your First Test (5/6)

```js
it('should add a timestamp `requestTime` prop to `req`', function () {
  // requestTime() expects an object, any arg, 
  // and finally a callback
  const req = {};
  requestTime(req, null, () => {});
  assert.ok(req.requestTime > 0);
});
```
