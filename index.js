import express from 'express';
import cors from 'cors';
import wordRanker from './modules/wordRanker/wordRanker.controller.js';

const app = express();

app.use(cors());

app.get('/rank', wordRanker);

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
