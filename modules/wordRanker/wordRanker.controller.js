import rank from './wordRanker.service.js';
import queryTopic from '../../api/wikipedia.api.js';

export default async function (req, res) {
  const { topic } = req.query;
  const words = await queryTopic(topic);
  const rankResult = await rank(words);
  res.json({ data: rankResult });
}
