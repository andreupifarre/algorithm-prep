Let's merge two sorted linked lists using the two-pointer dance.

### Problem

Given the heads of two sorted linked lists `list1` and `list2`, merge them into a single sorted list and return its head.

Example:

- `list1 = 1 → 2 → 4`
- `list2 = 1 → 3 → 4`
- Result: `1 → 1 → 2 → 3 → 4 → 4`

---

### Step 1: Setup

- Create a dummy node `dummy` and pointer `tail = dummy`.
- Pointers `p1 = list1`, `p2 = list2`.

`tail` always points to the last node in the merged list.

---

### Step 2: Walk through both lists

While `p1` and `p2` are not null:

1.  If `p1.val <= p2.val`:
    - `tail.next = p1`
    - Move `p1 = p1.next`
2.  Else:
    - `tail.next = p2`
    - Move `p2 = p2.next`
3.  Move `tail = tail.next`

We always attach the smaller current node.

---

### Step 3: Attach the remainder

- After the loop, exactly one list is non-empty.
- `tail.next = (p1 ? p1 : p2)`
- Return `dummy.next` as the new head.

Time: **O(m + n)**. Space: **O(1)** extra (we reuse nodes).

---

### Example Run

- Start: `p1=1`, `p2=1`, `tail` at dummy.
- Compare 1 vs 1 → take from `p1` (tie-breaker) → merged `1`, `p1=2`, `tail` moves.
- Compare 2 vs 1 → take from `p2` → merged `1 → 1`, `p2=3`.
- Compare 2 vs 3 → take from `p1` → merged `1 → 1 → 2`, `p1=4`.
- Compare 4 vs 3 → take from `p2` → merged `... → 3`, `p2=4`.
- Compare 4 vs 4 → take from `p1` → merged `... → 4`, `p1=null`.
- Attach remainder (`p2=4`) → final list `1 → 1 → 2 → 3 → 4 → 4`.

---

Now your turn:\
👉 At the very first comparison (1 vs 1), why is it okay to choose from `list1`, and what keeps the result sorted when values tie?

---

Answer:
- Either list's node can go first when values tie—the lists are already sorted.
- By picking one and advancing its pointer, we still compare the next smallest remaining value across both lists.
- The untouched list keeps its order, so the merged output remains sorted.

---
[Go to merge-step-merge-sort.md](merge-step-merge-sort.md)
