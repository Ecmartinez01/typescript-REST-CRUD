"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
exports.app.use((0, morgan_1.default)("dev"));
exports.app.use((0, cors_1.default)());
