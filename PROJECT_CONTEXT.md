# Project Context

## 프로젝트 목표

정보관리기술사 필기시험 합격.

## 현재 학습 단계

프로젝트 초기 구축 단계.

현재는 GitHub Private Repository와 로컬 저장소 연결을 검증했고, 9주차 신규 PDF 묶음을 Markdown 1차 추출본으로 repository에 반영하는 중이다.

## 현재 집중 분야

- Repository 운영 구조 확정
- PDF/PPT 원본 자료를 Markdown 학습 자료로 변환하는 방식 검증
- 9주차 신규 PDF 묶음 전체를 이용한 자료 투입 프로세스 검증
- 과거 자료를 현행 시험 대비 지식베이스로 재정리할 때 최신성 검증 기준 수립
- 공식 출제기준 기준의 커버리지 갭 추적과 텍스트 대시보드 구축

## 현재 학습 전략

- 원본 PDF/PPT는 로컬에 보관한다.
- GitHub에는 Markdown 중심의 산출물을 저장한다.
- 원문 흐름은 `sources/`에 보존한다.
- 시험 대비 토픽 단위 정리는 `knowledge/`에 축적한다.
- 출처 추적을 유지한다.
- 2016~2019년 기준의 과거 자료는 최신 기술, 표준, 법/제도, 제품 동향을 별도로 검증한 뒤 토픽 지식베이스에 반영한다.

## 전체 진행상황

- GitHub repository 생성 완료: `https://github.com/kyu28th/p.git`
- 로컬 저장소 연결 완료: `C:\p`
- `test.txt`를 통한 commit/push 검증 완료
- 기본 repository 구조 작성 진행 중
- 경영전략, SW공학, 디지털서비스, 디지털네트워크, 디지털보안, 데이터베이스, CA, OS, 자료구조, 알고리즘, AI PDF를 `sources/` 아래 Markdown으로 1차 변환
- `exam/current-exam-standard.md`, `study/coverage-gap.md`, `study/status.yml`, `study/dashboard.md` 생성

## 취약 분야

아직 기록 없음.

## 중요 예상주제

아직 기록 없음.

## 최근 주요 결정

- GitHub repository는 Private으로 운영한다.
- 원본 PDF/PPT는 기본적으로 GitHub에 올리지 않는다.
- PDF/PPT 변환본은 먼저 `sources/`에 저장한 뒤, 토픽 단위로 `knowledge/`에 정리한다.
- Q-Net 공식 출제기준을 기준점으로 삼아 구자료의 누락/구식 토픽을 추적한다.

## 현재 진행 중 작업

9주차 신규 PDF 묶음 전체를 1차 Markdown으로 변환했고, 다음 단계에서 토픽 단위 지식베이스로 분해할 예정이다.

## 다음 할 일

- 9주차 신규 PDF 묶음 전체에서 텍스트를 페이지 단위 Markdown으로 1차 추출
- 표/그림/구성도 보존이 필요한 페이지를 선별
- 변환 품질과 토픽 분류 방식을 검토
- 첫 번째 토픽을 `knowledge/`로 승격하고 현행성 검증 기록을 남긴다.
