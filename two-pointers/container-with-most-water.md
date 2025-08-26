### Problem

Given an array `height[]`, where each element represents the height of a vertical line on the x-axis, find the maximum amount of water a container can store between two lines.

Example:

- `height = [1, 8, 6, 2, 5, 4, 8, 3, 7]`

- Answer: 49 (between lines at index 1 and 8)

---

### Step 1: Setup

- `left = 0` (first line)

- `right = n-1` (last line)

---

### Step 2: While `left < right`

1.  Compute width = `(right - left)`.

2.  Compute height = `min(height[left], height[right])`.

3.  Area = `width * height`.

4.  Update max area if this area is larger.

5.  Move the pointer at the **shorter line** inward:

    - If `height[left] < height[right]` → `left++`.

    - Else → `right--`.

---

### Example Run

`height = [1, 8, 6, 2, 5, 4, 8, 3, 7]`

- left=0 → 1, right=8 → 7 → area=8\*1=8 → max=8 → move left.

- left=1 → 8, right=8 → 7 → area=7\*7=49 → max=49 → move right.

- left=1 → 8, right=7 → 3 → area=6\*3=18 → max=49 → move right.

- ... continue until `left >= right`.

Final answer = 49.

---

// TODO: add pseudo code and js pattern code

Alright, let’s work through height = [1, 2, 1].

Take:\
`height = [1, 2, 1]`

**Setup**:

- `left = 0 → 1`

- `right = 2 → 1`

👉 First check:

- width = `2`

- min height = `min(1,1) = 1`

- area = `2 * 1 = 2`

So current max = 2.\
Since both ends are equal, we can move either (let's move `right--`).

Now:

- `left = 0 → 1`, `right = 1 → 2`

👉 Your turn:\
What's the width and area for this second check?

---

Answer:

- width = 1
- area = 1

---

Notice how:

- Time complexity: **O(n)**, much better than brute-force **O(n²)**.

---

[Go to trapping-rainwater.md](trapping-rainwater.md)
