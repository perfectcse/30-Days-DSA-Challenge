//  Problem 5 — Remove Duplicates from a Sorted Array
function demo(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  let slow = 0;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== numbers[slow]) {
      slow++;
      numbers[slow] = numbers[i];
    }
  }

  return numbers.slice(0, slow + 1);
}

const numbers = [1, 1, 2, 2, 3, 4, 4];

console.log(demo(numbers));
// [1, 2, 3, 4]