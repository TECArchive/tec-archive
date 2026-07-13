---
title: For Researchers
---

# For Researchers

This website is the **readable, curated layer** of the archive. Its companion — the **data repository** — holds the machine-readable datasets, the bulk document downloads, the schemas that describe them, and the code that produced everything. If you want to analyze the TEC's record rather than just read it, start there:

**[github.com/TECArchive/tec-archive-data](https://github.com/TECArchive/tec-archive-data)**

## What's in the data repository

- **`normalized/`** — the de-identified datasets, as JSONL (one JSON record per line):
  - `forum_topics.jsonl` and `forum_posts.jsonl` — the Discourse governance forum
  - `chat_messages.jsonl` — the Discord chat record (in-scope channels)
  - `onchain_transfers.jsonl` and `onchain_events.jsonl` — token transfers and contract events on Gnosis Chain and Optimism
- **`schemas/`** — a JSON Schema for each dataset, documenting every field.
- **`documents/`** and **`bundles/`** — the scrubbed TEC working documents, organized by working group and type, with a `.zip` bundle for each working group plus a full-archive bundle (see [[Documents]] for direct download links).
- **`pipelines/`** — the export, normalization, and redaction code that produced the datasets and documents, so the work is auditable and reproducible.
- **`meta/`** — provenance, the redaction log, known gaps, verified on-chain addresses, the Discord channel map, and checksum manifests.

## Getting the data

Clone the whole repository:

```
git clone https://github.com/TECArchive/tec-archive-data.git
```

Or download individual files and folders directly from GitHub. For documents, the per-working-group and full `.zip` bundles are the easiest way to grab a coherent slice — one working group, or everything at once.

## Working with the datasets

- **Format.** Datasets are **JSONL** — read them line by line; each line is one record (a post, a message, a transfer).
- **Pseudonymized authors.** Person identities are replaced with stable `anon_########` IDs (a salted hash). The same handle maps to the same ID *within a dataset*, so you can trace an author's activity — but the mapping is **not reversible**, and IDs deliberately **do not link across platforms** (a person's forum handle and Discord handle hash to different IDs).
- **Redacted text.** Personal names in free text are replaced with `[REDACTED]`. Public, pseudonymous on-chain identifiers (wallet addresses) and already-public forum handles are **kept**, per the [[Archival Policy]].
- **Schemas first.** Check the matching file in `schemas/` before parsing — it defines each field and type.

## Integrity and provenance

- **`meta/manifest_*.json`** carry **SHA-256 checksums** for the datasets — verify your downloads against them.
- **`meta/PROVENANCE.md`** records how each source was captured (tools, endpoints, dates, access).
- **`meta/KNOWN_GAPS.md`** documents what is incomplete or missing — **read it before drawing conclusions** from any dataset.
- **`meta/REDACTION_LOG.md`** records exactly how de-identification was performed and verified.

## Reproducibility

The `pipelines/` directory contains the code that generated the release. Because the **raw, identity-bearing exports are deliberately not published**, you cannot re-run the pipelines end-to-end from this repository — but the code is provided so the transformations (normalization, pseudonymization, redaction) are fully auditable, and so the same methods can be applied to comparable sources.

## Privacy, ethics, and scope

This archive was assembled with care for the people in it. Out of scope and **excluded**: private channels and direct messages, credential/signer material, and conflict-mediation records. Personal names in internal working records are redacted.

If you use this data, please honor that intent: **do not attempt to re-identify** pseudonymized participants, and treat the record as the history of a community, not a dataset of individuals. Full terms are in the [[Archival Policy]].

## Citing the archive

A suggested citation:

> *Token Engineering Commons Public Archive* (2020–2026). TEC Archive. https://tecarchive.github.io/tec-archive/ · Data: https://github.com/TECArchive/tec-archive-data

---

*See also:* [[Archival Intent]] · [[Archival Policy]] · [[Sources]] · [[Documents]]
