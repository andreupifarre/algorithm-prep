Let's tackle **Minimum Size Subarray Sum** using the sliding window breathing pattern.

### Problem

Given an array of positive integers `nums` and an integer `target`, return the minimal length of a contiguous subarray whose sum is at least `target`. If no such subarray exists, return `0`.

Example:

- `target = 7`, `nums = [2,3,1,2,4,3]` → answer is `2` (subarray `[4,3]`).

---

### Step 1: Setup

- `left = 0`
- `currentSum = 0`
- `best = Infinity` (or `n + 1`) to track the shortest valid window

---

### Step 2: Expand with `right`

For each index `right` from `0` to `n-1`:

1.  Add `nums[right]` to `currentSum`.
2.  While `currentSum >= target`:
    - Update `best = min(best, right - left + 1)`.
    - Subtract `nums[left]` from `currentSum` and move `left++` to try shrinking.

The inner loop keeps shrinking until the window is no longer valid. Every time we enter it, we record a candidate length.

---

### Step 3: Final answer

- If `best` was never updated, return `0`.
- Otherwise return `best`.

Time: **O(n)**. Space: **O(1)**.

---

### Example Run: `target = 7`, `nums = [2,3,1,2,4,3]`

- `right=0`: sum=2 → <7
- `right=1`: sum=5 → <7
- `right=2`: sum=6 → <7
- `right=3`: sum=8 → ≥7 → best=4 → shrink left to 1 → sum=6
- `right=4`: add 4 → sum=10 → shrinking loop:
  - best = min(4, 4) = 4 → subtract `nums[1] = 3` → sum=7 → left=2
  - still ≥7 → best = min(4, 3) = 3 → subtract `nums[2] = 1` → sum=6 → left=3
- `right=5`: add 3 → sum=9 → shrinking loop:
  - best = min(3, 3) = 3 → subtract `nums[3] = 2` → sum=7 → left=4
  - still ≥7 → best = min(3, 2) = 2 → subtract `nums[4] = 4` → sum=3 → left=5

Final answer = 2.

---

Now your turn:\
👉 In that same run, when `right` hits index `4` (value `4`), what new `best` length do we record and where does `left` land afterward?

---

Answer:
- After adding `4`, the window sum is `10`.
- First shrink: best stays `4`, `left` moves to `2`, sum becomes `7`.
- Second shrink: best updates to `3`, `left` moves to `3`, sum becomes `6`.
- So the new recorded best length is `3`, and `left` finishes at index `3` once the window is valid again.

---
[Go to fruits-into-baskets.md](fruits-into-baskets.md)
