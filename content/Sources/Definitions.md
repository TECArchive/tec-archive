---
title: Definitions
---

# Definitions & Glossary

The TEC operated in a specialized world — token engineering, DAOs, and Ethereum governance — with a vocabulary that can be opaque to anyone outside Web3 or the community itself. This glossary defines the terms that recur throughout the archive, in plain language, with a note on how the TEC used them where the local meaning differs from the general one.

Terms are listed alphabetically.

## A

**Aragon OS** — an open-source framework for building DAOs on Ethereum. The TEC's DAO was built on Aragon, both on Gnosis Chain and, later, on Optimism.

**Augmented Bonding Curve (ABC)** — the TEC's continuous-funding engine: a smart contract that let people mint `$TEC` by depositing reserve assets and redeem it by burning, with a portion of each trade routed to the community pool. See [[Augmented Bonding Curve]].

## B

**Bonding curve** — a smart contract that sets a token's price by formula based on its supply: price rises as more is minted and falls as tokens are burned, so a market can exist without an order book or counterparty.

**BrightID** — a "proof of unique human" identity network used to resist [Sybil attacks](#s) by making it hard for one person to hold many accounts.

## C

**cadCAD** — *complex adaptive dynamics computer-aided design*: an open-source Python library for simulating token economies. The TEC used it to model Hatch and bonding-curve parameters before committing to them.

**Celeste** — a decentralized dispute-resolution system (a "digital court" using staked jurors) that the TEC used on Gnosis Chain to challenge proposals violating its principles. It was not available on Optimism, which is why the TEC created **Guardians** at migration.

**Commons Pool / Common Pool** — the TEC's shared treasury of funds available to be allocated to proposals and grants through community governance.

**Commons Stack** — the organization and community that incubated the TEC's model of token-engineered commons; a recurring collaborator and grantee.

**Commons Upgrade** — the TEC's Phase 2 transition, upgrading the initial Hatch DAO into the full TEC DAO with the Augmented Bonding Curve.

**Community Covenant** — the TEC's foundational agreement of shared principles; proposals could be challenged or vetoed for violating it.

**Conviction Voting** — a voting method where support for a proposal accumulates the longer voters back it, so funding decisions reflect sustained collective preference rather than a single snapshot vote.

**CSTK Score** — a non-transferable reputation score issued by the Commons Stack that determined membership in the **Trusted Seed** and eligibility to join Hatches.

## D

**DAO (Decentralized Autonomous Organization)** — an organization coordinated through smart contracts and token-holder governance rather than a traditional legal hierarchy. The TEC was a DAO.

**Dandelion Voting** — an Aragon voting app used by the TEC; among other things it enforced that members couldn't both vote yes on a proposal and immediately exit with their funds.

**Disputable Voting** — voting whose outcomes can be challenged through a dispute-resolution layer (e.g. Celeste) before taking effect.

## E

**Entry / Exit Tribute** — fees taken by the Augmented Bonding Curve when minting (entry) or redeeming (exit) `$TEC`, with the proceeds directed to the common pool.

**EVMcrispr** — a tool for scripting complex sequences of DAO transactions and permission changes; the TEC used it heavily, including to build and rehearse the Optimism migration.

## G

**Gardens** — 1Hive's DAO framework (built on Aragon) that the TEC ran on while on Gnosis Chain, combining Conviction Voting and Celeste. Not available on Optimism.

**Gitcoin** — a platform for funding open-source and public-goods projects, best known for **Quadratic Funding** rounds. The TEC ran its TE Grants rounds through Gitcoin's **Allo Protocol**. See [[Grant Program]].

**Gnosis Chain** — the Ethereum sidechain (formerly xDai) where the TEC originally launched and operated, chosen for low fees. Its stable asset is **xDai** (wrapped as **wxDAI**).

**Guardians (TEC Guardians)** — a group of trusted members, introduced at the Optimism migration, empowered to veto proposals that violate the Community Covenant — a human-trust substitute for Celeste, which wasn't available on Optimism. See [[OP Migration]].

## H

**Hatch** — the TEC's two-phase community fundraising launch, in which members of the Trusted Seed contributed funds to bootstrap the Commons and received the initial token. See [[The Hatch]].

## I

**Impact Hours (IH)** — non-transferable credit earned for contributions before the Hatch, which converted into initial token allocations — the mechanism that rewarded early labor. See [[Praise]].

## L

**Layer 2 / Rollup** — a network built on top of Ethereum that processes transactions more cheaply and quickly while inheriting Ethereum's security. **Optimism** is a Layer 2 "optimistic rollup."

## O

**1Hive** — a sibling DAO community whose tooling (Gardens, Celeste, the honey template) the TEC built on and collaborated with closely.

**Optimism (OP Mainnet)** — the Layer 2 network the TEC migrated to in December 2023. Part of the **Superchain**. See [[OP Migration]].

## P

**POAP (Proof of Attendance Protocol)** — a token given to mark participation in an event; the TEC issued POAPs for Gravity trainings and community events.

**Praise** — both a practice and a tool: members "praised" each other's contributions, which were later quantified into rewards. Central to the TEC's contribution culture. See [[Praise]].

## Q

**Quadratic Funding (QF)** — a matching mechanism where many small donations count for more than a few large ones, so a matching pool is distributed according to the *breadth* of community support, not just the amount. The basis of the TE Grants rounds.

**Quadratic Voting** — voting where each additional vote on one option costs progressively more, letting people express intensity of preference while limiting the power of large holders.

**Quantifier** — a community member responsible for scoring praise into quantified contribution values in the rewards process.

## R

**Ragequit / Redemption** — the ability to burn one's tokens and exit with a proportional share of the reserve. A core "right of exit" in the TEC's design, and the mechanism through which the final treasury was distributed.

**Reserve Ratio** — a bonding-curve parameter setting how much reserve backs the token supply, which governs price sensitivity and how much can be redeemed.

**RetroPGF (Retroactive Public Goods Funding)** — Optimism's model of rewarding public-goods work *after* it has demonstrated impact, rather than funding it upfront. A key strategic draw for the TEC's migration to Optimism.

## S

**SourceCred** — a system that scores community contributions to inform rewards; used in the TEC's early rewards tooling.

**Superchain** — Optimism's network of interoperable Layer 2 chains sharing technology and standards. The TEC aligned its later grants with this ecosystem.

**Sybil resistance** — defenses against one actor creating many identities to unfairly influence voting or funding (a "Sybil attack"). Relevant to quadratic mechanisms, which assume one-person-one-account.

## T

**Tao Voting** — a delegate-based Aragon voting system (with a challenge/dispute period) that the TEC adopted on Optimism in place of Gardens.

**Token Engineering** — the emerging discipline of designing, verifying, and operating token-based economic systems with engineering rigor. The field the TEC existed to advance.

**Tollgate fee** — a small deposit required to submit a proposal, deterring spam and low-effort proposals.

**Trusted Seed** — the vetted community of token-engineering and commons practitioners (qualified via CSTK) eligible to participate in the Hatch.

## V

**Velodrome** — a decentralized exchange on Optimism where the TEC established `$TEC`/OP liquidity after migrating.

## W

**wxDAI / xDai** — the stable asset (pegged to the US dollar) used on Gnosis Chain; **wxDAI** is its wrapped, ERC-20 form, used by the Hatch and the bonding curve.

---

*This glossary covers terms as the TEC used them; general Web3 terms may carry broader meanings elsewhere. For the systems these terms describe in depth, see [[Economics and Token Design]], [[Governance]], and the [[Sources]] pages.*
