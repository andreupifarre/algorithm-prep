Alright, time for the **Dutch National Flag** problem.

### Problem

Given an array `nums` consisting only of `0`, `1`, and `2`, sort it in-place so that all 0s come first, then 1s, then 2s.

Example:

- `nums = [2,0,2,1,1,0]` → becomes `[0,0,1,1,2,2]`.

---

### Step 1: Setup

- `low = 0` (end of the 0s region)
- `mid = 0` (current element)
- `high = n-1` (start of the 2s region)

We'll expand regions `[0..low-1] = 0`, `[low..mid-1] = 1`, `[high+1..n-1] = 2`.

---

### Step 2: Process while `mid <= high`

1.  If `nums[mid] == 0`:
    - Swap `nums[low]` and `nums[mid]`.
    - Increment both `low++` and `mid++`.
2.  Else if `nums[mid] == 1`:
    - It's in the correct middle region.
    - Just `mid++`.
3.  Else (`nums[mid] == 2`):
    - Swap `nums[mid]` and `nums[high]`.
    - Decrement `high--`.
    - Do **not** increment `mid` yet (need to examine the swapped-in value).

---

### Example Run: `nums = [2,0,2,1,1,0]`

- Start: `low=0`, `mid=0`, `high=5`, array `[2,0,2,1,1,0]`
- `nums[mid]=2` → swap with index 5 → array `[0,0,2,1,1,2]`, `high=4`
- Now `nums[mid]=0` → swap with `low` (already 0) → array `[0,0,2,1,1,2]`, `low=1`, `mid=1`
- `nums[mid]=0` → swap with `low` (same spot) → `low=2`, `mid=2`
- `nums[mid]=2` → swap with `high=4` → array `[0,0,1,1,2,2]`, `high=3`
- `nums[mid]=1` → `mid=3`
- `nums[mid]=1` → `mid=4` which is > `high`, loop stops.

Result: `[0,0,1,1,2,2]`.

---

Now your turn:\
👉 In that run, what happens when `mid` is at index `2` (value `2`)? Describe the swap and pointer updates.

---

Answer:
- We swap `nums[2]` with `nums[high]` (`high=4`, value `1`).
- Array becomes `[0,0,1,1,2,2]`.
- `high` decrements to `3`, while `mid` stays at `2` to inspect the new value (which is now `1`).

---
[Go to partition-array-around-pivot.md](partition-array-around-pivot.md)
