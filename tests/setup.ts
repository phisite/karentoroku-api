import { PrismaClient } from '../prisma/client';

export const prisma = new PrismaClient();

beforeAll(async () => {
    // Ensure we are connected
    await prisma.$connect();
});

afterAll(async () => {
    await prisma.$disconnect();
});
