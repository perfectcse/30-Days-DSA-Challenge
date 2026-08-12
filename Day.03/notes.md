# Day 3 — Arrays & Two-Pointer Patterns

## 🎯 Learning Objectives

Today’s goal was to strengthen array problem-solving skills and understand how to identify and apply common pointer-based patterns.

### Concepts Covered

* Array Traversal
* Adjacent Comparison
* Two-Pointer Technique
* Write Pointer
* Slow/Fast Pointer
* Brute Force vs. Optimized Approaches
* Time and Space Complexity
* Interview Problem-Solving Strategy

---

# 📚 1. Two-Pointer Technique

The **Two-Pointer Technique** uses two indexes/pointers to process an array efficiently.

Depending on the problem, pointers can:

* Start from opposite ends of an array.
* Move toward each other.
* Have one pointer scan while another tracks a position.
* Move at different speeds.

### General Pattern

```text
Pointer 1 → Array
Pointer 2 → Array

Move pointers according to the problem's logic.
```

The most important part is not memorizing a fixed template, but understanding **why each pointer moves**.

---

# 🟢 Problem 1 — Reverse an Array

## Problem

Given:

```js
const numbers = [10, 20, 30, 40, 50];
```

Expected output:

```text
[50, 40, 30, 20, 10]
```

## Approach 1 — Built-in `reverse()`

```js
numbers.reverse();
```

This is simple, but the main DSA learning objective is understanding how to reverse an array manually.

## Approach 2 — Reverse Traversal

```js
const numbers = [10, 20, 30, 40, 50];

const reversedArray = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  reversedArray.push(numbers[i]);
}

console.log(reversedArray);
```

## ⭐ Approach 3 — Two Pointers

```js
function reverseArray(numbers) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let temp = numbers[left];

    numbers[left] = numbers[right];
    numbers[right] = temp;

    left++;
    right--;
  }

  return numbers;
}

const numbers = [10, 20, 30, 40, 50];

console.log(reverseArray(numbers));
// [50, 40, 30, 20, 10]
```

### How It Works

* `left` starts at the first element.
* `right` starts at the last element.
* Swap the two values.
* Move `left` forward.
* Move `right` backward.
* Continue until the pointers meet.

### Complexity

* **Time:** `O(n)`
* **Extra Space:** `O(1)`

### Key Learning

Two pointers allow us to reverse an array **in-place** without creating another array.

---

# 🟢 Problem 2 — Check if an Array Is Sorted

## Problem

```js
const numbers = [10, 20, 30, 40, 50];
```

Expected output:

```text
true
```

## Approach Considered — Sorting

One possible approach is to sort a copy of the array and compare it with the original.

However, this is unnecessary because we only need to determine whether the array is already sorted.

Sorting generally requires:

```text
O(n log n)
```

## ⭐ Final Approach — Adjacent Comparison

```js
function isSorted(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
      return false;
    }
  }

  return true;
}
```

### Logic

In an ascending sorted array:

```text
current <= next
```

If we find:

```text
current > next
```

the array is not sorted.

### Complexity

* **Time:** `O(n)`
* **Space:** `O(1)`

### Key Learning

Use a single traversal when it is sufficient instead of performing unnecessary sorting.

---

# 🟢 Problem 3 — Find a Pair With a Given Sum

## Problem

```js
const numbers = [2, 7, 11, 15];
const target = 9;
```

Expected:

```text
true
```

Because:

```text
2 + 7 = 9
```

---

## Approach 1 — Brute Force

### What Is Brute Force?

Brute Force means trying all possible combinations until the required result is found.

```js
function findPairBruteForce(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers[i], numbers[j]];
      }
    }
  }

  return [];
}
```

### Complexity

* **Time:** `O(n²)`
* **Space:** `O(1)`

### Important

Brute Force is **not wrong**.

It is often the first correct solution we think of before looking for an optimization.

---

# ⭐ Optimized Approach — Two Pointers

Because the array is sorted, we can use two pointers.

```js
function findPairWithSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [numbers[left], numbers[right]];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
```

## Two-Pointer Rules

```text
sum === target → Found
sum < target   → left++
sum > target   → right--
```

### Why?

The array is sorted.

If:

```text
sum < target
```

we need a larger value, so:

```text
left++
```

If:

```text
sum > target
```

we need a smaller value, so:

```text
right--
```

### Complexity

* **Time:** `O(n)`
* **Space:** `O(1)`

