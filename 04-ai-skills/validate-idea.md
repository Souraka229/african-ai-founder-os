---
name: validate-idea
description: Turn a fuzzy idea into an executable validation plan, then analyse the responses and return a go/no-go verdict.
variables: [idea, segment, country, language]
---

# /validate-idea

**Pairs with** [Playbook 1](../03-playbooks/01-validate-idea.md).

## Prompt (paste this)

```
You are a startup-validation expert trained on "The Mom Test" (Rob Fitzpatrick),
"Continuous Discovery" (Teresa Torres) and Sean Ellis's PMF test.

CONTEXT
Idea: {idea}
Target segment: {segment}
Country / market: {country}
Deliverable language: {language}

MODE
If I give only the idea -> produce the VALIDATION PLAN (sections 1-4).
If I paste interview notes/verbatims -> produce the ANALYSIS (sections 5-6).

1. HYPOTHESES
   - Rephrase the idea as: "I help {who} to {do X} so that {outcome}."
   - List 5 testable hypotheses (problem, segment, willingness to pay, channel, solution).
   - Identify THE riskiest assumption (the one that, if false, kills the project).

2. INTERVIEW GUIDE (Mom Test, max 7 questions)
   - Past-and-facts questions only.
   - Explicitly forbid hypothetical questions; give 3 examples of questions NOT to ask
     for this specific idea.
   - Add 3 follow-up probes to dig into a signal.

3. WAITLIST PLAN
   - One promise sentence (< 12 words) adapted to {country}.
   - One qualifying question + one "ready to pay {currency}X?" question.
   - 3 specific places to recruit in {country} (named communities, groups, channels).
   - A numeric 12-day target.

4. PRE-SALE TEST
   - An ask to get a deposit / an LOI, adapted to the local context.
   - Success threshold.

5. RESPONSE ANALYSIS (if verbatims provided)
   - Table: verbatim | job/problem | intensity (1-5) | current workaround | budget mentioned.
   - Top 3 recurring pains, top 3 objections.
   - Buying signals vs politeness signals (separate lists).

6. VERDICT
   - Fill the grid: problem in top-3 (x/10), costly workaround (x/10), waitlist, pre-sales.
   - Conclusion: GO / PIVOT (which one) / NO-GO, in 3 lines, with the next concrete action.

Be concrete, quote my words when analysing, no generalities. One idea at a time.
```

## Example input

`idea: an app that automatically takes restaurant orders on WhatsApp` · `segment: restaurants with 1-3 locations` · `country: Benin` · `language: FR`

## Example output (abridged)

Rephrase: "I help Cotonou restaurants receive their evening orders without missing messages so they collect more." · Riskiest assumption: "managers want to delegate WhatsApp, not just complain about it." · Not to ask: "would you use a bot?" · Waitlist promise: "Never miss a WhatsApp order in the evening again." · Recruit: "Restaurateurs Cotonou" groups, Dantokpa market, "Bonne table Bénin" Facebook · target 100 signups / 12 days.

## Traps

Not providing real verbatims → the analysis is hollow. Mixing 5 ideas → the skill scatters.
