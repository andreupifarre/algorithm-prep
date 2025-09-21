Let's practice **Fruit Into Baskets** (LeetCode 904) with the sliding window template.

### Problem

You have a row of trees represented by `fruits[i]` (fruit type at tree `i`). You can carry at most **two types** of fruit at a time, but you may pick as many fruits as you want from consecutive trees. Return the maximum number of fruits you can pick in a row.

Example:

- `fruits = [1,2,3,2,2]` → answer is `4` (pick from indices 1-4: `[2,3,2,2]`).

---

### Step 1: Setup

- `left = 0`
- Map `count` for fruit frequencies inside the current window
- `best = 0`

---

### Step 2: Expand with `right`

For each index `right`:

1.  Add `fruits[right]` to the map.
2.  While the map holds more than 2 keys (more than two fruit types):
    - Decrement `fruits[left]` in the map.
    - If a count hits 0, remove that key.
    - Move `left++`.

---

### Step 3: Update the answer

- After the shrinking loop, the window is valid (at most two types).
- Update `best = max(best, right - left + 1)`.

Time: **O(n)**. Space: **O(1)** (at most 3 fruit types in map during shrinking).

---

### Example Run: `fruits = [1,2,3,2,2]`

- `right=0`: window `[1]` → map `{1:1}` → best=1
- `right=1`: window `[1,2]` → map `{1:1,2:1}` → best=2
- `right=2`: add `3` → map `{1:1,2:1,3:1}` → too many types → shrink:
  - Drop `fruits[0]=1` → map `{1:0,2:1,3:1}` → remove key `1` → `{2:1,3:1}` → left=1
  - Window now `[2,3]` → size 2 → best stays 2
- `right=3`: add `2` → map `{2:2,3:1}` → window `[2,3,2]` → best=3
- `right=4`: add `2` → map `{2:3,3:1}` → window `[2,3,2,2]` → best=4

Answer = 4.

---

Now your turn:\
👉 In that example, what exactly happened to the window when we processed index `2` (fruit type `3`)? Describe `left`, the map, and the resulting window after shrinking.

---

Answer:
- Adding the `3` made the map `{1:1,2:1,3:1}` (three types).
- We shrank from the left: removed tree at index `0` (fruit `1`), so `left` moved to `1` and the map became `{2:1,3:1}`.
- The window settled on indices `[1,2]` (`[2,3]`) before continuing.

---
[Go to partitioning.md](partitioning.md)
