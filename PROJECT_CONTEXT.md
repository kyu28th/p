# Project Context

## 최상위 목표

최종 목표는 정보관리기술사 필기시험 합격이다.

이 repository는 합격을 위해 기출문제, 학습자료, 최신 트렌드, 토픽 지식, 답안 연습, 약점, 진도, 복습 이력을 장기간 연결해 추적하는 학습 시스템이다.

Markdown 파일 수를 늘리는 것 자체는 성공 지표가 아니다. 실제 시험에서 제한 시간 안에 고품질 답안을 작성할 수 있는 능력을 올리는 것이 최종 성공 지표다.

## 현재 상태

- 기본 repository 구조는 생성되어 있다.
- 원본 PDF/PPT/HWP는 repository에 저장하지 않는 원칙을 유지한다.
- 9주차 자료 묶음은 `sources/` 아래 Markdown 원문 흐름으로 1차 반영되어 있다.
- 공식 출제기준은 `exam/current-exam-standard.md`에 추적한다.
- 정보관리기술사 기출문제는 `past-exams/information-management/` 아래 회차별 Markdown으로 관리한다.
- 99회, 101회, 102회는 이미지 기반 수동 복원으로 보강했다.
- 116회 HWP는 아직 변환 대기 상태다.
- 첫 번째 토픽 카드로 `knowledge/management/strategy/standard-essential-patent.md`가 존재한다.

## 운영 철학

- 이 repository는 문서 보관소가 아니라 합격을 위한 학습 운영 시스템이다.
- 자료 수집보다 토픽화, 답안화, 복습화, 약점 보완이 더 중요하다.
- 오래된 자료는 기반 자료로만 사용하고, 최신 법/제도/표준/기술/제품 동향 확인 후 `knowledge/`로 승격한다.
- 기출문제와 토픽 카드는 서로 연결되어야 한다.
- 답안 평가 결과는 반복 약점으로 축적되어야 한다.
- 모바일 ChatGPT나 새 Codex 세션도 repository만 읽고 현재 상태를 복원할 수 있어야 한다.

## 핵심 데이터 흐름

```text
sources/ -> knowledge/ -> answers/ -> study/weak-points.md
past-exams/ -> knowledge/ -> predictions/
trends/ -> knowledge/ -> predictions/
study/status.yml -> study/dashboard.md
```

## 주요 구조

- `sources/`: 원천 자료에서 추출한 흐름 보존용 Markdown
- `knowledge/`: 시험 답안으로 전환 가능한 토픽 카드
- `past-exams/`: 회차별 기출문제와 기출-토픽 연결 데이터
- `answers/drafts/`: 실전처럼 작성한 최초 답안
- `answers/reviewed/`: 평가와 피드백을 받은 답안
- `answers/model/`: 복습 가능한 수준으로 개선한 모범 답안
- `study/`: 진도, 대시보드, 약점, 세션 로그
- `trends/`: 최신 IT/정책/산업 동향
- `predictions/`: 기출, 공백 기간, 최신 트렌드를 결합한 예상문제
- `templates/`: 토픽 카드, 답안 리뷰, 트렌드, 예상문제 템플릿

## 공개 저장소 원칙

- README는 최소한의 표지만 둔다.
- machine-specific local path, 계정명, private 운영 문구는 committed file에 남기지 않는다.
- 원본 파일과 원문 전체 복제 성격이 강한 자료는 공개 적합성을 별도로 판단한다.
- 공개에 부적합한 자료는 요약, 색인, 링크, 학습 메모 수준으로 낮춘다.

## 다음 우선순위

1. 토픽 카드 표준 템플릿을 기준으로 기존 SEP 카드를 점검한다.
2. 기출문제와 토픽 카드를 연결할 수 있는 최소 schema를 적용한다.
3. 답안 lifecycle을 실제 답안 파일에 적용한다.
4. `trends/`에 최신 중요 주제 1개를 등록한다.
5. `predictions/`에 근거가 있는 예상문제 형식을 만든다.

## Topic Map Baseline

- 분석된 기출: `past-exams/information-management/`의 변환 완료 39회차.
- 미처리 기출: 116회 HWP.
- 1차 canonical topic 수: 54개.
- 커버리지 판정: `OK` 17, `PARTIAL` 15, `NEW_GAP` 14, `UPDATE_NEEDED` 7, `REVIEW_NEEDED` 1.
- 최근 증가 주제: LLM/RAG, AI RMF/ISO 42001, AI 법/윤리, OWASP LLM/Prompt Injection/Model Inversion, Zero Trust, SBOM, Kubernetes/Cloud Native, Data Observability, AI 학습데이터 품질.
- 즉시 답안 연습 가능 주제: SW 테스트/품질, 데이터 품질, 트랜잭션/격리수준, 정규화/반정규화, PMO/감리, 요구공학, Agile/DevOps 기본, WBS/EVM.
- 다음 우선순위는 자료량 증가가 아니라 `OK` 토픽 답안 작성과 `NEW_GAP` 토픽 최신 근거 보강이다.

