## Obligatory Contrived Example

```js
// lib/request-time.js

/**
 * Express middleware; adds a timestamp `requestTime` property
 * to the incoming Request object
 * @see https://expressjs.com
 */
module.exports = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};
```

note:

- what is Express
- what is middleware (building block)
  > An Express application is essentially a series of middleware function calls.
  > Middleware functions are functions that have access to the request object (req), the response object (res)
  > when the middleware is done, it calls `next()` which moves to the next middleware
- what does this function do

**next slide**: we want to create a unit test for this
