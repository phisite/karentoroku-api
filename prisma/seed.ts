import { PrismaClient } from './client';

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.upsert({
        where: { username: 'testuser' },
        update: {},
        create: {
            name: 'Test User',
            username: 'testuser',
            firebaseUid: 'test-firebase-uid',
            mobileNumber: '1234567890',
        },
    });

    console.log({ user });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
