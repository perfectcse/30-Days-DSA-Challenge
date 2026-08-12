//Approach 1 — Adjacent Comparison  DSA Challenge Choice
function sort (numbers){
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log(sort([10,20,30,40,50])) // true
console.log(sort([10,20,15,40,50])) // false

//2. Approach 2 — Sort and Compare
function isSorted(numbers) {
  const sorted = [...numbers].sort((a, b) => a - b);

  return JSON.stringify(numbers) === JSON.stringify(sorted);
}
console.log(isSorted([10, 20, 30, 40, 50])); // true
console.log(isSorted([10, 20, 15, 40, 50])); // false

//3. ⚠️ Approach 3 — Count Violations
function isort(numbers) {
  let violations = 0;

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
      violations++;
    }
  }

  return violations === 0;
}
console.log(isort([10, 20, 30, 40, 50])); // true
console.log(isort([10, 20, 15, 40, 50])); // false