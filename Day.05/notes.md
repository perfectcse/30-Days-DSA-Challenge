Day 5 — Arrays, Two Pointers, Set & Hashing
Goal
Practice array problem-solving, basic hashing, Set, Map, Two Pointers, and mathematical patterns.
The main objective is to recognize the correct pattern instead of memorizing solutions.

Q1 — Move All Zeros to End
Pattern
Two Pointers / Write Pointer
Core Idea
Maintain a position for the next non-zero element and move valid elements forward.
Key Lesson
When the problem asks us to move valid elements while handling unwanted elements, think about a write pointer or Two Pointers.
Complexity

Time: O(n)
Space: O(1)


Q2 — Remove Duplicates From Array
Pattern
Set / Two Pointers depending on constraints
Core Idea
For an unsorted array, a Set can track values that have already appeared.
For a sorted array, Two Pointers can often remove duplicates in-place.
Key Lesson
If the problem asks whether a value has already appeared, think Set.
Complexity
Typical Set solution:

Time: O(n)
Space: O(n)


Q3 — Find the Missing Number
Pattern
Mathematical Relationship
Given numbers from 0 to n with one missing number:
Expected Sum - Actual Sum = Missing Number

Formula
n * (n + 1) / 2

Optimized Code
function missingNumber(nums) {
    const n = nums.length;

    const expectedSum = n * (n + 1) / 2;

    let actualSum = 0;

    for (let num of nums) {
        actualSum += num;
    }

    return expectedSum - actualSum;
}

Complexity

Time: O(n)
Space: O(1)

Interview Explanation
"I can calculate the expected sum from 0 to n and subtract the actual array sum. The difference is the missing number."

Q4 — First Duplicate
Pattern
Set / Hashing
Core Idea
Track values that have already been seen.
Current value
      ↓
Have I seen it?
      ↓
YES → duplicate
NO → store it

Optimized Code
function firstDuplicate(nums) {
    const seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) {
            return num;
        }

        seen.add(num);
    }

    return -1;
}

Complexity

Time: O(n) average
Space: O(n)

Interview Explanation
"I use a Set to track previously seen values. If the current value already exists in the Set, it is the first duplicate encountered."

Q5 — Two Sum
Pattern
Hash Map
Problem
Find two numbers whose sum equals the target and return their indices.
Example:
nums = [2, 7, 11, 15]
target = 9

Answer:
[0, 1]


Approach 1 — Brute Force
Check every possible pair.
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
}

Complexity

Time: O(n²)
Space: O(1)


Approach 2 — Hash Map
For every number:
complement = target - current

Then check whether the complement has already been seen.
function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [];
}

Complexity

Time: O(n) average
Space: O(n)

Pattern
Two Sum
→ Need required number
→ target - current
→ Need fast lookup
→ Hash Map

Interview Explanation
"The brute-force solution checks every pair in O(n²). I can optimize it using a Hash Map. For each value, I calculate its complement using target minus the current value and check whether that complement has already been seen. This gives O(n) average time with O(n) extra space."

Q6 — Intersection of Two Arrays
Pattern
Set / Fast Lookup
Example:
nums1 = [1, 2, 3, 4]
nums2 = [3, 4, 5, 6]

Output:
[3, 4]


Approach 1 — Brute Force
Compare every element from the first array with every element from the second array.
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

Complexity

Time: O(n × m), with the includes check potentially adding more work
Space: O(k), where k is the number of unique results


Approach 2 — Set
Store the second array in a Set and perform fast membership checks.
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

Complexity

Time: O(n + m) average
Space: O(m + k)

Interview Explanation
"The brute-force approach compares every element of both arrays. We can optimize membership checking by putting one array into a Set. Then we can check each value from the other array using Set.has(), giving O(n + m) average time."

Day 5 — Pattern Summary
Move elements
→ Two Pointers / Write Pointer

Remove duplicates
→ Set / Two Pointers

Missing number
→ Sum Formula

Check whether value was seen
→ Set

Two Sum
→ Hash Map

Array Intersection
→ Set


Key Lessons

Do not memorize complete solutions.
Start with the simplest correct approach.
Identify the bottleneck.
Select a data structure based on the operation required.
Set is useful for fast membership checking.
Map is useful when we need fast lookup plus associated information such as an index.
Two Pointers can reduce repeated work in array problems.
Always explain the time-space trade-off.
Logic comes before JavaScript syntax.
In interviews, explain your thinking instead of silently jumping to code.


Final Day 5 Checklist

[yes] Q1 understood
[yes] Q2 understood
[yes] Q3 understood
[yes] Q4 understood
[yes] Q5 understood
[yes] Q6 understood
[yes] Brute-force approaches understood
[yes] Optimized approaches understood
[yes] Complexity understood
[yes] Patterns recognized
[yes] Interview explanations understood
[yes] Test problems.js in VS Code
[yes] Review notes.md
[yes] Commit changes
[yes] Push to GitHub
[yes] Update main README
[yes] Prepare X post


Day 5 Final Principle
PROBLEM
   ↓
PATTERN
   ↓
APPROACH
   ↓
LOGIC
   ↓
CODE
   ↓
COMPLEXITY
   ↓
INTERVIEW EXPLANATION

Understanding > Speed
Pattern Recognition > Memorization
Logic > Syntax