## Operating Handoff

- Single source of truth: GitHub repository `kyu28th/p`.
- Codex role: persistent operator, study partner, repository manager, topic/answer/weak-point tracker, and next-study recommender.
- ChatGPT role when used: external study/analysis tool. Important ChatGPT output should be reflected into the repository only when it improves the learning loop.
- Final success metric: ability to understand exam questions, recall the proper topic, build an answer structure quickly, include key terms, use tables/diagrams, and write scoreable answers within time.
- Current milestone: 2026-08-22 baseline mock exam.
- Mock exam rule: round 140 is reserved as an unseen set until 2026-08-22. Ordinary study uses rounds 139 and earlier.
- Mock exam format: 100 minutes x 4 periods = 400 minutes.
- Before 2026-08-22, the focus is not full-scope mastery. The focus is high-frequency topic recognition, basic knowledge recovery, recent-gap recognition, outline practice, answer structure, table/diagram habit, and timed-answer baseline measurement.
- Avoid excessive system construction. New schema/dashboard/script/template work should be done only when it clearly improves pass probability more than direct study.
- Daily loop: topic -> knowledge check -> concept understanding -> related past exams -> outline -> answer keywords -> table/diagram -> answer writing -> review -> weak point -> review schedule.
- 2026-08-22 results should classify each question by knowledge level, answer-structure quality, time issue, and interpretation failure, then become the baseline for the 141st-exam plan.

## Personal Learning State

- Study baseline start: 2026-08-13 Day 1.
- Do not infer high exam readiness from general IT work experience.
- Track historical measurements separately from current estimated state.
- Every measurement must have a date.
- Understanding, recall, answer structure, and writing are separate abilities.
- Current studied topic count: 4.
- Studied topics: WBS, Project Risk Management, Requirements Traceability, Software Configuration Management.
- First studied topic: WBS.
- WBS measured on 2026-08-13: understanding 3/5, recall 3/5, answer structure 1/5, writing not measured.
- WBS strengths: Work Package, 100% Rule, management purpose.
- WBS weak points: hierarchical decomposition recall, WBS principles recall, question requirement to outline, technical answer expression.
- WBS next review: 2026-08-14.
- Topic state path: `study/topic-states/wbs.yml`.
- Session path: `study/sessions/2026-08-13.md`.
- ChatGPT handoff template: `templates/study-session-handoff.md`.
- Day 3 mobile data recorded: `study/sessions/2026-08-21.md`.
- Day 4 mobile data recorded: `study/sessions/2026-08-25.md`.
- The 2026-09-01 session was retrospectively reconstructed on 2026-09-18 from preserved user utterances in `study/sessions/2026-09-01.md`; it adds no score, AS-001 success, or writing completion.
- Requirements Traceability current weak point: definition connection/tracing is still not stable; on 2026-08-26 the user recalled 누락/변경/영향도/RTM but again omitted requirements-design-development-test connection/tracing.
- The reconstructed 2026-09-01 evidence contains 산출물/연결/영향도/누락/추적/정방향/역방향 terms, but independent recall and the meanings/application of forward/backward traceability remain unverified.
- Software Configuration Management current state: AS-001 transferred successfully on 2026-08-26; official activities and definition keywords were recalled after correction, but no-hint long-term recall is still not measured.
- AS-001 state: Requirements Traceability outline alignment succeeded twice and Software Configuration Management transfer succeeded once.
- Next start sequence: ask "요구사항 추적성이란 무엇인가?" without hints; verify forward/backward traceability starting points and purposes with examples; ask "소프트웨어 형상관리의 개념과 주요 활동을 설명하시오." without hints; then attempt a short answer if possible.
- 2027 assumed schedule path: `study/schedule-2027.md`.
- 2027 assumed application: 2027-01-05 ~ 2027-01-08.
- 2027 assumed written exam: 2027-02-06.
- Current schedule-control WBS focus: TOP 30 topic recall by 2026-09-30, answer-structure training by 2026-10-31, latest-gap repair by 2026-11-30, timed writing volume by 2026-12-31, final mocks by 2027-01-24.
