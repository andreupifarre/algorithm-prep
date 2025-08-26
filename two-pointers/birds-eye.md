// TODO: needs rewriting
Here's the **bird's-eye map of two pointers** in DSA. Think of it as your "toolbox categories."

---

### 📌 Bird's-Eye View of Two Pointers

#### 1\. **Opposite Ends (Inward Movement)**

- **Setup**: One pointer at start, one at end.

- **When**: Input is sorted OR you want to compare elements from both ends.

- **Problems**:

  - Check palindrome in string/array

  - Two-sum in sorted array

  - Container with most water

  - Trapping rainwater

---

#### 2\. **Same Direction (Slow--Fast Pointers)**

- **Setup**: Both start at beginning, fast moves quicker.

- **When**: Detect positions or properties in arrays/linked lists.

- **Problems**:

  - Remove duplicates in sorted array

  - Detect cycle in linked list (Floyd's Tortoise & Hare)

  - Find middle of linked list

---

#### 3\. **Sliding Window (Growing & Shrinking)**

- **Setup**: Left and right track a window (subarray/substring).

- **When**: Problem asks for subarray/substring with conditions.

- **Problems**:

  - Longest substring without repeating characters

  - Smallest subarray with sum ≥ target

  - Max number of fruits in baskets (LeetCode 904)

---

#### 4\. **Partitioning / Rearrangement**

- **Setup**: Pointers help place elements in the correct region.

- **When**: Problem involves grouping by condition.

- **Problems**:

  - Dutch National Flag problem (0s, 1s, 2s sorting)

  - Partitioning array around pivot (used in quicksort)

---

#### 5\. **Merging / Two Sequences**

- **Setup**: One pointer per sequence.

- **When**: Need to merge or compare two sorted arrays/lists.

- **Problems**:

  - Merge step in merge sort

  - Merge two sorted linked lists

  - Find intersection of two sorted arrays

---

### ⚡ Quick Mnemonic

- **Opposite ends → "Sum/Compare"**

- **Same direction → "Find positions (cycle, middle, unique)"**

- **Sliding window → "Subarray/Substring conditions"**

- **Partitioning → "Rearrange by rule"**

- **Merging → "Combine sequences"**

---

// TODO: Needs rewriting
Question for you: do you want me to now **zoom into one category at a time with examples** (like Opposite Ends first), or do you prefer I **show you the most common interview problems across all categories**?

[Go to opposite-ends.md](opposite-ends.md)
