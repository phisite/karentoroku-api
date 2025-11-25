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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventTypeHandler = exports.createEventTypeHandler = exports.getUserByIdTokenHandler = exports.getUserByIdHandler = exports.getUsersHandler = exports.createUserHandler = exports.getIndexHandler = void 0;
const karentoroku_interfaces_1 = require("./karentoroku.interfaces");
const karentoroku_resolvers_1 = require("./karentoroku.resolvers");
const getIndexHandler = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).end(`Hello!`);
};
exports.getIndexHandler = getIndexHandler;
const createUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req === null || req === void 0 ? void 0 : req.body;
    if (karentoroku_interfaces_1.CreateUserCodec.decode(args)._tag === "Right") {
        try {
            const result = yield (0, karentoroku_resolvers_1.createUser)({
                name: args.name,
                username: args.username,
                idToken: args.idToken,
            });
            res.status(200).json(result);
        }
        catch (e) {
            res.status(500).json({
                error: String(e),
            });
        }
    }
    else {
        res.status(500).json({ error: "ERROR: invalid request (CreateUserCodec)" });
    }
});
exports.createUserHandler = createUserHandler;
const getUsersHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, karentoroku_resolvers_1.getUsers)();
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.getUsersHandler = getUsersHandler;
const getUserByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req === null || req === void 0 ? void 0 : req.body;
    if (typeof args.id === "number") {
        try {
            const result = yield (0, karentoroku_resolvers_1.getUserById)({
                id: args.id,
            });
            res.status(200).json(result);
        }
        catch (e) {
            res.status(500).json({
                error: String(e),
            });
        }
    }
    else {
        res.status(500).json({ error: "ERROR: invalid request (getUser)" });
    }
});
exports.getUserByIdHandler = getUserByIdHandler;
const getUserByIdTokenHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const args = req === null || req === void 0 ? void 0 : req.body;
    if (typeof args.idToken === "string") {
        try {
            const result = yield (0, karentoroku_resolvers_1.getUserByIdToken)({
                idToken: args.idToken,
            });
            res.status(200).json(result);
        }
        catch (e) {
            res.status(500).json({
                error: String(e),
            });
        }
    }
    else {
        res
            .status(500)
            .json({ error: "ERROR: invalid request (getUserByIdToken)" });
    }
});
exports.getUserByIdTokenHandler = getUserByIdTokenHandler;
const createEventTypeHandler = (req, res) => {
    const body = req.body;
    console.log(body);
    console.log(karentoroku_interfaces_1.CreateEventTypeCodec.decode(body));
    if (karentoroku_interfaces_1.CreateEventTypeCodec.decode(body)._tag === "Right") {
        return (0, karentoroku_resolvers_1.createEventType)(body)
            .then((response) => res.status(200).send(response))
            .catch((error) => res.status(500).send(error));
    }
    else {
        res.status(500).send("Failed to validate codec");
    }
};
exports.createEventTypeHandler = createEventTypeHandler;
// export const createLocationHandler = (req: Request, res: Response) => {
//   const body = req.body;
//   console.log(body)
//   console.log(CreateLocationCodec.decode(body));
//   if (CreateEventTypeCodec.decode(body)._tag === "Right") {
//     return createTimeSelect(body)
//       .then((response) => res.status(200).send(response))
//       .catch((error) => res.status(500).send(error));
//   } else {
//     res.status(500).send("Failed to validate codec");
//   }
// };
const getEventTypeHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req === null || req === void 0 ? void 0 : req.body;
    try {
        const result = yield (0, karentoroku_resolvers_1.getEventTypes)();
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            error: String(e),
        });
    }
});
exports.getEventTypeHandler = getEventTypeHandler;
