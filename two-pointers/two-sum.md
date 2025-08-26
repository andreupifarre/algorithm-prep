Alright, let’s do Two Sum in a sorted array with two pointers.

### Problem

Given a sorted array and a target, check if two numbers add up to that target.

Example:

- `arr = [1, 3, 4, 7, 10, 11], target = 14`

- Answer: `3 + 11 = 14`

---

### Step 1: Setup

- `left = 0` (first element)

- `right = n-1` (last element)

---

### Step 2: While `left < right`

1.  Compute `sum = arr[left] + arr[right]`.

2.  If `sum == target` → found the pair.

3.  If `sum < target` → need a bigger sum → `left++`.

4.  If `sum > target` → need a smaller sum → `right--`.

---

### Example Run

`arr = [1, 3, 4, 7, 10, 11], target = 14`

- left=0 → 1, right=5 → 11 → sum=12 < 14 → move left → left=1

- left=1 → 3, right=5 → 11 → sum=14 = target → success 🎯

---

// TODO: add pseudo code and js pattern code

// TODO: rewite

Now your turn:\
👉 Suppose `arr = [2, 4, 6, 8, 9], target = 15`.\
What happens on the **first check** with `left=0` and `right=4`?

---

- left=0 -> 2, right=4 -> 9 -> sum=11 < 15 -> move left -> left=1

Now we're at:

- `left=1 → 4`, `right=4 → 9` → sum = 13 < 15 → still too small → move left again.

- `left=2 → 6`, `right=4 → 9` → sum = 15 → found the pair ✅.

So the pair is `(6, 9)`.

---

Notice how:

- Every move discards a whole slice of possibilities.

- Time complexity: **O(n)** instead of brute-force **O(n²)**.

---

// TODO: Rewrite
👉 Do you want to try one more quick run yourself with a different target on this array, or shall I move us forward into **Category 2: Same-direction (slow/fast) pointers**?

---

[Go to container-with-most-water.md](container-with-most-water.md)
