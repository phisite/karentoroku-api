import request from 'supertest';
import { app } from '../src/app';
import { prisma } from './setup';

describe('Appointment System', () => {
    let organizerId: number;
    let attendeeId: number;
    let eventTypeId: number;
    let attendeeUsername: string;

    beforeAll(async () => {
        const uniqueId = Date.now();
        // Create users and event type
        const organizer = await prisma.user.create({
            data: {
                name: `Organizer ${uniqueId}`,
                username: `organizer_${uniqueId}`,
                firebaseUid: `organizer-uid-${uniqueId}`,
                mobileNumber: `111${uniqueId}`
            }
        });
        organizerId = organizer.id;

        attendeeUsername = `attendee_${uniqueId}`;
        const attendee = await prisma.user.create({
            data: {
                name: `Attendee ${uniqueId}`,
                username: attendeeUsername,
                firebaseUid: `attendee-uid-${uniqueId}`,
                mobileNumber: `222${uniqueId}`
            }
        });
        attendeeId = attendee.id;

        const eventType = await prisma.eventType.create({
            data: {
                name: "Consultation",
                description: "1-on-1",
                price: 100,
                timeDuration: 60,
                userId: organizerId
            }
        });
        eventTypeId = eventType.id;
    });

    it('should create an appointment', async () => {
        const payload = {
            organizerId,
            attendeeId,
            eventTypeId,
            startTime: new Date().toISOString(),
            endTime: new Date(Date.now() + 3600000).toISOString()
        };

        const response = await request(app)
            .post('/createAppointment')
            .send(payload);

        expect(response.status).toBe(200);
        expect(response.body.id).toBeDefined();
        expect(response.body.status).toBe("CONFIRMED");
    });

    it('should retrieve appointments for organizer', async () => {
        const payload = {
            userId: organizerId,
            role: "organizer"
        };
        const response = await request(app)
            .post('/getAppointments')
            .send(payload);

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0].attendee.username).toBe(attendeeUsername);
    });
});
