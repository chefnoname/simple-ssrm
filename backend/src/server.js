"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const schema_1 = __importDefault(require("./schema/schema"));
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:3000'];
const options = {
    origin: allowedOrigins,
};
app.use((0, cors_1.default)(options));
const port = 1212;
mongoose_1.default.connect('mongodb+srv://mongo:foofle123@cluster0.tcpe8it.mongodb.net/olympians');
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.default,
    graphiql: true,
}));
setTimeout(() => {
    console.log(mongoose_1.default.connection.readyState === 1
        ? 'connected to mongoDB'
        : 'not connected');
}, 1000);
app.listen(1212, () => {
    console.log(`listening on port: ${port}`);
});
