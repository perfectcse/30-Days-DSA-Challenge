// Problem 6 — Find Common Elements Between Two Arrays
// Approach set
function findCommonElements(numbers1, numbers2) {
  const set = new Set(numbers1);
  const common = new Set();

  for (const number of numbers2) {
    if (set.has(number)) {
      common.add(number);
    }
  }

  return [...common];
}

console.log(
  findCommonElements([1, 2, 3, 4, 5], [3, 5, 7, 9])
);
// [3, 5]

