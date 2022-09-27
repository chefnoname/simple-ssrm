import OlympicWinner from './src/models/OlympicWinner';
import data from './src/data.json';

function initOlympicWinnerCollection() {
  OlympicWinner.collection.drop();
  return OlympicWinner.insertMany(data.olympicWinners);
}

export default initOlympicWinnerCollection;
