// 🟢 Day 3 — Problem 6: Two-Sum Existence
function demo(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return true;
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

console.log(demo([1, 2, 4, 6, 8, 9], 10));
// true

console.log(demo([1, 3, 5, 7], 20));
// false