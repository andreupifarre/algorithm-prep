---
title: Opposite Ends Strategy
description: Learn how inward-moving pointers solve palindrome checks, two sum, and container-style problems efficiently.
sidebar:
  label: Opposite Ends Strategy
  order: 3
---

The opposite-ends pattern keeps one pointer at the start of a sequence and one at the end, shrinking the search interval until
both meet. It shines whenever the input is sorted or symmetric and the best choice depends on comparing extremities.

## How it works

1. Initialize `left = 0` and `right = n - 1`.
2. Evaluate the pair of values at `left` and `right` against your condition.
3. Move one pointer inward in a way that discards impossible answers while keeping potential ones.

The art is in step 3: use problem-specific logic to decide which pointer to move.

## Example: palindrome check

- Compare `s[left]` and `s[right]`.
- If the characters mismatch, you can return `false` immediately.
- If they match, move both inward.

Try the full walkthrough in the [palindrome guide](/two-pointers/palindrome-check/).

## Example: two sum in a sorted array

- Sum `nums[left] + nums[right]`.
- If the sum is too small, move `left++` to increase it.
- If the sum is too large, move `right--` to decrease it.

See the detailed run-through and code in [Two Sum](/two-pointers/two-sum/).

## Example: maximizing container area

- Compute the area defined by the two heights and their distance.
- The shorter wall limits the volume, so move the pointer at the shorter height inward.

Dive deeper in [Container With Most Water](/two-pointers/container-with-most-water/).

## Checklist before you apply it

- ✅ Input is sorted or you can sort without breaking constraints.
- ✅ You need the **best pair** or to check a **symmetry condition**.
- ✅ Moving inward in response to comparisons makes logical sense.

Once these conditions hold, the opposite-ends approach usually yields an `O(n)` solution with `O(1)` extra space.
