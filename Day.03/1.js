// Approach 1. Built in method
const  numbers = [10,20,30,40,50];
numbers.reverse();
console.log(numbers);

// Traverse from the end 
const numbers1 =[10,20,30,40,50];
const reversedArray =[];
for (let i = numbers1.length - 1; i >= 0; i--) {
    reversedArray.push(numbers1[i]);
}
console.log(reversedArray);
 
// Approach 3 — Two Pointers — DSA Solution with function
function array(numbers){
    let left  =0;
    let right = numbers.length -1;

    while (left <right )
    {
        let temp  =numbers[left];
        numbers[left] = numbers[right];
        numbers[right] = temp;
        left++;
        right--;
    }
    return numbers;
}
console.log(array([10,20,30,40,50]));

// last digit = num %10
// reverse = reverse *10+last digit
// num = num/10
// DSA 