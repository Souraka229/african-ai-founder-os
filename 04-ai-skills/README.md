# Part 4 — AI Skills (executable prompts)

Ten prompts, ready to paste into **Claude Code** (or the Claude app / Manus / Cursor). Each file
is written so it doubles as a Claude Code **skill**: the front-matter + body *is* a valid
`SKILL.md`.

## Install into your own project

```bash
# from the repo root
./install.sh /path/to/your/project
# copies each 04-ai-skills/<name>.md to <project>/.claude/skills/<name>/SKILL.md
```

Or just open a file and paste its body into the chat.

## Variables convention

`{country}`, `{sector}`, `{ICP}`, `{idea}`, `{product}`, `{language}`, `{currency}`,
`{competitors}`, `{url}`. Replace them, or let the skill ask.

| Skill | Produces |
|---|---|
| [`validate-idea`](validate-idea.md) | Interview guide + waitlist plan + analysis grid + go/no-go verdict |
| [`generate-prd`](generate-prd.md) | Full short PRD (problem, users, scope, data, screens, DoD, metrics) |
| [`build-mvp`](build-mvp.md) | 7-day sprint plan + scaffolding commands + file tree |
| [`create-gtm`](create-gtm.md) | 30/60/90-day GTM plan with channels, messages, metrics |
| [`write-cold-outreach`](write-cold-outreach.md) | 10 cold DM/email variants (WhatsApp, LinkedIn, email) |
| [`optimize-pricing`](optimize-pricing.md) | Competitor analysis + Van Westendorp + 3 recommended tiers |
| [`create-viral-hook`](create-viral-hook.md) | 20 X/LinkedIn hooks + 2 full threads |
| [`research-competitors`](research-competitors.md) | 10-competitor comparison table + positioning + gaps |
| [`generate-pitch-deck`](generate-pitch-deck.md) | 12 slides, written content + speaker notes |
| [`plan-content-30-days`](plan-content-30-days.md) | 30-day editorial calendar (topics, formats, channels, CTA) |

Full examples of input/output are in each file and in
[`../MASTER-DOC.md`](../MASTER-DOC.md#part-4--ai-skills-prompts-exécutables).
