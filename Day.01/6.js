// Problem 6: Count Numbers Greater Than 20
const numbers = [10, 25, 7, 40, 15, 8, 13];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 20) {
    count++;
  }
}

console.log(count); // 2