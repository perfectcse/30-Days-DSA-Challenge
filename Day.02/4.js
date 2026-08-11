//Problem 4 — Find First Occurrence
const numbers = [5, 10, 15, 10, 20, 10];
const target = 10;
let firstindex=-1;
for (let  i=0; i<numbers.length; i++)
{
    if (numbers[i]=== target){
        firstindex=i;
        break;
    }
}
console.log(firstindex); // 1


// solve function approach
function findFirstOccurrence(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            return i;
        }
    }
    return -1;
}

const firstIndex = findFirstOccurrence([5, 10, 15, 10, 20, 10], 10);
console.log(firstIndex); // 1