# Study Session Handoff Template

Use this when a mobile ChatGPT study session should be reflected into this repository by Codex. The handoff should contain only useful learning evidence, not a full chat transcript.

```yaml
session:
  date: ""
  duration: ""
  topics:
    - ""
  mode: "new_learning | review | recall_test | answer_practice | mixed"

measurements:
  - topic: ""
    date: ""
    understanding: null
    recall: null
    answer_structure: null
    writing: null
    note: ""

recall_tests:
  - topic: ""
    date: ""
    question: ""
    user_answer_summary: ""
    result: "success | partial_success | partial_weak | fail"
    concept: ""
    interpretation: ""

strengths:
  - topic: ""
    concept: ""
    evidence: ""

weak_points:
  - topic: ""
    concept: ""
    type: "understanding | recall | answer_structure | writing | diagram | time_management"
    evidence: ""

answer_practice:
  - topic: ""
    question: ""
    timed: false
    duration: ""
    result: ""
    review_summary: ""

next_review:
  - topic: ""
    due: ""
    active_recall_questions:
      - ""
    must_check_keywords:
      - ""

notes:
  - ""
```

## Minimum Handoff

When short on time, provide only:

- date
- topic
- questions asked
- user answer summaries
- result per question
- strengths
- weak points
- next review date or urgency

## Important Rules

- Keep historical measurements unchanged.
- Store current estimated state separately from measured scores.
- Every measurement must have a date.
- Distinguish understanding from recall.
- Distinguish knowledge readiness from answer readiness.
- Prefer active recall evidence over passive reading time.
