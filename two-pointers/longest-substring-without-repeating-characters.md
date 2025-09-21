Alright, let's solve **Longest Substring Without Repeating Characters** with the sliding window pattern.

### Problem

Given a string `s`, return the length of the longest substring without repeating characters.

Example:

- `s = "abcabcbb"` → answer is `3` (substring `"abc"`).

---

### Step 1: Setup

- `left = 0`
- Hash map `count` to track how many times each character appears in the current window
- `best = 0` to track the longest valid window so far

---

### Step 2: Expand with `right`

For each index `right` from `0` to `n-1`:

1.  Include `s[right]` in the window: `count[s[right]]++`.
2.  While the current character count is > 1 (duplicate inside window):
    - Decrement `count[s[left]]`.
    - Move `left++` to shrink the window until it's valid again.

---

### Step 3: Update the answer

- After the shrinking loop, the window `[left, right]` has all unique characters.
- Update `best = max(best, right - left + 1)`.

Time: **O(n)** because each pointer moves at most `n` times.\
Space: **O(min(n, alphabet))** for the map.

---

### Example Run: `s = "abcabcbb"`

- `right=0` → add `'a'` → window `"a"` → best=1
- `right=1` → add `'b'` → window `"ab"` → best=2
- `right=2` → add `'c'` → window `"abc"` → best=3
- `right=3` → add `'a'` → duplicate `'a'` → shrink `left` to 1 → window `"bca"`
- `right=4` → add `'b'` → duplicate `'b'` → shrink until window `"cab"`
- ... continue. Final best remains `3`.

---

Now your turn:\
👉 Suppose `s = "abba"`. When `right` is at index `2` (the second `'b'`), where does `left` end up after the shrinking loop, and why?

---

Answer:
- Adding the second `'b'` makes `count['b'] = 2`.
- Shrink: move `left` from 0 → 1 (drops `'a'`), but `count['b']` is still 2.
- Shrink again: move `left` from 1 → 2 (drops the first `'b'`), now `count['b'] = 1`.
- So `left` stops at index `2`, leaving the window `"b"` valid again.

---
[Go to minimum-size-subarray-sum.md](minimum-size-subarray-sum.md)
