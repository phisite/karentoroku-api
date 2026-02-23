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
const headerAuth_1 = require("./middleware/headerAuth");
exports.app = (0, express_1.default)();
const corsOptions = {
    origin: true,
    optionsSuccessStatus: 200,
};
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)(corsOptions));
exports.app.use(headerAuth_1.headerAuth);
// Health endpoint for quick checks
exports.app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});
// Auth test endpoint to validate header auth flow
exports.app.get("/authTest", (req, res) => {
    const tokenInfo = req.firebaseToken;
    if (!tokenInfo)
        return res.status(401).json({ error: "Unauthorized" });
    res.json({ ok: true, uid: tokenInfo.uid });
});
routes_1.AppRoutes.forEach((route) => {
    exports.app[route.method](route.path, (request, response) => {
        return route.action(request, response);
    });
});
