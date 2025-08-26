Alright, let's do Trapping Rainwater with two pointers.

### Problem

Given non-negative integers `height[]` where each bar's width is `1`, compute how much water it can trap after raining.

Example:

- `height = [0,1,0,2,1,0,1,3,2,1,2,1]`

- Answer: `6`

---

### Step 1: Setup

- `left = 0`, `right = n-1`

- `left_max = 0`, `right_max = 0`

- `water = 0`

---

### Step 2: While `left < right`

1.  Update running maxima:

    - `left_max = max(left_max, height[left])`

    - `right_max = max(right_max, height[right])`

2.  Process the **smaller side**:

    - If `left_max <= right_max`:

      - Water at `left` = `left_max - height[left]` (≥ 0)

      - Add to `water`, then `left++`

    - Else:

      - Water at `right` = `right_max - height[right]` (≥ 0)

      - Add to `water`, then `right--`

Reason: the smaller side's max bounds the water there; the other side can't help until the smaller side moves inward.

---

### Example Run

`height = [0,1,0,2,1,0,1,3,2,1,2,1]`

- Start: `left=0, right=11, left_max=0, right_max=1, water=0` → process left → add `0-0=0`, `left=1`

- `left=1, right=11, left_max=1, right_max=1` → process left → add `1-1=0`, `left=2`

- `left=2, right=11, left_max=1, right_max=1` → process left → add `1-0=1`, `water=1`, `left=3`

- `left=3, right=11, left_max=2, right_max=1` → process right → add `1-1=0`, `right=10`

- `left=3, right=10, left_max=2, right_max=2` → process left → add `2-2=0`, `left=4`

- `left=4, right=10, left_max=2, right_max=2` → process left → add `2-1=1`, `water=2`, `left=5`

- `left=5, right=10, left_max=2, right_max=2` → process left → add `2-0=2`, `water=4`, `left=6`

- `left=6, right=10, left_max=2, right_max=2` → process left → add `2-1=1`, `water=5`, `left=7`

- `left=7, right=10, left_max=3, right_max=2` → process right → add `2-2=0`, `right=9`

- `left=7, right=9, left_max=3, right_max=2` → process right → add `2-1=1`, `water=6`, `right=8`

- `left=7, right=8, left_max=3, right_max=2` → process right → add `2-2=0`, `right=7`

Loop ends. Final `water = 6`.

---

// TODO: add pseudo code and js pattern code

// TODO: rewite

Now your turn:\
👉 For `height = [4,2,0,3,2,5]`, what happens on the **first processed index**?\
Hint: compute `left_max`, `right_max`, decide which side to process, then add that cell's trapped water.

---

**Step 1: Setup**

- `left = 0` → 4

- `right = 5` → 5

- `left_max = 0`, `right_max = 0`

Now update:

- `left_max = max(0, 4) = 4`

- `right_max = max(0, 5) = 5`

Since `left_max (4) <= right_max (5)`, we process the **left side**.\
That means we compute trapped water at index `left = 0`:

- Water = `left_max - height[left] = 4 - 4 = 0`

So the **first processed index is 0**.

---

Notice how:

- Always process the side with the smaller running max.

- Time complexity: **O(n)**. Space: **O(1)**.

---

// TODO: Link to remove-duplicates-in-sorted-array.md
[Go to remove-duplicates-in-sorted-array.md](remove-duplicates-in-sorted-array.md)
