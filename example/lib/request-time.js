/**
 * @file lib/request-time.js
 */

/**
 * Adds a `requestTime` property to the Request object with
 * a timestamp
 */
module.exports = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};
