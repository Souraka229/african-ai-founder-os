# Playbook 2 — Build the MVP with AI in 7 days

Pairs with skills [`/generate-prd`](../04-ai-skills/generate-prd.md) and
[`/build-mvp`](../04-ai-skills/build-mvp.md), and [`../templates/prd.md`](../templates/prd.md) +
[`../templates/payments-adapter.ts`](../templates/payments-adapter.ts).

**Objective:** a product **in production**, usable by a real user, that addresses *only* the
riskiest assumption validated in Playbook 1.

**Prerequisites:** Playbook 1 = Go. Claude Code installed. A boilerplate chosen
([`../02-tools-stack/saas-boilerplates.md`](../02-tools-stack/saas-boilerplates.md)). Supabase +
Vercel + payment provider accounts. The MVP's "one-thing" written in one sentence.

## 7-day sprint

| Day | Deliverable | Skill / tool |
|---|---|---|
| D1 | Short PRD + user stories + data schema + mockup (v0) | `/generate-prd`, v0.dev |
| D2 | Scaffolding: boilerplate cloned, auth OK, DB migrated, "hello world" deployed to prod | Claude Code + `/build-mvp` |
| D3 | Core journey (the "one-thing") end-to-end, no fine design | Claude Code |
| D4 | Payment integration (checkout + webhook + status) via the adapter | `payments-adapter.ts` |
| D5 | Notifications (Resend email / WhatsApp) + success page + minimal onboarding | Claude Code |
| D6 | Polish: mobile responsive, empty states, errors, analytics (PostHog), Sentry | Claude Code |
| D7 | Manual tests on 3 Africa-realistic devices (mid-range Android, 3G), fix, **ship to prod + onboard 1 real user** | — |

## Template — short PRD (1 page)

```
# [Product] — MVP PRD
Problem (1 sentence):
Target user (1 sentence):
The one-thing the MVP must do:
Out of scope (explicit): - ... - ...
User stories (max 5): - As a [X], I want [Y] so that [Z].
Data (entities + key fields):
Screens (max 5):
Integrations: auth=..., payment=..., email/WA=...
Definition of done: a user can [key action] and I receive [signal].
Activation metric: % of signups who do [key action] within 24h.
```

## Success metrics

Deployed to prod on D7 · 1 real user completed the core journey · time-to-value < 10 min ·
the activation event is visible in PostHog.

## Traps

Scope creep ("just one small thing") · polishing design before value exists · ignoring
mobile/3G performance · wiring Stripe when you need Paystack · no analytics before D6 (flying blind).
