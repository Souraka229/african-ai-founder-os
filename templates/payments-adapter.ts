/**
 * payments-adapter.ts
 * Decouple your product from any single payment provider.
 *
 * Why: most SaaS boilerplates hardcode Stripe, which cannot collect in many African
 * countries. Program against this interface, then swap Paystack / Flutterwave / CinetPay /
 * KkiaPay behind it per market.
 *
 * License: MIT. Copy into your project and adapt.
 */

export type Money = { amount: number; currency: string }; // amount in minor units (kobo, centimes)

export interface CheckoutInput {
  reference: string;                 // your idempotency key
  amount: Money;
  customer: { email?: string; phone?: string; name?: string };
  redirectUrl: string;
  metadata?: Record<string, unknown>;
  channel?: "card" | "mobile_money" | "bank_transfer" | "ussd" | "any";
}

export interface SubscriptionInput {
  planCode: string;
  customer: { email?: string; phone?: string };
  reference: string;
  metadata?: Record<string, unknown>;
}

export type PaymentStatus = "pending" | "succeeded" | "failed" | "abandoned" | "refunded";

export interface WebhookEvent {
  type: "payment.succeeded" | "payment.failed" | "subscription.created"
      | "subscription.charged" | "subscription.cancelled" | "refund.processed" | "unknown";
  reference: string;
  status: PaymentStatus;
  amount?: Money;
  raw: unknown;                      // provider payload, for logging/audit
}

export interface PaymentProvider {
  readonly name: string;
  readonly supportedCurrencies: string[];

  createCheckout(input: CheckoutInput): Promise<{ url: string; reference: string }>;

  /** Verify signature + parse. MUST be idempotent on `reference`. */
  verifyWebhook(rawBody: string, headers: Record<string, string>): Promise<WebhookEvent>;

  createSubscription(input: SubscriptionInput): Promise<{ id: string; status: PaymentStatus }>;

  getStatus(reference: string): Promise<PaymentStatus>;

  refund(reference: string, amount?: Money): Promise<{ status: PaymentStatus }>;
}

/* --------------------------------------------------------------------------
 * Example skeleton — Paystack (NG/GH/ZA/KE/CI). Fill in with the SDK/fetch.
 * ------------------------------------------------------------------------ */
export class PaystackProvider implements PaymentProvider {
  readonly name = "paystack";
  readonly supportedCurrencies = ["NGN", "GHS", "ZAR", "KES", "XOF", "USD"];
  constructor(private secretKey: string) {}

  async createCheckout(input: CheckoutInput) {
    // POST https://api.paystack.co/transaction/initialize
    // body: { email, amount, reference, currency, callback_url, channels }
    // return { url: data.authorization_url, reference: data.reference }
    throw new Error("implement");
  }
  async verifyWebhook(rawBody: string, headers: Record<string, string>) {
    // verify HMAC SHA512 of rawBody with secretKey against headers["x-paystack-signature"]
    // map event.event -> WebhookEvent.type; dedupe on reference before acting
    throw new Error("implement");
  }
  async createSubscription(input: SubscriptionInput) { throw new Error("implement"); }
  async getStatus(reference: string) {
    // GET https://api.paystack.co/transaction/verify/:reference
    throw new Error("implement");
  }
  async refund(reference: string, amount?: Money) {
    // POST https://api.paystack.co/refund
    throw new Error("implement");
  }
}

/* --------------------------------------------------------------------------
 * Example skeleton — CinetPay (Francophone / WAEMU / XOF-XAF).
 * ------------------------------------------------------------------------ */
export class CinetPayProvider implements PaymentProvider {
  readonly name = "cinetpay";
  readonly supportedCurrencies = ["XOF", "XAF", "CDF", "GNF", "USD"];
  constructor(private apiKey: string, private siteId: string) {}

  async createCheckout(input: CheckoutInput) {
    // POST https://api-checkout.cinetpay.com/v2/payment
    // body: { apikey, site_id, transaction_id, amount, currency, notify_url, return_url, channels }
    throw new Error("implement");
  }
  async verifyWebhook(rawBody: string, headers: Record<string, string>) {
    // CinetPay: re-check status via /v2/payment/check with transaction_id (don't trust the notify body alone)
    throw new Error("implement");
  }
  async createSubscription(input: SubscriptionInput) { throw new Error("implement"); }
  async getStatus(reference: string) { throw new Error("implement"); }
  async refund(reference: string, amount?: Money) { throw new Error("implement"); }
}

/* --------------------------------------------------------------------------
 * Pick a provider per country.
 * ------------------------------------------------------------------------ */
export function getProvider(country: string): PaymentProvider {
  const francophoneWAEMU = ["BJ", "CI", "SN", "TG", "BF", "ML", "NE", "GW"];
  if (francophoneWAEMU.includes(country)) {
    return new CinetPayProvider(process.env.CINETPAY_API_KEY!, process.env.CINETPAY_SITE_ID!);
  }
  return new PaystackProvider(process.env.PAYSTACK_SECRET_KEY!);
}

/* Reliability checklist (do NOT skip):
 * - Idempotency: dedupe webhooks on `reference` before mutating state.
 * - Reconciliation: a daily job comparing your orders vs provider settlements.
 * - Mobile-money retries: MoMo has many transient failures; retry + surface status to the user.
 * - Long "pending": MoMo can confirm minutes later; poll getStatus() as a fallback to webhooks.
 * - Never mark an order paid from the client redirect alone — only from a verified webhook/status.
 */
