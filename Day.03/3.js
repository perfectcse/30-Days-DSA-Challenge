// find a pair with given a sum 
const numbers = [7,2,11,13,5];
numbers.total =9;
console.log(numbers.total);

// DSA Approach 
function findPairWithSum(numbers1, target) {
  let left = 0;
  let right = numbers1.length - 1;

  while (left < right) {
    const sum = numbers1[left] + numbers1[right];

    if (sum === target) {
      return [numbers1[left], numbers1[right]];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

const numbers1 = [2, 7, 11, 15];
const target = 9;

const result = findPairWithSum(numbers1, target);

console.log(result); // [2, 7]

