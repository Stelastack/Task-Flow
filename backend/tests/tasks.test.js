const request = require('supertest');
const app = require('../server');

describe('Tasks API', () => {
  it('should return 401 without auth', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.status).toBe(401);
  });
});