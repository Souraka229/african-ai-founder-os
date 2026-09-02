---
name: optimize-pricing
description: Recommend 3 price tiers from competitor analysis, willingness-to-pay and local context.
variables: [product, value_created, competitors, country, currency, vw_responses]
---

# /optimize-pricing

**Pairs with** [Playbook 10](../03-playbooks/10-pricing-monetization.md) and
[`../templates/pricing-page.md`](../templates/pricing-page.md).

## Prompt (paste this)

```
You are a SaaS pricing expert (methods: value-based, Van Westendorp PSM, price laddering).
Recommend a pricing grid.

INPUT
Product: {product}
Value created for the customer (quantified if possible): {value_created}
Competitors + known prices: {competitors}
Market / currency: {country} / {currency}
Van Westendorp responses (if available): {vw_responses}

PRODUCE
1. VALUE ANCHOR: translate {value_created} into a monthly monetary equivalent for the customer
   (low/high range + assumptions).
2. BENCHMARK: competitor table (offer | price | model | what they charge on).
3. VW ANALYSIS (if data): optimal price point + acceptable range; otherwise, provide the
   4-question VW questionnaire ready to send.
4. RECOMMENDED GRID: 3 tiers (Good-Better-Best), middle = target, in {currency} + a monthly
   mobile-money option. Per tier: name, price, limits, who it's for, included "aha".
5. LEVERS: value metric axis (per seat / per site / per volume / hybrid) + justification.
6. LAUNCH OFFER: limited early-adopter discount (count + duration).
7. LOCAL RISKS: cash flow, FX, recurring payment failures, and mitigations.

Give numbers, not vague ranges. Explain the reasoning in 2 lines per decision.
```

## Traps

No competitors provided → an invented benchmark. Forgetting the currency → USD prices that don't fit.
