const request = require('supertest')
const esb = require('../ESB')

describe('index', function () {
  it('should get index', function (done) {
    request(esb).get('/')
      .expect(200, done)
  })
})
