# Learning State Tracking

This repository tracks both learning history and current estimated readiness.

## Core Principle

Do not overwrite a past measurement just because time has passed.

```text
historical measurement = what was actually observed on a date
current estimated state = current readiness inferred from elapsed time and review history
```

## Ability Dimensions

| Dimension | Meaning |
|---|---|
| Understanding | Can explain the concept and principle after learning |
| Recall | Can retrieve key content without notes |
| Answer Structure | Can analyze the question and build an exam-style outline |
| Writing | Can complete a scoreable answer under time |
| Diagram/Table | Can draw or structure a useful exam visual |
| Keywords | Can recall scoring keywords |
| Insight/Application | Can add comparison, implication, or use-case depth |
| Time Management | Can fit the answer to the exam time limit |

Understanding does not imply recall. Recall does not imply answer structure. Knowledge readiness and answer readiness are tracked separately.

## Event-First Recording

Topic state should preserve append-only learning and testing events:

```yaml
events:
  - date: "YYYY-MM-DD"
    type: "learning | recall_test | outline_test | answer_practice | review"
    question: ""
    user_answer: ""
    result: "success | partial_success | partial_weak | fail"
    concept: ""
```

## Review Interval Baseline

Use simple intervals first:

```text
1 day -> 3 days -> 7 days -> 14 days -> 30 days
```

Adjustment rule:

- Recall success: increase the next interval.
- Partial recall: increase slowly or keep the same interval.
- Recall failure: return to a shorter interval.

The data is preserved so a future FSRS-like method can be introduced without losing history.

## Today's Study Selection

When the user says "오늘 공부하자", choose a small set from:

1. Due Review: topics whose `next_review` is due or overdue.
2. Weak Recall: topics understood but not recalled.
3. Weak Answer Structure: topics known but hard to outline.
4. New Learning: high-priority topics not yet studied.
5. Answer Practice: topics with enough knowledge but low answer readiness.

The daily mix should usually include:

```text
review + new learning + answer practice
```

Do not keep adding only new topics.
