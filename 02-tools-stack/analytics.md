# Analytics & product tools

Full table in [`../MASTER-DOC.md`](../MASTER-DOC.md#25-analytics--product-tools-top-15).

## Free stack (start here)

| Layer | Tool | Note |
|---|---|---|
| Heatmaps + session replay | **Microsoft Clarity** | Free, unlimited |
| Product analytics (events, funnels, retention, flags, A/B, surveys) | **PostHog** | Free < 1M events/mo; self-host option |
| Landing / web analytics (privacy) | **Plausible** ($9/mo) or **Umami** / **GoatCounter** (free self-host) | No cookies, GDPR-friendly |
| Campaign attribution | **Dub.co** | One short link per channel → see what drove signups/stars |

## When you have budget / a team

Mixpanel or Amplitude (mature funnels/cohorts), June (B2B account reports on Segment),
RudderStack (open-source CDP), Metabase (SQL dashboards on your DB), Statsig (experiments),
LogRocket (front-end replay + errors).

## Events to track from day 1 (example: ordering product)

`signup`, `activated` (first value action), `checkout_started`, `payment_succeeded`,
`payment_failed`, `subscription_created`, `week1_retained`. Define **activation** as a
single formula with a threshold before you launch.
