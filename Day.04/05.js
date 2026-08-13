function twoSumBruteForce(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers[i], numbers[j]];
      }
    }
  }

  return [];
}

console.log(twoSumBruteForce([10, 5, 2, 8, 3], 13));
// [10, 3]

// Time  → O(n²)
//Space → O(1)