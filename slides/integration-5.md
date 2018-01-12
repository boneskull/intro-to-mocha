## An Integration Test

### Promise Style

```js
it('should respond with JSON object containing timestamp', 
  function () {
    return request(app).get('/unix-timestamp')
      .expect(200)
      .then(res => {
        assert.ok(res.body.timestamp < 1e10);
      });
});
```

note: 
let's run it
