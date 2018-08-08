## An Integration Test

### "Nodeback" style

```js
it('should respond with JSON object containing timestamp',
  function (done) {
    request(app).get('/unix-timestamp')
      .expect(200).end((err, res) => {
        if (err) {
          return done(err);
        }
  
        assert.ok(res.body.timestamp < 1e10);
        done();
      });
});
```

note:

don't forget to highlight async nature

**next slide**: promise style
