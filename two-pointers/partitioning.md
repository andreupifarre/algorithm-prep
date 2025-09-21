// TODO: needs rewriting
Let's slide into **Category 4: Partitioning / Rearrangement with Two Pointers**.

---

### 🔹 Category 4: Partitioning / Rearrangement

**Goal**: Reorder elements in-place so that parts of the array satisfy certain conditions.

**Setup**:

- Usually one pointer starts from the left, another from the right.
- Swap elements that are "out of place" until each region is clean.
- Often paired with a third pointer tracking the current index.

---

### When this pattern shows up

- Grouping elements by type/value (0s,1s,2s or negatives/positives).
- Partitioning around a pivot (quicksort, Dutch National Flag).
- Reordering arrays in-place without extra memory.

---

### Mindset

- Decide the **regions** you want (e.g., `< pivot`, `== pivot`, `> pivot`).
- Maintain boundaries for those regions as pointers.
- Move or swap elements to expand the correct region.

---

### Problems we'll tackle next

- Dutch National Flag (sort colors 0,1,2).
- Partition array around a pivot.

These unlock many in-place reordering tasks.

---

// TODO: needs rewriting
Ready for a classic?\
👉 Let's practice the **Dutch National Flag** problem next.

[Go to dutch-national-flag.md](dutch-national-flag.md)
