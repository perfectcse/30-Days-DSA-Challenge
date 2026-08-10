//Q2: Find the Smallest Element
const numbers = [10, 25, 7, 40, 15];

let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}

console.log("Smallest number:", smallest); // 7