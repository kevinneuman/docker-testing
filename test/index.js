const http = require('http');
const assert = require('assert');

require('../src/server');

describe('Docker testing', () => {
  it('should return string Hello', done => {
    http.get('http://127.0.0.1:3000', res => {
      assert.equal(200, res.statusCode);

      res.on("data", chunk => {
        assert.equal('Hello', chunk.toString());
      });

      done();
    });
  });
  it('should return 404', done => {
    http.get('http://127.0.0.1:3000/test', res => {
      assert.equal(404, res.statusCode);
      done();
    });
  });
});
