function removeDuplicates(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (!result.includes(numbers[i])) {
      result.push(numbers[i]);
    }
  }

  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// [1, 2, 3, 4, 5]