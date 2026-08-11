// Find the Last Occurrence
const numbers = [5, 10, 15, 10, 20, 10];
const target = 10;
let index = -1;
for (let i=0; i<numbers.length; i++){
    if (numbers[i] === target){
        index = i;
    }
}
console.log(index); // 5

// solve function approach
function findLastOccurrence(numbers, target) {
    let index = -1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            index = i;
        }
    }
    return index;
}

const lastIndex = findLastOccurrence([5, 10, 15, 10, 20, 10], 10);
console.log(lastIndex); // 5