const request = require('supertest');
const app = require('../src/app');
const db = require('../src/config/database');

describe('Contact API', () => {
  const testContact = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    address: '123 Test St'
  };

  afterAll((done) => {
    db.run('DELETE FROM contacts', [], (err) => {
      if (err) console.error(err);
      db.close(() => done());
    });
  });

  describe('POST /api/contacts', () => {
    it('should create a new contact', async () => {
      const res = await request(app)
        .post('/api/contacts')
        .send(testContact);
      
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body.name).toBe(testContact.name);
      expect(res.body.email).toBe(testContact.email);
    });

    it('should validate required fields', async () => {
      const res = await request(app)
        .post('/api/contacts')
        .send({});
      
      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('error');
    });
  });
});