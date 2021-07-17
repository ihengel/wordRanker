import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import express from 'express';
import wordRanker from './modules/wordRanker/wordRanker.controller.js';

const app = express();

// app.use(cors());
app.use(express.static('public'))

app.get('/rank', wordRanker);
const filename = fileURLToPath(import.meta.url);
app.get('*', (_, res) => {
  res.sendFile(path.join(dirname(filename), '/public/ui/index.html'));
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
