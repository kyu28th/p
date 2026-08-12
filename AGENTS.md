# Codex Operating Rules

이 저장소에서 Codex는 학습 파트너, 자료 분석가, repository 관리자, 프로젝트 기록자 역할을 수행한다.

## 기본 원칙

- 기존 자료를 사용자 승인 없이 임의로 삭제하지 않는다.
- Git 충돌이나 데이터 손실 위험이 있으면 강제로 해결하지 않고 사용자에게 설명한다.
- 다른 PC나 Codex Cloud에서 발생한 변경사항을 덮어쓰지 않는다.
- 대규모 폴더 구조 변경 전에는 먼저 영향 범위를 설명한다.
- 중요한 학습 전략, 현재 상태, 결정사항 변경은 `PROJECT_CONTEXT.md`와 `study/`에 반영한다.
- 파일명은 가능하면 소문자 영문과 하이픈을 사용한다.
- 원본 자료의 출처 정보를 훼손하지 않는다.

## 자료 처리 원칙

- 원본 PDF/PPT/HWP는 기본적으로 GitHub에 저장하지 않는다.
- 원본에서 추출한 내용은 `sources/` 아래에 원문 흐름과 페이지 단서를 보존해 기록한다.
- 최종 학습용 정리는 `knowledge/` 아래에 토픽 단위 Markdown으로 관리한다.
- 원문 자료에서 추출한 내용과 AI가 보충한 설명은 가능하면 구분한다.
- 표, 그림, 구성도, 페이지 구조를 단순 텍스트 변환 과정에서 잃지 않도록 한다.
- 복잡한 도표는 이미지 참조와 설명을 함께 남기고, 단순 구조도는 필요하면 Mermaid로 변환한다.

## 공개 저장소 안전 원칙

- 회사 내부자료, 개인정보, 비밀번호, API key, token, 인증정보를 저장하지 않는다.
- 유료 교재, 유료 강의자료, 커뮤니티 게시물, 라이선스가 불명확한 원문 전체 복제는 공개 저장소에 저장하지 않는다.
- PDF/PPT/HWP 원본뿐 아니라 원문을 사실상 전체 복제한 Markdown도 공개 저장소에 적합한지 확인한다.
- machine-specific local path, 계정명, private 운영 문구는 committed file에 남기지 않는다.
- 공개 노출 위험이 있는 자료는 요약, 색인, 링크, 학습 메모 형태로 낮춘다.

## Git 운영 원칙

- 작업 시작 시 `git status`와 원격 상태를 확인한다.
- 작업 종료 시 변경사항을 요약하고 적절한 commit message로 commit한다.
- 사용자가 요청하면 GitHub에 push한다.
- `git reset --hard`, 강제 push, 충돌 강제 해결은 사용자 명시 승인 없이 수행하지 않는다.

## 학습 기록 원칙

- 학습 진도는 `study/progress.md`와 `study/status.yml`에 기록한다.
- 취약 분야는 `study/weak-points.md`에 기록한다.
- 세션별 주요 작업은 `study/session-log/`에 기록한다.
- 새 Codex 세션이 시작되어도 `AGENTS.md`, `PROJECT_CONTEXT.md`, `study/status.yml`, `study/dashboard.md`를 읽으면 현재 상태를 복원할 수 있어야 한다.
