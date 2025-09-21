---
title: Two Sum in a Sorted Array
description: Solve the classic two sum problem in linear time using the opposite-ends two pointer pattern.
sidebar:
  label: Two Sum
  order: 1
---

The sorted version of Two Sum is the prototypical opposite-ends problem. With one pointer at each end you can decide exactly
which side to move based on whether the current sum is too small or too large.

## Problem

Given a sorted array of integers and a target value, determine whether any two numbers add up to the target. You may return the
indices, the numbers, or simply a boolean depending on the platform—here we detect whether a pair exists.

## Strategy

1. Initialize `left = 0` and `right = nums.length - 1`.
2. Compute `sum = nums[left] + nums[right]`.
3. If `sum` equals the target, you're done.
4. If `sum` is less than the target, move `left++` to make the sum bigger.
5. If `sum` is greater than the target, move `right--` to make the sum smaller.

You never revisit elements, so the scan finishes in `O(n)` time.

## Reference implementation

```ts
function twoSumSorted(nums: number[], target: number): boolean {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return true;
    }

    if (sum < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return false;
}
```

## Example walkthrough

For `nums = [1, 3, 4, 7, 10, 11]` and `target = 14`:

1. `left=0 (1)`, `right=5 (11)` → `sum = 12` < `14` → move `left`.
2. `left=1 (3)`, `right=5 (11)` → `sum = 14` → pair found.

## Complexity

- **Time:** `O(n)` – each pointer moves at most `n` steps.
- **Space:** `O(1)` – only a few variables are used.

## Try it yourself

What happens first for `nums = [2, 4, 6, 8, 9]`, `target = 15`?

- Initial sum is `11`, so increment `left`.
- Continue the loop until `6 + 9 = 15` is found.

Ready for a tougher challenge? Move on to the
[Container With Most Water](/two-pointers/container-with-most-water/) problem.
