---
title: How the Augmented Bonding Curve Worked
---

# How the Augmented Bonding Curve Worked

The Augmented Bonding Curve (ABC) was the economic engine of the Token Engineering Commons. It was the mechanism that issued the TEC token, set its price, and funded the commons *continuously* rather than relying on a single one-time raise of funding. It went live with the Commons Upgrade in January 2022 (see [[How the Hatch Worked]]).

This page explains how it worked, starting from the underlying primitive.

## Token bonding curves

A **token bonding curve** is a crypto-economic primitive that lets tokens be minted and burned on demand according to preset rules. Bonding curves give a token three important properties:

- **A dynamic supply** — there is no fixed cap; tokens are minted on purchase and burned on sale, with every token redeemable for collateral.
- **A deterministic price** — the price rises as tokens are minted and falls as they are burned, moving along a defined mathematical curve.
- **Continuous liquidity** — tokens can be bought or sold at any time, because the contract itself is always the counterparty.

A bonding curve involves two tokens: a **reserve currency** and an **asset token**. In the TEC's case the reserve currency was **wxDai** (≈ 1 USD) and the asset token was the **TEC token**. The two were mathematically linked. Sending reserve currency to the contract minted asset tokens; sending asset tokens back burned them and released reserve currency. Because the contract always holds enough reserve to buy tokens back, it can act as a permanent counterparty, with the price stepping up or down along the curve as supply changes.

## What made it "augmented"

The ABC took that base design and added three components: a **Common Pool**, a **token lockup (vesting) mechanism**, and **inter-system feedback loops**. The most important for the commons' economy was the Common Pool.

## The Common Pool

The **Common Pool** was a floating pool of capital collectively managed by all TEC token holders. Its purpose was to fund token-engineering projects and initiatives, as well as the operations of the commons itself. Money left the pool only by a governance vote through [[Governance|Conviction Voting]].

## Entry and exit tributes: the continuous engine

What made the funding *continuous* was the way the Common Pool was fed. Every interaction with the curve contributed to it, through **Entry and Exit Tributes**:

- **On a purchase (mint):** a buyer sends wxDai to the ABC. An **Entry Tribute** is deducted and routed to the Common Pool; the remainder goes to the reserve, and a corresponding amount of TEC tokens is minted for the buyer.
- **On a sale (burn):** a seller sends TEC tokens to the ABC. The tokens are burned for a corresponding amount of wxDai; an **Exit Tribute** is deducted from that amount and routed to the Common Pool, with the remainder sent to the seller.

In other words, both *entering* and *exiting* the economy contributed to the shared treasury. Rather than a treasury that could only shrink as it funded work, the ABC created a treasury that was refilled by the ongoing activity of the token's own market. This is the mechanism the TEC referred to as its economic engine, and the thing that allowed the budgeting and rewards systems to operate on a continuing basis.

## Why it was significant

The ABC was one of the first real-world deployments of an augmented bonding curve as the funding backbone of an organization, pairing continuous token issuance with a collectively governed common pool. The **continuous funding for a commons, driven by tribute-fed token mechanics rather than periodic fundraising** became an influential reference point, and the model of continuous organizational funding it demonstrated has informed and been adapted by other projects since.

The TEC also treated its own curve as an object of study as it preserved models and simulations, ran "what-if" analyses, and later convened a **Bonding Curve Research Group** to document the tradeoffs of operating one in production (see [[Research]]).

## Verifying it

The ABC, its parameters, and its transactions are public and verifiable onchain. See [[Sources/Onchain]] for the contract record and [[Code and Technical Artifacts]] for the bonding-curve models, the ABC dashboard, and the subgraph.

---

*Related:* [[Economics and Token Design]] · [[How the Hatch Worked]] · [[Governance]] · [[Research]] · [[Sources/Onchain]]
