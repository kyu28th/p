# Project Context

## Goal

Build and maintain a long-term Markdown-based study system for the Information Management Professional Engineer written exam.

## Current State

- Repository structure is initialized.
- Source-derived Markdown notes have been generated from the week 9 study material set.
- Current official exam standards are tracked in `exam/current-exam-standard.md`.
- Past-exam Markdown files are tracked under `past-exams/information-management/`.
- Study status, coverage gaps, and dashboard notes are tracked under `study/`.

## Operating Rules

- Keep original PDF/PPT/HWP files outside the repository.
- Preserve source flow and page markers when converting materials.
- Separate source-derived content from AI-added explanations when practical.
- Convert final study material into topic cards under `knowledge/`.
- Verify older materials against current standards, laws, products, and technology trends before relying on them.
- Do not expose machine-specific local paths in committed files.

## Recent Decisions

- The repository may be made public, so public-facing files should avoid personal/private wording and local machine paths.
- Past-exam files are useful as a question database, but source references should remain generic.
- Round 116 is still pending because the provided source is HWP and needs a separate conversion path.

## Next Work

- Continue turning high-frequency past-exam themes into topic cards.
- Add weak-point tracking after answer practice begins.
- Improve dashboard metrics from topic-card coverage and past-exam frequency.
- Review source-derived Markdown before promoting content into final `knowledge/` notes.
