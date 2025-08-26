### Problem

Given a string, check if it's a palindrome (same forwards and backwards).

Example:

- `"level"` → palindrome

- `"hello"` → not palindrome

---

### Step 1: Setup

We use two pointers:

- `left = 0` (start of string)

- `right = n-1` (end of string)

---

### Step 2: Iteration

While `left < right`:

1.  Compare `s[left]` with `s[right]`.

    - If not equal → **not a palindrome**.

    - If equal → move inward: `left++`, `right--`.

---

### Step 3: End Condition

- If the loop finishes without mismatch, then the string is a palindrome.

---

### Example Run: `"level"`

- left=0 (`'l'`), right=4 (`'l'`) → equal → move in.

- left=1 (`'e'`), right=3 (`'e'`) → equal → move in.

- left=2, right=2 → pointers crossed/meet → done → palindrome.

---

// TODO: add pseudo code and js pattern code

// TODO: rewite
Here's my question for you:\
👉 If the input was `"hello"`, what would happen when `left=1` and `right=3`?

---

For `"hello"`:

- Step 1: `left=0 → 'h'`, `right=4 → 'o'` → mismatch.

- Immediately return false.

- No need to check further.

That's the power of two pointers here: **you stop early at the first mismatch**.

---

[Go to two-sum.md](two-sum.md)
