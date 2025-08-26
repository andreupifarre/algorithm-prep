// TODO: Needs rewriting
Two pointers is a very common and powerful technique in Data Structures & Algorithms (DSA). Let's go step by step, from the very beginning to advanced applications.

---

### 1\. **What it is**

The "two pointers" technique means using **two variables (pointers or indices)** to scan through a sequence (like an array or string), usually from opposite ends or at different speeds.

- Pointer = variable that tracks a position.

- Sequence = array, list, string.

---

### 2\. **Why it matters**

- Saves time compared to nested loops (turns `O(n^2)` → `O(n)` in many problems).

- Very useful for searching, sorting, and optimization problems.

---

### 3\. **Types of two pointers**

1.  **Opposite-direction pointers**

    - Start one at the beginning, one at the end.

    - Move them toward each other.

    - Example: Checking if an array is a palindrome.

2.  **Same-direction pointers (sliding window)**

    - Both start at the beginning.

    - One moves faster, the other slower, to maintain a range.

    - Example: Finding subarrays with certain properties.

---

### 4\. **Basic Examples**

- **Check if a string is a palindrome**

  - `left = 0, right = n-1`

  - Compare characters, move inward.

- **Two Sum in sorted array**

  - `left = 0, right = n-1`

  - If `arr[left] + arr[right] == target`, found.

  - If sum < target, move `left++`.

  - If sum > target, move `right--`.

- **Remove duplicates in sorted array**

  - Slow pointer = last unique index.

  - Fast pointer = scans ahead.

  - Copy over unique elements.

---

### 5\. **Sliding Window (a two-pointer variant)**

Used when you need to maintain a subarray or substring:

- Expand `right` pointer to include more.

- Shrink `left` pointer when the condition breaks.

- Examples:

  - Longest substring without repeating characters.

  - Subarray with sum ≤ k.

---

### 6\. **Advanced Problems**

- Trapping rainwater (needs two pointers, one tracking left max, one right max).

- Container with most water.

- Partitioning arrays (like Dutch National Flag problem).

- Merge intervals, fast/slow linked list problems (like detecting cycles).

---

### 7\. **Pattern recognition**

Whenever you see:

- Sorted array → try opposite-direction pointers.

- Substring/subarray conditions → try sliding window.

- Linked list cycle, middle element → try fast/slow pointers.

---

// TODO: Needs rewriting
Now, before I keep going deeper:\
👉 Do you want me to **go problem by problem with full walk-throughs** (like training mode), or would you prefer a **bird's-eye overview of many patterns first, then dive into selected ones**?

[Go to birds-eye.md](birds-eye.md)
