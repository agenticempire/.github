<p align="center">
  <img src="https://github.com/agenticempire.png" height="100" alt="Agentic Empire" />
</p>

<h1 align="center">Agentic Empire</h1>

<p align="center">
  <strong>Open-source tools and infrastructure for the agentic era.</strong><br/>
  We build the compilers, runtimes, and compute layers that give AI agents native access to every platform.
</p>

---

### Flagship Project

**[Axint](https://github.com/agenticempire/axint)** — The open-source compiler that turns one `defineIntent()` call into two agent surfaces: a native Swift App Intent for Siri — and an MCP tool for Claude, Cursor, and Windsurf.

```bash
# Install
npm install -g @axintai/compiler

# Compile a TypeScript intent → Swift + plist + entitlements
axint compile my-intent.ts --out ios/Intents/
```

**v0.2.0** — Real TypeScript AST parser, dual-surface compilation (App Intents + MCP), Info.plist & entitlements emit, 117 tests, [browser playground](https://axint.ai/#playground).

### What We're Building

**Tools** — Compilers and developer infrastructure that let AI agents operate natively on Apple platforms, MCP hosts, and beyond. One TypeScript definition. Two agent surfaces. Zero Swift required.

**Infrastructure** — The compute and data center backbone that powers the next generation of agentic workloads at scale.

### Get Involved

- [Try the playground](https://axint.ai/#playground) — runs the full compiler in your browser
- [Star Axint on GitHub](https://github.com/agenticempire/axint) to follow the project
- [Open an issue](https://github.com/agenticempire/axint/issues) to report bugs or request features
- [Read the contributing guide](https://github.com/agenticempire/axint/blob/main/CONTRIBUTING.md) to submit a PR
- [Join the discussion](https://github.com/agenticempire/axint/discussions) to share ideas
