import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
} from 'graphql';
import OlympicWinner from '../models/OlympicWinner';

const AthleteType = new GraphQLObjectType({
  name: 'OlympicWinner',
  fields: () => ({
    id: { type: GraphQLID },
    athlete: { type: GraphQLString },
    age: { type: GraphQLInt },
    country: { type: GraphQLString },
    year: { type: GraphQLInt },
    date: { type: GraphQLString },
    sport: { type: GraphQLString },
    gold: { type: GraphQLInt },
    silver: { type: GraphQLInt },
    bronze: { type: GraphQLInt },
    total: { type: GraphQLInt },
  }),
});

const TableInfo = new GraphQLObjectType({
  name: 'TableInfo',
  fields: () => ({
    count: {
      type: GraphQLInt,
    },
  }),
});

// read the start row and the end row

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',

  fields: () => ({
    rows: {
      type: new GraphQLList(AthleteType),
      resolve() {
        return OlympicWinner.find();
      },
    },

    lastRow: {
      type: GraphQLInt,
      resolve() {
        return OlympicWinner.count();
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
