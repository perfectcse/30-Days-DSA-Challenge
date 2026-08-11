30 Days DSA Challenge 🚀

A structured 30-day Data Structures & Algorithms challenge focused on building strong problem-solving fundamentals with JavaScript.

The goal is to progress from basic DSA concepts to intermediate-level problem solving through daily practice, dry runs, reusable functions, complexity analysis, and interview-oriented explanations.

📌 Challenge Overview

Item

Details

Duration

30 Days

Language

JavaScript

Level

Zero → Intermediate

Primary Focus

DSA, Problem Solving & Interview Preparation

Current Progress

Day 2 Completed ✅

Learning Approach

For every problem, the focus is:

Understand the Problem → Build the Approach → Dry Run → Code → Test → Analyse Complexity

📚 Day 1 — DSA Fundamentals & Arrays

🎯 Topics Covered

What is DSA?

Data Structures vs Algorithms

Time Complexity

Space Complexity

Big-O notation

O(1)

O(log n)

O(n)

O(n²)

Arrays

Array indexing

Array traversal

Basic array problem-solving patterns

1. What is DSA?

DSA = Data Structures + Algorithms

Data Structure

A data structure is a way of organizing and storing data so it can be accessed and used efficiently.

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

An algorithm is a step-by-step procedure used to solve a problem.

Example:

Data Structure → Array

Problem → Find the largest number

Algorithm → Traverse the array and compare each element

2. Data Structure vs Algorithm

Data Structure

Algorithm

Stores and organizes data

Solves a problem

Example: Array

Example: Searching

Focuses on data organization

Focuses on steps and logic

Remember

Data Structure = How we store dataAlgorithm = How we solve a problem

⏱️ 3. Time Complexity

Time complexity describes how the running time of an algorithm grows as the input size increases.

O(1) — Constant

The operation takes approximately the same amount of time regardless of input size.

const numbers = [10, 20, 30, 40];

console.log(numbers[2]);

Array access by index → O(1)

O(n) — Linear

The amount of work grows with the number of elements.

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

One complete traversal → O(n)

O(n²) — Quadratic

Usually occurs when one loop is nested inside another.

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

Complexity

Example

O(1)

Access by array index

O(log n)

Binary Search

O(n)

Array traversal

O(n²)

Nested loops

💾 4. Space Complexity

Space complexity describes how much additional memory an algorithm uses as the input grows.

Example:

let largest = numbers[0];

Only one additional variable is being used.

Therefore:

Extra Space → O(1)

📦 5. Arrays

An array stores multiple values in a single variable.

const numbers = [10, 25, 7, 40, 15];

Array Indexing

Array indexes start from 0.

Index:   0   1   2   3   4
Value:  10  25   7  40  15

Accessing an element:

console.log(numbers[3]); // 40

Array access by index → O(1)

🔄 6. Array Traversal

Traversal means visiting each element of an array.

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

Time Complexity → O(n)

🧩 7. Problem-Solving Patterns

Comparison Pattern

Used for finding the largest or smallest value.

if (numbers[i] > largest) {
  largest = numbers[i];
}

Accumulator Pattern

Used when adding values.

let sum = 0;

sum += numbers[i];

Counter Pattern

Used when counting items.

let count = 0;

count++;

Modulo Pattern

Used to check whether a number is even or odd.

numbers[i] % 2 === 0 // Even
numbers[i] % 2 !== 0 // Odd

💻 8. Day 1 Problems Solved

#

Problem

Time

Space

1

Find Largest Element

O(n)

O(1)

2

Find Smallest Element

O(n)

O(1)

3

Find Sum of Array

O(n)

O(1)

4

Count Even Numbers

O(n)

O(1)

5

Sum of Odd Numbers

O(n)

O(1)

6

Count Numbers Greater Than 20

O(n)

O(1)

⚠️ Common Mistakes

Forgetting that array indexes start at 0

Confusing count with sum

Using the largest-value logic when solving for the smallest value

Forgetting to update the tracking variable

Starting a loop from the wrong index

Using console.log() to find a value without understanding the underlying logic

🎯 Day 1 Recap

By the end of Day 1, I learned:

What DSA means

The difference between Data Structures and Algorithms

Basic Big-O notation

Time and Space Complexity

Array indexing and traversal

Comparison, accumulator, counter, and modulo patterns

How to solve basic array problems using JavaScript

⭐ Key Lesson

Understand the problem → Build the approach → Dry Run → Code → Test → Analyse Complexity

🔎 Day 2 — Linear Search & Array Searching Patterns

Challenge: 30 Days DSA — Zero to IntermediateLanguage: JavaScriptTopic: Linear Search and Array Searching Patterns

🎯 Concepts Covered

Linear Search

Searching for an element in an array

Finding the index of a target

Using a dynamic target variable

Using -1 when an element is not found

