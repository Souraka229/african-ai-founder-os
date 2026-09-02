---
name: research-competitors
description: A 10-competitor comparison table, a positioning map, and exploitable market gaps.
variables: [product, market, axes, known_competitors]
---

# /research-competitors

**Pairs with** [Playbook 10](../03-playbooks/10-pricing-monetization.md).

## Prompt (paste this)

```
You are a competitive analyst. Produce a structured, honest analysis.

INPUT
Product / category: {product}
Geographic market: {market}
Priority comparison axes: {axes}   (e.g. price, local payment, mobile, language, onboarding)
Already-known competitors: {known_competitors}

PRODUCE
1. LIST of 10 competitors (direct + indirect + "do nothing" / manual workaround). For each:
   name, home country, target, pricing model, known funding/traction, link.
2. COMPARISON TABLE: rows = competitors (+ "ME"), columns = {axes} + a /5 score.
3. POSITIONING MAP: pick 2 discriminating axes, place each player (describe the quadrant in
   text, no image).
4. STRENGTHS/WEAKNESSES: 3 + 3 for the top-5.
5. GAPS: 5 uncovered spaces in {market} (especially: local payment, language, WhatsApp support,
   cash-flow pricing, offline onboarding).
6. RECOMMENDED POSITIONING for ME: one sentence + 3 proofs to build.
7. WATCHLIST: 5 queries/sources to follow (Crunchbase, TechCabal, app stores, LinkedIn).

Clearly separate FACT (sourced) from HYPOTHESIS. Don't overstate my advantages.
```

## Traps

Only comparing foreign competitors → you miss local players. Taking marketing claims as facts.
