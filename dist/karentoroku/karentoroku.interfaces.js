"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventTypeCodec = exports.CreateUserCodec = void 0;
const t = __importStar(require("io-ts"));
exports.CreateUserCodec = t.type({
    name: t.string,
    username: t.string,
    idToken: t.string,
});
// Frontend sends days and dates separately, we combine them in the handler
exports.CreateEventTypeCodec = t.type({
    name: t.string,
    description: t.string,
    price: t.number,
    timeDuration: t.number,
    userId: t.number,
    days: t.array(t.type({
        dayName: t.string,
    })),
    dates: t.array(t.type({
        date: t.string,
    })),
    timeSlots: t.array(t.type({
        startTime: t.number,
        endTime: t.number,
    })),
    locations: t.array(t.type({
        locationName: t.string,
    })),
});
