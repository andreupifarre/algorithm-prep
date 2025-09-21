---
title: Bird's-Eye Map of Two Pointer Patterns
description: Categorize every major two pointer scenario so you know which playbook to reach for on interview day.
sidebar:
  label: Bird's-eye Map
  order: 2
---

Knowing *when* to apply each variation of two pointers is half the battle. Use this pattern map to match a problem statement to
the correct strategy.

## Opposite ends (inward movement)

- **Setup:** `left = 0`, `right = n - 1`.
- **When:** data is sorted or symmetric and you need to compare values from both sides.
- **Use it for:** palindromes, [Two Sum in a sorted array](/two-pointers/two-sum/),
  [Container With Most Water](/two-pointers/container-with-most-water/),
  [Trapping Rainwater](/two-pointers/trapping-rainwater/).

## Same direction (slow and fast)

- **Setup:** both pointers start together; `fast` races ahead while `slow` trails.
- **When:** you must track positions relative to each other in arrays or linked lists.
- **Use it for:** [Remove Duplicates in Sorted Array](/two-pointers/remove-duplicates-in-sorted-array/),
  [Detect Cycle in Linked List](/two-pointers/detect-cycle-in-linked-list/), finding the middle node.

## Sliding window (expand and shrink)

- **Setup:** treat the pointers as the left and right borders of a window.
- **When:** you are searching for the longest, shortest, or first window that satisfies a constraint.
- **Use it for:** longest substring without repeating characters, minimum size subarray sum, fruit baskets.

## Partitioning and rearrangement

- **Setup:** maintain regions separated by pointer boundaries.
- **When:** the task requires grouping values by rule or pivot.
- **Use it for:** Dutch National Flag, quicksort partitioning, segregating even/odd numbers.

## Merging two sequences

- **Setup:** one pointer per sorted sequence.
- **When:** you must merge, intersect, or compare two sorted lists.
- **Use it for:** merge step in merge sort, merge two sorted linked lists, intersect sorted arrays.

## Memory hook

| Pattern            | Think "Purpose"                         |
| ------------------ | ---------------------------------------- |
| Opposite ends      | Compare or sum while shrinking the range |
| Slow and fast      | Detect positions, anomalies, or cycles   |
| Sliding window     | Maintain a constrained subarray/string   |
| Partitioning       | Rearrange elements by rule               |
| Merging            | Synchronize two ordered sequences        |

From here jump to the [opposite ends strategy](/two-pointers/opposite-ends/) to see the most common playbook in detail, or dive
directly into the [practice problems](/two-pointers/two-sum/).
