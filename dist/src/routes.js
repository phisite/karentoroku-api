"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const karentoroku_handlers_1 = require("./karentoroku/karentoroku.handlers");
exports.AppRoutes = [
    {
        path: "/",
        method: "get",
        action: karentoroku_handlers_1.getIndexHandler,
    },
    {
        path: "/createUser",
        method: "post",
        action: karentoroku_handlers_1.createUserHandler,
    },
    {
        path: "/getUsers",
        method: "post",
        action: karentoroku_handlers_1.getUsersHandler,
    },
    {
        path: "/getUserById",
        method: "post",
        action: karentoroku_handlers_1.getUserByIdHandler,
    },
    {
        path: "/getUserByIdToken",
        method: "post",
        action: karentoroku_handlers_1.getUserByIdTokenHandler,
    },
    {
        path: "/createAppointment",
        method: "post",
        action: karentoroku_handlers_1.createAppointmentHandler,
    },
    {
        path: "/getAppointments",
        method: "post",
        action: karentoroku_handlers_1.getAppointmentsHandler,
    },
    {
        path: "/createEventType",
        method: "post",
        action: karentoroku_handlers_1.createEventTypeHandler,
    },
    {
        path: "/getEventType",
        method: "post",
        action: karentoroku_handlers_1.getEventTypeHandler,
    },
];
