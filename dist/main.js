"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const corsOptions = {
    origin: true,
    optionsSuccessStatus: 200,
};
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.listen(8000, () => {
    console.log("Server start on port 8000!");
});
routes_1.AppRoutes.forEach((route) => {
    app[route.method](route.path, (request, response) => {
        return route.action(request, response);
    });
});
module.exports = app;
