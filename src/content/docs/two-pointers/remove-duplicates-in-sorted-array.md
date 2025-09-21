---
title: Remove Duplicates in Sorted Array
description: Compress a sorted array in-place with slow and fast pointers that track the unique boundary.
sidebar:
  label: Remove Duplicates in Sorted Array
  order: 6
---

This slow/fast pointer technique keeps the left portion of the array "clean" while a second pointer explores ahead for new
values. Each time a new value appears, copy it into the next slot of the clean region.

## Problem

Given a sorted integer array, remove the duplicates in-place so that each element appears only once and return the new length.

## Strategy

1. If the array is empty, return `0` immediately.
2. Set `slow = 0`. This index points at the last unique value in the clean region.
3. Iterate `fast` from `1` to the end of the array.
4. Whenever `nums[fast] !== nums[slow]`, increment `slow` and copy `nums[fast]` into `nums[slow]`.
5. After the loop, the new length is `slow + 1`.

## Reference implementation

```ts
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let slow = 0;

  for (let fast = 1; fast < nums.length; fast += 1) {
    if (nums[fast] !== nums[slow]) {
      slow += 1;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;
}
```

## Example walkthrough

For `nums = [1, 1, 2, 2, 3]`:

1. Start with `slow = 0` (`1`).
2. At `fast = 2` the value `2` differs, so increment `slow` to `1` and copy `2` into that position.
3. Later `fast = 4` copies `3` into index `2`.
4. The function returns `3`, and the first three slots contain `[1, 2, 3]`.

## Complexity

- **Time:** `O(n)` – each element is read once.
- **Space:** `O(1)` – the operation happens in-place.

Revisit the [Two Sum](/two-pointers/two-sum/) notes to see another linear-time win, or explore the
[overview](/two-pointers/overview/) again to cement the bigger picture.
