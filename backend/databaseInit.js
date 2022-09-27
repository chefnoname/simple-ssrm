"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const init_1 = __importDefault(require("./init"));
mongoose_1.default.connect('mongodb+srv://mongo:foofle123@cluster0.tcpe8it.mongodb.net/olympians');
mongoose_1.default.connection.once('open', () => {
    (0, init_1.default)().then(() => {
        process.exit(1);
    });
});
