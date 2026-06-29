---
title: Onchain
---

# Onchain

TEC's economy and hard governance lived onchain. Unlike the discussion platforms, this source is permanent and publicly verifiable: anyone can independently confirm votes, parameters, and treasury movements directly from the blockchain.

## Chains

- **Gnosis Chain (formerly xDai)** — TEC's original home. The Hatch, the Augmented Bonding Curve, Conviction Voting, and the first treasury all operated here from launch through 2023.
- **Optimism (OP Mainnet)** — TEC migrated here in December 2023 following a community advice process and a formal governance vote. Post-migration operations, token utility experiments, and the eventual sunset took place on Optimism.

## Contract addresses

The following addresses are reconstructed from the archived TEC repositories (the [[Code and Technical Artifacts|ABC subgraph, ABC dashboard, redemption, and shutdown repos]]). The TEC token on Gnosis is independently confirmed on GnosisScan. Readers should treat these as starting points and verify them directly on the block explorers linked below.

### Gnosis Chain (xDai) — operating era, 2022–2023

| Contract | Address |
| --- | --- |
| TEC token (`TEC`) | [`0x5dF8339c5E282ee48c0c7cE8A7d01a73D38B3B27`](https://gnosisscan.io/token/0x5dF8339c5E282ee48c0c7cE8A7d01a73D38B3B27) |
| Augmented Bonding Curve | [`0x74ade20c12067e2f9457c037809a73f35694f99f`](https://gnosisscan.io/address/0x74ade20c12067e2f9457c037809a73f35694f99f) |
| Bonding Curve Reserve | [`0x4a3C145c35Fa0daa58Cb5BD93CE905B086087246`](https://gnosisscan.io/address/0x4a3C145c35Fa0daa58Cb5BD93CE905B086087246) |
| Common Pool (ABC funding pool) | [`0x01d9c9Ca040e90fEB47c7513d9A3574f6e1317bD`](https://gnosisscan.io/address/0x01d9c9Ca040e90fEB47c7513d9A3574f6e1317bD) |
| Token Manager | [`0x080C696B7bD6d830BF5092Fe7DFcb72B42BdD8b7`](https://gnosisscan.io/address/0x080C696B7bD6d830BF5092Fe7DFcb72B42BdD8b7) |
| Bancor Formula | [`0xA4e28453b4F3fcB251EEbe1aC2798eEE55e2bE6a`](https://gnosisscan.io/address/0xA4e28453b4F3fcB251EEbe1aC2798eEE55e2bE6a) |
| Collateral token (wxDai) | [`0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d`](https://gnosisscan.io/token/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d) |
| TEC Gardens DAO (Conviction Voting) | [`0x1fc7e8d8e4bbbef77a4d035aec189373b52125a8`](https://gnosisscan.io/address/0x1fc7e8d8e4bbbef77a4d035aec189373b52125a8) |

The TEC Gardens DAO was the Conviction Voting "garden" where funding proposals were made and the Common Pool was governed; it was reachable during operation at `gardens.1hive.org/#/garden/0x1fc7e8d8…`.

### Optimism (OP Mainnet) — post-migration & sunset, 2023–2026

| Contract | Address |
| --- | --- |
| TEC token (Optimism) | [`0x8fc7c1109c08904160d6ae36482b79814d45eb78`](https://optimistic.etherscan.io/token/0x8fc7c1109c08904160d6ae36482b79814d45eb78) |
| Redemption / claim contract (redemption dApp) | [`0x55456B5a78b1EA17771caf0f99C7fEd7292670A5`](https://optimistic.etherscan.io/address/0x55456B5a78b1EA17771caf0f99C7fEd7292670A5) |
| TEC Claim (shutdown deployment) | [`0x873f0EFeA1a72B2a5ff6ef755fF5Cbf80A324D43`](https://optimistic.etherscan.io/address/0x873f0EFeA1a72B2a5ff6ef755fF5Cbf80A324D43) |
| TEC Claim Factory | [`0xFEBBaABB9Afce6a61828893E52acf8BEF4b7D8e3`](https://optimistic.etherscan.io/address/0xFEBBaABB9Afce6a61828893E52acf8BEF4b7D8e3) |
| TEC Claim Implementation | [`0x4C32c8517C1D61ff395F4E5d7aFf985fa49E0Ce6`](https://optimistic.etherscan.io/address/0x4C32c8517C1D61ff395F4E5d7aFf985fa49E0Ce6) |
| Controlling owner (Safe) | [`0x7eead728a790bb1801137349f7cc1e9dcd163b71`](https://optimistic.etherscan.io/address/0x7eead728a790bb1801137349f7cc1e9dcd163b71) |
| Redemption asset — DAI | [`0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1`](https://optimistic.etherscan.io/token/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1) |
| Redemption asset — rETH | [`0x9Bcef72be871e61ED4fBbc7630889beE758eb81D`](https://optimistic.etherscan.io/token/0x9Bcef72be871e61ED4fBbc7630889beE758eb81D) |

*Note: two redemption addresses appear in the source repos — the address referenced by the live redemption dApp and the claim module deployed by the shutdown repo. Both are listed; verify the operative one on Optimistic Etherscan.*

## Token redemption and sunset

At sunset, remaining treasury value was returned to `$TEC` holders through a **two-token redemption in rETH and DAI**. The claim contract's on-chain `claimDeadline` was **`1781924400` (2026-06-20 03:00 UTC)**, consistent with the redemption window that closed on **19 June 2026**. See the [[Timeline]] for the surrounding sunset milestones and [[Economics and Token Design]] for how the economy was wound down.

## What lived onchain

- **The Hatch DAO** — the initial fundraising and governance-formation event (Impact Hours, Hatch tokens, cultural tribute).
- **The Augmented Bonding Curve (ABC)** — minting and burning of the TEC token against a reserve; the heart of the token economy. See [[How the Augmented Bonding Curve Worked]].
- **Conviction Voting / TAO Voting / Dandelion Voting** — the funding and constitutional governance mechanisms.
- **Treasury** — the Common Pool of funds, later diversified, and ultimately wound down.
- **Token sunset** — the contracts and transactions that closed the token economy and handled redemptions.

## Scope, provenance, and privacy

Onchain data is inherently public. The archive references addresses and transactions as primary evidence; it does not attempt to deanonymize wallet owners. The addresses above were extracted from TEC's own archived repositories and, where possible, cross-checked against public block explorers and the TEC forum. Because they are drawn from repository configuration, independent verification on the linked explorers is encouraged before relying on any single address.
