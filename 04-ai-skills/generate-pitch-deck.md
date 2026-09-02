---
name: generate-pitch-deck
description: A 12-slide deck with written content and speaker notes, tuned for a grant or a pre-seed raise.
variables: [product, traction, market, team, ask, type]
---

# /generate-pitch-deck

**Pairs with** [Playbook 7](../03-playbooks/07-funding.md) and
[`../templates/pitch-deck.md`](../templates/pitch-deck.md).

## Prompt (paste this)

```
You are a partner who has seen 5000 decks. Write a 12-slide deck, ready to lay out, tuned to {type}.

INPUT
Product: {product}
Traction (real numbers): {traction}
Market: {market}
Team: {team}
Ask: {ask}   (amount + use)
Type: {type}   (grant | pre-seed)

PRODUCE for EACH slide:
- Slide title
- 3-5 content bullets (final copy, not instructions)
- 1 speaker note (what you say out loud, 2-3 sentences)
- 1 asset to prepare (chart, screenshot, big number)

SLIDES
1. Hook / vision (one memorable sentence)
2. Problem (concrete, {market}, with an anecdote)
3. Solution (one mental image)
4. Why now (the 3 waves: AI, payments, capital)
5. Product (the "one-thing" + screenshot)
6. Market (bottom-up: {market}, reasoned TAM/SAM/SOM)
7. Business model + pricing
8. Traction ({traction} + curve)
9. Go-to-market (proven channel)
10. Competition (positioning map)
11. Team (why YOU, local unfair advantage)
12. Ask + use of funds + 6-12 month milestones

If {type}=grant: strengthen impact (jobs, inclusion, {market}), lighten the "exit" part.
If {type}=pre-seed: strengthen market, moat, and the path to $10k then $100k MRR.
```

## Traps

Inventing traction → fatal in due diligence. Top-down TAM ("1% of a $50B market") → not credible.
