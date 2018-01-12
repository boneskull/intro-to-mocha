'use strict';

const express = require('express');

// create app
const app = express();

// add middleware
app.use(require('./lib/request-time'));

// add route
app.get('/unix-timestamp', (req, res) => {
  res.json({
    timestamp: Math.floor(req.requestTime / 1000)
  });
});

// don't listen in tests
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
}

module.exports = app;