Understanding when and why to use break

Counting occurrences

Finding the first occurrence

Finding the last occurrence

Finding the index of the maximum value

Writing reusable functions

Time and Space Complexity

🔍 What is Linear Search?

Linear Search is a simple searching algorithm that checks array elements one by one from the beginning to the end until:

The target is found, or

The end of the array is reached

Think of it like searching for a name in a class attendance register — you check each entry one by one until you find the name or reach the end.

Complexity

Time: O(n)

Space: O(1)

🧠 Core Patterns Used in Day 2

Pattern

Meaning

index = -1

Default value when the target is not found

index = i + break

Finds the first occurrence

index = i without break

Keeps updating the index to find the last occurrence

count++

Counts every occurrence

maxIndex

Stores the index of the largest value found so far

target parameter

Makes the function reusable for different values

🧩 Problem 1 — Find the Index of a Target

Problem Statement

Given an array of numbers and a target value, find the index of the target.

If the target does not exist, return -1.

Approach

Loop through the array from index 0 to the end.

Compare each element with the target.

If a match is found, return its index immediately.

If the loop finishes without finding it, return -1.

Dry Run

Array: [4, 2, 7, 1, 9]Target: 7

i

arr[i]

Match?

0

4

No

1

2

No

2

7

Yes → return 2

Output: 2

JavaScript

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([4, 2, 7, 1, 9], 7)); // 2
console.log(linearSearch([4, 2, 7, 1, 9], 5)); // -1

Complexity

Time: O(n)

Space: O(1)

Key Learning

-1 is a common convention for representing "not found" in search problems.

🧩 Problem 2 — Search Using a Dynamic Target

Problem Statement

Make the search function reusable so that the target is not hardcoded.

Approach

Pass the target as a function parameter.

This allows the same function to work with different arrays and target values.

Dry Run

Array: [10, 20, 30, 40]Target: 30

i

arr[i]

Match?

0

10

No

1

20

No

2

30

Yes → return 2

Output: 2

JavaScript

function searchDynamicTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(searchDynamicTarget([10, 20, 30, 40], 30));  // 2
console.log(searchDynamicTarget([10, 20, 30, 40], 100)); // -1

Complexity

Time: O(n)

Space: O(1)

Key Learning

Passing target as a parameter transforms a one-off script into a reusable function.

🧩 Problem 3 — Count Occurrences of a Target

Problem Statement

Given an array and a target value, count how many times the target appears.

Approach

Traverse the entire array.

Whenever an element matches the target:

count++;

Do not use break, because all elements must be checked.

Dry Run

Array: [2, 5, 2, 8, 2, 1]Target: 2

i

arr[i]

Match?

count

0

2

Yes

1

1

5

No

1

2

2

Yes

2

3

8

No

2

4

2

Yes

3

5

1

No

3

Output: 3

JavaScript

function countOccurrences(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  return count;
}

console.log(countOccurrences([2, 5, 2, 8, 2, 1], 2)); // 3

Complexity

Time: O(n)

Space: O(1)

Key Learning

break is intentionally not used because counting requires visiting every element.

🧩 Problem 4 — Find the First Occurrence

Problem Statement

Given an array containing duplicate values, find the index of the first occurrence of a target.

Approach

Scan from left to right.

The first matching element is automatically the first occurrence, so the search can stop immediately.

Dry Run

Array: [3, 7, 7, 9, 7]Target: 7

i

arr[i]

Match?

0

3

No

1

7

Yes → stop

Output: 1

JavaScript

function firstOccurrence(arr, target) {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      index = i;
      break;
    }
  }

  return index;
}

console.log(firstOccurrence([3, 7, 7, 9, 7], 7)); // 1

Complexity

Time: O(n) worst case

Space: O(1)

Key Learning

When scanning from left to right, the first match is guaranteed to be the earliest match. Therefore, break is appropriate.

🧩 Problem 5 — Find the Last Occurrence

Problem Statement

Given an array containing duplicate values, find the index of the last occurrence of a target.

Approach

Traverse the entire array.

Whenever a match is found, update index.

Do not use break, because a later occurrence may exist.

Dry Run

Array: [3, 7, 7, 9, 7]Target: 7

i

arr[i]

Match?

index

0

3

No

-1

1

7

Yes

1

2

7

Yes

2

3

9

No

2

4

7

Yes

4

Output: 4

JavaScript

function lastOccurrence(arr, target) {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      index = i;
    }
  }

  return index;
}

console.log(lastOccurrence([3, 7, 7, 9, 7], 7)); // 4

Complexity

Time: O(n)

Space: O(1)

Key Learning

break cannot be used because the last occurrence can only be confirmed after checking the complete array.

🧩 Problem 6 — Find the Index of the First Maximum

Problem Statement

Given an array of numbers, find the index of the maximum value.

