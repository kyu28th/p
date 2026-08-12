# Exam Source Coverage Analysis

## Reading Rule

The old `sources/` material is useful for definitions, diagrams, and classic answer structure. It is not automatically exam-ready for current technology, law, standards, policy, products, or security attack topics.

Coverage status:

- `OK`: enough old material exists for current basic answer practice.
- `PARTIAL`: related material exists, but not enough for an actual recent question.
- `NEW_GAP`: recent exam topic appears, but no meaningful old material was found.
- `UPDATE_NEEDED`: old material exists, but current law/standard/policy/technology changes matter.
- `REVIEW_NEEDED`: extraction or interpretation confidence is insufficient.

## Summary

| Status | Count | Meaning |
|---|---:|---|
| OK | 17 | Can start answer practice now using old sources plus minimal verification. |
| PARTIAL | 15 | Has a base, but needs topic-card work before serious answer writing. |
| NEW_GAP | 14 | Needs current-source research before card/answer work. |
| UPDATE_NEEDED | 7 | Old base exists but must be refreshed. |
| REVIEW_NEEDED | 1 | Needs question verification before classification. |

## OK Topics

| Topic | Exam Evidence | Repository Evidence | Next Use |
|---|---|---|---|
| Data quality and governance basics | 123, 126, 128, 131, 132, 139 | `sources/database/` | Create first data-quality card, then answer practice |
| Distributed DB transparency and partitioning basics | 102, 117, 132, 138, 139 | `sources/database/` | Build comparison answer |
| Transaction and isolation level | 107, 129, 134, 137 | `sources/database/` | Start timed answer |
| Normalization and denormalization | 095, 118, 125, 129, 135 | `sources/database/` | Start timed answer |
| DB indexing basics | 095, 098, 136 | `sources/database/` | Short-answer practice |
| Network fundamentals | 092, 099, 102, 138, 139 | `sources/digital-network/` | Short-answer practice |
| OS fundamentals | 092, 099, 101, 102 | `sources/operating-system/` | Short-answer practice |
| Data structures and algorithms | 092, 099, 101, 102 | `sources/fundamentals/` | Short-answer practice |
| Classic software testing and QA | many rounds through 137 | `sources/software-engineering/` | Highest-priority answer practice |
| Requirements engineering | 102, 107, 114, 123, 124, 130, 133, 135, 139 | `sources/software-engineering/` | Answer practice |
| Agile/Scrum/Kanban basics | 098, 099, 101, 105, 111, 113, 119, 129, 131 | `sources/software-engineering/` | Answer practice |
| Project planning, WBS, EVM basics | 102, 128, 129, 139 | `sources/management-strategy/`, `sources/software-engineering/` | Practice structure/calculation |
| PMO and audit basics | 098, 102, 105, 111, 117, 118, 121, 129, 136, 137 | `sources/management-strategy/` | Answer practice |
| Re-engineering and 3R basics | 095, 114, 119, 133, 137, 138 | `sources/software-engineering/` | Build answer frame |
| SW maintenance/deployment basics | 102, 134 | `sources/software-engineering/` | Build concise topic card |
| Security fundamentals | crypto/hash/TLS/access control/phishing | `sources/digital-security/` | Short-answer practice |
| SW quality standards basics | 105, 120, 126, 136 | `sources/software-engineering/` | Build standards comparison |

## PARTIAL Topics

| Topic | Why Partial | Next Action |
|---|---|---|
| NoSQL, CAP, PACELC | CAP/NoSQL base exists, PACELC and modern tradeoff framing need strengthening | Create DB architecture card |
| Data Lake and data platform | Old big-data base exists, but lakehouse/fabric/mesh context is weak | Research after current gaps list |
| Data mining, clustering, outlier, bias | Classic mining exists, but AI/data-bias framing is newer | Build combined analytics card |
| Big data visualization/model evaluation | Some analytics base exists, but recent model validation terms need structure | Topic card before practice |
| Cloud SLA/service catalogue | Old SLA/cloud service content exists, but public/financial cloud variants need update | Build SLA answer frame |
| ITSM/service transition | Incident/problem basics likely exist; modern outsourced operation transfer needs more | Topic card |
| Blockchain/DLT | Old trend material may exist, but current relevance should be checked | Lower-priority update |
| Digital service/web/API/UX | HTML5/web API era material exists; current platform/API governance needs refresh | Topic card later |
| Mobile/IoT/BYOD | Old material exists but exam relevance changed | Lower-priority review |
| DR/BCP/IDC | RTO/RPO basics exist; geographic and wartime framing needs update | Topic card plus current cases |
| Enterprise systems/EIP/SCM | Old material exists, lower recent frequency | Keep as secondary |
| Open source governance | OSS basics exist; SBOM/supply-chain link is missing | Link with SBOM card |
| Cloud computing basics to cloud native | Cloud basics OK, Kubernetes/cloud-native missing | Split old basics vs new cloud-native |
| AI fundamentals | Old AI basics exist, but LLM/RAG/governance is missing | Treat as old foundation only |
| Privacy basics | Basic privacy/PET exists, but current law/guideline changes matter | Move to UPDATE_NEEDED if used |

