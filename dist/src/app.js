"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
exports.app = (0, express_1.default)();
const corsOptions = {
    origin: true,
    optionsSuccessStatus: 200,
};
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)(corsOptions));
routes_1.AppRoutes.forEach((route) => {
    exports.app[route.method](route.path, (request, response) => {
        return route.action(request, response);
    });
});
