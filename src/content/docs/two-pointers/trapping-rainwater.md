---
title: Trapping Rainwater
description: Compute trapped water between bars with two pointers that track running maxima from both sides.
sidebar:
  label: Trapping Rainwater
  order: 3
---

Trapping Rainwater extends the container logic by accounting for many walls instead of just two. Keep two pointers plus the best
height seen so far from each side. The smaller running maximum determines how much water can sit on the current bar.

## Problem

Given non-negative integers `height` where each bar has width `1`, compute how much water the bars can trap after raining.

## Strategy

1. Initialize `left = 0`, `right = height.length - 1`.
2. Track `leftMax` and `rightMax`, both starting at `0`.
3. While `left < right`:
   - Update the running maxima.
   - Process the side with the smaller maximum because that side's max bounds the water level there.
   - Add the trapped water at the processed index to a running total.

## Reference implementation

```ts
function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    if (leftMax <= rightMax) {
      water += leftMax - height[left];
      left += 1;
    } else {
      water += rightMax - height[right];
      right -= 1;
    }
  }

  return water;
}
```

## Example walkthrough

For `height = [0,1,0,2,1,0,1,3,2,1,2,1]` the loop processes:

1. Left index `0` adds `0` water.
2. Left index `2` adds `1` unit.
3. Later iterations add more until the total reaches `6`.

## Complexity

- **Time:** `O(n)` – each pointer moves inward once per step.
- **Space:** `O(1)` – constant extra memory.

Keep the momentum going with the linked list variant in
[Detect Cycle in Linked List](/two-pointers/detect-cycle-in-linked-list/).
