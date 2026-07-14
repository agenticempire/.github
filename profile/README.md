<p align="center">
  <img src="https://github.com/agenticempire.png" height="96" alt="Agentic Empire" />
</p>

<h1 align="center">Infrastructure for agent-authored software</h1>

<p align="center">
  We build the systems between a plausible patch and software you can trust.<br />
  Our first public product is <strong>Axint</strong>, the proof and repair layer for Apple coding agents.
</p>

<p align="center">
  <a href="https://github.com/agenticempire/axint"><strong>Explore Axint</strong></a> ·
  <a href="https://docs.axint.ai">Read the docs</a> ·
  <a href="https://cloud.axint.ai">Try it in browser</a> ·
  <a href="https://github.com/agenticempire/axint/discussions">Join the community</a>
</p>

---

## Axint

Agents can write Swift. Shipping requires evidence.

Axint generates Apple-native capabilities, checks existing Swift without
rewriting the project, runs resumable Xcode proof, reconciles heuristics with
compiler and test evidence, and returns a compact signed receipt for the next
repair turn.

```bash
npx -y -p @axint/compiler axint prove --dir /path/to/MyApp
```

The first run is local, source-free, and non-destructive. No account is required.

| Surface | What it does |
| --- | --- |
| **Generate** | Compile smaller TypeScript, Python, JSON, or preview contracts into inspectable Swift |
| **Check** | Classify findings as confirmed, probable, advisory, or suppressed |
| **Run** | Orchestrate resumable Xcode builds, tests, runtime checks, and `.xcresult` evidence |
| **Team** | Preserve project context, file claims, repair packets, and agent handoffs |
| **Cloud** | Provide hosted checks and shared proof history when local Apple tooling is unavailable |

<p align="center">
  <a href="https://www.npmjs.com/package/@axint/compiler"><img src="https://img.shields.io/npm/v/@axint/compiler?color=f05138&label=npm" alt="npm package" /></a>
  <a href="https://pypi.org/project/axint/"><img src="https://img.shields.io/pypi/v/axint?color=3775a9&label=PyPI" alt="PyPI package" /></a>
  <a href="https://github.com/agenticempire/axint/actions/workflows/ci.yml"><img src="https://github.com/agenticempire/axint/actions/workflows/ci.yml/badge.svg" alt="continuous integration" /></a>
  <a href="https://github.com/agenticempire/axint/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-2f3431" alt="Apache 2.0 license" /></a>
</p>

## What we optimize for

- **Compiler truth over confident heuristics.** Evidence can confirm, downgrade, or suppress a finding.
- **Local-first trust.** Source stays on the developer's machine unless they explicitly choose a hosted workflow.
- **Small agent context.** Receipts carry verdicts, stable findings, and exact next actions without dumping full logs.
- **Inspectable output.** Generated Swift and proof artifacts remain ordinary files that teams can review and own.
- **Brownfield respect.** Existing projects deserve abstention, no surprise mutation, and a clean escape hatch.

## Build with us

The highest-value contributions improve brownfield precision, Xcode evidence,
Apple API coverage, repair quality, and real-world examples.

[Good first issues](https://github.com/agenticempire/axint/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) ·
[Help wanted](https://github.com/agenticempire/axint/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) ·
[Contribution guide](https://github.com/agenticempire/axint/blob/main/CONTRIBUTING.md) ·
[Examples](https://github.com/agenticempire/axint-examples)

---

<p align="center">
  Cupertino, CA · <a href="https://axint.ai">axint.ai</a> · <a href="https://agenticempire.co">agenticempire.co</a> · <a href="https://x.com/agenticempire">X</a>
</p>
