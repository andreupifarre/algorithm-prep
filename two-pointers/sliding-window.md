// TODO: needs rewriting
Time to move into **Category 3: Sliding Window (Same Direction Pointers)**.

---

### 🔹 Category 3: Sliding Window (Grow & Shrink)

**Setup**:

- Both pointers (`left` and `right`) start at index 0.
- `right` expands the window.
- `left` shrinks the window when a condition breaks.
- We maintain some running state (sum, frequency map, unique count, etc.).

---

### When to reach for sliding window

- Problem talks about **subarrays or substrings**.
- There's a **constraint** you must keep inside the window (e.g., sum ≤ target, at most K distinct characters, no repeats).
- You want the **longest** or **shortest** window satisfying that constraint.

---

### Generic pattern

1.  Initialize `left = 0`, state trackers (sum, map, counter, ...), best answer placeholder.
2.  Expand with `right` one step at a time, updating the state.
3.  While the state violates the condition, move `left` forward and undo its contribution.
4.  Update the answer each time the state is valid.

Think of it as **breathing**: inhale with `right`, exhale with `left`.

---

### Example problems we'll tackle

- Longest substring without repeating characters.
- Minimum size subarray sum ≥ target.
- Fruit into baskets (at most two distinct types).

Each one uses the same skeleton but tweaks the state we track.

---

// TODO: needs rewriting
Ready to put this into action?\
👉 Let's start with the classic **Longest Substring Without Repeating Characters**.

[Go to longest-substring-without-repeating-characters.md](longest-substring-without-repeating-characters.md)
