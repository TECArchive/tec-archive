---
title: Bots
---

# Bots and Automation

The TEC ran a substantial amount of its day-to-day operation through **bots** — automated accounts, mostly on Discord, that handled everything from recognizing contributions and gating access to posting code updates and scheduling calls. For a community that treated coordination as an engineering problem, this automation layer was itself part of the infrastructure.

This page catalogs the bots evidenced in the record. They were identified from the Discord export (accounts the platform flags as bots, plus their dedicated logging channels such as `bot-logs` and `bot-setup`) and from the working documents. Some are standard third-party Discord bots; some were **custom TEC automations**; and a few are bridged announcement feeds from partner projects. Where a bot's exact function isn't documented, its purpose is inferred from its name and the channels it operated in, and noted as such.

## Contribution, rewards, and governance

These are the most TEC-specific bots — the automation behind the community's economic and recognition systems.

- **Praise** (also seen as *TEC Praise Bot* and *Praise Bot*) — the heart of TEC's contribution culture. Members praised each other with a bot command; those praises were later quantified into Impact Hours and reward allocations. This bot operated across nearly every active channel and is central to the story told in [[Praise]] and [[Economics and Token Design]].
- **SourceCred** — contribution-tracking automation that scored community participation; part of the early rewards tooling (dedicated `sourcecred` channel).
- **Dework** — task and bounty management; used to post and coordinate paid work, primarily in the comms and Gravity channels.
- **TEC Automation** — a custom automation account tied to the reward-system and onboarding-data channels; handled internal workflow tasks.
- **tec-sc-bot** — a TEC-specific bot (name suggests "smart contract" or "steward"); active in general, rewards, praise, and support.
- **TestBot ("Praise Scraper")** — evidently used to scrape/collect praise data for processing.

## Integrations and bridges

Bots that connected Discord to code, social media, and partner communities.

- **GitHub** — posted repository activity (commits, PRs, issues) into `tec-github-updates`; by far the highest-volume bot, reflecting TEC's open-source development pace.
- **TEC Bridge** — cross-platform message bridging.
- **Zapier** — general cross-app automation connecting Discord to external services.
- **TweetShift** — mirrored Twitter/X activity into the server's feed channels.
- **Partner announcement feeds** — bridged one-way feeds from allied projects, including **Giveth**, **Token Engineering Academy**, **cadCAD**, **Token Engineering Labs**, and **Token Research Cooperative**, surfaced in the ecosystem channels.

## Access, verification, and security

Bots that protected the server and managed membership and roles.

- **Wick** — anti-bot / anti-nuke security. It enforced a join gate that automatically removed unverified or unauthorized bots and guarded against permission escalation.
- **Captcha.bot** — captcha-based human verification for new members.
- **Guild.xyz bot** — token-gated role assignment (granting roles based on onchain holdings or credentials).
- **Carl-bot** — reaction-roles, moderation, and automated messages.
- **Verification / Verification Logs** and **InviteLogger** — logged member verification and tracked invites.
- **Statbot** — server analytics and activity statistics.
- **ChronicleBot** — logging/record-keeping.
- **Welcome and guide bots** (*TEC-Welcome-Bot*, *Guide Bot*) — onboarding new arrivals.

## Events, reminders, and meetings

- **sesh** — event scheduling and RSVPs.
- **Call reminder bots** — dedicated reminders for each working group's recurring calls (*Stewards Call Reminder*, *Gravity Call Reminder*, *Omega Call Reminder*, *Comms Call Reminder*), reflecting the cadence of TEC's [[Working Groups]].
- **Meeting-bot** — meeting coordination.

## Community and engagement

- **Gravity-POAP-bot** — issued POAPs (proof-of-attendance tokens) for Gravity events and trainings.
- **TEC Hatch Stats** — surfaced statistics during the Hatch (see [[The Hatch]]).
- **Onboarding-Data** and **Community Updates** — tracked new-member and community activity.
- **TicketBot** — support-ticket handling.

## Utility and music

A set of standard third-party music/utility bots ran in the voice and `play-music` channels, including **Groovy**, **Rythm**, **FredBoat**, **Tempo**, **Chip**, and **BreakoutBot** — ordinary community-server tooling rather than anything specific to TEC's mission.

---

*Note:* This list reflects bots that were **active enough to leave a trace** in the exported Discord history; short-lived or silent integrations may not appear. Bot accounts are software, not people, so their names are reproduced as-is; the [[Archival Policy]] on personal-name redaction applies to human members, not automated accounts.

*Related:* [[Sources/Discord]] · [[Praise]] · [[Economics and Token Design]] · [[Code and Technical Artifacts]]
