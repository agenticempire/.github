import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const readme = await readFile(path.resolve(root, "profile/README.md"), "utf8");
const failures = [];

for (const required of [
  "https://github.com/agenticempire/axint",
  "https://docs.axint.ai",
  "https://cloud.axint.ai",
  "@axint/compiler",
  "axint prove",
]) {
  if (!readme.includes(required)) {
    failures.push(`profile/README.md is missing ${required}`);
  }
}

const hardcodedReleaseVersions = readme.match(/\bv?\d+\.\d+\.\d+\b/g) ?? [];
if (hardcodedReleaseVersions.length > 0) {
  failures.push(
    `profile/README.md hard-codes release versions: ${[
      ...new Set(hardcodedReleaseVersions),
    ].join(", ")}`,
  );
}

if (failures.length > 0) {
  console.error("Agentic Empire profile check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Agentic Empire profile is durable and release-independent");
