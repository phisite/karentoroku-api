import { getUsers } from '../src/karentoroku/karentoroku.resolvers';
import { prisma } from './setup';

describe('User Resolvers', () => {
    it('should return all users', async () => {
        // We expect the seeded user 'testuser' to be present
        const users = await getUsers();
        expect(users).toBeDefined();
        expect(users.length).toBeGreaterThan(0);
        const testUser = users.find(u => u.username === 'testuser');
        expect(testUser).toBeDefined();
        expect(testUser?.name).toBe('Test User');
    });
});
