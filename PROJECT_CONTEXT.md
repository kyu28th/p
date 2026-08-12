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
