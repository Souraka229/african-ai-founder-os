# SaaS boilerplates compared

| Boilerplate | Stack | Price | Multi-tenant B2B | Payments wired | Open source | Best for |
|---|---|---|---|---|---|---|
| **MakerKit** | Next.js 16 / React 19 / Supabase / Drizzle / Better Auth | ~$299 one-time | ★★★★★ | Stripe, LS | No (Lite: yes) | B2B SaaS with orgs & roles |
| **Supastarter** | Next.js **+ Nuxt + SvelteKit**, DB-agnostic | ~$299 one-time | ★★★★★ | Stripe, LS, Polar | No | Framework/DB flexibility |
| **ShipFast** | Next.js / Mongo or Supabase / NextAuth | ~$199-299 one-time | ★★ | Stripe, LS | No | Solo micro-SaaS, ship in days |
| **SaaSRocket** | Next.js 14 / Supabase / Stripe + LS / Resend | ~$50 one-time | ★★★ | Stripe, LS | No | Cheapest paid option |
| **rk-kit** (`create-rk-kit`) | **TanStack Start** / Better Auth / PostgreSQL + Drizzle + RLS multi-tenant / shadcn-style UI / Sentry + PostHog / Docker + Redis | **Free / open source** | ★★★★ | (add your own) | **Yes** | Type-safe monorepo, multi-tenant from day 1. **Built in Benin** by [Régis KIKI](https://github.com/) — an active local maintainer. `source: github lnkd.in/enaBEJS2, last_checked: 2026-09` |
| **Open SaaS (Wasp)** | React / Node / Prisma / Wasp | Free / MIT | ★★★ | Stripe, LS | Yes | Full open source, zero budget |
| **nextjs/saas-starter** | Next.js / Postgres / Drizzle / Stripe | Free / MIT | ★★ | Stripe | Yes | Minimal official Vercel base |
| **ixartz/SaaS-Boilerplate** | Next.js / Drizzle / Clerk / Stripe | Free / MIT | ★★★★ | Stripe | Yes | Good free multi-tenant base |
| **create-t3-app** | Next.js / tRPC / Prisma / NextAuth / Tailwind | Free | ★★ | — | Yes | End-to-end type safety, add SaaS parts yourself |

## Pick by scenario

| You are | Use |
|---|---|
| Zero budget + learning | `ixartz/SaaS-Boilerplate`, Open SaaS, or **rk-kit** |
| Ship a micro-SaaS this weekend | ShipFast or SaaSRocket |
| B2B with teams/roles (e.g. multi-location) | MakerKit, Supastarter, or **rk-kit** |
| Want full control of the DB | Supastarter (DB-agnostic) + Drizzle, or **rk-kit** (Postgres + RLS) |
| Prefer TanStack Start over Next.js | **rk-kit** |

> ⚠️ **Payments trap:** most boilerplates hardcode Stripe, which can't collect in many African
> countries. Add an abstraction layer and wire Paystack / Flutterwave / CinetPay instead — see
> [`payments-africa.md`](payments-africa.md) and [`../templates/payments-adapter.ts`](../templates/payments-adapter.ts).

Full discussion: [`../MASTER-DOC.md`](../MASTER-DOC.md#22-top-boilerplates-saas-nextjs--supabase-et-alternatives).
