Next up: **Partition Array Around a Pivot** (a quicksort classic).

### Problem

Given an array `nums` and a pivot value `x`, rearrange the array in-place so that all elements `< x` appear before all elements `>= x`.

Example:

- `nums = [9,12,3,5,14,10,10]`, `x = 10` → one valid partition is `[9,5,3,12,14,10,10]`.

The relative order inside each side doesn't matter.

---

### Step 1: Setup

- `left = 0`
- `right = n-1`

We'll grow the `< x` region from the left and the `>= x` region from the right.

---

### Step 2: Process while `left <= right`

1.  If `nums[left] < x`, it's already on the correct side → `left++`.
2.  Else if `nums[right] >= x`, it's already on the right side → `right--`.
3.  Otherwise (`nums[left] >= x` and `nums[right] < x`):
    - Swap `nums[left]` and `nums[right]`.
    - Move both pointers: `left++`, `right--`.

The key idea: expand the correct zones by skipping good values and swapping misplaced ones.

---

### Example Run: `nums = [9,12,3,5,14,10,10]`, `x = 10`

- Start: `left=0`, `right=6`
- `nums[left]=9 < 10` → `left=1`
- `nums[left]=12 ≥ 10`, `nums[right]=10 ≥ 10` → `right=5`
- `nums[right]=10 ≥ 10` → `right=4`
- `nums[right]=14 ≥ 10` → `right=3`
- Now `nums[left]=12 ≥ 10`, `nums[right]=5 < 10` → swap → array `[9,5,3,12,14,10,10]`, `left=2`, `right=2`
- `nums[left]=3 < 10` → `left=3`
- Loop stops (`left > right`). Partition done.

Result: first three numbers `< 10`, rest `>= 10`.

---

Now your turn:\
👉 In that process, why did we move `right` from 6 down to 3 **before** the swap, and what invariant were we maintaining?

---

Answer:
- Every time `nums[right] >= 10`, it's already in the right-side region, so we simply moved `right--` to shrink that region inward.
- We only stop when `nums[right] < 10`, giving us a value that belongs on the left side.
- That invariant keeps everything beyond `right` firmly `>= 10`, making the eventual swap correct.

---
[Go to merging.md](merging.md)
