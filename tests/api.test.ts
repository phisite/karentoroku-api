import request from 'supertest';
import { app } from '../src/app';
import { prisma } from './setup';

describe('API Integration', () => {
    it('GET / should return Hello!', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello!');
    });

    it('POST /getUsers should return list of users', async () => {
        // We know 'testuser' exists from seeding
        const response = await request(app).post('/getUsers');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);

        const testUser = response.body.find((u: any) => u.username === 'testuser');
        expect(testUser).toBeDefined();
        expect(testUser.name).toBe('Test User');
    });
});
