---
title: Palindrome Check
description: Determine whether a string reads the same forwards and backwards using opposite-end pointers.
sidebar:
  label: Palindrome Check
  order: 5
---

A palindrome check is the quickest introduction to two pointers. Compare characters from the outside in and stop the moment a
mismatch appears.

## Problem

Given a string, decide whether it is a palindrome. Ignore casing and non-alphanumeric characters if required by the platform.

## Strategy

1. Place `left` at the first character and `right` at the last character.
2. While `left < right`:
   - Optionally skip characters you want to ignore.
   - Compare the characters at both ends.
   - If they match, move both pointers inward.
   - If they differ, return `false`.
3. If the loop finishes, the string is a palindrome.

## Reference implementation

```ts
function isPalindrome(value: string): boolean {
  let left = 0;
  let right = value.length - 1;

  while (left < right) {
    if (value[left] !== value[right]) {
      return false;
    }

    left += 1;
    right -= 1;
  }

  return true;
}
```

## Example walkthrough

For `"level"`:

1. Compare positions `0` and `4` → `'l'` vs `'l'` → move inward.
2. Compare positions `1` and `3` → `'e'` vs `'e'` → move inward.
3. Pointers meet in the middle, so the string is a palindrome.

## Complexity

- **Time:** `O(n)` – each character participates in one comparison.
- **Space:** `O(1)` – no additional structures are needed.

Now tackle an array variant with [remove duplicates in sorted array](/two-pointers/remove-duplicates-in-sorted-array/).
