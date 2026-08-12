# Coverage Gap Tracker

## Summary

The 9주차 PDF source set has been converted into Markdown, but the material is old. It is now treated as a source base, not as final exam coverage.

Current baseline:

- Official current Q-Net standard: 2023-01-01 ~ 2026-12-31
- Official next Q-Net standard: 2027-01-01 ~ 2030-12-31
- Repository source age: mostly 2016-2017 versions, file timestamp 2019

## Coverage Matrix

| Area | Old source exists | Evidence in `sources/` | Gap / risk | Priority |
|---|---|---|---|---|
| Information strategy and management | Yes | `management-strategy` | Digital strategy, platform strategy, public digital policy need current check | High |
| Software engineering | Yes | `software-engineering` | SW safety, DevSecOps, SRE, cloud-native development need current check | High |
| Data and database | Yes | `database`, `fundamentals/data-structure.md`, `fundamentals/algorithm.md` | Data governance, data quality, big data analytics, AI data pipeline need current check | High |
| Computer system / OS / architecture | Yes | `computer-architecture`, `operating-system` | Container, Kubernetes, cloud-native architecture, edge computing need current check | High |
| Network / digital service | Yes | `digital-network`, `digital-service` | API economy, MSA, platform, 5G/6G, cloud service models need current check | High |
| Information security | Yes | `digital-security` | Zero Trust, supply-chain security, cloud security, privacy law changes need current check | Critical |
| AI / latest technology | Partial | `fundamentals/ai.md` | Generative AI, LLM, AI governance, AI safety, prompt/security issues are likely missing | Critical |
| Law / policy / standards | Partial | scattered across sources | Data industry law, software promotion law changes, public sector policy, standards updates need current check | Critical |

## Immediate Missing Or Weak Topics

These should be tracked before relying on the old source set for exam preparation.

| Topic | Why it matters | Current repository status | Next action |
|---|---|---|---|
| Generative AI / LLM | Major recent IT trend after the old PDFs | Likely missing or weak | Add `trends/generative-ai.md` and map to AI knowledge |
| AI governance / AI ethics / AI safety | Recent policy and governance issue | Likely missing or weak | Add current reference summary |
| Zero Trust | Modern security architecture | Not confirmed | Search sources, then create/update security topic |
| Supply-chain security / SBOM | Important SW/security trend | Not confirmed | Add current trend topic |
| DevSecOps / SRE | Modern SW operation practice | Not confirmed | Add SW engineering topic |
| Kubernetes / cloud native | Modern infrastructure baseline | Not confirmed | Add architecture/cloud topic |
| Data governance / data quality | Current data management emphasis | Partial old coverage exists | Promote to DB knowledge with current check |
| MyData / privacy / pseudonymized data | Legal/policy and data usage issue | Partial old privacy coverage exists | Add current law/policy check |
| Digital platform government / public data | Policy topic | Not confirmed | Add policy trend topic |

## Dashboard Rule

The dashboard should not show a field as complete only because source text exists. Completion requires:

1. Source text exists.
2. Important pages are identified.
3. Topic-level Markdown exists in `knowledge/`.
4. Current standard/trend check is done.
5. At least one exam-style question or answer note exists.

