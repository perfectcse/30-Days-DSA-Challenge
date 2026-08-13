Day 4 — Frequency Counting, Set & Map
🚀 30-Day DSA Challenge
Goal: Zero → Intermediate DSA
Language: JavaScript
Day: 4/30
Status: ✅ Completed

🎯 Day 4 Objectives
Today we moved from arrays and Two-Pointer techniques into hashing-based problem solving.
Concepts Covered

Frequency Counting
Hashing
Set
Map
Duplicate Detection
Membership Checking
Frequency Analysis
Hash Map Two Sum
Brute Force vs. Optimized Approaches
Time-Space Trade-Off
Pattern Recognition
Interview Problem-Solving Strategy


🧠 1. Hashing
Hashing allows us to store and retrieve information efficiently.
In JavaScript, the two main structures used for hashing-based DSA problems are:

Set
Map


🔵 2. JavaScript Set
A Set stores unique values.
const numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(10);

console.log(numbers);

The value 10 is stored only once.
Important Methods
set.add(value);
set.has(value);
set.delete(value);

Common DSA Uses
Use a Set when the main question is:

"Have I seen this value before?"

Typical applications:

Finding duplicates
Checking membership
Finding common elements
Removing duplicates
Tracking previously seen values

Pattern
Need fast membership checking
        ↓
      Set


🟣 3. JavaScript Map
A Map stores key-value pairs.
const frequency = new Map();

frequency.set(10, 3);
frequency.set(20, 1);

Conceptually:
10 → 3
20 → 1

Important Methods
map.set(key, value);
map.get(key);
map.has(key);
map.delete(key);

Common DSA Uses
Use a Map when you need to associate information with a value.
Examples:
Value → Frequency
Value → Index
Value → Other Information

Typical applications:

Frequency counting
First non-repeating element
Most frequent element
Two Sum
Storing relationships between values

Pattern
Need information about each value
        ↓
      Map


🟢 Problem 1 — Count Frequency of an Element
Problem
const numbers = [10, 20, 10, 30, 10, 40];
const target = 10;

Expected output:
3

Because 10 appears three times.
Approach — Simple Traversal + Counter
function countFrequency(numbers, target) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      count++;
    }
  }

  return count;
}

console.log(countFrequency(numbers, target));
// 3

Logic

Start count at 0.
Traverse the array.
Compare each element with target.
Increment count when they match.
Return the count.

Complexity

Time: O(n)
Space: O(1)

Why This Approach?
We only need the frequency of one specific value, so a Map would be unnecessary.

Use the simplest efficient solution for the exact problem.


🟢 Problem 2 — Find Duplicate Elements
Problem
const numbers = [1, 2, 3, 2, 4, 5, 1, 6];

Expected duplicate values:
[1, 2]

Approach 1 — Brute Force
Compare every element with the elements that come after it.
function findDuplicates(numbers) {
  const duplicates = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (
        numbers[i] === numbers[j] &&
        !duplicates.includes(numbers[i])
      ) {
        duplicates.push(numbers[i]);
        break;
      }
    }
  }

  return duplicates;
}

Pointer Roles
i → selects the current element
j → checks the remaining elements

Complexity

Time: O(n²) in the general case
Space: O(k) for the result

This solution is correct but can be optimized.

⭐ Approach 2 — Set
Use one Set to track values already seen and another to store duplicates.
function findDuplicates(numbers) {
  const seen = new Set();
  const duplicates = new Set();

  for (const number of numbers) {
    if (seen.has(number)) {
      duplicates.add(number);
    } else {
      seen.add(number);
    }
  }

  return [...duplicates];
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));
// [2, 1]

Logic
Value not seen
    ↓
Add to seen

Value already seen
    ↓
Add to duplicates

Complexity

Time: O(n) average
Space: O(n)

Interview Choice
Set approach
Interview Explanation

"The brute-force approach compares pairs and takes O(n²). I can optimize duplicate detection by using a Set to track values that have already appeared. If a value is encountered again, it is a duplicate."

Key Pattern
Duplicate Detection
        ↓
       Set


🟢 Problem 3 — First Non-Repeating Element
Problem
const numbers = [4, 5, 1, 2, 1, 5, 4];

Expected:
2

Frequencies:
4 → 2
5 → 2
1 → 2
2 → 1

Approach 1 — Brute Force
For each element, count how many times it appears.
function findFirstNonRepeating(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let count = 0;

    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        count++;
      }
    }

    if (count === 1) {
      return numbers[i];
    }
  }

  return null;
}

Complexity

Time: O(n²)
Space: O(1)


⭐ Approach 2 — Frequency Map
First count every value, then scan the original array to find the first value whose frequency is 1.
function findFirstNonRepeating(numbers) {
  const frequency = new Map();

  for (const number of numbers) {
    frequency.set(
      number,
      (frequency.get(number) || 0) + 1
    );
  }

  for (const number of numbers) {
    if (frequency.get(number) === 1) {
      return number;
    }
  }

  return null;
}

console.log(
  findFirstNonRepeating([4, 5, 1, 2, 1, 5, 4])
);
// 2

