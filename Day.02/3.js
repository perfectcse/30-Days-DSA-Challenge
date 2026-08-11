//Problem 3 — Count Occurrences
const numbers = [10, 20, 10, 30, 10, 40];
const target = 10;
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        count++;
    }
}
console.log(count); //3