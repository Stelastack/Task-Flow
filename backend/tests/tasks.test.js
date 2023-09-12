const request = require('supertest');
const app = require('../server');

describe('Tasks API', () => {
  it('should return 401 without auth', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.status).toBe(401);
  });

  it('should return 401 for POST without auth', async () => {
    const res = await request(app).post('/api/tasks').send({ title: 'Test' });
    expect(res.status).toBe(401);
  });
});