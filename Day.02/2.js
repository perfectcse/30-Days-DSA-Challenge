// 🟢 Problem 2 — Search for a Target
const numbers = [10, 25, 7, 40, 15];
const target = 15;
let index = -1;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        index = i;
        break;
    }
}

console.log(index); //3