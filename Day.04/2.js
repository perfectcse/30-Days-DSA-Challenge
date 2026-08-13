function say(numbers) {
  const duplicates = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j] && !duplicates.includes(numbers[i])) {
        duplicates.push(numbers[i]);
        break;
      }
    }
  }

  return duplicates;
}

const numbers = [1, 2, 3, 2, 4, 5, 1, 6];

console.log(say(numbers));
// [1, 2]

