## An Integration Test (1/5)

### Server Code

```js
// app.js
const express = require('express');
const app = module.exports = express();
app.use(require('./lib/request-time'));
app.get('/unix-timestamp', (req, res) => {
  res.json({
    timestamp: Math.floor(req.requestTime / 1000)
  });
});
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
}
```

note:

- explain line-by-line

**next slide** integration test extra tooling