If the maximum value appears multiple times, return the index of its first occurrence.

Approach

Assume the first element is the maximum.

Store its index in maxIndex.

Traverse the remaining elements.

Update maxIndex only when a strictly greater value is found.

Using > instead of >= preserves the first occurrence of the maximum value.

Dry Run

Array: [3, 8, 5, 8, 2]

i

arr[i]

Comparison

maxIndex

0

3

Start

0

1

8

8 > 3 → Yes

1

2

5

5 > 8 → No

1

3

8

8 > 8 → No

1

4

2

2 > 8 → No

1

Output: 1

JavaScript

function indexOfMax(arr) {
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }

  return maxIndex;
}

console.log(indexOfMax([3, 8, 5, 8, 2])); // 1

Complexity

Time: O(n)

Space: O(1)

Key Learning

Using strict > instead of >= ensures that duplicate maximum values do not overwrite the first occurrence.

🛑 Why break Matters

Understanding when to use break is one of the key lessons from Day 2.

First Occurrence → Use break

Once a match is found while scanning left to right, it is guaranteed to be the first occurrence.

So we can stop immediately.

Last Occurrence → Do Not Use break

A later match may still exist.

The entire array must be scanned.

Counting Occurrences → Do Not Use break

Every element must be checked to calculate the correct total.

Rule of Thumb

Use break only when stopping early cannot affect correctness.

♻️ Why Reusable Functions Matter in DSA

Reusable functions allow the same logic to work with different inputs.

Benefits

Avoid rewriting the same logic

Make testing easier

Improve readability

Make debugging easier

Make code easier to extend

Demonstrate clean, interview-ready coding practices

Direct Code vs Reusable Function

Direct Code

Reusable Function

Values are hardcoded

Values are passed as parameters

Must be rewritten for new inputs

Works with different inputs

Harder to test

Easy to test with multiple inputs

Looks like a one-time script

More reusable and interview-ready

Direct Code

let arr = [1, 2, 3];
let found = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    found = true;
  }
}

Reusable Function

function contains(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }

  return false;
}

The function version can be reused with any array and target.

📊 Day 2 Problem Summary

#

Problem

Time

Space

Key Pattern

1

Find Target Index

O(n)

O(1)

Linear Search

2

Dynamic Target Search

O(n)

O(1)

Function Parameter

3

Count Occurrences

O(n)

O(1)

Counter

4

First Occurrence

O(n)

O(1)

break

5

Last Occurrence

O(n)

O(1)

Update Index

6

First Maximum Index

O(n)

O(1)

maxIndex + >

📝 Day 2 Recap

Day 2 focused on Linear Search and the different problem-solving patterns that can be built from the same basic loop.

The six problems covered:

Finding the index of a target

Searching with a dynamic target

Counting occurrences

Finding the first occurrence

Finding the last occurrence

Finding the index of the first maximum value

The key idea is that a simple for loop can solve several different problems depending on how variables such as index, count, and maxIndex are updated and whether break is used.

🎯 Key Lessons

Linear Search checks elements sequentially.

Linear Search has O(n) worst-case time complexity.

-1 is commonly used to represent "not found."

break should only be used when stopping early is logically safe.

break is useful for the first occurrence.

break should not be used when counting or finding the last occurrence.

> vs >= changes how duplicate maximum values are handled.

Initializing variables such as index, count, and maxIndex is essential.

Passing values such as target as parameters makes functions reusable.

Reusable functions are cleaner and more interview-ready than hardcoded scripts.

🎤 Interview-Ready Explanation

"Linear Search is a sequential search algorithm that checks each element of an array one at a time, starting from the first index, until it either finds the target or reaches the end of the array. Its worst-case time complexity is O(n) because every element may need to be checked, and its space complexity is O(1) because it uses constant extra space. It works with both sorted and unsorted arrays, but for large sorted datasets, Binary Search can be more efficient."

🔁 What to Practice / Revise

Before moving to Day 3:

Re-implement all six problems without looking at the notes.

Practice explaining why break is or is not used.

Find the index of the minimum value.

Find all indices of a target.

Search an array of strings.

Search an array of objects.

Practice writing the base Linear Search loop from memory.

✅ Progress Tracker

Day 1 — DSA Fundamentals & Arrays

Day 2 — Linear Search & Array Searching Patterns

Day 3

Day 4

Day 5

...

Day 30

🏆 Day 2 Completed

Linear Search and its core variations are understood and implemented in JavaScript using reusable functions.

Next Goal

Day 3 — Continue building DSA problem-solving patterns.

📌 Challenge Philosophy

This challenge is not only about solving problems.

It is about learning to:

Understand → Think → Approach → Dry Run → Code → Test → Analyse

Consistency over 30 days will build stronger DSA fundamentals, cleaner JavaScript code, and better interview problem-solving skills.