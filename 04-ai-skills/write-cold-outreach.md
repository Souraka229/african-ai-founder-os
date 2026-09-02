---
name: write-cold-outreach
description: Ten short, problem-first cold outreach messages across WhatsApp, LinkedIn and email, ready to send.
variables: [product, ICP, trigger, outcome, language, channel, country]
---

# /write-cold-outreach

**Pairs with** [Playbook 5](../03-playbooks/05-cold-outreach.md) and
[`../templates/cold-dm-whatsapp.md`](../templates/cold-dm-whatsapp.md) +
[`../templates/cold-email.md`](../templates/cold-email.md).

## Prompt (paste this)

```
You are a B2B outbound expert (Josh Braun / Clay style). Write short, problem-centred cold
messages that never sound "salesy".

INPUT
Product: {product}
Target: {ICP}
Observable trigger: {trigger}   (e.g. WhatsApp queue, hiring, new opening)
Promised outcome: {outcome}
Language: {language}
Channel(s): {channel}   (WhatsApp / LinkedIn / email / all)
Country: {country}

PRODUCE
- WhatsApp: 3 variants (< 60 words), one offering a voice note.
- LinkedIn: connection note (< 300 chars) + 2 follow-up messages.
- Email: 3 full 3-touch sequences (subject + body), one "casual", one "numbers/proof", one
  "short question".
- For each message: the first personalisation line is a [HOOK] placeholder.
- A list of 8 observable personalisation [HOOKS] for {ICP} in {country}.
- Cadence rules (days, count/day, local hours) and 3 mistakes to avoid.

TONE: human, direct, respectful of time. No superlatives, no "hope this finds you well".
```

## Example output (abridged)

WhatsApp v1: "Hi [First name], I'm Souraka (building RESTAFY in Cotonou). I saw [HOOK: your
Friday-night order queue]. We help restaurants like yours stop missing orders. 15 min this week
to understand how you handle it today?" · Hooks: new opening, recent Google reviews, active
Insta page, hiring a server, running a promo.

## Traps

Non-observable hooks ("I imagine that...") → sounds fake. Sending all 3 touches in 24h.
