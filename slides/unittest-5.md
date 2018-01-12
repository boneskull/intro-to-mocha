## A Unit Test (5/6)

[requestTime source](#/13)

```js
it('should add a timestamp `requestTime` prop to `req`', function () {
  // requestTime() expects an object, any arg, 
  // and finally a callback
  const req = {};
  requestTime(req, null, () => {});
  assert.ok(req.requestTime > 0);
});
```
<!-- .element: class="fragment" -->

note:

- look at the source
- use back button to return

- OK, what went wrong here?
- the middleware just causes side effects
 
- pause for questions

**next**: run again
