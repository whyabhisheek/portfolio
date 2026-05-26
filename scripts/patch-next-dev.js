/**
 * Next.js 14.2.x does a network fetch during dev startup to check the latest
 * Next version (hot-reloader getVersionInfo). In some environments this fails
 * with EACCES (blocked outbound connections), which prevents the dev bundler
 * from starting and causes `/_next/static/chunks/*.js` to 404.
 *
 * This script patches Next's dev runtime to skip the version-check fetch when
 * NEXT_DISABLE_VERSION_CHECK=1 is set. It is safe to run multiple times.
 */

const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(
  process.cwd(),
  "node_modules",
  "next",
  "dist",
  "server",
  "dev",
  "hot-reloader-webpack.js"
);

function fail(msg) {
  console.error(`[patch-next-dev] ${msg}`);
  process.exitCode = 1;
}

if (!fs.existsSync(filePath)) {
  fail(`File not found: ${filePath}`);
  process.exit(1);
}

const src = fs.readFileSync(filePath, "utf8");

const alreadyPatched = src.includes("NEXT_DISABLE_VERSION_CHECK");
if (alreadyPatched) {
  process.exit(0);
}

const needle =
  "this.versionInfo = await this.tracedGetVersionInfo(startSpan, isTestMode || this.telemetry.isEnabled);";

if (!src.includes(needle)) {
  fail(
    "Unexpected Next.js file contents (pattern not found). Next may have changed; skipping patch."
  );
  process.exit(1);
}

const replacement =
  "this.versionInfo = await this.tracedGetVersionInfo(startSpan, !process.env.NEXT_DISABLE_VERSION_CHECK && (isTestMode || this.telemetry.isEnabled));";

const out = src.replace(needle, replacement);
fs.writeFileSync(filePath, out, "utf8");

console.log("[patch-next-dev] Patched Next dev runtime (version check disabled when NEXT_DISABLE_VERSION_CHECK=1).");

