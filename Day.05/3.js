// Find the missing number 

function missingNumber(nums) {
    const n = nums.length;

    for (let i = 0; i <= n; i++) {
        let found = false;

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === i) {
                found = true;
                break;
            }
        }

        if (!found) {
            return i;
        }
    }
}
console.log(missingNumber([3,0,1])); // 2