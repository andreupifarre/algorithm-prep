---
title: Two Pointers Overview
description: Understand the core idea behind two pointers, why it works, and the primary variations used in interviews.
sidebar:
  label: Overview
  order: 1
---

Two pointers is a simple but powerful pattern for scanning sequences with two coordinated indices. By controlling the distance,
direction, or speed of the pointers you can eliminate huge swaths of search space and reduce many quadratic brute-force solutions
to linear time.

## What the pattern is

Two pointers always keeps track of **two positions** inside a sequence (array, string, or linked list). Each pointer is just an
index or iterator. The trick is deciding how to move them relative to each other so that you maintain the information the
problem needs.

Typical pointer roles include:

- **Opposite ends** – start one pointer at the beginning and one at the end.
- **Same direction (fast/slow)** – both begin at the start, but one advances faster.
- **Window tracking** – maintain a start and end index for the active window of elements.

## Why it matters

Using two pointers frequently upgrades a naive `O(n^2)` nested loop into an `O(n)` scan. You only visit each element a constant
number of times, so the savings are dramatic for large inputs. The technique also keeps memory usage low because you rarely need
extra data structures beyond a few counters.

## Core variations

1. **Opposite-direction pointers**
   - Use when data is sorted or when symmetry matters (e.g., palindromes).
   - Example: [Two Sum in a sorted array](/two-pointers/two-sum/).
2. **Same-direction (slow/fast) pointers**
   - Use to detect positions or properties while one pointer trails behind.
   - Example: [Remove duplicates from a sorted array](/two-pointers/remove-duplicates-in-sorted-array/).
3. **Sliding window**
   - Use when you need a contiguous subarray/substring meeting a condition.
   - Example: longest substring without repeating characters.

## Quick diagnostic checklist

Ask yourself these questions when reading a problem statement:

- Is the input already **sorted** or can it be sorted without breaking the rules?
- Does the problem involve a **subarray/substring** with constraints?
- Are you asked to find something about the **relative positions** of items?
- Could a pair of pointers help maintain the **current best answer** while scanning?

If you answer yes to any of the above, two pointers is worth a try.

## Next steps

Take a [bird's-eye tour of the main patterns](/two-pointers/birds-eye/) to see how problems cluster, then dive into the
[opposite-ends playbook](/two-pointers/opposite-ends/) before tackling the hands-on challenges.
