//  Problem 4 — Count Even Numbers
const numbers = [10,25,7,40,15];

let evenCount = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount++;
  }
}
console.log("Count of even numbers:", evenCount); // 2