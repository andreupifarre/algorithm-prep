---
title: Container With Most Water
description: Maximize the area formed by two heights and their distance using an inward two pointer scan.
sidebar:
  label: Container With Most Water
  order: 2
---

The key insight for this LeetCode classic is that the shorter wall always limits the amount of water you can hold. Move the
pointer pointing at the shorter wall inward and keep track of the best area seen so far.

## Problem

Given an array `height` where each element represents the height of a vertical line on the x-axis, find the maximum water a
container can store between two lines.

## Strategy

1. Set `left = 0`, `right = height.length - 1`, and `best = 0`.
2. On each iteration compute:
   - `width = right - left`
   - `tall = Math.min(height[left], height[right])`
   - `area = width * tall`
3. Update `best = Math.max(best, area)`.
4. Move the pointer on the **shorter** line inward because the taller line cannot increase the area while width shrinks.

## Reference implementation

```ts
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let best = 0;

  while (left < right) {
    const width = right - left;
    const tall = Math.min(height[left], height[right]);
    best = Math.max(best, width * tall);

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return best;
}
```

## Example walkthrough

For `height = [1, 8, 6, 2, 5, 4, 8, 3, 7]`:

1. `left=0`, `right=8` → `width=8`, `tall=1`, `area=8` → move `left`.
2. `left=1`, `right=8` → `width=7`, `tall=7`, `area=49` → update best to `49`.
3. Continue shrinking the window while tracking the maximum area. The answer remains `49`.

## Complexity

- **Time:** `O(n)` – each pointer moves at most once per iteration.
- **Space:** `O(1)` – only a few counters are required.

Next, explore how a similar idea handles uneven terrain in the
[Trapping Rainwater](/two-pointers/trapping-rainwater/) problem.
