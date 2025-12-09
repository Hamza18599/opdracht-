const request = require('supertest');
const app = require('./app'); // importeer de bestaande app

describe('GET /', () => {
  it('responds with Hello message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello from My-App! Hamza');
    expect(res.statusCode).toBe(200);
  });
});
