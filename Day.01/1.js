//Problem 1: Find the Largest Element in an Array

// Problem Statement: Given an array of numbers, return the largest element in the array.
let numbers = [10, 25, 7, 42, 18];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log("Largest number:", largest);