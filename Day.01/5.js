// Problem 5: Find the Sum of Odd Numbers in an Array
function odd(arr) {
let oddSum = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i] % 2 !== 0) {
oddSum += arr[i];
}
}
return oddSum;
}
console.log(odd([10, 25, 7, 40, 15])); // 47