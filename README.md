<!-- Banner: replace assets/banner.png with a real image before launch -->
<p align="center">
  <img src="assets/banner.png" alt="African AI Founder OS" width="720">
</p>

<h1 align="center">African AI Founder OS</h1>

<p align="center">
  <strong>The open-source operating system for African founders who ship with AI — from idea to $10k MRR.</strong>
</p>

<p align="center">
  <a href="#-start-here">Start here</a> ·
  <a href="MASTER-DOC.md">Master doc</a> ·
  <a href="03-playbooks/">Playbooks</a> ·
  <a href="04-ai-skills/">AI skills</a> ·
  <a href="05-africa/">Africa layer</a> ·
  <a href="CONTRIBUTING.md">Contribute</a>
</p>

<p align="center">
  <img alt="Stars" src="https://img.shields.io/github/stars/OWNER/african-ai-founder-os?style=flat">
  <img alt="Forks" src="https://img.shields.io/github/forks/OWNER/african-ai-founder-os?style=flat">
  <img alt="Contributors" src="https://img.shields.io/github/contributors/OWNER/african-ai-founder-os">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/OWNER/african-ai-founder-os">
  <img alt="Code: MIT" src="https://img.shields.io/badge/code-MIT-green">
  <img alt="Content: CC BY 4.0" src="https://img.shields.io/badge/content-CC--BY--4.0-blue">
  <img alt="Built in Cotonou" src="https://img.shields.io/badge/built%20in-Cotonou%20%F0%9F%87%A7%F0%9F%87%AF-black">
</p>

<!-- Demo: replace assets/demo.gif with a 15s screen recording of /validate-idea running in Claude Code -->
<p align="center">
  <img src="assets/demo.gif" alt="Running /validate-idea in Claude Code" width="720">
</p>

---

## Why this exists

Every week, building [RESTAFY](https://restafy.com) from Cotonou, I hit the same wall:
**which tool, which grant, which payment provider actually works _here_?**

The generic startup advice assumes Stripe, a US LLC, and a VC on speed dial. This repo is
the version that assumes mobile money, XOF, a Tony Elumelu deadline, and an AI coding
agent doing 80% of the build.

It's opinionated and Africa-first — but the playbooks and skills work anywhere.

## 🧭 Start here

Pick your starting point. Each path is ~15 minutes to a first result.

| You are here | Do this |
|---|---|
| **💡 I have an idea** | [`03-playbooks/01-validate-idea.md`](03-playbooks/01-validate-idea.md) + copy [`04-ai-skills/validate-idea.md`](04-ai-skills/validate-idea.md) into Claude Code |
| **🛠️ I have an MVP** | [`03-playbooks/03-gtm-0-to-1000.md`](03-playbooks/03-gtm-0-to-1000.md) + [`02-tools-stack/`](02-tools-stack/) + skill [`create-gtm`](04-ai-skills/create-gtm.md) |
| **💰 I need funding** | [`05-africa/grants-by-country.md`](05-africa/grants-by-country.md) + [`05-africa/accelerators.md`](05-africa/accelerators.md) + skill [`generate-pitch-deck`](04-ai-skills/generate-pitch-deck.md) |
| **🚀 I'm launching** | [`06-launch-virality/launch-plan.md`](06-launch-virality/launch-plan.md) + [`templates/launch-checklist.md`](templates/launch-checklist.md) |

New here? Read [`00-start-here/README.md`](00-start-here/README.md).

## What's inside

| | |
|---|---|
| **10 playbooks** | Idea → 10 interviews → MVP in 7 days → GTM → 1000 users → funding → $10k MRR |
| **10 Claude Code skills** | `/validate-idea`, `/generate-prd`, `/build-mvp`, `/create-gtm`, `/write-cold-outreach`, `/optimize-pricing`, `/create-viral-hook`, `/research-competitors`, `/generate-pitch-deck`, `/plan-content-30-days` |
| **50+ vetted tools** | AI, SaaS boilerplates, analytics, deploy, GTM — sorted top-tier / solid / emerging |
| **Africa layer** | Mobile-money providers for 20 countries, 30+ non-dilutive grants with deadlines, accelerators, distribution channels, regulation checklists |
| **Templates** | PRD, one-pager, pitch deck, pricing page, cold DM (WhatsApp/email), interview guide, payment adapter |

Everything is condensed in one file: **[`MASTER-DOC.md`](MASTER-DOC.md)** (~26k words).

## Use it

```bash
# Option A: use as a template
# → click "Use this template" above

# Option B: clone and copy the AI skills into your own project
git clone https://github.com/OWNER/african-ai-founder-os
cd african-ai-founder-os
./install.sh /path/to/your/project   # copies .claude/skills/* into your repo
```

Then, in Claude Code:

```
/validate-idea
> idea: an app that takes restaurant orders on WhatsApp automatically
> segment: restaurants with 1-3 locations
> country: Benin
```

## Contribute in 1 PR

The Africa layer only stays useful if founders keep it current.

- **Add your country's payment provider** → edit `data/payments/<iso>.yml` + `05-africa/payments-by-country.md`
- **Add a fresh grant / accelerator** (with a dated source) → `data/grants.yml`
- **Translate a playbook** (FR ↔ EN, or PT/AR)
- **Report something outdated** → open an issue with the `report-outdated` template

See [`CONTRIBUTING.md`](CONTRIBUTING.md). We have [good first issues](https://github.com/OWNER/african-ai-founder-os/labels/good%20first%20issue) and first review lands in < 24h.

Contribute 3× on one country and you become its **maintainer** (badge + listed below).

## Star history

<a href="https://star-history.com/#OWNER/african-ai-founder-os&Date">
  <img src="https://api.star-history.com/svg?repos=OWNER/african-ai-founder-os&type=Date" alt="Star history" width="600">
</a>

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore-start -->
_Add yourself with a PR — the bot lists everyone here._
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

**Code & templates** (`templates/`, `install.sh`, `data/`): [MIT](LICENSE).
**Written guides** (playbooks, parts, Africa layer): [CC BY 4.0](LICENSE-CONTENT) — reuse freely, just credit and link back.

---

<p align="center"><sub>Built in the open from Cotonou 🇧🇯 · Started by <a href="https://github.com/OWNER">Souraka HAMIDA</a> · Join the <a href="#">community</a></sub></p>
