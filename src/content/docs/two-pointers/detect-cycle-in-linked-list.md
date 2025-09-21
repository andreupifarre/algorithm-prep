---
title: Detect Cycle in Linked List
description: Use Floyd's tortoise and hare pointers to determine whether a linked list contains a cycle.
sidebar:
  label: Detect Cycle in Linked List
  order: 4
---

Floyd's cycle detection algorithm moves one pointer twice as fast as the other. If a cycle exists, the fast pointer eventually
laps the slow pointer; otherwise the fast pointer hits the end of the list.

## Problem

Given the head of a linked list, determine whether the list has a cycle.

## Strategy

1. Initialize two pointers `slow` and `fast` to the head node.
2. Advance `slow` by one step and `fast` by two steps each iteration.
3. If `slow` and `fast` ever point to the same node, a cycle exists.
4. If `fast` or `fast.next` becomes `null`, the list terminates and no cycle exists.

## Reference implementation

```ts
type ListNode = {
  val: number;
  next: ListNode | null;
};

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
```

## Example walkthrough

For the list `1 → 2 → 3 → 4 → 2 (back to node 2)`:

1. Start with both pointers at node `1`.
2. After one step `slow = 2`, `fast = 3`.
3. After another step `slow = 3`, `fast = 2`.
4. The next step puts both on node `4`, so the algorithm reports a cycle.

## Complexity

- **Time:** `O(n)` – each pointer advances at most a linear number of steps.
- **Space:** `O(1)` – no extra structures are used.

Continue practicing with a string-based problem in the [palindrome check](/two-pointers/palindrome-check/) walkthrough.
