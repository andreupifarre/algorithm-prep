Let's apply the two-pointer merge step for arrays (classic merge sort move).

### Problem

Given two sorted arrays `A` and `B`, merge them into a single sorted array.

Example:

- `A = [1,4,7]`
- `B = [2,3,6]`
- Result: `[1,2,3,4,6,7]`

---

### Step 1: Setup

- `i = 0` (pointer in `A`)
- `j = 0` (pointer in `B`)
- `merged = []`

---

### Step 2: Walk the arrays

While `i < len(A)` and `j < len(B)`:

1.  If `A[i] <= B[j]`, push `A[i]` into `merged` and `i++`.
2.  Else push `B[j]` and `j++`.

Only one pointer advances per iteration.

---

### Step 3: Append leftovers

- If anything remains in `A`, append `A[i:]`.
- If anything remains in `B`, append `B[j:]`.

Merged array is done.

Time: **O(m + n)**. Space: **O(m + n)** for the output (or use in-place trick if arrays have buffer space).

---

### Example Run

- Start: `i=0 (1)`, `j=0 (2)` → take `1` → merged `[1]`, `i=1`
- Compare `4` vs `2` → take `2` → merged `[1,2]`, `j=1`
- Compare `4` vs `3` → take `3` → merged `[1,2,3]`, `j=2`
- Compare `4` vs `6` → take `4` → merged `[1,2,3,4]`, `i=2`
- Compare `7` vs `6` → take `6` → merged `[1,2,3,4,6]`, `j=3`
- `B` exhausted → append remaining `[7]` → final `[1,2,3,4,6,7]`

---

Now your turn:\
👉 If `A = [1,5,9]` and `B = [2,4,8,10]`, what happens when we compare `5` and `4`, and which pointer moves?

---

Answer:
- Since `4 < 5`, we take `4` from `B`.
- Append it to the merged array, move `j++` (pointer in `B`).
- Pointer `i` stays on `5` for the next comparison.

---
[Go to intersection-of-two-sorted-arrays.md](intersection-of-two-sorted-arrays.md)
