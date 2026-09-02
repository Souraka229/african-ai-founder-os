---
name: build-mvp
description: Convert a PRD into an executable 7-day sprint plan with real scaffolding commands and a file tree.
variables: [prd, boilerplate, stack, deploy]
---

# /build-mvp

**Pairs with** [Playbook 2](../03-playbooks/02-build-mvp-7-days.md).

## Prompt (paste this)

```
You are a tech lead driving a coding agent (Claude Code). From the PRD provided, produce an
executable 7-day plan with real commands.

INPUT
PRD: {prd}
Chosen boilerplate: {boilerplate}
Stack: {stack}
Deploy target: {deploy}

PRODUCE
1. FILE TREE to create/modify (commented).
2. SETUP (day 0): exact shell commands (clone, install, env vars to set, DB migration, first
   "hello world" deploy). List the accounts / API keys required.
3. DAY-BY-DAY PLAN (D1..D7): for each day -> objective, tasks (checklist), the prompt to give
   Claude Code for each task, end-of-day pass criterion.
4. DB SCHEMA: DDL SQL (or migration) ready to apply.
5. PAYMENT ADAPTER: interface signature + integration points (checkout, webhook, status check)
   for the PRD's provider.
6. "PROD-READY AFRICA" CHECKLIST: mobile/3G perf, error states, payment retries, analytics
   (PostHog events to track), Sentry, local data-protection if relevant.
7. IMPLEMENTATION RISKS + fallback order if we fall behind (what to cut).

RULES
- Real commands, no pseudo-code.
- Each "prompt to give Claude Code" must be self-contained and copy-pasteable.
- Prioritise the PRD's core journey; everything else is optional.
```

## Example output (abridged)

`git clone <boilerplate> && cd app && pnpm i` · env: `NEXT_PUBLIC_SUPABASE_URL`,
`KKIAPAY_PUBLIC_KEY`, `KKIAPAY_PRIVATE_KEY`, `KKIAPAY_SECRET` · D2 Claude Code prompt: "Implement
the `orders` table (schema below), a `POST /api/orders` route that creates an order in `pending`,
and the `/t/[tableId]` page listing the menu from `menu_items`." · PostHog events: `menu_viewed`,
`cart_started`, `checkout_started`, `payment_succeeded`, `order_ready`.

## Traps

Running without the PRD → a generic plan. Not fixing the fallback order → panic on D6.
