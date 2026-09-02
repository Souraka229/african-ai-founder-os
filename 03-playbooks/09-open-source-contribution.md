# Playbook 9 — Open-source contribution (25 contributors on your repo)

This is the playbook for growing `african-ai-founder-os` itself — reuse it for any repo.

**Objective:** 25 contributors with a merged PR in 8-12 weeks, of which 5 recurring.

**Prerequisites:** clear `CONTRIBUTING.md`, issue/PR templates, 15-20 ready `good first issue`s,
green CI, All-Contributors bot.

## Steps

1. **Before launch — Prepare 20 `good first issue`s:** "Add provider X for country Y (fill
   `data/payments/xx.yml`)", "Translate playbook 2 to English", "Add a recent grant with source".
   Each: context + files touched + definition of done.
2. **At launch — Explicit CTA** in the README and the thread: "Add your country in 1 PR".
3. **Every PR:** reply < 24h, warm tone, a review that *teaches*, fast merge, README credit (bot),
   thank-you tweet.
4. **Week 2+ — "Country maintainer" program:** contribute 3× on one country → become its
   maintainer (badge, mention).
5. **Monthly — Contributor spotlight** in the newsletter + a themed "call for contributions"
   ("this month: East Africa").

## Template — `good first issue`

```
### Add [resource] for [country]
Context: we're missing [X] for [country].
File to edit: `05-africa/payments-by-country.md` (+ `data/payments/[iso].yml`)
Definition of done:
- [ ] Entry added with: name, methods, indicative fees, recurring y/n, docs link
- [ ] Dated source (link) in a comment
- [ ] `npm run lint:data` passes
Difficulty: ⭐ (30 min) · Mentor: @maintainer
```

## Success metrics

≥ 25 contributors · median first-review time < 24h · ≥ 15 GFIs open at all times · ≥ 5 country maintainers.

## Traps

Vague issues · ignored PRs · dry/critical reviews · no public recognition · a heavy CLA.
