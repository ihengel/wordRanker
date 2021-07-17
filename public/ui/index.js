function rankToStars(rank) {
  switch (rank) {
    case 1:
      return '*';
    case 2:
      return '**';
    case 3:
      return '***';
    case 4:
      return '****';
    case 5:
      return '*****';
    default:
      return '';
  }
}

document.querySelector('#rankBtn').addEventListener('click', async () => {
  const topic = document.querySelector('#topicToRank').value;
  const url = `rank?topic=${topic}`;
  const response = await fetch(url);
  const { data } = await response.json();
  const wordsByStars = Object.keys(data).reduce((acc, word) => {
    const rank = data[word];
    if (acc[rank]) {
      acc[rank].push(word);
    } else {
      acc[rank] = [word];
    }
    return acc;
  }, {});
  const fragment = document.createDocumentFragment();
  Object.keys(wordsByStars).sort().reverse().forEach((rank) => {
    const words = wordsByStars[rank];
    words.sort();
    words.forEach((word) => {
      const li = document.createElement('li');
      li.textContent = `${word} (${rankToStars(data[word])})`;
      fragment.appendChild(li);
    });
  });
  const resultElement = document.querySelector('#resultList');
  resultElement.innerHTML = '';
  document.querySelector('#resultList').appendChild(fragment);
});
