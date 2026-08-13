function findMostFrequent(numbers) {
  const frequency = new Map();

  let maxFrequency = 0;
  let mostFrequent = null;

  for (const number of numbers) {
    const count = (frequency.get(number) || 0) + 1;

    frequency.set(number, count);

    if (count > maxFrequency) {
      maxFrequency = count;
      mostFrequent = number;
    }
  }

  return mostFrequent;
}

const numbers = [1, 2, 2, 3, 1, 2, 4];

console.log(findMostFrequent(numbers));
// 2