import axios from 'axios';
import { convert } from 'html-to-text';

export default async function queryTopic(topic) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=${topic}`;
  const wikipediaResponse = await axios.get(url);
  const [firstPage] = Object.values(wikipediaResponse.data.query.pages);
  const { extract } = firstPage;

  const text = convert(extract, {
    wordwrap: false,
  });

  return text;
}
