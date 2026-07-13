---
title: OP Migration
---

# The Optimism Migration

In December 2023, the TEC moved its DAO and token from **Gnosis Chain** — where it had launched and operated since the Hatch — to **Optimism (OP Mainnet)**. This was one of the most consequential governance decisions in the project's life: it changed the technical foundation the Commons ran on, replaced part of its governance stack, and repositioned the TEC within a new ecosystem. This page explains why the migration happened, what it involved, and how the community carried it out.

## Why the TEC migrated

By 2023 the TEC had entered a strategic pivot toward sustainability, and the migration was argued for on three main grounds, laid out in the technical migration proposal:

- **Reduced friction for the token.** Buying and holding `$TEC` was simpler and cheaper on Optimism, lowering the barrier for new participants.
- **Increased access to capital.** Optimism hosted a larger, more active capital base and a broader public-goods funding culture.
- **Retroactive public-goods funding.** Optimism's **RetroPGF** program and the wider Superchain grants environment aligned closely with the TEC's mission of funding token-engineering public goods — moving there put the Commons where that funding actually flowed. This alignment later became explicit in the **Token Engineering the Superchain** grants work (see [[Grant Program]]).

## What it involved

The migration was not a simple redeployment — several core components of the TEC's governance stack did not exist on Optimism and had to be replaced or re-created:

- **From Gardens to a Tao Voting DAO.** On Gnosis, the TEC ran on **1Hive Gardens**. Gardens was not available on Optimism, so the DAO transitioned to a **Tao Voting DAO** — still built on the Aragon OS framework, with the same kind of tokens, a delegate voting system, and the ability to attach the same [[Augmented Bonding Curve]].
- **From Celeste to TEC Guardians.** The TEC's dispute-resolution layer, **Celeste**, was also unavailable on Optimism. In its place the community introduced **TEC Guardians** — a group of trusted members empowered to veto proposals that violated the [[Community Covenant]]. This introduced a new, more human-trust-based safeguard into TEC governance (see [[Governance]]).
- **Token and treasury migration.** The `$TEC` token was re-issued on Optimism and holders' balances migrated; the bonding curve and treasury moved with it. The work was scoped and executed by the **TECAN-Strategy** group and **Turmeric Labs**.

## The process

True to its governance culture, the TEC treated a technical infrastructure change as a full community process rather than an engineering decision made in private. It unfolded over roughly September–December 2023:

1. **Community Advice Process on TEC Migration to Optimism** — a forum-led process framing the decisions the community would need to make and the trade-offs involved.
2. **Technical feasibility study** and the **Optimism TEC DAO Specification**, defining the target architecture.
3. **Introducing TEC Guardians**, followed by **Guardian nominations and self-nominations**, to stand up the new veto safeguard.
4. **Token Census before the Migration** — a snapshot of holders ahead of the move.
5. **Simulating the TEC Migration** and an **Optimism Migration Dress Rehearsal**, which stood up test DAOs (a Test TEC DAO and a Test TEC Reputation DAO) using **EVMcrispr** to verify the full sequence before touching real funds.
6. **The migration vote** (December 2023) — token holders approved the migration plan and the release of funds to the technical team to test and execute it.
7. **The Tao execution vote** and **OP Mainnet launch**, completing the move.

## After the migration

Operating on Optimism reshaped the TEC's final chapter. The community established **TEC-OP liquidity on Velodrome**, explored new token-utility ideas, adjusted quorum rules, and connected its grants work directly to the Optimism and Superchain ecosystems. The Optimism-era DAO — governed by Tao Voting and the Guardians — was also the structure through which the TEC eventually executed its **sunset and treasury distribution** in 2025–2026. The verified Optimism contract addresses are recorded on the [[Sources/Onchain]] page.

---

*Related:* [[Overview/Tokens of the TEC]] · [[Grant Program]] · [[Governance]] · [[Sources/Onchain]] · [[Timeline]]
