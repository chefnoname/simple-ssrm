import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import mongoose from 'mongoose';
import schema from './schema/schema';

const app = express();

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

const port = 1212;

mongoose.connect(
  'mongodb+srv://mongo:foofle123@cluster0.tcpe8it.mongodb.net/olympians'
);

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

setTimeout(() => {
  console.log(
    mongoose.connection.readyState === 1
      ? 'connected to mongoDB'
      : 'not connected'
  );
}, 1000);

app.listen(1212, () => {
  console.log(`listening on port: ${port}`);
});
