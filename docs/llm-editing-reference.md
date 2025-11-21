# LLM Editing Reference Guide

**Version:** 1.0  
**Last Updated:** 2025-11-12  
**Maintainer:** Documentation Team  
**Applies To:** All automated and assisted LLM edits within this repository

---

## 1. Purpose

This guide defines the global editing principles, workflow, and quality standards that every Large Language Model (LLM) interaction MUST follow when proposing, generating, or refining documentation in this repo. It complements:

- `doc-style-guide.md` (human-facing style & formatting)
- `LLM-README.md` (LLM navigation & structural metadata)
- `doc-relationships.yml` (relationships, prerequisites, workflow ordering)

This document prevents style drift, duplication, hallucination, and inconsistent structural changes.

## 2. Core Editing Principles

1. Preserve existing information fidelity—never remove accurate domain detail for brevity.
2. Minimize disruption: prefer incremental improvement over full rewrites unless explicitly requested.
3. Be source-driven: derive facts from existing docs; if uncertain, flag with an inline NOTE (admonition) and DO NOT invent specifics.
4. Maintain cross-link integrity—add internal links only when they add navigational value and the target exists.
5. Avoid redundancy—before adding a definition, check `acronyms-and-definitions.md`.
6. Optimize for scannability: headings, lists, tables, and admonitions over paragraphs of dense text.
7. Honor audience & difficulty metadata—do not shift a document’s intended audience unless explicitly reclassified.
8. Never introduce marketing fluff; keep neutral, instructional tone.
9. Prefer present tense; avoid future speculation unless clearly marked (e.g., *Roadmap* section).
10. Protect repository consistency: naming, navigation labels, and conceptual hierarchy must match `mkdocs.yml` unless a coordinated change is part of the request.

## 3. Voice & Tone

- Neutral, concise, explanatory.
- Sentence construction: short, active voice.
- Avoid rhetorical questions, filler phrases, exclamation marks, and colloquialisms.
- Use second person ("You can configure…") sparingly; prefer declarative statements ("Configure X in…").

## 4. Structural Standards

Follow the 11-step structure from `doc-style-guide.md` for configuration/location documents. For non-configuration conceptual guides, use:

1. Title (H1)
2. Purpose / Scope
3. When to Use / Applicability
4. Prerequisites (cross-check `doc-relationships.yml`)
5. Core Concepts / Field Breakdown
6. Procedures / Workflows (link to `workflows-guide.md` if applicable)
7. Examples / Scenarios
8. Troubleshooting / Edge Cases
9. Related Documents / Next Steps
10. Revision Metadata

Use H2 for primary sections, H3 for nested subsections. Do not exceed H4 unless strictly necessary.

## 5. Metadata Block (Major Docs Only)

Embed or maintain a metadata block near the top (if not already present) for key documents:

```md
<!--
category: Routing
audience: Administrator
difficulty: Intermediate
time_required: 20m
prerequisites: carrier.md, provider-ratecard.md
related: routing-strategy.md, routing-usa.md
next_steps: global-routing.md
last_reviewed: 2025-11-12
llm_validation: true
-->
```

Rules:

- Only include existing file references.
- Update `last_reviewed` when making substantive edits.
- Do NOT add speculative prerequisites.
- Set `llm_validation: true` only after performing the Quality Checklist (Section 13).

## 6. Formatting Rules (LLM-Specific Reinforcement)

- Lists: use `+` for unordered, numeric for ordered (consistent with style guide).
- Internal links: relative paths (e.g., `[Routing Strategy](routing-strategy/)`).
- External links: bold link text (e.g., `[**Mermaid Docs**](https://mermaid-js.github.io/)`).
- Code blocks: language-tag and `linenums="1"` only where line numbers aid reference.
- Buttons/UI actions: **`Save`** (bold + backticks).
- Options/selections: `Enabled`, `Disabled`.
- Use admonitions for warnings, tips, and notes:

```md
!!! warning "High CPS Impact"
    Adjusting this value may affect carrier throttling.
```

## 7. Terminology & Acronyms

Before defining: search `acronyms-and-definitions.md`. If missing:

- Add term there (not inline in multiple docs).
- Keep definition concise: one sentence + optional clarifying example.
- Never redefine the same acronym differently.

## 8. Cross-Linking & Relationship Integrity

When adding new links:

1. Check `doc-relationships.yml` for existing relationships.
2. Only introduce links that represent actual conceptual or workflow dependency.
3. Do not create circular next-steps loops.
4. Prefer linking forward to deeper/more advanced docs; backward links only if prerequisite confusion is likely.

## 9. Content Improvement Rules

Allowed improvements:

