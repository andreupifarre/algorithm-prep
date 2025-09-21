Alright, let's do Cycle Detection in a linked list with slow-fast pointers. **Detect Cycle in Linked List** with Floyd's Tortoise & Hare.

---

### Problem

Given the head of a linked list, determine if the list has a cycle in it.

Example:

- `1 → 2 → 3 → 4 → 2 (back to node 2)` → cycle exists.

- `1 → 2 → 3 → null` → no cycle.

---

### Step 1: Setup

- `slow = head`

- `fast = head`

---

### Step 2: While `fast` and `fast.next` exist

1.  Move `slow = slow.next`.

2.  Move `fast = fast.next.next`.

3.  If `slow == fast` → cycle detected.

---

### Step 3: End Condition

- If the loop ends because `fast` or `fast.next` is null → no cycle.

---

### Example Run

List: `1 → 2 → 3 → 4 → 2 (cycle back)`

- slow=1, fast=1

- Move: slow=2, fast=3

- Move: slow=3, fast=2

- Move: slow=4, fast=4 → they meet → cycle exists ✅

---

### Key Insight

- If there's a cycle, the fast pointer eventually "laps" the slow one.

- If no cycle, fast pointer reaches null.

- Time: **O(n)**, Space: **O(1)**.

---

// TODO: add pseudo code and js pattern code

// TODO: rewrite

Now your turn:\
👉 Suppose the list is `1 → 2 → 3 → null`.\
On the first move: where are `slow` and `fast`, and what happens next?
---
Answer:
- After the first move, `slow` is at node 2 and `fast` jumps to node 3.
- On the next loop check, `fast.next` is `null`, so the loop stops and we conclude there is **no cycle**.

---
[Go to find-middle-of-linked-list.md](find-middle-of-linked-list.md)
