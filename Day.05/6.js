// find intersection of two array
function intersectionBruteForce(nums1, nums2) {
    const result = [];

    for (let i = 0; i < nums1.length; i++) {

        for (let j = 0; j < nums2.length; j++) {

            if (nums1[i] === nums2[j]) {

                if (!result.includes(nums1[i])) {
                    result.push(nums1[i]);
                }

                break;
            }
        }
    }

    return result;
}

const nums1 = [1, 2, 3, 4];
const nums2 = [3, 4, 5, 6];

console.log(intersectionBruteForce(nums1, nums2));
// [3, 4]