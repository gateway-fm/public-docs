---
sidebar_position: 8
title: Releases
---

# CDK-Erigon Releases

This page documents the latest releases of cdk-erigon, including both stable releases and pre-releases. For the most up-to-date information, please refer to the [official GitHub releases page](https://github.com/0xPolygonHermez/cdk-erigon/releases).

## Latest Pre-Releases

### v2.63.0 (April 23, 2025)

This pre-release includes numerous performance improvements, bug fixes, and new features. Key highlights include:

#### Performance Improvements

- Removed unneeded memory allocations in combine collectors
- Stage interhashes optimizations
- SMT depth fixes and tests

#### New Features

- Added flag for empty block close time
- Added support for TLS in Data Stream client
- Added flag to allow local sequencer to shadow the main one
- Added configurable witness unwind limit
- Added zkevm.crash-on-reorg flag
- Added metrics for zk sync and version

#### Bug Fixes

- Fixed incorrect mutex usage in gas tracker
- Fixed crashes related to nil transaction handling
- Fixed issues with DataStream client test timeouts
- Fixed WebSocket/HTTP same port conflicts
- Fixed handling of 0 transaction blocks after limbo

#### Contributors

- @praetoriansentry, @revitteth, @dloghin, @MorettiGeorgiev, @zjg555543, @IvanBelyakoff, @afa7789, @leovct, @louisliu2048, @xavier-romero, @cffls, @hexoscott, @V-Staykov, @iszubok, @Stefan-Ethernal, @C7-C5, @jhkimqd, @elliothllm

### v2.61.21-RC1 (May 2, 2025)

Pre-release version of cdk-erigon.

**Full Changelog**: [v2.61.20...v2.61.21-RC1](https://github.com/0xPolygonHermez/cdk-erigon/compare/v2.61.20...v2.61.21-RC1)

## Stable Releases

### v2.61.20 (Current Stable Release)

The current stable release of CDK-Erigon recommended for production environments. This release provides robust performance, stability, and compatibility with the Polygon zkEVM network.

For more details on the changes included in this release, see the [GitHub release page](https://github.com/0xPolygonHermez/cdk-erigon/releases/tag/v2.61.20).

## Hotfix Releases

### v2.61.16-hotfix3 (February 26, 2025)

A hotfix release that adds a check for counters overflow on eth_estimateGas.

**What's Changed**

- Added check for counters overflow on eth_estimateGas (@IvanBelyakoff)

**Full Changelog**: [v2.61.16-hotfix2...v2.61.16-hotfix3](https://github.com/0xPolygonHermez/cdk-erigon/compare/v2.61.16-hotfix2...v2.61.16-hotfix3)

### v2.61.16-hotfix2 (February 24, 2025)

Hotfix release addressing critical issues.

**Full Changelog**: [v2.61.16-hotfix1...v2.61.16-hotfix2](https://github.com/0xPolygonHermez/cdk-erigon/compare/v2.61.16-hotfix1...v2.61.16-hotfix2)

### v2.61.16-hotfix1 (February 24, 2025)

Hotfix release addressing critical issues.

**Full Changelog**: [v2.61.16-RC1...v2.61.16-hotfix1](https://github.com/0xPolygonHermez/cdk-erigon/compare/v2.61.16-RC1...v2.61.16-hotfix1)

## Version Naming Convention

CDK-Erigon follows a semantic versioning approach with the following naming conventions:

- **Standard Releases** (e.g., v2.61.20): Stable releases suitable for production environments
- **Release Candidates** (e.g., v2.61.21-RC1): Pre-release versions for testing before final release
- **Hotfixes** (e.g., v2.61.16-hotfix3): Targeted fixes for specific issues in existing releases

## Downloading Releases

Binary releases for various platforms can be downloaded directly from the [GitHub releases page](https://github.com/0xPolygonHermez/cdk-erigon/releases).

## Building from Source

For instructions on building CDK-Erigon from source, see the [deployment guide](/cdk-erigon/deploy-testnet) or refer to the repository's [README file](https://github.com/0xPolygonHermez/cdk-erigon).