### DSA Decision

The **Two-Pointer approach** is the preferred solution for this problem when the input array is sorted.

---

# 🟢 Problem 4 — Move Zeros to the End

## Problem

Given:

```js
const numbers = [0, 1, 0, 3, 12];
```

Expected:

```text
[1, 3, 12, 0, 0]
```

The order of the non-zero elements must remain unchanged.

## ⭐ Approach — Write Pointer

```js
function moveZeros(numbers) {
  let nonZeroIndex = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
      numbers[nonZeroIndex] = numbers[i];
      nonZeroIndex++;
    }
  }

  while (nonZeroIndex < numbers.length) {
    numbers[nonZeroIndex] = 0;
    nonZeroIndex++;
  }

  return numbers;
}
```

### Pointer Roles

```text
i              → scans the entire array
nonZeroIndex   → position where the next non-zero element should be placed
```

### Goal

We want to:

1. Keep non-zero elements in their original order.
2. Move all zeros to the end.
3. Avoid creating another array.

### Complexity

* **Time:** `O(n)`
* **Space:** `O(1)`

### Key Learning

The **write pointer** tracks where the next valid element should be placed.

---

# 🟢 Problem 5 — Remove Duplicates From a Sorted Array

## Problem

Given:

```js
const numbers = [1, 1, 2, 2, 3, 4, 4];
```

Expected:

```text
[1, 2, 3, 4]
```

The array is already sorted.

## ⭐ Approach — Slow Pointer / Two Pointers

```js
function removeDuplicates(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  let slow = 0;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== numbers[slow]) {
      slow++;
      numbers[slow] = numbers[i];
    }
  }

  return numbers.slice(0, slow + 1);
}
```

### Pointer Roles

```text
i       → scans the array
slow    → position of the latest unique element
```

### Why Does It Work?

Because the array is sorted, duplicate values appear next to each other.

We compare:

```text
numbers[i]
```

with:

```text
numbers[slow]
```

When a new unique value is found:

```text
slow++
numbers[slow] = numbers[i]
```

### Complexity

* **Time:** `O(n)`
* **Working Space:** `O(1)`

> Note: `slice()` creates a new result array, so the returned result itself uses `O(n)` space.

### Important

This approach depends on the array being **sorted**.

For an unsorted array, a `Set` or Hash Map may be more appropriate.

---

# 🟢 Problem 6 — Check if a Pair With a Given Sum Exists

## Problem

```js
const numbers = [1, 2, 4, 6, 8, 9];
const target = 10;
```

Expected:

```text
true
```

Because:

```text
2 + 8 = 10
```

Another example:

```js
const numbers = [1, 3, 5, 7];
const target = 20;
```

Expected:

```text
false
```

## ⭐ Approach — Two Pointers

```js
function hasPairWithSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return true;
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}
```

### Two-Pointer Rules

```text
sum === target → true
sum < target   → left++
sum > target   → right--
```

### Why?

We only need to determine whether a valid pair exists.

We do not need to return the actual pair.

### Complexity

* **Time:** `O(n)`
* **Space:** `O(1)`

---

# 🧠 Interview Strategy — Do Not Memorize Code

One of the most important lessons from today's session is:

> **Do not memorize DSA code line-by-line.**

Instead, remember the problem-solving process:

```text
Problem
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
```

If the exact syntax is forgotten during an interview, the solution can still be rebuilt from the logic.

---

# 🎯 Example — Recovering Pair-Sum Code

Instead of memorizing the complete function, remember:

```text
Sorted Array
      ↓
Two Pointers
      ↓
sum === target → Found
sum < target   → left++
sum > target   → right--
```

From these rules, the implementation can be reconstructed.

---

# 🛠️ Interview Recovery Method

If the exact code is forgotten during an interview:

### Step 1 — Restate the Problem

Clearly explain what the problem is asking.

### Step 2 — Identify the Pattern

Ask:

* Is the array sorted?
* Do I need two indexes?
* Can I use two pointers?
* Do I need a write pointer?
* Do I need adjacent comparison?

### Step 3 — Explain the Approach

Describe what each pointer represents.

### Step 4 — Explain Why It Works

For example:

> "Because the array is sorted, if the current sum is smaller than the target, I need a larger value, so I move the left pointer."

### Step 5 — Write the Basic Structure

```js
function solution(numbers) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    // logic
  }
}
```

