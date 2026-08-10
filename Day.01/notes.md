📚 Day 1 — DSA Fundamentals & Arrays
🎯 Topics Covered
What is DSA?
Data Structure vs Algorithm
Time Complexity
Space Complexity basics
Big-O: O(1), O(log n), O(n), O(n²)
Arrays
Array indexing
Array traversal
Basic array problem-solving patterns
1. What is DSA?

DSA = Data Structures + Algorithms

Data Structure

A way of organizing and storing data so we can use it efficiently.

Examples:

Array
String
Linked List
Stack
Queue
Hash Table
Tree
Graph
Algorithm

A step-by-step procedure used to solve a problem.

Simple example
Data Structure → Array
Problem → Find the largest number
Algorithm → Traverse the array and compare each element
2. Data Structure vs Algorithm
Data Structure	Algorithm
Stores and organizes data	Solves a problem
Example: Array	Example: Searching
Focuses on data organization	Focuses on steps/logic

Remember:

Data Structure = How we store data
Algorithm = How we solve a problem

⏱️ 3. Time Complexity

Time complexity describes how the running time of an algorithm grows as the input size increases.

O(1) — Constant

Takes approximately the same amount of time regardless of input size.

const numbers = [10, 20, 30, 40];

console.log(numbers[2]);

Array access by index → O(1)

O(n) — Linear

The work grows with the number of elements.

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

One complete traversal → O(n)

O(n²) — Quadratic

Usually happens with nested loops.

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}

n × n = n²

Therefore → O(n²)

O(log n) — Logarithmic

The search space is repeatedly divided, usually by half.

Example: Binary Search

16 → 8 → 4 → 2 → 1

Therefore → O(log n)

🧠 Big-O Quick Reference
Complexity	Example
O(1)	Access by array index
O(log n)	Binary Search
O(n)	Array traversal
O(n²)	Nested loops
💾 4. Space Complexity

Space complexity describes how much additional memory an algorithm uses as the input grows.

For example:

let largest = numbers[0];

Only one extra variable is being used.

Therefore, the extra space is:

O(1)

📦 5. Arrays

An array stores multiple values in a single variable.

const numbers = [10, 25, 7, 40, 15];
Indexing

Array indexes start from 0.

Index:   0   1   2   3   4
Value:  10  25   7  40  15

Access:

console.log(numbers[3]); // 40

Array access by index → O(1)

🔄 6. Array Traversal

Traversal means visiting each element of an array.

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

Time complexity → O(n)

🧩 7. Problem-Solving Patterns Learned
Comparison Pattern

Used for largest/smallest:

if (numbers[i] > largest) {
  largest = numbers[i];
}
Accumulator Pattern

Used when adding values:

let sum = 0;

sum += numbers[i];
Counter Pattern

Used when counting items:

let count = 0;

count++;
Modulo Pattern

Used to check even/odd:

numbers[i] % 2 === 0 // Even
numbers[i] % 2 !== 0 // Odd
💻 8. Day 1 Problems Solved
1. Find Largest Element

Time: O(n)
Space: O(1)

2. Find Smallest Element

Time: O(n)
Space: O(1)

3. Find Sum of Array

Time: O(n)
Space: O(1)

4. Count Even Numbers

Time: O(n)
Space: O(1)

5. Sum of Odd Numbers

Time: O(n)
Space: O(1)

6. Count Numbers Greater Than 20

Time: O(n)
Space: O(1)

⚠️ Common Mistakes
Remembering that array indexes start at 0
Confusing count with sum
Using largest when solving for smallest
Forgetting to update the tracking variable
Starting a loop from the wrong index
Using console.log() to find a value instead of understanding the logic
🎯 Day 1 Recap

Today I learned:

What DSA means
Difference between Data Structures and Algorithms
Basic Big-O notation
Time and Space Complexity
Array indexing and traversal
Comparison, accumulator, counter, and modulo patterns
How to solve basic array problems using JavaScript
⭐ Key Lesson

Understand the problem → Build the approach → Dry Run → Code → Test → Analyze Complexity