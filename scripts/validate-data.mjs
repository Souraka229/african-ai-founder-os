#!/usr/bin/env node
/**
 * Validates data/*.yml against data/schema/*.schema.json.
 * Run: npm run lint:data
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import { parse as parseYaml } from "yaml";

const root = process.cwd();
const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

const load = (p) => JSON.parse(readFileSync(join(root, p), "utf8"));
const paymentSchema = ajv.compile(load("data/schema/payment.schema.json"));
const grantsSchema = ajv.compile(load("data/schema/grants.schema.json"));
const toolsSchema = ajv.compile(load("data/schema/tools.schema.json"));

let errors = 0;
const fail = (file, errs) => {
  errors++;
  console.error(`\n✗ ${file}`);
  for (const e of errs ?? []) console.error(`  ${e.instancePath || "/"} ${e.message}`);
};
const ok = (file) => console.log(`✓ ${file}`);

// payments
const payDir = join(root, "data/payments");
for (const f of readdirSync(payDir).filter((f) => f.endsWith(".yml") && !f.startsWith("_"))) {
  const rel = `data/payments/${f}`;
  const data = parseYaml(readFileSync(join(payDir, f), "utf8"));
  if (paymentSchema(data)) {
    if (f.replace(".yml", "") !== data.country) fail(rel, [{ message: `filename must match country code "${data.country}"` }]);
    else ok(rel);
  } else fail(rel, paymentSchema.errors);
}

// grants
if (existsSync(join(root, "data/grants.yml"))) {
  const data = parseYaml(readFileSync(join(root, "data/grants.yml"), "utf8"));
  grantsSchema(data) ? ok("data/grants.yml") : fail("data/grants.yml", grantsSchema.errors);
}

// tools
if (existsSync(join(root, "data/tools.yml"))) {
  const data = parseYaml(readFileSync(join(root, "data/tools.yml"), "utf8"));
  toolsSchema(data) ? ok("data/tools.yml") : fail("data/tools.yml", toolsSchema.errors);
}

if (errors) {
  console.error(`\n${errors} file(s) failed validation.`);
  process.exit(1);
}
console.log("\nAll data files valid.");
