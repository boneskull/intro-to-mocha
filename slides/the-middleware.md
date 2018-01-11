## Obligatory Contrived Example

```js
// lib/request-time.js

/**
 * Express middleware; adds a timestamp `requestTime` property 
 * to the incoming Request object
 */
module.exports = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};
```