Why Two Loops?
The loops are sequential, not nested.
First loop  → O(n)
Second loop → O(n)

Total → O(n + n)
      → O(n)

Why Scan the Original Array Again?
The Map tells us the frequency of each value.
The original array tells us the order in which values appeared.
We need both pieces of information to find the first non-repeating value.
Complexity

Time: O(n) average
Space: O(n)

Interview Choice
Frequency Map
Key Pattern
Frequency Problem
        ↓
       Map


🟢 Problem 4 — Find the Most Frequent Element
Problem
const numbers = [1, 2, 2, 3, 1, 2, 4];

Expected:
2

Frequencies:
1 → 2
2 → 3
3 → 1
4 → 1


Approach 1 — Brute Force
Count every value using another loop.
function findMostFrequentBruteForce(numbers) {
  let maxFrequency = 0;
  let mostFrequent = null;

  for (let i = 0; i < numbers.length; i++) {
    let count = 0;

    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        count++;
      }
    }

    if (count > maxFrequency) {
      maxFrequency = count;
      mostFrequent = numbers[i];
    }
  }

  return mostFrequent;
}

Complexity

Time: O(n²)
Space: O(1)

The same values may be counted repeatedly.

⭐ Approach 2 — Frequency Map
function findMostFrequent(numbers) {
  const frequency = new Map();

  let maxFrequency = 0;
  let mostFrequent = null;

  for (const number of numbers) {
    const count = (frequency.get(number) || 0) + 1;

    frequency.set(number, count);

    if (count > maxFrequency) {
      maxFrequency = count;
      mostFrequent = number;
    }
  }

  return mostFrequent;
}

console.log(
  findMostFrequent([1, 2, 2, 3, 1, 2, 4])
);
// 2

Important Variables
const frequency = new Map();

Stores the frequency of each value.
let maxFrequency = 0;

Stores the highest frequency found so far.
let mostFrequent = null;

Stores the value with the highest frequency.
Complexity

Time: O(n) average
Space: O(k)

Where k is the number of unique elements.
Interview Choice
Frequency Map
Key Pattern
Frequency + Maximum
        ↓
       Map
        +
 maxFrequency


🟢 Problem 5 — Two Sum in an Unsorted Array
Problem
const numbers = [10, 5, 2, 8, 3];
const target = 13;

Expected:
[10, 3]

Because:
10 + 3 = 13


Approach 1 — Brute Force
Try every possible pair.
function twoSumBruteForce(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers[i], numbers[j]];
      }
    }
  }

  return [];
}

Complexity

Time: O(n²)
Space: O(1)


⭐ Approach 2 — Hash Map
For an unsorted array, a Map can provide efficient complement lookup.
function twoSum(numbers, target) {
  const seen = new Map();

  for (const number of numbers) {
    const needed = target - number;

    if (seen.has(needed)) {
      return [needed, number];
    }

    seen.set(number, true);
  }

  return [];
}

console.log(twoSum([10, 5, 2, 8, 3], 13));
// [10, 3]

Logic
For each number:
needed = target - number

Example:
target = 13
number = 10

needed = 13 - 10
needed = 3

Now check whether 3 has already been seen.
if (seen.has(needed))

If yes, the pair has been found.
Otherwise, store the current number:
seen.set(number, true);

Complexity

Time: O(n) average
Space: O(n)

Interview Explanation

"The brute-force approach uses nested loops and takes O(n²). Since the array is unsorted, I can use a Hash Map to store previously seen values. For each number, I calculate the complement needed to reach the target and check whether that complement already exists."


🔑 Important Two Sum Pattern
Do not memorize:
Two Sum = Hash Map

Instead, examine the input.
Sorted Array
Two Sum
   ↓
Sorted Input
   ↓
Two Pointers

Unsorted Array
Two Sum
   ↓
Unsorted Input
   ↓
Hash Map

The input's properties help determine the appropriate pattern.

🟢 Problem 6 — Find Common Elements Between Two Arrays
Problem
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [3, 5, 7, 9];

Expected:
[3, 5]


Approach 1 — Brute Force
Compare each element of the first array with each element of the second array.
function findCommonElements(numbers1, numbers2) {
  const common = [];

  for (let i = 0; i < numbers1.length; i++) {
    for (let j = 0; j < numbers2.length; j++) {
      if (
        numbers1[i] === numbers2[j] &&
        !common.includes(numbers1[i])
      ) {
        common.push(numbers1[i]);
      }
    }
  }

  return common;
}

Complexity

Time: O(n × m)
Space: O(k) for the result


⭐ Approach 2 — Set
Store the first array in a Set, then check each value from the second array.
function findCommonElements(numbers1, numbers2) {
  const set = new Set(numbers1);
  const common = new Set();

  for (const number of numbers2) {
    if (set.has(number)) {
      common.add(number);
    }
  }

  return [...common];
}

console.log(
  findCommonElements(
    [1, 2, 3, 4, 5],
    [3, 5, 7, 9]
  )
);
// [3, 5]

Logic
First Array
    ↓
Create Set
    ↓
Scan Second Array
    ↓
Does Set contain value?
    ↓
