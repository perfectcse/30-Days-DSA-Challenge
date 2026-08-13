// frequency Map
// Time O(n)
//space O(n)

function demo(numbers) {
  const frequency = new Map();

  // Step 1: Count frequencies
  for (const number of numbers) {
    frequency.set(number, (frequency.get(number) || 0) + 1);
  }

  // Step 2: Find the first element with frequency 1
  for (const number of numbers) {
    if (frequency.get(number) === 1) {
      return number;
    }
  }

  return null;
}

const numbers = [4, 5, 1, 2, 1, 5, 4];

console.log(demo(numbers));
// 2