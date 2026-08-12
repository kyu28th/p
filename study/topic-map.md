# Topic Map

## Scope

This is the first repository-based topic map for the written exam loop.

- Past-exam corpus analyzed: 39 converted rounds under `past-exams/information-management/` (`092` through `139`, with gaps where no file exists).
- Pending corpus: round `116` HWP is still not converted.
- Source base compared: old Markdown extractions under `sources/`.
- Canonical topics in this first map: 54.
- Rule: old source coverage is treated as a foundation, not as current readiness.

## High-Frequency Topics TOP 20

| Rank | Topic | Evidence Pattern | First Action |
|---:|---|---|---|
| 1 | Software testing and QA | Repeats across older and recent rounds, including AI/SW quality variants | Start answer practice |
| 2 | Data quality and governance | Repeats from data quality basics to AI training data quality | Build topic card |
| 3 | NoSQL, CAP, PACELC, distributed DB | Repeated DB architecture questions | Build DB comparison answer |
| 4 | PMO, audit, project governance | Repeated management/project control theme | Start answer practice |
| 5 | Agile, Scrum, Kanban, DevOps | Repeats, with recent DevSecOps extension | Update and practice |
| 6 | SLA, ITSM, cloud service operation | Repeats in cloud/public/financial contexts | Build answer frame |
| 7 | Requirements engineering | Repeats with ambiguity, quality, and verification angles | Start answer practice |
| 8 | Generative AI, LLM, RAG | Rapidly increasing in recent rounds | Latest-source research |
| 9 | Privacy, PET, pseudonymization | Repeats, but law/tech changes matter | Update before answer |
| 10 | Zero Trust, SBOM, supply-chain security | Strong recent security trend | Latest-source research |
| 11 | Transaction and isolation level | Stable repeated DB fundamental | Start answer practice |
| 12 | Normalization and denormalization | Stable repeated DB modeling topic | Start answer practice |
| 13 | Data mining, clustering, outlier, bias | Repeats from classic mining to AI/data bias | Build combined card |
| 14 | Cloud, cloud native, MultiCloud | Old cloud basics plus recent cloud-native changes | Update and practice |
| 15 | WBS, risk, EVM, estimation | Repeated project management calculation/structure | Practice answers |
| 16 | SW maintenance, re-engineering, 3R | Repeated classic SW engineering topic | Build answer frame |
| 17 | AI training data quality | Recent increase, partly overlaps data quality | Latest-source research |
| 18 | 6G, Wi-Fi 7, edge, AI-native network | Recent network trend questions | Latest-source research |
| 19 | DR, BCP, IDC location, RTO/RPO | Repeated continuity/recovery theme | Build topic card |
| 20 | OS, algorithms, data structures | Stable 1교시/3교시 fundamentals | Practice concise answers |

## Recent New Or Increasing Topics

| Topic | Recent Evidence | Coverage Signal |
|---|---|---|
| Advanced/Modular RAG | 139 | NEW_GAP |
| LLM fine-tuning, RAG, RLHF, AX | 139 | NEW_GAP |
| AI RMF and ISO/IEC 42001 | 138 | NEW_GAP |
| AI basic law and generative AI user protection guideline | 138 | NEW_GAP |
| Prompt injection, model inversion, OWASP LLM Top 10 | 136, 138 | NEW_GAP |
| General-purpose AI risk and AI governance | 136, 138, 139 | NEW_GAP |
| SBOM and supply-chain security | 131, 134, 136 | NEW_GAP |
| Zero Trust and maturity model | 131, 135, 136 | NEW_GAP |
| Kubernetes and cloud native transition | 133, 138 | NEW_GAP |
| Data Observability | 138 | NEW_GAP |
| Data valuation and assetization | 135, 139 | UPDATE_NEEDED |
| AI training data quality | 128, 131, 139 | UPDATE_NEEDED |
| CTEM | 139 | NEW_GAP |
| Wi-Fi 7, 6G AI-native network | 135, 138, 139 | NEW_GAP |
| QML, VPP AI, AI digital textbook | 135, 139 | REVIEW_NEEDED |

## Representative Exam Evidence

This table records actual question evidence for the highest-value topics. It is not yet a full per-question index; that should be the next linking task.

