Alright, let's do Remove Duplicates in a sorted array with slow-fast pointers.

### Problem

Given a sorted array, remove the duplicates **in-place** so that each element appears only once.\
Return the new length.

Example:

- `arr = [1,1,2,2,3,3,3,4]`

- Answer: new length = `4`, array becomes `[1,2,3,4,...]`

---

### Step 1: Setup

- `slow = 0` (last unique element index)

- `fast = 1` (scans ahead for new values)

- `length = arr.length`

---

### Step 2: While `fast < length`

1.  If `arr[fast] != arr[slow]`:

    - Found a new unique element.

    - Move `slow++`, copy `arr[fast]` into `arr[slow]`.

2.  Always move `fast++`.

---

### Example Run

`arr = [1,1,2,2,3]`

- slow=0 → 1, fast=1 → 1 → same → move fast.

- slow=0 → 1, fast=2 → 2 → different → slow=1, set arr[1]=2.

- slow=1 → 2, fast=3 → 2 → same → move fast.

- slow=1 → 2, fast=4 → 3 → different → slow=2, set arr[2]=3.

End: `slow = 2` → new length = `slow+1 = 3`.\
Array becomes `[1,2,3,...]`.

---

### Key Insight

- **Slow pointer**: boundary of the "clean" part (unique values).

- **Fast pointer**: explores the array.

- Time: **O(n)**, Space: **O(1)**.

---

// TODO: add pseudo code and js pattern code

// TODO: rewrite

Now your turn:\
👉 Suppose `arr = [0,0,1,1,1,2,2,3]`.\
When `slow=0` (0) and `fast=1` (0), what happens?

---

Answer: Since it's not a new element it simply moves fast++

Explanation:
At `slow=0 (0)` and `fast=1 (0)` → same value, so no overwrite. Just `fast++`.

Now:

- `slow=0 (0)`

- `fast=2 (1)`

👉 Next question: since `arr[fast]=1` is different from `arr[slow]=0`, what do we do with `slow` and the array?

---

Answer: move `slow++` and copy `arr[fast]` into `arr[slow]` and move fast++

Explanation:

- `slow=1`, then set `arr[1] = 1`.

- Array becomes `[0,1,1,1,1,2,2,3]`.

- Then `fast=3`.

Now the unique "clean zone" is `[0,1]`.

---

[Go to detect-cycle-in-linked-list.md](detect-cycle-in-linked-list.md)
