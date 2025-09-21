Alright, let's find the middle node of a linked list with slow-fast pointers.

### Problem

Given the head of a singly linked list, return the middle node.\
If there are two middle nodes, return the **second** middle.

Example:

- `1 → 2 → 3 → 4 → 5` → return node with value `3`.
- `1 → 2 → 3 → 4` → return node with value `3` (the second middle).

---

### Step 1: Setup

- `slow = head`
- `fast = head`

Both start at the beginning.

---

### Step 2: Traverse while `fast` and `fast.next` exist

1.  Move `slow = slow.next` (one step).
2.  Move `fast = fast.next.next` (two steps).
3.  Repeat until `fast` can't move two steps.

---

### Step 3: When the loop stops

- If `fast` is `null` or `fast.next` is `null`, the loop ends.\
- `slow` now points to the middle node.
- On even length lists, `slow` lands on the second middle because `fast` jumps two steps at a time.

---

### Example Run

List: `1 → 2 → 3 → 4 → 5`

- Start: `slow=1`, `fast=1`
- Move: `slow=2`, `fast=3`
- Move: `slow=3`, `fast=5`
- Next check: `fast.next` is `null` → stop → answer is node `3`.

Time: **O(n)**. Space: **O(1)**.

---

Now your turn:\
👉 For the list `1 → 2 → 3 → 4`, what value does `slow` point to when the loop exits, and why?

---

Answer:
- Iteration 1: `slow=2`, `fast=3`.
- Next loop check: `fast.next` is `null`, so we stop and return `slow`, which is node `3`.
- We return the second middle in even-length lists because `fast` leaps two steps at a time.

---
[Go to sliding-window.md](sliding-window.md)
