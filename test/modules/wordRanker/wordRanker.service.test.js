const rank = require('../../../modules/wordRanker/wordRanker.service.js');

test('rank from example', async () => {
  const text = `car bicycle car bicycle car bicycle
     car bicycle car bicycle car bicycle 
     plane plane truck
    `;

  const result = rank(text);
  expect(result.car).toBe(5);
  expect(result.bicycle).toBe(5);
  expect(result.plane).toBe(2);
  expect(result.truck).toBe(1);
});
