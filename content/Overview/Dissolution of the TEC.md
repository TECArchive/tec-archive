---
title: Dissolution of the TEC
---

# The Dissolution of the TEC

In 2025 the Token Engineering Commons made a deliberate choice to bring itself to a close in a structured, transparent, and values-consistent way. This page chronicles that dissolution, how the decision was reached, the sequence of proposals that carried it out, the mechanics of the wind-down, and the thinking behind it.

## Why the community chose to wind down

By 2024 the TEC had briefly reached financial equilibrium, roughly breaking even on operating costs of about $10,000 per month. That stability did not hold. Treasury outflows resumed without a clear sourcing plan, and over the following period several honest observations converged:

- **Governance had gone quiet.** Participation was low, and recent proposals lacked novelty or measurable delivery.
- **There was no clear horizon.** No defined product or research direction justified continued spending.
- **The market had rendered a verdict.** The `$TEC` token traded at a *discount to the treasury backing it*, even in a favorable market cycle, signalling that holders did not expect the organization to create future value.
- **The treasury was slowly bleeding.** Ongoing operations consumed remaining funds without corresponding impact on the token or on token-engineering activity.

For roughly eighteen months the remaining stewards had tried in various ways to reverse this course. When those efforts did not bear fruit, the framing shifted from *how to revive the TEC* to *how to end it well*. Approximately **$300,000** remained across the treasury and reserve, with additional funds dormant in inactive multisigs, and value that the community judged better returned to token holders than slowly spent down.

## The sequence of proposals

The wind-down was not a single decision but a chain of public proposals and debates over the second half of 2025:

- **A final revitalization attempt (mid-2025).** A strategic proposal reorganized remaining energy around storytelling, grants, sustainability, and community development, and served as a last effort to find a durable role.
- **The sunset framework (July 2025).** A proposal to initiate a structured shutdown and distribute the remaining treasury to token holders. Its public posting became the reference date for later snapshot calculations.
- **The decision to sunset (late July 2025).** A plain Yes/No governance vote asking token holders to affirm, in principle, that the `$TEC` token and the Augmented Bonding Curve should be sunset, deliberately centering token-holder consent before any mechanics were fixed.
- **The implementation proposal (August 2025).** The operational plan to consolidate all assets into the Common Pool, convert them to a single reserve asset, and fund a claims mechanism for holders.
- **A counter-proposal (September 2025).** An OTC buy-back alternative was offered as a compromise, which offered a fair-value exit for those who wished to leave while preserving the Commons for anyone committed to continuing. It reflected a genuine split among larger token holders, and an explicit concern that a divided vote could produce gridlock rather than a clean outcome.
- **The full shutdown proposal (October 2025).** A budget and plan to sunset not only the token but the TEC itself, framed around honoring the legacy of the "world's first blockchain-based commons" and ending it in a way consistent with the project's own values.
- **The final implementation (December 2025).** The technical execution plan for the token sunset, including the snapshot rules described below.

## How the wind-down worked

The mechanics were designed to be orderly and hard to game:

- **Consolidation.** Assets scattered across contracts and multisigs were pulled into the **Common Pool**, and inactive multisigs were given a short deadline (14 days) to return funds. The **Augmented Bonding Curve** was to be shut down, and any `$TEC` held by participating multisigs burned through it to avoid circular accounting.
- **A single reserve asset.** Recovered funds were converted to a staked-ETH asset (rETH) to hold value simply during the claims period.
- **Guardians freezing the system.** The **TEC Guardians** — the veto role introduced at the [[OP Migration]] — upgraded legacy contracts to freeze the Commons in a recoverable state and enable direct flows from the Common Pool to the claim contract.
- **An anti-speculation snapshot.** To prevent last-minute trading on the wind-down, each address's claim was based on the *lower* of its `$TEC` balance on the date the sunset was publicly announced (July 2025) or its balance at the dissolution snapshot. Accumulating tokens after the announcement conferred no extra claim.
- **Protecting compromised holders.** A multi-week window let the community verifiably flag hacked addresses so those assets could be frozen and credited back to their rightful owners.

Token holders were then able to **redeem their `$TEC` for a proportional share of the consolidated treasury**, with the redemption window running into **mid-2026**.

## The thinking behind it

What distinguishes the TEC's dissolution is that the community treated *ending* as a design problem worthy of the same care as launching. Several principles ran through the proposals:

- **End with integrity and dignity.** The recurring argument was that a slow, undignified decline would undermine the project's legacy; a deliberate close would not.
- **Exemplify token-engineering values in the shutdown itself.** Having demonstrated at the Hatch how a community could collectively design and deploy a crypto-economic system, the TEC sought to echo those same values in how it dismantled one.
- **Honor the experiment's lessons.** As the self-described first explicit economic commons on the blockchain, the TEC framed its closure as itself instructive — its application of [[Ostrom and the Cultural Build|Ostrom's principles]], successes and failures alike, offered lessons for anyone attempting a commons in the future.
- **Center token-holder consent.** The process was sequenced so that holders affirmed the direction before the mechanics were finalized, and it actively surfaced dissenting views rather than steamrolling them.

The Token Engineering Commons closed through transparent governance and a community deciding, in the open, that the most responsible use of what remained was to return it and conclude the experiment with clarity. The broader lifecycle leading here is traced in the [[History]] and the [[Timeline]].

---

*Related:* [[History]] · [[Timeline]] · [[OP Migration]] · [[Governance]] · [[Tokens of the TEC]] · [[Sources/Onchain]]
