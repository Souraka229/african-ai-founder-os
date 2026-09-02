# Contributing to African AI Founder OS

Thanks for helping build the OS for African founders. **Most contributions are one small PR.**

## 3 ways to contribute in 1 PR

### 1. Add / update a payment provider for a country
1. Copy `data/payments/_template.yml` → `data/payments/<iso>.yml` (ISO 3166-1 alpha-2, lowercase, e.g. `bj`, `ng`, `ke`).
2. Fill every field. Add `source:` (a real URL) and `last_checked: YYYY-MM`.
3. Add or edit the row in [`05-africa/payments-by-country.md`](05-africa/payments-by-country.md).
4. Run `npm run lint:data` (or wait for CI) — it must pass.
5. Open a PR using the **"Add country resource"** template.

### 2. Add a grant / accelerator
1. Add an entry to `data/grants.yml` (follow the schema — `name`, `url`, `scope` or `country`, `amount`, `equity`, `deadline`, `source`, `last_checked`).
2. Reflect it in [`05-africa/grants-by-country.md`](05-africa/grants-by-country.md) or [`accelerators.md`](05-africa/accelerators.md).
3. **Dated source required.** No source = closed without merge.

### 3. Add a tool / translate a guide / fix something outdated
- Tools → `data/tools.yml` + the relevant file in `02-tools-stack/`.
- Translations → `path/to/file.<lang>.md` (e.g. `03-playbooks/01-validate-idea.en.md`). Keep structure identical.
- Outdated info → open an issue with the **"Report outdated"** template (or fix it directly).

## Process

```
fork → branch (feat/<country>-payments) → commit → PR → review (< 24h) → merge
```

- First review lands in **under 24 hours**. If it doesn't, @mention a maintainer.
- Reviews are meant to teach, not gatekeep. Ask questions freely.
- Merged? The All-Contributors bot adds you to the README automatically.

## Data rules (non-negotiable)

| Rule | Why |
|---|---|
| Every fact has a `source:` URL | The Africa layer is only valuable if it's trustworthy |
| Every entry has `last_checked: YYYY-MM` | So readers know how stale it might be |
| Amounts/fees as ranges with "indicative" | They change; don't imply false precision |
| Direct links only (no affiliate links, no trackers) | Neutrality |
| No marketing copy — plain, concise, comparative | This is a reference, not a brochure |

## Style

- One idea per bullet. Tables over paragraphs for comparisons.
- Prefer numbers and specifics ("~1.5% + local fixed fee") over adjectives ("cheap").
- FR or EN both welcome; pair translations when you can.
- No franglais where a plain word exists.

## Become a country maintainer

Contribute **3 accepted PRs on the same country** → you're offered `@country-maintainer:<iso>`:
a badge, a mention in the README, review rights on that country's files, and access to the
maintainers channel.

## Code of Conduct

By participating you agree to the [Code of Conduct](CODE_OF_CONDUCT.md). In short: be kind,
be useful, and **zero tolerance for spam, scams, or unsolicited "investor" / crypto DMs.**

## Questions

Open a [Discussion](https://github.com/OWNER/african-ai-founder-os/discussions) or ask in the community chat.
