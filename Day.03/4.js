// move to all zero to the end of an array
function zero (number){
    let zeroindex = 0;
    // move non-zero elements forward
    for (let i = 0; i<number.length; i++){
        if (number[i] !==0){
         number[zeroindex] = number[i];
         zeroindex++;
        }
    }
    // fill remaining positions with zero
    while (zeroindex < number.length){
        number[zeroindex] = 0;
        zeroindex++;
    }
    return number
}
const number =[0,1,0,3,12];

console.log(zero(number));
// [1, 3, 12, 0, 0]