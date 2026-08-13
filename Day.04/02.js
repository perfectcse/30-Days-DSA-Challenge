function findDuplicates(numbers) {
  const seen = new Set();
  const duplicates = new Set();

  for (const number of numbers) {
    if (seen.has(number)) {
      duplicates.add(number);
    } else {
      seen.add(number);
    }
  }

  return [...duplicates];
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));
// [2, 1]