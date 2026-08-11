// Find the Maximum Value's Index
const numbers = [10, 45, 7, 32, 45, 20];
let maxindex = 0;
for (let i = 1; i < numbers.length; i++){
    if (numbers[i] > numbers[maxindex]) {
        maxindex = i;
    }
}
console.log(maxindex); // 1 

// solve function approach
function findMaxValueIndex(numbers) {
    let maxindex = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[maxindex]) {
            maxindex = i;
        }
    }
    return maxindex;
}

const maxIndex = findMaxValueIndex([10, 45, 7, 32, 45, 20]);
console.log(maxIndex); // 1