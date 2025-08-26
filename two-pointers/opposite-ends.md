// TODO: Needs rewriting

Good. Let's zoom in systematically. We'll start with **Category 1: Opposite Ends (Inward Movement)**.

---

### 🔹 Category 1: Opposite Ends (Inward Movement)

**Setup**:

- One pointer at start (`left = 0`), one at end (`right = n-1`).

- Move them inward based on the problem's condition.

- Usually requires sorted arrays OR symmetry checking.

---

#### Example 1: **Palindrome Check**

Problem: Check if a string is a palindrome.

- Compare `s[left]` and `s[right]`.

- If equal → move both inward.

- If not equal → not palindrome.

👉 Key idea: shrink toward the middle while checking.

---

#### Example 2: **Two Sum in Sorted Array**

Problem: Find two numbers that add to a target.

- If `arr[left] + arr[right] == target` → found.

- If sum < target → increase `left` (need bigger sum).

- If sum > target → decrease `right` (need smaller sum).

👉 Key idea: use sorted property to adjust pointers.

---

#### Example 3: **Container With Most Water**

Problem: Given heights, find max water trapped between two lines.

- `left = 0`, `right = n-1`.

- Area = `(right-left) * min(height[left], height[right])`.

- Move inward from the shorter side (because taller won't help unless distance shrinks).

👉 Key idea: greedy inward movement.

---

#### Example 4: **Trapping Rainwater**

Problem: Water trapped between bars.

- Trickier version of two pointers.

- Track `left_max` and `right_max`.

- Move inward, always processing side with smaller max so far.

👉 Key idea: height constraint drives pointer movement.

---

So Category 1 covers problems where you:

- Compare values from both ends.

- Shrink interval until meeting in middle.

- Often exploit **sorted input** or **symmetry**.

---

// TODO: needs rewriting
Now let's make this interactive:\
👉 Do you want me to **walk you through solving one of these step by step** (like Two Sum or Container with Most Water), or should I **move on to Category 2 (Same-direction pointers)**?

[Go to palindrome-check.md](palindrome-check.md)
