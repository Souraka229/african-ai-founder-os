# Part 2 — Tools & Stack

Pre-vetted, sorted **top tier / solid / emerging**. Prices are 2026 orders of magnitude —
re-check at purchase. Full tables and rationale in [`../MASTER-DOC.md`](../MASTER-DOC.md#part-2--tools--stack).

| File | What's in it |
|---|---|
| [`ai-tools.md`](ai-tools.md) | 50 AI tools for founders + how to buy model credits from Africa |
| [`saas-boilerplates.md`](saas-boilerplates.md) | Next.js / Supabase / TanStack starters compared (incl. a Benin-built one) |
| [`payments-africa.md`](payments-africa.md) | 20 payment providers + how to pick + adapter pattern |
| [`cloud-credits.md`](cloud-credits.md) | AWS / Google / Azure / others — 2026 amounts and how to unlock them without a VC |
| [`analytics.md`](analytics.md) | Product + web analytics, mostly free stack |
| [`devops-deployment.md`](devops-deployment.md) | Vercel / Railway / Fly / Coolify — pick by scenario |
| [`gtm-sales.md`](gtm-sales.md) | Clay / Apollo / Instantly / CRMs |
| [`whatsapp-comms.md`](whatsapp-comms.md) | WhatsApp Cloud API, Africa's Talking, Termii, Chatwoot |
| [`stacks-by-scenario.md`](stacks-by-scenario.md) | Bootstrap / accelerated / AI-first / funded — full stack per case |

## The 60-second answer

- **Build:** Claude Code + a boilerplate ([saas-boilerplates.md](saas-boilerplates.md)) + Supabase + v0 for UI.
- **Deploy:** Vercel or Cloudflare Pages (front) + Supabase or Hetzner+Coolify (back).
- **Pay:** abstract the provider, then Paystack (NG/GH/KE) or KkiaPay/CinetPay (Francophone) or Flutterwave (pan-Africa).
- **AI credits from Africa:** [RodiumAI](https://rodiumai.io) or OpenRouter (see [ai-tools.md](ai-tools.md)).
- **Measure:** Microsoft Clarity + PostHog free + a link tracker (Dub).
