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
const karentoroku_resolvers_1 = require("./karentoroku.resolvers");
const setup_1 = require("../../tests/setup");
describe("Karentaroku", () => {
    const username1 = "testuser";
    let userId1;
    test("should get all users", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, karentoroku_resolvers_1.getUsers)();
        expect(result.length).toBeGreaterThan(0);
    }));
    test("should get a user by ID", () => __awaiter(void 0, void 0, void 0, function* () {
        // We fetch the seeded user 'testuser'
        const user = yield setup_1.prisma.user.findFirstOrThrow({
            where: { username: username1 }
        });
        const result = yield (0, karentoroku_resolvers_1.getUserById)({ id: user.id });
        expect(result.username).toStrictEqual(username1);
    }));
});
