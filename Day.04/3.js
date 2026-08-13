// Approach  Brute force 
function demo(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let count = 0;

    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        count++;
      }
    }

    if (count === 1) {
      return numbers[i];
    }
  }

  return null;
}

const numbers = [4, 5, 1, 2, 1, 5, 4];

console.log(demo(numbers));
// 2