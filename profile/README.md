<p align="center">
  <img src="https://github.com/agenticempire.png" height="96" alt="Agentic Empire" />
</p>

<h1 align="center">Agents can write Swift. Axint makes them prove it.</h1>

<p align="center">
  <strong>Axint is the proof and repair layer for Apple coding agents.</strong>
</p>

<p align="center">
  Axint checks the Swift your agent wrote, runs the real Xcode build and tests,<br />
  reconciles findings with Apple tooling, and returns signed proof with the exact repairs to make next.<br />
  <strong>No project rewrite. No source upload.</strong>
</p>

<p align="center">
  <a href="https://github.com/agenticempire/axint"><strong>Prove a project</strong></a> ·
  <a href="https://axint.ai/cloud/preview">Try Cloud Preview</a> ·
  <a href="https://mcp.axint.ai/health">Use the hosted MCP server</a> ·
  <a href="https://docs.axint.ai">Read the docs</a> ·
  <a href="https://github.com/agenticempire/axint-examples">Explore examples</a> ·
  <a href="https://github.com/agenticempire/axint/discussions">Join the community</a>
</p>

<p align="center">
  <a href="https://github.com/agenticempire/axint">
    <img src="https://raw.githubusercontent.com/agenticempire/axint/main/media/intro.gif" width="960" alt="Axint discovers an Apple project, checks Swift, runs Xcode proof, reconciles evidence, and returns a compact receipt" />
  </a>
</p>

---

## One local command

```bash
npx -y -p @axint/compiler axint prove --dir /path/to/MyApp
```

The default proof run is local, source-free, and non-destructive. It requires no
account, does not change Swift, and keeps complete build and test artifacts on
disk while returning a compact receipt for the next repair turn.

No Mac is required to inspect packages, run hosted checks, or start in Cloud
Preview. Real Apple builds still execute on an authorized macOS runner so Xcode,
simulators, signing, and `.xcresult` evidence remain genuine.

| Surface | Role in the proof loop |
| --- | --- |
| **Check** | Classify findings as confirmed, probable, advisory, or suppressed |
| **Run** | Orchestrate resumable Xcode build, test, runtime, and `.xcresult` evidence |
| **Generate** | Compile smaller contracts into inspectable Apple-native capabilities |
| **Team** | Preserve context, file claims, repair packets, and agent handoffs |
| **Cloud** | Provide hosted checks and shared proof history when local tooling is unavailable |

The same contract is available over Streamable HTTP at
`https://mcp.axint.ai/mcp` for clients that support remote MCP servers.

<p align="center">
  <a href="https://www.npmjs.com/package/@axint/compiler"><img src="https://img.shields.io/npm/v/@axint/compiler?color=f05138&label=npm" alt="npm package" /></a>
  <a href="https://pypi.org/project/axint/"><img src="https://img.shields.io/pypi/v/axint?color=3775a9&label=PyPI" alt="PyPI package" /></a>
  <a href="https://github.com/agenticempire/axint/actions/workflows/ci.yml"><img src="https://github.com/agenticempire/axint/actions/workflows/ci.yml/badge.svg" alt="continuous integration" /></a>
  <a href="https://github.com/agenticempire/axint/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-2f3431" alt="Apache 2.0 license" /></a>
</p>

## What we optimize for

- **Compiler truth over confident heuristics.** Apple evidence can confirm, contextualize, or suppress a finding.
- **Local-first trust.** Source stays on the developer's machine unless a hosted workflow is explicitly chosen.
- **Small agent context.** Receipts carry verdicts, stable findings, and exact next actions instead of full logs.
- **Inspectable output.** Generated Swift and proof artifacts remain ordinary files that teams can review and own.
- **Respect for existing projects.** Checks abstain where evidence is incomplete, and mutations require explicit opt-in.

## Build with us

The highest-value contributions improve existing-project precision, Xcode
evidence, Apple API coverage, repair quality, and reproducible proof examples.

[Good first issues](https://github.com/agenticempire/axint/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) ·
[Help wanted](https://github.com/agenticempire/axint/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) ·
[Contribution guide](https://github.com/agenticempire/axint/blob/main/CONTRIBUTING.md) ·
[Examples](https://github.com/agenticempire/axint-examples)

---

<p align="center">
  Cupertino, CA · <a href="https://axint.ai">axint.ai</a> · <a href="https://agenticempire.co">agenticempire.co</a> · <a href="https://x.com/agenticempire">X</a>
</p>
