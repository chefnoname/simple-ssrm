"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OlympicWinner_1 = __importDefault(require("./src/models/OlympicWinner"));
const data_json_1 = __importDefault(require("./src/data.json"));
function initOlympicWinnerCollection() {
    OlympicWinner_1.default.collection.drop();
    return OlympicWinner_1.default.insertMany(data_json_1.default.olympicWinners);
}
exports.default = initOlympicWinnerCollection;
