function firstRepeating(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return nums[i];
            }
        }
    }

    return -1;
}
console.log(firstRepeating([2,1,3,5,3,2]));//2