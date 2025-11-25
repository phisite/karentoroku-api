"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventTypes = exports.createEventType = exports.createLocation = exports.getUserByIdToken = exports.getUserById = exports.getUsers = exports.createUser = exports.prisma = void 0;
const client_1 = require("../../prisma/client");
const firebase_admin_1 = require("firebase-admin");
const app_1 = require("firebase-admin/app");
const auth_1 = require("firebase-admin/auth");
const firebaseAdmin_json_1 = __importDefault(require("../config/firebaseAdmin.json"));
const firebaseApp = (0, app_1.initializeApp)({
    credential: firebase_admin_1.credential.cert({
        privateKey: firebaseAdmin_json_1.default.private_key,
        clientEmail: firebaseAdmin_json_1.default.client_email,
        projectId: firebaseAdmin_json_1.default.project_id,
    }),
});
exports.prisma = new client_1.PrismaClient();
const createUser = (args) => {
    (0, auth_1.getAuth)(firebaseApp)
        .verifyIdToken(args.idToken)
        .then((decodedToken) => {
        const uid = decodedToken.uid;
        // ...
        // console.log(uid);
        return exports.prisma.user.create({
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
exports.createUser = createUser;
const getUsers = () => {
    return exports.prisma.user.findMany({
        select: {
            name: true,
            username: true,
        },
    });
};
exports.getUsers = getUsers;
const getUserById = (args) => {
    return exports.prisma.user.findUniqueOrThrow({
        select: {
            name: true,
            username: true,
        },
        where: {
            id: args.id,
        },
    });
};
exports.getUserById = getUserById;
const getUserByIdToken = (args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decodedToken = yield (0, auth_1.getAuth)(firebaseApp).verifyIdToken(args.idToken);
        const uid = decodedToken.uid;
        return yield exports.prisma.user.findUniqueOrThrow({
            select: {
                name: true,
                username: true,
            },
            where: {
                firebaseUid: uid,
            },
        });
    }
    catch (error) {
        // Handle error
        console.log("Error:", error);
    }
});
exports.getUserByIdToken = getUserByIdToken;
const createLocation = (args) => {
    return exports.prisma.location.create({
        data: {
            name: args.name,
        },
    });
};
exports.createLocation = createLocation;
const createEventType = (args) => {
    return exports.prisma.eventType.upsert({
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
exports.createEventType = createEventType;
const getEventTypes = () => {
    return exports.prisma.eventType.findMany({
        select: {
            name: true,
            timeDuration: true,
            price: true,
        },
    });
};
exports.getEventTypes = getEventTypes;
