"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const winnerSchema = new Schema({
    _id: String,
    athlete: String,
    age: Number,
    country: String,
    year: Number,
    date: String,
    sport: String,
    gold: Number,
    silver: Number,
    bronze: Number,
    total: Number,
});
const OlympicWinner = mongoose_1.default.model('OlympicWinner', winnerSchema);
exports.default = OlympicWinner;
