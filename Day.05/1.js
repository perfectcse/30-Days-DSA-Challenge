// Move All Zero to the find 

// Approach 1 - Brute force 

function zero(numbers){
const result = [];

for (let i=0; i < numbers.length;i++ )
{
    if (numbers[i] !==0)
    {
        result.push(numbers[i]);
    }
}

for (let i =0;  i < numbers.length;i++)
{
    if (numbers[i] ===0)
    {
        result.push(0);
    }
}
return result;
}
console.log(zero([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]