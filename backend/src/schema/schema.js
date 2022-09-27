"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const OlympicWinner_1 = __importDefault(require("../models/OlympicWinner"));
const AthleteType = new graphql_1.GraphQLObjectType({
    name: 'OlympicWinner',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        athlete: { type: graphql_1.GraphQLString },
        age: { type: graphql_1.GraphQLInt },
        country: { type: graphql_1.GraphQLString },
        year: { type: graphql_1.GraphQLInt },
        date: { type: graphql_1.GraphQLString },
        sport: { type: graphql_1.GraphQLString },
        gold: { type: graphql_1.GraphQLInt },
        silver: { type: graphql_1.GraphQLInt },
        bronze: { type: graphql_1.GraphQLInt },
        total: { type: graphql_1.GraphQLInt },
    }),
});
const TableInfo = new graphql_1.GraphQLObjectType({
    name: 'TableInfo',
    fields: () => ({
        count: {
            type: graphql_1.GraphQLInt,
        },
    }),
});
// read the start row and the end row
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        rows: {
            type: new graphql_1.GraphQLList(AthleteType),
            resolve() {
                return OlympicWinner_1.default.find();
            },
        },
        lastRow: {
            type: graphql_1.GraphQLInt,
            resolve() {
                return OlympicWinner_1.default.count();
            },
        },
    }),
});
const schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
});
exports.default = schema;