| topic_id | round | period | question_no | actual_question |
|---|---:|---|---|---|
| T-033 | 092 | 1교시 | 4 | 테스트 오라클(Test Oracle)의 특징과 유형을 설명하시오. |
| T-033 | 131 | unknown | 3 | 통합 테스트(Integration Test)에 대하여 설명하시오. |
| T-033 | 134 | unknown | 2 | 소프트웨어 테스트에 대하여 설명하시오. |
| T-034 | 135 | unknown | 5 | 인공지능 소프트웨어 품질 보증을 위한 테스트 기법에 대하여 설명하시오. |
| T-014 | 123 | 3교시 | 2 | 데이터 품질관리 프레임워크, 데이터 관리, 데이터 구조관리, 데이터 관리프로세스에 대하여 설명하시오. |
| T-014 | 131 | unknown | 3 | 데이터 품질관리에 대하여 데이터 품질관리 아키텍처, 성숙도, 정형/비정형 데이터 품질기준, 전략을 설명하시오. |
| T-005 | 128 | unknown | 1 | 인공지능 학습용 데이터 품질관리에 대한 개념, 필요성, 모델, 단계별 수행방안, 지표를 설명하시오. |
| T-005 | 139 | unknown | 6 | AI 학습용 데이터 품질 관리에 대하여 설명하시오. |
| T-018 | 093 | 1교시 | 8 | NoSQL과 CAP Theorem에 대하여 설명하시오. |
| T-018 | 126 | 1교시 | 7 | CAP 이론의 한계와 PACELC 이론을 설명하시오. |
| T-018 | 133 | unknown | 3 | NoSQL 유형과 모델링 절차를 설명하시오. |
| T-019 | 102 | 2교시 | 2 | 분산 데이터베이스의 3가지 설계 전략을 비교하고, 분산 데이터베이스가 갖추어야 할 4가지 특성을 설명하시오. |
| T-019 | 139 | unknown | 7 | 분산 데이터베이스의 투명성을 설명하시오. |
| T-020 | 107 | 2교시 | 6 | 데이터베이스 트랜잭션의 개념, ACID 특성, 직렬성에 대하여 설명하시오. |
| T-020 | 134 | unknown | 6 | 트랜잭션 격리 수준 4가지를 사례 중심으로 설명하시오. |
| T-021 | 095 | 2교시 | 1 | 데이터베이스 정규화과정의 무손실 조인 분해에 대하여 예를 들고 설명하시오. |
| T-021 | 135 | unknown | 1 | 물리 데이터 모델링 중 반정규화 절차, 유형, 고려사항을 설명하시오. |
| T-002 | 135 | unknown | 2 | Multimodal LLM(Large Language Model)을 설명하시오. |
| T-002 | 139 | unknown | 2 | AI 전환(AX)을 위해 LLM을 도입할 때 Fine-Tuning, RAG, RLHF 기반 정렬 등을 설명하시오. |
| T-003 | 134 | unknown | 13 | RAG(Retrieval Augmented Generation)를 설명하시오. |
| T-003 | 139 | unknown | 3 | Advanced RAG와 Modular RAG를 설명하시오. |
| T-001 | 138 | unknown | 1 | AI RMF(Risk Management Framework)의 개념과 주요 내용을 설명하시오. |
| T-006 | 138 | unknown | 3 | ISO/IEC 42001:2023을 설명하시오. |
| T-004 | 138 | unknown | 12 | 프롬프트 인젝션(Prompt Injection)을 설명하시오. |
| T-004 | 138 | unknown | 13 | 모델 전도 공격(Model Inversion Attack)을 설명하시오. |
| T-004 | 136 | unknown | 5 | OWASP LLM Top 10 for LLM Application 2025의 배경, 위협, 대응방안을 설명하시오. |
| T-008 | 131 | unknown | 4 | 제로 트러스트 보안 모델의 보안원리, 핵심원칙, 적용분야를 설명하시오. |
| T-008 | 135 | unknown | 6 | 경계 기반 보안과 제로 트러스트 성숙도모델 2.0을 설명하시오. |
| T-009 | 131 | unknown | 13 | SBOM(Software Bill of Material)을 설명하시오. |
| T-009 | 134 | unknown | 3 | SBOM 기반 오픈소스 소프트웨어 관리 방안을 설명하시오. |
| T-010 | 135 | unknown | 3 | 파이프라인에서 DevSecOps 적용방안에 대하여 설명하시오. |
| T-027 | 133 | unknown | 12 | 쿠버네티스(Kubernetes)를 설명하시오. |
| T-027 | 138 | unknown | 1 | 클라우드 네이티브 환경으로 전환 및 신규 구축하는 프로젝트에 대하여 설명하시오. |
| T-017 | 138 | unknown | 8 | 데이터 관측가능성(Data Observability)을 설명하시오. |
| T-013 | 128 | unknown | 10 | 개인정보의 가명·익명처리 기술에 대하여 설명하시오. |
| T-013 | 138 | unknown | 6 | PET 기술(동형암호, 차분 프라이버시, 합성데이터)을 비교하시오. |
| T-026 | 130 | unknown | 2 | 금융 클라우드 SLA에 대하여 SLA 개념, 클라우드 SLA 가이드, 금융 클라우드 SLA 가이드를 설명하시오. |
| T-026 | 139 | unknown | 4 | 정보시스템 등급제와 공공 SLA 표준의 개념, 등급별 적용방식, 주요 내용을 설명하시오. |
| T-035 | 130 | unknown | 4 | 요구사항 품질속성, 요구사항 도출기법, 요구사항 개발 프로세스를 설명하시오. |
| T-035 | 139 | unknown | 3 | 명확하지 않은 요구사항으로 인해 발생하는 소프트웨어 품질 저하 문제를 설명하시오. |
| T-037 | 128 | unknown | 1 | WBS(Work Breakdown Structure)에 대하여 설명하시오. |
| T-038 | 102 | 1교시 | 2 | PMO(Project Management Office)의 기능에 대하여 5개 이상 설명하시오. |
| T-038 | 136 | unknown | 2 | 정보시스템 감리와 PMO를 비교하고 법적 근거, 역할, 범위, 상주감리 비교를 설명하시오. |
| T-023 | 102 | 3교시 | 3 | Percentile을 이용하여 Outlier를 찾는 방법을 설명하시오. |
| T-023 | 139 | unknown | 2 | 데이터 분석에서 이상치와 편향의 개념 및 분석 결과에 미치는 영향을 설명하시오. |
| T-015 | 119 | 1교시 | 7 | Data Lake를 설명하시오. |
| T-015 | 139 | unknown | 3 | 데이터 레이크 기반 대규모 저장소의 아키텍처를 설명하시오. |
| T-029 | 135 | unknown | 4 | 6G 이동통신기술의 기술요소와 성능 요구사항을 설명하시오. |
| T-029 | 138 | unknown | 3 | 6G 핵심 개념인 AI-Native Network를 설명하시오. |
| T-029 | 139 | unknown | 10 | Wi-Fi 7을 설명하시오. |