## NEW_GAP Topics

| Topic | Recent Evidence | Needed Source Type |
|---|---|---|
| Advanced/Modular RAG | 139 | Current AI architecture references and vendor-neutral patterns |
| LLM fine-tuning, RAG, RLHF, AX | 139 | AI engineering and governance references |
| AI RMF | 138 | NIST AI RMF or equivalent official framework |
| ISO/IEC 42001 | 138 | Standard summary and Korean adoption context |
| AI basic law/user protection guideline | 138 | Korean official law/guideline sources |
| Prompt injection/model inversion/OWASP LLM Top 10 | 136, 138 | OWASP and current security guidance |
| Zero Trust and maturity model | 131, 135, 136 | NIST/KISA/NIA or Korean public-sector guidance |
| SBOM and supply-chain security | 131, 134, 136 | NIST, CISA, SPDX/CycloneDX, Korean guidance |
| CTEM | 139 | Gartner concept plus vendor-neutral security operations framing |
| Kubernetes/cloud native/MultiCloud | 133, 135, 138 | CNCF/Kubernetes and cloud-native architecture sources |
| Data Observability | 138 | Data engineering observability principles |
| Edge computing recent architecture | 139 | Cloud-edge architecture references |
| 6G AI-native network/Wi-Fi 7 | 135, 138, 139 | ITU/3GPP/Wi-Fi Alliance style references |
| QML/VPP AI/AI digital textbook | 135, 139 | Verify exact scope first |

## UPDATE_NEEDED Topics

| Topic | Old Base | Why Update Needed |
|---|---|---|
| AI training data quality | Data quality base | Recent AI data quality guidelines and public-sector practice changed |
| PET and pseudonymization | Security/privacy base | Law, enforcement, synthetic data, differential privacy, homomorphic encryption details changed |
| Privacy law/MyData | Privacy base | Korean privacy and data industry rules changed after old PDFs |
| Cloud service operation/SLA | Cloud/SLA base | Public cloud, financial cloud, SaaS/SLA metrics have evolved |
| DevSecOps/SW security quality automation | DevOps/testing base | Pipeline security, SAST/DAST/SCA, SBOM and policy are newer |
| Ransomware/cyber insurance/security response | Security base | Threat landscape and response frameworks changed |
| Data valuation/assetization | Management/data base | Data industry policy and valuation methods changed |

## REVIEW_NEEDED

| Item | Reason |
|---|---|
| Emerging policy/industry AI use cases | Items such as QML, VPP AI, AI digital textbook, face-recognition payment, and possible OCR-noisy terms need exact question verification before classification. |

## Recommended TOP 30 Topic Cards

1. Software testing and QA
2. Data quality and governance
3. Generative AI and LLM
4. RAG
5. AI risk and governance
6. AI security: prompt injection, model inversion, OWASP LLM Top 10
7. Zero Trust
8. SBOM and supply-chain security
9. DevSecOps
10. NoSQL/CAP/PACELC
11. Distributed database transparency and partitioning
12. Transaction isolation
13. Normalization and denormalization
14. Cloud native and Kubernetes
15. Cloud SLA/service catalogue
16. Data Lake and modern data platform
17. AI training data quality
18. PET and pseudonymization
19. Requirements engineering
20. PMO and audit
21. Agile/Scrum/Kanban/DevOps
22. WBS/EVM/project control
23. Data mining/outlier/bias
24. DR/BCP/IDC/RTO/RPO
25. 6G/Wi-Fi 7/edge computing
26. AI software testing and quality
27. Data valuation and assetization
28. Data Observability
29. Security fundamentals: crypto/hash/TLS/access control
30. OS/data structures/algorithms concise pack
