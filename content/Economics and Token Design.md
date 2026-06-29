---
title: Economics & Token Design
---

# Economics & Token Design

The TEC's economic system was its most ambitious artifact: a token economy designed to fund public goods sustainably, launched through a community event and governed by the people it raised funds from. What follows is a narrative account of how that economy was designed, why each piece mattered, and what was learned from operating it.

For a quick reference to the different tokens involved, see [[Overview/Tokens of the TEC]]. For the chronology, see the [[Timeline]].

## The Hatch

The Hatch was the economic birth of the TEC, and it was deliberately designed to do something most fundraising mechanisms cannot: **bootstrap capital and community at the same time, through a single mechanism.** Rather than raising money first and finding a community later — or building a community and then bolting on a token sale — the Hatch fused the two. The act of funding the Commons and the act of joining it were the same act.

This mattered for several reasons.

**It brought workers into ownership.** Contributors who had already done unpaid or underpaid work were not treated as separate from the people putting in capital. Through Impact Hours, that prior labor was recognized and converted into Hatch tokens, so builders were promised a real portion of the raise in tokens. The people who would steward the organization held a genuine stake in it from the first day, rather than being hired into something already owned by outside investors.

**It let the community shape the design.** The Hatch was not a finished product handed down to participants. Its parameters — how much to raise, over what period, how much of each contribution to hold as a cultural tribute, how vesting worked, how Impact Hours converted — were open to community input. People were able to propose, question, and influence the economic rules they would later live under. (The process by which this happened is described in [[#collaborative-economics|Collaborative Economics]] below.)

**It removed the single founder.** Because the Hatch was a collective event that originated the organization, there was no individual who could be credited — or held up — as "the person who launched the TEC." The origin was distributed by design. This was an intentional decentralization of authorship: it protected the Commons from depending on, or being captured by, a single charismatic figure, and it reinforced that the TEC belonged to its participants rather than to a founder.

In practice, the Hatch was prepared through extensive parameter design (Hatch goal, period, tribute, vesting, the Impact Hour rate, and funding-pool assumptions), test hatches, "parameter parties," and live rehearsals with dashboards and data tracking. By the time it went live, the community had walked through the mechanics many times. The Hatch produced the Hatch DAO, the temporary governance body that would later vote on the Commons Upgrade.

→ For the step-by-step mechanics — the two phases, the vaults, the votes, and the parameters — see [[How the Hatch Worked]].

## Collaborative Economics

**Collaborative Economics was a process of building legitimacy.** Inside the Hatch design effort, the TEC ran an open, structured process that let community members propose their own parameters, debate them, and evaluate the consequences of each choice together.

It was built to do three things:

- **Participation** — community members could put forward their own parameter proposals, and not just react to a fixed design. People had genuine authorship over the economic rules.
- **Deliberation** — proposals were debated openly, and the community worked through the downstream consequences of each setting: what a higher tribute would mean for the treasury and for backers, how the Impact Hour rate changed the balance between builders and funders, how vote duration or support thresholds would shape future governance.
- **Education** — because the consequences were discussed in the open, the process doubled as a curriculum. Participating in the parameter debates taught people how the system actually worked.

The deeper purpose was forward-looking. Real governance decisions would surface later, regarding funding, the bonding curve, on strategy, and eventually on sunsetting. The intent was for those decisions to land on an **educated community** rather than a passive one. By the time the system was live, a meaningful number of participants had already reasoned through how the parameters interacted, so governance was not happening over the heads of the people it affected. Collaborative Economics was, in effect, an investment in informed self-governance, where the community was able understand the consequences of the vote on the economy.

## The Augmented Bonding Curve (ABC)

After the **Commons Upgrade** in January 2022, the TEC token moved onto an Augmented Bonding Curve. The ABC governed the token's price and supply algorithmically. Anyone could mint TEC by adding reserve assets to the curve, or burn TEC to withdraw reserve, with a portion of the activity feeding the common pool that funded proposals.

The ABC mattered because it tried to make funding *continuous and self-sustaining* rather than a one-time raise. Instead of the treasury only ever shrinking as it funded work, the curve created an ongoing relationship between the token's market, the reserve, and the funding pool. The TEC took its own curve seriously as an object of study, preserving models and simulations (including "what-if" matrices and proposals stress-tested with large reserves), and later convening a Bonding Curve Research Group to document the tradeoffs and lessons of running one in the real world.

→ For how the curve and the common pool actually worked, see [[How the Augmented Bonding Curve Worked]].

## Praise, Impact Hours, and Rewards

Underneath the token mechanics was the TEC's cultural-economic engine, where members were able to recognize contribution that didn't fit neatly into salaries or invoices.

**Praise** let community members acknowledge each other's work, in the open, as it happened. Recognized contribution accrued into **Impact Hours**, which connected unpaid and underpaid labor to the token economy after the Hatch. Over time this matured into recurring rewards rounds supported by Praise analysis, reward-board guidelines, SourceCred experiments, and contributor-factor modeling.

→ For how Praise was dished and quantified into Impact Hours, see [[How Praise Worked]].

It was not frictionless. Through mid-2022 the community worked through a genuinely hard question in how to be fair across people doing paid work, people volunteering, and people earning Praise-based rewards, without the three systems undermining each other. That debate is part of the record precisely because it was difficult, and it shows the real tension between recognizing contribution generously and compensating it sustainably.

## Treasury and Grants

As the TEC matured, the economic conversation shifted from *launching* a treasury to *stewarding* one. The community took on questions of reserve strategy and treasury risk, with attempts to diversifying into assets like ETH, wstETH, and sDAI, and treating the common pool as something to be managed with fiduciary care rather than spent.

In parallel, public-goods funding became more structured. What began as individual funding proposals evolved into a **grants program**, with a Small Grants pilot and Grants v1 in 2023, multiple TE Grants rounds, and later work aligned with the Optimism ecosystem such as Token Engineering the Superchain. Grants became one of the TEC's clearest outward-facing value flows, and the place where the mission of funding token engineering public goods was most visible.

## The Sunset

The economic story closed honestly. Through 2025 the community produced a token infrastructure and utility report, weighed the token's real condition, and ultimately designed a responsible wind-down through a sunsetting framework, debate over exit mechanics including an OTC buyback, a broader shutdown framework, and finally the **TEC Token Sunset** in December 2025. The same collaborative, deliberative posture that launched the economy was used to close it, as the organization that began without a single founder also ended without a unilateral decision.

## The onchain record

None of this has to be taken on trust. The contracts, votes, parameters, and treasury transactions are public and independently verifiable; see [[Sources/Onchain]] for the onchain record and [[Code and Technical Artifacts]] for the models, dashboards, and tooling behind the mechanisms described here.

---

*Related:* [[How the Hatch Worked]] · [[How the Augmented Bonding Curve Worked]] · [[How Praise Worked]] · [[Overview/Tokens of the TEC]] · [[Governance]] · [[Sources/Onchain]]
