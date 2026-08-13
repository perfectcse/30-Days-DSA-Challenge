// Approach 1 — Brute Force 🧠
function findCommonElements(numbers1, numbers2) {
  const common = [];

  for (let i = 0; i < numbers1.length; i++) {
    for (let j = 0; j < numbers2.length; j++) {
      if (
        numbers1[i] === numbers2[j] &&
        !common.includes(numbers1[i])
      ) {
        common.push(numbers1[i]);
      }
    }
  }

  return common;
}

console.log(
  findCommonElements([1, 2, 3, 4, 5], [3, 5, 7, 9])
);
// [3, 5]