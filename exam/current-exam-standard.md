# Information Management Professional Engineer Exam Standard

## Official Reference

- Source: Q-Net information page for 정보관리기술사
- URL: https://www.q-net.or.kr/crf005.do?gId=&gSite=Q&id=crf00503s02&jmCd=0601&jmInfoDivCcd=B0
- Checked: 2026-08-12

## Current And Next Standard Periods

| Period | Status | Notes |
|---|---|---|
| 2023-01-01 ~ 2026-12-31 | Current for 2026 exams | Use as the main baseline while preparing for 2026. |
| 2027-01-01 ~ 2030-12-31 | Next standard | Must be compared if the target exam moves to 2027 or later. |

## Q-Net Exam Subject Summary

Q-Net summarizes the exam subject as matters related to information structure, collection, organization, accumulation, retrieval, information system design, numerical calculation, and other analysis, management, and basic application of information.

## Working Coverage Areas

The repository uses the following working areas for study tracking. These are study-management buckets, not a replacement for the official Q-Net standard.

| Area | Repository source | Current status |
|---|---|---|
| Information strategy and management | `sources/management-strategy/` | Old source ingested; current standard mapping needed |
| Software engineering | `sources/software-engineering/` | Old source ingested; SW safety and modern DevSecOps needs review |
| Data processing and database | `sources/database/`, `sources/fundamentals/` | Old source ingested; data governance and analytics needs review |
| Computer system and architecture | `sources/computer-architecture/`, `sources/operating-system/` | Old source ingested; cloud-native and infra architecture needs review |
| Network and digital service | `sources/digital-network/`, `sources/digital-service/` | Old source ingested; platform/API/cloud trends need review |
| Information security | `sources/digital-security/` | Old source ingested; zero trust, supply-chain security, privacy law updates need review |
| Latest technology, law, policy | `sources/fundamentals/ai.md`, `trends/` | Highest risk; must be continuously updated |

## Operating Rule

The PDF sources in this repository are useful as foundational material, but many files have 2016-2017 version names and 2019 file timestamps. They must not be treated as complete current coverage.

Before a topic is promoted into `knowledge/`, assign one of these freshness states:

| State | Meaning |
|---|---|
| `source-only` | Extracted from old source; not yet validated |
| `needs-current-check` | Likely relevant, but current standard/trend check is required |
| `current-checked` | Checked against current standard or recent reliable source |
| `updated` | Old source was supplemented with current information |