## Canonical Topic Map

| topic_id | canonical_name | aliases | domain | exam_history | coverage | relationship |
|---|---|---|---|---|---|---|
| T-001 | AI risk and governance | AI RMF, AI safety, AI governance | AI/Policy | 136, 138, 139 | NEW_GAP | parent of T-006 |
| T-002 | Generative AI and LLM | LLM, multimodal LLM, fine-tuning, RLHF | AI | 130, 135, 136, 139 | NEW_GAP | related T-003, T-004 |
| T-003 | RAG | RAG, Advanced RAG, Modular RAG | AI | 134, 139 | NEW_GAP | sub of T-002 |
| T-004 | AI security | prompt injection, model inversion, OWASP LLM Top 10 | AI/Security | 136, 138 | NEW_GAP | related T-002 |
| T-005 | AI training data quality | training data quality, public AI data quality | Data/AI | 128, 131, 139 | UPDATE_NEEDED | sub of T-014 |
| T-006 | AI law, ethics, and standards | AI basic law, ISO/IEC 42001, ethics guideline | Policy/AI | 136, 138 | NEW_GAP | sub of T-001 |
| T-007 | AI infrastructure | GPU, TPU, AI-native network, QML | Architecture/AI | 138, 139 | NEW_GAP | related T-029 |
| T-008 | Zero Trust | Zero Trust architecture, maturity model 2.0 | Security | 131, 135, 136 | NEW_GAP | related T-009 |
| T-009 | Supply-chain security and SBOM | SBOM, SW supply chain | Security/SW | 131, 134, 136 | NEW_GAP | related T-010 |
| T-010 | DevSecOps and SW security quality | DevSecOps, security quality automation | SW/Security | 135, 136 | PARTIAL | parent T-033 |
| T-011 | CTEM | Continuous Threat Exposure Management | Security | 139 | NEW_GAP | related T-012 |
| T-012 | Ransomware and cyber insurance | ransomware, cyber insurance | Security | 138, 139 | UPDATE_NEEDED | related T-044 |
| T-013 | PET and pseudonymization | privacy enhancing technology, pseudonymization | Security/Data | 134, 138, 139 | UPDATE_NEEDED | related T-045 |
| T-014 | Data quality and governance | data quality, preventive quality, governance | Data | 123, 126, 128, 131, 132, 139 | OK | parent T-005 |
| T-015 | Data Lake and modern data platform | Data Lake, lakehouse, data platform | Data | 119, 139 | PARTIAL | related T-017 |
| T-016 | Data valuation and assetization | data value assessment, data assetization | Data/Management | 135, 139 | UPDATE_NEEDED | related T-047 |
| T-017 | Data Observability | observability, data monitoring | Data/Ops | 138 | NEW_GAP | related T-015 |
| T-018 | NoSQL, CAP, PACELC | NoSQL, CAP theorem, PACELC | Database | 093, 114, 117, 124, 126, 128, 133 | PARTIAL | related T-019 |
| T-019 | Distributed database | transparency, partitioning, parallel DB | Database | 102, 117, 132, 138, 139 | OK | related T-018 |
| T-020 | Transaction and isolation | ACID, isolation level, concurrency | Database | 107, 129, 134, 137 | OK | related T-021 |
| T-021 | Normalization and denormalization | normalization, denormalization | Database | 095, 118, 125, 129, 135 | OK | related T-020 |
| T-022 | Database indexing | index, static/dynamic index | Database | 095, 098, 136 | OK | related T-021 |
| T-023 | Data mining and outlier/bias | clustering, K-means, outlier, bias | Data/Analytics | 098, 101, 102, 130, 136, 137, 139 | PARTIAL | related T-024 |
| T-024 | Big data analytics and visualization | visualization, model evaluation, analytics | Data/Analytics | 102, 135, 139 | PARTIAL | related T-023 |
| T-025 | Cloud computing basics | IaaS, PaaS, SaaS, XaaS | Cloud | 099, 101, 102, 130, 138 | OK | parent T-027 |
| T-026 | Cloud SLA and service catalogue | SLA, catalogue, pipeline, public/financial cloud | Cloud/ITSM | 095, 101, 102, 130, 137, 139 | PARTIAL | related T-039 |
| T-027 | Cloud native, Kubernetes, MultiCloud | Kubernetes, cloud native, MultiCloud | Cloud/Architecture | 133, 135, 138 | NEW_GAP | sub of T-025 |
| T-028 | Edge computing | edge vs cloud | Architecture/Network | 139 | NEW_GAP | related T-029 |
| T-029 | Network evolution | 6G, Wi-Fi 7, AI-native network | Network | 130, 135, 138, 139 | NEW_GAP | related T-028 |
| T-030 | Network fundamentals | subnetting, error control, hash basics | Network/Security | 092, 099, 102, 138, 139 | OK | related T-044 |
| T-031 | OS fundamentals | process, virtual memory, deadlock, UNIX inode | OS | 092, 099, 101, 102 | OK | related T-032 |
| T-032 | Data structures and algorithms | tree, B-tree, stack, sort, linked list | CS | 092, 099, 101, 102 | OK | related T-031 |
| T-033 | Software testing and QA | testing, mutation, integration, AI SW testing | SW | 092, 095, 096, 098, 101, 105, 108, 114, 117, 120, 122, 126, 127, 129, 131, 133, 134, 135, 136, 137 | OK | parent T-034 |
| T-034 | AI software testing and quality | AI SW QA, AI testing, model validation | AI/SW | 135, 136, 139 | UPDATE_NEEDED | sub of T-033 |
| T-035 | Requirements engineering | ambiguity, verification, RFP, requirements quality | SW | 102, 107, 114, 123, 124, 130, 133, 135, 139 | OK | related T-033 |
| T-036 | Agile, Scrum, Kanban, DevOps | Agile, Scrum, Kanban, DevOps | SW/Process | 098, 099, 101, 105, 111, 113, 119, 129, 131 | OK | parent T-010 |
| T-037 | Project planning and control | WBS, risk, EVM, estimation | Management | 102, 128, 129, 139 | OK | related T-038 |
| T-038 | PMO and audit | PMO, audit, project governance | Management | 098, 102, 105, 111, 117, 118, 121, 129, 136, 137 | OK | related T-037 |
| T-039 | ITSM and service transition | incident, problem, operation transfer | Management/Service | 101, 102, 137 | PARTIAL | related T-026 |
| T-040 | Re-engineering and 3R | reverse engineering, restructuring, reuse | SW | 095, 114, 119, 133, 137, 138 | OK | related T-041 |
| T-041 | SW maintenance and deployment | maintenance types, deployment strategy | SW | 102, 134 | OK | related T-040 |
| T-042 | Function point and estimation | FP, estimation theory, CCPM, EVM | Management/SW | 102, 104, 128 | OK | related T-037 |
| T-043 | UML and modeling | UML stereotype, modeling, architecture views | SW | 101, 114 | OK | related T-035 |
| T-044 | Security fundamentals | crypto, hash, TLS, access control, phishing | Security | 092, 101, 102, 138 | OK | parent T-008 |
| T-045 | Privacy law and MyData | personal information, MyData, data protection | Law/Security | 102, 118, 134, 138 | UPDATE_NEEDED | related T-013 |
| T-046 | Blockchain and distributed ledger | blockchain, DLT, smart contract | Emerging/Data | 113, 118, 120 | PARTIAL | related T-047 |
| T-047 | Digital platform and public data policy | digital government, public data, platform policy | Policy/Management | 102, 123, 139 | UPDATE_NEEDED | related T-016 |
| T-048 | Web, API, UX, accessibility | HTML5, API, web OS, accessibility | Digital Service | 101, 102, 107 | PARTIAL | related T-025 |
| T-049 | Mobile, IoT, embedded, BYOD | mobile app, IoT, BYOD, wearable, Arduino | Digital Service | 099, 101, 102 | PARTIAL | related T-030 |
| T-050 | DR, BCP, IDC location | RTO, RPO, disaster recovery, IDC | Management/Infra | 102, 139 | PARTIAL | related T-026 |
| T-051 | Enterprise systems | ERP, SCM, EIP, groupware | Management/SW | 101, 102, 137 | PARTIAL | related T-039 |
| T-052 | Open source governance | OSS, open source standardization | SW/Policy | 101, 102, 133 | PARTIAL | related T-009 |
| T-053 | SW quality standards | SQuaRE, SPICE, CMMI, quality metrics | SW/Quality | 105, 120, 126, 136 | OK | related T-033 |
| T-054 | Emerging policy and industry AI use cases | AI textbook, VPP AI, sector policy | Policy/Emerging | 135, 139 | REVIEW_NEEDED | related T-001 |

## Review Needed

| Item | Why Review Is Needed |
|---|---|
| QML | Could require quantum machine learning, quantum ML, or a narrow exam-specific interpretation. |
| VPP AI | Energy/AI convergence topic; old IT sources are unlikely to provide enough answer material. |
| AI digital textbook | Policy-specific and likely tied to current Korean education policy. |
| Face recognition payment | Needs current regulatory/security/payment context before answer practice. |
| TurboQuant or similar OCR terms | OCR/extraction uncertainty; verify against original question. |
| Cyber insurance | Needs exact scope: risk transfer, security governance, or incident response. |
| IDC location in wartime/disaster | Related to BCP/DR, but recent geopolitical framing changes the answer. |