### Step 6 — Fill in the Logic

Add the conditions and pointer movements.

### Step 7 — Analyze Complexity

Always mention:

```text
Time Complexity: O(n)
Space Complexity: O(1)
```

when applicable.

---

# 🟡 JavaScript Revision — `let`, `const`, and `var`

Before continuing with DSA, we revised JavaScript variable declarations.

## `const`

Use `const` when the variable itself will not be reassigned.

```js
const numbers = [10, 20, 30];
```

Reassigning the variable causes an error:

```js
numbers = [40, 50]; // Error
```

However, the contents of the array can still be modified:

```js
numbers.push(40); // Valid
```

---

## `let`

Use `let` when the value needs to change.

Example:

```js
let left = 0;
let right = numbers.length - 1;

left++;
right--;
```

This is why DSA pointer variables commonly use `let`.

---

## `var`

`var` is the older JavaScript variable declaration.

For modern JavaScript and this DSA practice, prefer:

```text
const + let
```

and generally avoid `var`.

---

# 📊 Day 3 — Complexity Summary

| Problem             | Main Approach       | Time | Space |
| ------------------- | ------------------- | ---: | ----: |
| Reverse Array       | Two Pointers        | O(n) |  O(1) |
| Check Sorted Array  | Adjacent Comparison | O(n) |  O(1) |
| Pair With Given Sum | Two Pointers        | O(n) |  O(1) |
| Move Zeros          | Write Pointer       | O(n) |  O(1) |
| Remove Duplicates   | Slow Pointer        | O(n) | O(1)* |
| Pair Exists         | Two Pointers        | O(n) |  O(1) |

* The working algorithm uses `O(1)` extra space, but `slice()` creates the returned result array.

---

# 🧩 Pattern Recognition Cheat Sheet

| Problem Type                        | Pattern to Consider |
| ----------------------------------- | ------------------- |
| Reverse an array                    | Two Pointers        |
| Compare neighboring elements        | Adjacent Comparison |
| Pair sum in sorted array            | Two Pointers        |
| Move valid elements forward         | Write Pointer       |
| Remove duplicates from sorted array | Slow Pointer        |
| Check whether pair exists           | Two Pointers        |

---

# 💡 Key Takeaways

### 1. Two Pointers

Two pointers can reduce many array problems from `O(n²)` to `O(n)` when the problem structure allows it.

### 2. Sorted Arrays Are Important

A sorted array often enables pointer-based optimization.

### 3. Write Pointer

A write pointer is useful when valid elements need to be moved or compacted in-place.

### 4. Adjacent Comparison

If the problem only asks whether an array is sorted, checking neighboring elements is enough.

### 5. Brute Force Is a Starting Point

A brute-force solution can be correct even when it is not optimal.

The important interview skill is:

```text
Correct Solution
      ↓
Analyze Complexity
      ↓
Find Optimization
```

### 6. Understand Instead of Memorizing

The strongest DSA skill is being able to reconstruct code from:

```text
Problem → Pattern → Logic → Code
```

---

# 🎯 Final Interview Mindset

If I forget the exact code during an interview, I should **not panic**.

I should:

1. Understand the problem.
2. Identify the pattern.
3. Explain the approach.
4. Define the role of each pointer.
5. Write the basic loop structure.
6. Implement the conditions.
7. Test with an example.
8. Explain time and space complexity.

> **The goal is not to remember every line of code. The goal is to understand enough that the code can be rebuilt.**

---

# ✅ Day 3 Completed

### Patterns Practiced

* [x] Two Pointers
* [x] Adjacent Comparison
* [x] Write Pointer
* [x] Slow Pointer
* [x] Brute Force
* [x] Complexity Analysis
* [x] Interview Code-Recovery Strategy
* [x] JavaScript `let`, `const`, and `var` revision

### Problems Completed

* [x] Reverse an Array
* [x] Check if an Array Is Sorted
* [x] Find a Pair With a Given Sum
* [x] Move Zeros to the End
* [x] Remove Duplicates From a Sorted Array
* [x] Check if a Pair With a Given Sum Exists

---

## 🚀 Day 3 Final Lesson

**Don't memorize the code. Understand the pattern.**

```text
Understand the Problem
        ↓
Recognize the Pattern
        ↓
Choose the Approach
        ↓
Build the Logic
        ↓
Write the Code
        ↓
Analyze Complexity
```

**This is the skill to carry into technical interviews.**
