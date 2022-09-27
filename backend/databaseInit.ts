import mongoose from 'mongoose';
import initOlympicWinnerCollection from './init';

mongoose.connect(
  'mongodb+srv://mongo:foofle123@cluster0.tcpe8it.mongodb.net/olympians'
);

mongoose.connection.once('open', () => {
  initOlympicWinnerCollection().then(() => {
    process.exit(1);
  });
});