- Clarify ambiguous sentences.
- Break dense paragraphs into structured lists.
- Add missing, verifiable steps aligned with existing workflows.
- Insert examples derived from current documented patterns.
- Add troubleshooting notes for known failure modes (if documented elsewhere).

Prohibited changes:

- Fabricated feature behavior.
- Unverified performance claims.
- Renaming documented features without synchronized navigation update.
- Removing sections solely for brevity.

## 10. Fact Checking Hierarchy

1. Existing file content (exact).
2. `doc-relationships.yml` for dependencies.
3. Glossary file for definitions.
4. Workflow guide for procedural flows.

If any conflict is detected: preserve the most specific file (e.g., feature doc overrides generalized guide) and add an inline NOTE with a suggestion for future reconciliation.

## 11. Ambiguity & Uncertainty Handling

If user asks for undocumented behavior:

- Provide current documented scope.
- State limitation: "This feature’s extended behavior isn’t documented here."
- Suggest confirming with product or creating an issue.

Never guess implementation details.

## 12. Commit Message & PR Annotation (For Automated LLM Edits)

Use conventional prefix:

- `docs(style):` formatting or structural adjustment
- `docs(clarity):` wording improvements
- `docs(xref):` cross-link additions
- `docs(metadata):` update metadata blocks
- `docs(workflow):` add or adjust procedural sequence
- `docs(glossary):` glossary addition

Include a short checklist in PR description:

```md
LLM Edit Validation:
- [x] Metadata updated (if required)
- [x] Cross-links validated
- [x] Glossary checked
- [x] No hallucinated content
- [x] Style guide compliance
```

## 13. LLM Quality Checklist (Apply Before Marking Complete)

| Check | Description | Pass Criteria |
|-------|-------------|---------------|
| Structure | Matches expected doc pattern | All major sections present or intentionally omitted with rationale |
| Tone | Neutral, instructional | No marketing/sales phrasing |
| Cross-Links | Valid & non-redundant | All links resolve to existing files |
| Terminology | Consistent & up to date | No duplicate or conflicting acronyms |
| Accuracy | No fabricated data | All new info sourced from existing docs |
| Formatting | Lists, code, admonitions correct | No mixed list markers, proper code fences |
| Metadata | Present & updated (major docs) | `last_reviewed` updated; fields valid |
| Redundancy | No duplication of glossary terms | Glossary edits centralized |
| Navigation | Headings align with mkdocs nav labels if relevant | No unauthorized label divergence |
| Accessibility | Clear for new & experienced users | Section intros concise & purposeful |

## 14. Examples

### 14.1 Improving a Dense Paragraph

Before:

> Routing allows assigning carriers based on quality metrics and priorities which can be adjusted dynamically.

After:

```md
**Routing Functions**
+ Carrier selection based on priority tiers
+ Quality metric evaluation (ASR, ACD) for dynamic reordering
+ Failover path activation when threshold breached
```

### 14.2 Adding a Prerequisite Block

```md
!!! info "Prerequisites"
    Review **`Carrier Main`** configuration before modifying Routing Strategy.
```

### 14.3 Document Metadata Addition

(See Section 5 for template.)

## 15. Adding New Documents (LLM Workflow)

1. Confirm need (not a duplicate of existing doc).
2. Draft minimal scaffold with metadata block.
3. Populate sections with sourced content only.
4. Insert appropriate cross-links (prerequisites & next steps).
5. Add glossary entries if truly new terminology.
6. Update `llm.txt` and `doc-relationships.yml`.
7. Run Quality Checklist.

## 16. Handling Large Refactors

Only perform large refactors when:

- Multiple sections are outdated/inaccurate.
- Structural ambiguity causes user confusion.

Process: fork → propose outline → apply incremental changes by section → validate after each stage.

## 17. Automation & Future Enhancements (Optional)

Potential next steps to further standardize LLM edits:

- Vale style rule set aligned with `doc-style-guide.md`.
- CI job: link integrity & glossary consistency check.
- Metadata schema validation (JSON Schema → transform from HTML comment blocks).
- Diff classifier that flags potential hallucination (new unlinked proper nouns).
- Content aging report (documents > 180 days since `last_reviewed`).

## 18. Escalation Guidelines

If an edit would:

- Change navigation structure
- Introduce or deprecate major feature coverage
- Require multi-doc synchronization

Then: mark PR as `needs-review` and include impact summary.

## 19. Non-Goals

This guide does NOT define:

- Build/CI tooling specifics
- API schema evolution rules
- Release note formatting beyond documentation references

## 20. Final Validation Phrase

When an LLM completes an edit session and passes all checklist items, append (non-rendered HTML comment) at end of file:

```html
<!-- llm_session: validated 2025-11-12 -->
```

Never add if any checklist item failed.

---

End of LLM Editing Reference Guide
