function intersection(nums1, nums2) {
    const set = new Set(nums2);
    const result = new Set();

    for (let num of nums1) {

        if (set.has(num)) {
            result.add(num);
        }
    }

    return [...result];
}

const nums1 = [1, 2, 3, 4];
const nums2 = [3, 4, 5, 6];

console.log(intersection(nums1, nums2));
// [3, 4]