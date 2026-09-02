# Deployment / DevOps

Full table + rationale in [`../MASTER-DOC.md`](../MASTER-DOC.md#26-deployment--devops-top-12).

| Tool | Model | ~Price | Choose when |
|---|---|---|---|
| **Vercel** | Front PaaS (Next.js native) | free → $20/mo | Next.js front, PR previews |
| **Cloudflare Pages + Workers** | Edge | generous free | Global edge, KV/R2/D1, **no egress fees** |
| **Railway** | Full PaaS (app + DB + cron) | usage (~$5/mo min) | Backend + DB, great DX |
| **Render** | Full PaaS | free (limited) → paid | Broad managed feature set |
| **Fly.io** | Multi-region containers | usage | Geo latency matters |
| **Coolify** | **Self-hosted** PaaS (OSS, 44k+ ⭐) | VPS cost (~$5-10/mo Hetzner) | Full control, flat cost, 20+ apps on one box |
| **Supabase** | BaaS (DB/auth/storage/fn) | free → $25/mo | Default backend |
| **Neon / Turso** | Serverless Postgres / SQLite | generous free | Decoupled DB, DB branching |

**CI/CD:** GitHub Actions (free for public repos). **Secrets:** Doppler / Infisical (OSS).
**Uptime:** BetterStack / OpenStatus (OSS).

**Africa (latency + cost):** front on Cloudflare Pages/Vercel (edge), backend on Supabase
(nearby region) or Hetzner + Coolify to control forex cost. Use Cloudflare R2 over S3 for
media to avoid egress fees.
