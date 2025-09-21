One more merge-style task: **Intersection of Two Sorted Arrays**.

### Problem

Given two sorted arrays (possibly with duplicates), return their intersection as a list of unique values.

Example:

- `A = [1,2,2,3,4]`
- `B = [2,2,4,6]`
- Intersection: `[2,4]`

---

### Step 1: Setup

- `i = 0` (pointer in `A`)
- `j = 0` (pointer in `B`)
- `result = []`

---

### Step 2: Walk the arrays

While `i < len(A)` and `j < len(B)`:

1.  If `A[i] == B[j]`:
    - If `result` is empty or `result[-1] != A[i]`, append `A[i]`.
    - Move both pointers: `i++`, `j++`.
2.  Else if `A[i] < B[j]`:
    - Move `i++` (need a larger value in `A`).
3.  Else (`A[i] > B[j]`):
    - Move `j++` (need a larger value in `B`).

Skipping duplicates via the last-added check keeps the intersection unique.

---

### Example Run

- `i=0 (1)`, `j=0 (2)` → `1 < 2` → `i=1`
- `i=1 (2)`, `j=0 (2)` → equal → append `2`, move both (`i=2`, `j=1`)
- `i=2 (2)`, `j=1 (2)` → equal, but last result already `2` → skip append, move both (`i=3`, `j=2`)
- `i=3 (3)`, `j=2 (4)` → `3 < 4` → `i=4`
- `i=4 (4)`, `j=2 (4)` → equal → append `4`, move both (`i=5`, `j=3`)
- Loop ends → result `[2,4]`

Time: **O(m + n)**. Space: **O(1)** extra besides output.

---

Now your turn:\
👉 Why do we advance **both** pointers when we find a common value, instead of just one of them?

---

Answer:
- That matching value has been fully consumed from both arrays—advancing both ensures we look at the next unseen candidates.
- If we advanced only one pointer, we'd compare the same number again and risk infinite loops or duplicate results.

---
[Back to overview.md](overview.md)
