// Two sum in Unsorted array

function twoSum(numbers, target) {
  const seen = new Map();

  for (const number of numbers) {
    const needed = target - number;

    if (seen.has(needed)) {
      return [needed, number];
    }

    seen.set(number, true);
  }

  return [];
}

console.log(twoSum([10, 5, 2, 8, 3], 13));
// [10, 3]

