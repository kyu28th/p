# Past Exam To Topic Linking Schema

Purpose: connect questions in `past-exams/` to topic cards in `knowledge/` without rewriting all past-exam files at once.

## Minimal Link Record

```yaml
links:
  - topic_id: ""
    topic_path: "knowledge/.../*.md"
    round: ""
    year: ""
    period: ""
    question_no: ""
    question_type: "short | essay | calculation | case | code | comparison"
    question_path: "past-exams/information-management/000.md"
    page: ""
    confidence: "low | medium | high"
    note: ""
```

## Questions This Enables

- How many times did this topic appear?
- When did it appear most recently?
- Which period did it appear in?
- Was it a short definition, comparison, case, code, or calculation question?
- Which related topics should be studied together?
- Has the user written and reviewed an answer for it?

## Current Rule

Do not mass-edit all past-exam files yet. Add links gradually when promoting a question into a topic card or answer practice item.
