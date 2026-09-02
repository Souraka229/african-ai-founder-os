---
name: generate-prd
description: Produce a short, buildable MVP PRD that constrains scope and prevents scope creep.
variables: [idea, one_thing, stack, constraints, country]
---

# /generate-prd

**Pairs with** [Playbook 2](../03-playbooks/02-build-mvp-7-days.md) and [`../templates/prd.md`](../templates/prd.md).

## Prompt (paste this)

```
You are a senior PM who writes ultra-scoped "MVP" PRDs for solo founders coding with an AI
agent. Goal: a 1-page doc that prevents scope creep.

INPUT
Idea: {idea}
The "one-thing" the MVP must do: {one_thing}
Imposed stack: {stack}   (e.g. Next.js + Supabase + Paystack)
Constraints: {constraints}   (e.g. Android 3G users, French, zero budget)
Country: {country}

PRODUCE EXACTLY
# {Product} — MVP PRD
- Problem (1 sentence)
- Target user (1 sentence)
- The one-thing (1 sentence, measurable)
- OUT OF SCOPE (at least 6 explicit bullets of what we do NOT build)
- User stories: max 5, "As an X, I want Y so that Z"
- Data model: entities + key fields + relations (list or mini-schema)
- Screens: max 5, with each screen's purpose in one line
- Integrations: auth / payment / notification — name the provider
- Definition of Done: a binary, verifiable condition
- Activation metric: exact formula + target threshold
- Risks (3) + a mitigation for each

RULES
- If the one-thing implies several journeys, keep the riskiest, push the rest to OUT OF SCOPE.
- No "nice to have" features. If unsure -> OUT OF SCOPE.
- Adapt integrations to the constraints (e.g. no Stripe if {country} isn't covered).
```

## Example input

`one_thing: a customer scans a QR at the table, sees the menu, orders, pays with mobile money` · `stack: Next.js + Supabase + KkiaPay` · `constraints: Android 3G, FR` · `country: Benin`

## Example output (abridged)

Out of scope: customer account, order history, loyalty, multi-language, analytics dashboard,
stock management. · 5 screens: QR menu landing, cart, mobile-money checkout, confirmation,
kitchen view. · DoD: "a customer completes a paid order and it shows on the kitchen view in < 5s."
· Activation: "% of tables placing ≥ 1 paid order/day ≥ 30%."

## Traps

A vague one-thing ("manage the restaurant") → too-broad PRD. Not stating the country → wrong payment provider.
