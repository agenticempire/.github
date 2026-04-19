import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const truth = JSON.parse(await readFile(path.resolve(root, "public-truth.json"), "utf8"));
const readme = await readFile(path.resolve(root, "profile/README.md"), "utf8");
const expected = truth.axint.githubProfileProofLine;

if (!readme.includes(expected)) {
  console.error("agenticempire-dotgithub truth check failed:");
  console.error(`- profile/README.md is missing "${expected}"`);
  process.exit(1);
}

console.log("agenticempire-dotgithub truth check passed");
