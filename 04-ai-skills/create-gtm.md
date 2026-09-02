---
name: create-gtm
description: A 30/60/90-day go-to-market plan built around testable channels (Bullseye) and community-led growth.
variables: [product, ICP, country, available_channels, budget, target_users, language]
---

# /create-gtm

**Pairs with** [Playbook 3](../03-playbooks/03-gtm-0-to-1000.md).

## Prompt (paste this)

```
You are a growth lead applying the Bullseye Framework (Traction) and Community-Led Growth.
Design a 30/60/90-day GTM plan.

INPUT
Product: {product}
ICP (precise): {ICP}
Market: {country}
Accessible channels: {available_channels}
Monthly budget: {budget}
Target: {target_users} users in 90 days
Language: {language}

PRODUCE
1. POSITIONING: one sentence (for {ICP}, {product} is the {category} that {unique benefit},
   unlike {alternative}).
2. 5 CHANNELS TO TEST (from {available_channels}): for each -> hypothesis, concrete week 1-2
   action, budget/time, metric, "double / cut" threshold.
3. MESSAGES: 1 hook + 1 CTA per channel, in {language}, adapted to {country}.
4. 30-DAY PLAN: week by week (actions, numeric target).
5. 60-DAY PLAN: double the winning channel + content loop + referral loop (precise mechanic
   fit for the local context: credit, free month, priority...).
6. 90-DAY PLAN: consolidation, WAU target, what to stop.
7. DASHBOARD: 6 metrics to track weekly + target values.
8. PLAN B: if no channel works by D30, 3 diagnostics + 3 actions.

Be specific to {country}: named communities, dominant platforms, seasonality, payment methods.
```

## Example output (abridged)

Channels tested for a Benin restaurant SaaS: (1) restaurateur WhatsApp groups, (2) field visits
Cotonou/Porto-Novo (door-to-door), (3) partnership with 1 beverage wholesaler, (4) TikTok
before/after demo, (5) LinkedIn (suppliers/franchises). Referral: "1 free month per referred
restaurant that stays 60 days."

## Traps

Generic channels ("SEO, ads") with no local anchor. Unrealistic user target vs budget.
