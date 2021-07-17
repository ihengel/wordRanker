function mapStars(scores) {
  const maxScore = Math.max(...scores);
  return scores.reduce((acc, s) => {
    acc[s] = Math.round((s / maxScore) * 5) || 1;
    return acc;
  }, {});
}

function safeInc(obj, key) {
  const incrementedObj = obj;
  if (incrementedObj[key]) {
    incrementedObj[key] += 1;
  } else {
    incrementedObj[key] = 1;
  }
  return incrementedObj;
}

export default function rank(text) {
  const words = text.split(/\s+/);

  const countByWord = words
    .map((w) => w.replace(/[^a-zA-Z]/g, '').toLowerCase())
    .filter((w) => w.length > 0)
    .reduce((counterAcc, w) => safeInc(counterAcc, w), {});
  const scores = Object.values(countByWord);

  const starsByScore = mapStars(scores);
  const starsByWords = Object.keys(countByWord).reduce((acc, w) => {
    acc[w] = starsByScore[countByWord[w]];
    return acc;
  }, {});
  return starsByWords;
}
