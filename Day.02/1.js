// Find the index of 40 using a for loop.
const numbers = [10, 25, 7, 40, 15];
let index = -1;
for (let i = 0; i< numbers.length; i++){
    if (numbers[i] === 40) {
        index = i;
        break;
    }
}
console.log(index); //3