<p align="center">
  <img src="https://github.com/agenticempire.png" height="100" alt="Agentic Empire" />
</p>

<h1 align="center">Agentic Empire</h1>

<p align="center">
  <strong>We build the systems agents build on.</strong><br/>
  Agent-authored software requires new infrastructure — compilers, registries, private compute, and execution environments. We build that stack.
</p>

---

### Thesis

Software is shifting from human-authored to agent-directed. The tools that built the last era weren't designed for this one. New primitives are required. We build them.

---

### What We Build

**Developer Infrastructure** — Compilers, package registries, and build tooling purpose-built for agent-authored software targeting Apple platforms and beyond.

**Private Compute** — Dedicated Apple Silicon build infrastructure for compiling, signing, and validating agent-generated native apps at scale.

**Products** — End-to-end toolchains that turn agent intent into production-ready software.

---

### Axint

The open-source compiler, registry, and cloud platform for Apple-native software authored by agents.

Axint turns agent-authored TypeScript definitions into validated Swift App Intents for Siri and MCP tools for Claude, Cursor, and Windsurf. One `defineIntent()` call, two agent surfaces, zero Swift required.

```bash
npm install -g @axintai/compiler
axint compile my-intent.ts --out ios/Intents/
```

**v0.3.3** — Full TypeScript AST parser, dual-surface compilation (App Intents + MCP), entity queries, dynamic options, Info.plist & entitlements emit, [browser playground](https://axint.ai/#playground).

---

### Live Now

| | |
|---|---|
| **[Axint Compiler](https://github.com/agenticempire/axint)** | Open-source TS → Swift compiler for App Intents + MCP tools |
| **[Package Registry](https://registry.axint.ai)** | Browse and publish intent packages |
| **[Playground](https://axint.ai/#playground)** | Full compiler running in your browser |

### Building Next

Cloud build infrastructure, execution environments, and observability for agent-authored software — backed by a private Apple Silicon build cluster.

---

<p align="center">
  <a href="https://agenticempire.co">agenticempire.co</a> · <a href="https://axint.ai">axint.ai</a> · <a href="https://registry.axint.ai">registry</a> · <a href="https://x.com/agenticempire">𝕏</a>
</p>
