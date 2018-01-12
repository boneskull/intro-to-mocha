/* eslint-env mocha */

'use strict';

const assert = require('assert');
const app = require('../app');
const request = require('supertest');

describe('GET /unix-timestamp', function () {
  it('should respond with JSON object containing timestamp', function () {
    return request(app)
      .get('/unix-timestamp')
      .expect(200)
      .then(res => {
        assert.ok(res.body.timestamp < 1e10);
      });
  });
});
