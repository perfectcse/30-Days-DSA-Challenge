// Count Freqency of an Element 
//const number = [10,20,10,30,10,40];
//const target = 10;

// Approach Simple traversal 
function free (numbers,target ){
    let count = 0;

    for (let i= 0; i<numbers.length; i++){
        if (numbers[i] === target) {
            count++;
        }
    }
    return count;
}
const numbers = [10,20,10,30,10,40];
console.log(free(numbers, 10));
// 3

// frequnec map 
function Book(numbers) {
    const frequency = new Map();

    for (let num of numbers) {
        if (frequency.has(num)) {
            frequency.set(num, frequency.get(num) + 1);
        } else {
            frequency.set(num, 1);
        }
    }

    return frequency;
}

console.log(Book([10, 20, 10, 30, 10, 40]));