Yes → Add to common

Complexity

Time: O(n + m) average
Space: O(n + k)

Where:

n = size of the first array
m = size of the second array
k = number of common elements

Interview Choice
Set approach
Interview Explanation

"The brute-force solution compares every element of both arrays, which takes O(n × m). I can optimize membership checking by storing the first array in a Set and then checking each element of the second array."


🧩 Day 4 Pattern Recognition



Problem
Pattern
Preferred Approach




Count Frequency
Counter
Simple Traversal


Find Duplicates
Membership
Set


First Non-Repeating
Frequency
Map


Most Frequent
Frequency + Maximum
Map


Two Sum — Unsorted
Complement Lookup
Map


Common Elements
Membership
Set




🧠 Set vs. Map
Use Set When:
The main requirement is:

"Does this value exist?"

Examples:

Find duplicates
Find common elements
Check whether a value was seen
Remove duplicates

Membership → Set


Use Map When:
You need to associate information with a value.
Examples:
Value → Frequency
Value → Index
Value → Other Information

Information about a value → Map


🔥 Brute Force vs. Optimization
The general problem-solving process is:
Understand the Problem
        ↓
Think of Brute Force
        ↓
Analyze Complexity
        ↓
Identify the Pattern
        ↓
Find a Better Approach
        ↓
Implement
        ↓
Test
        ↓
Explain Complexity

Brute Force is not automatically a bad solution.
It can help us:

Understand the problem.
Build the first correct solution.
Establish a baseline complexity.
Identify repeated work.
Find opportunities for optimization.


⚖️ Time-Space Trade-Off
Hashing often uses additional memory to reduce execution time.
Brute Force
Time  → O(n²)
Space → O(1)

Hashing
Time  → O(n) average
Space → O(n)

The optimized approach uses additional memory to avoid repeatedly scanning the same data.
This is a time-space trade-off.

🎯 Interview Strategy
Do not memorize complete functions.
Instead, remember:
Problem
   ↓
Input Property
   ↓
Pattern
   ↓
Approach
   ↓
Logic
   ↓
Code
   ↓
Complexity

Example — Duplicate Detection
Need to know whether I've seen this value?
              ↓
             Set

Example — Frequency
Need to count values?
        ↓
       Map

Example — Two Sum
Sorted array?
     ↓
Two Pointers

Unsorted array?
     ↓
Hash Map


🧠 Interview Recovery Method
If the exact code is forgotten during an interview:
Step 1 — Restate the Problem
Explain what the problem requires.
Step 2 — Identify the Pattern
Look at the input and requirements.
Step 3 — Explain the Approach
Describe the data structure or algorithm you will use.
Step 4 — Explain Why It Works
Explain the important logic before writing code.
Step 5 — Write the Basic Structure
Start with the loop and required data structures.
Step 6 — Implement the Logic
Fill in the conditions and operations.
Step 7 — Analyze Complexity
Explain time and space complexity.

Logic first, syntax second.

The goal is to understand how to reconstruct the solution rather than memorize every line.

📊 Day 4 Complexity Summary



Problem
Approach
Time
Space




Count Frequency
Counter
O(n)
O(1)


Find Duplicates
Set
O(n) average
O(n)


First Non-Repeating
Frequency Map
O(n) average
O(n)


Most Frequent
Frequency Map
O(n) average
O(k)


Two Sum — Unsorted
Hash Map
O(n) average
O(n)


Common Elements
Set
O(n + m) average
O(n + k)



Where:

n = size of first input
m = size of second input
k = number of unique/common elements, depending on the problem


🏆 Day 4 Final Recap
Today I learned:

What hashing means in practical DSA.
How JavaScript Set works.
How JavaScript Map works.
When to use Set.
When to use Map.
How to count frequencies.
How to detect duplicates.
How to find the first non-repeating element.
How to find the most frequent element.
How to solve Two Sum for an unsorted array.
How to find common elements between arrays.
How to compare Brute Force and optimized approaches.
How hashing improves lookup efficiency.
The time-space trade-off.
How to recognize patterns during interviews.
How to reconstruct solutions from logic instead of memorizing code.


📌 Day 4 Problem Checklist

[x] Problem 1 — Count Frequency of an Element
[x] Problem 2 — Find Duplicate Elements
[x] Problem 3 — First Non-Repeating Element
[x] Problem 4 — Most Frequent Element
[x] Problem 5 — Two Sum in an Unsorted Array
[x] Problem 6 — Find Common Elements


🏁 Day 4 Status
Problems: 6/6 ✅
Learning: Complete ✅
Approaches: Understood ✅
Interview Patterns: Understood ✅
Notes: Complete ✅

🔜 Before Day 5

[ ] Put all Day 4 solutions into problems.js
[ ] Test every solution in VS Code
[ ] Verify outputs
[ ] Review Set vs. Map
[ ] Review the six problem patterns
[ ] Commit changes
[ ] Push to GitHub
[ ] Update the main README
[ ] Publish the Day 4 X update


🔥 Day 4 Principle

Don't memorize the solution. Recognize the pattern, understand the trade-off, and rebuild the code from the logic.

