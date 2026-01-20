import { PrismaClient } from "../../prisma/client";
import { ICreateEventTypeInternal, ICreateUser } from "./karentoroku.interfaces";
import { credential } from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";



const firebaseApp = initializeApp(
  process.env.FIREBASE_AUTH_EMULATOR_HOST
    ? { projectId: process.env.FIREBASE_PROJECT_ID }
    : {
      credential: credential.cert({
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        projectId: process.env.FIREBASE_PROJECT_ID,
      }),
    }
);

export const prisma = new PrismaClient();

export const createUser = (args: ICreateUser) => {
  getAuth(firebaseApp)
    .verifyIdToken(args.idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      // ...
      // console.log(uid);
      return prisma.user.create({
        data: {
          name: args.name,
          username: args.username,
          firebaseUid: uid,
        },
      });
    })
    .catch((error) => {
      // Handle error
      console.log("Error:", error);
    });
};

export const getUsers = () => {
  return prisma.user.findMany({
    select: {
      name: true,
      username: true,
    },
  });
};

export const getUserById = (args: { id: number }) => {
  return prisma.user.findUniqueOrThrow({
    select: {
      name: true,
      username: true,
    },
    where: {
      id: args.id,
    },
  });
};

export const getUserByIdToken = async (args: { idToken: string }) => {
  try {
    const decodedToken = await getAuth(firebaseApp).verifyIdToken(args.idToken);
    const uid = decodedToken.uid;
    return await prisma.user.findUniqueOrThrow({
      select: {
        name: true,
        username: true,
      },
      where: {
        firebaseUid: uid,
      },
    });
  } catch (error) {
    // Handle error
    console.log("Error:", error);
  }
};

export const createLocation = (args: { name: string }) => {
  return prisma.location.create({
    data: {
      name: args.name,
    },
  });
};

export const createEventType = (args: ICreateEventTypeInternal) => {
  return prisma.eventType.upsert({
    where: {
      userId_name: {
        userId: args.userId,
        name: args.name,
      },
    },
    create: {
      name: args.name,
      description: args.description,
      price: args.price,
      timeDuration: args.timeDuration,
      user: {
        connect: {
          id: args.userId,
        },
      },
      dateSlots: {
        create: args.dateDaySlots.map((r) => {
          return {
            name: new Date(r.date),
            daySlot: {
              connectOrCreate: {
                where: {
                  name: r.dayName,
                },
                create: {
                  name: r.dayName,
                },
              },
            },
            dateOnTimeSlots: {
              create: args.timeSlots.map((t) => {
                return {
                  timeSlot: {
                    connectOrCreate: {
                      where: {
                        startTime_endTime: {
                          startTime: t.startTime,
                          endTime: t.endTime,
                        },
                      },
                      create: {
                        startTime: t.startTime,
                        endTime: t.endTime,
                      },
                    },
                  },
                };
              }),
            },
          };
        }),
      },
      eventTypeOnLocations: {
        create: args.locations.map((l) => {
          return {
            location: {
              create: {
                name: l.locationName,
              },
            },
          };
        }),
      },
    },
    update: {
      dateSlots: {
        create: args.dateDaySlots.map((r) => {
          return {
            name: new Date(r.date),
            daySlot: {
              connectOrCreate: {
                where: {
                  name: r.dayName,
                },
                create: {
                  name: r.dayName,
                },
              },
            },
            dateOnTimeSlots: {
              create: args.timeSlots.map((t) => {
                return {
                  timeSlot: {
                    connectOrCreate: {
                      where: {
                        startTime_endTime: {
                          startTime: t.startTime,
                          endTime: t.endTime,
                        },
                      },
                      create: {
                        startTime: t.startTime,
                        endTime: t.endTime,
                      },
                    },
                  },
                };
              }),
            },
          };
        }),
      },
    },
  });
};

export const getEventTypes = () => {
  return prisma.eventType.findMany({
    select: {
      name: true,
      timeDuration: true,
      price: true,
    },
  });
};
