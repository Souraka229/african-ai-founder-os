# Payment providers — Africa (20)

Also see [`../05-africa/payments-by-country.md`](../05-africa/payments-by-country.md) for the by-country view,
and [`../templates/payments-adapter.ts`](../templates/payments-adapter.ts) for the abstraction pattern.

| Provider | Coverage | Methods | Indicative fees | Recurring | Payout currency | Docs |
|---|---|---|---|---|---|---|
| **Paystack** (Stripe) | NG, GH, ZA, KE, CI | Cards, transfer, USSD, mobile money, Apple/Google Pay | ~1.5% + local fixed (NG); ~2.9% intl | Yes | Local + select USD | paystack.com/docs |
| **Flutterwave** | 30+ countries | Cards, MoMo (M-Pesa, MTN, Airtel), transfer, USSD | ~1.4% local / ~3.8% intl (varies) | Yes (Payment Plans) | 30+ currencies | developer.flutterwave.com |
| **CinetPay** | ~12 Francophone (WAEMU/CEMAC): CI, SN, BJ, TG, BF, ML, CM, CD… | 64+ methods: Orange/MTN/Moov Money, Wave, cards | ~2-5% by channel/country | Yes | XOF/XAF | cinetpay.com |
| **PayDunya** | CI, SN, BJ, TG, BF, ML | WAEMU mobile money, cards, Wave | ~2-3.5% | Yes | XOF | paydunya.com |
| **Wave** | SN, CI, ML, BF, GM… | Very low / free P2P; business API | ~1% merchant | via API | XOF | wave.com |
| **KkiaPay** | BJ, CI, SN, TG | MTN/Moov Money, cards | ~1.5-2.5% | Yes | XOF | kkiapay.me |
| **FedaPay** | BJ, CI, SN, TG, NE | Mobile money, cards, transfer | ~1.5-3% | Yes | XOF | fedapay.com |
| **M-Pesa (Daraja API)** | KE (+ via partners) | STK Push, B2C, C2B | ~0-1.5% by tariff | custom | KES | developer.safaricom.co.ke |
| **MTN MoMo API** | 15+ MTN markets | Collections, disbursements | negotiated | custom | local | momodeveloper.mtn.com |
| **Airtel Money API** | 14 countries | Collections/payouts | negotiated | custom | local | developers.airtel.africa |
| **Yoco** | ZA | Cards (in-person + online) | ~2.6-2.95% | Yes | ZAR | yoco.com |
| **Peach Payments** | ZA, KE, MU | Cards, EFT, mobile | negotiated | Yes | ZAR/KES | peachpayments.com |
| **Ozow** | ZA | Instant EFT | ~1-1.5% | Yes (debit) | ZAR | ozow.com |
| **Stitch** | ZA (+ NG) | Pay-by-bank, cards, payouts | negotiated | Yes | ZAR | stitch.money |
| **Fincra** | NG, GH, KE, ZA + pan-Afr payouts | Transfer, cards, collections, FX | negotiated | Yes | multi | fincra.com |
| **Kora (KoraPay)** | NG, GH, KE + pan-Afr payouts | Cards, transfer, MoMo, disbursements | negotiated | Yes | multi | korahq.com |
| **Monnify (Moniepoint)** | NG | Dedicated accounts, cards, USSD | ~1% capped (NG) | Yes | NGN | monnify.com |
| **Chapa** | ET | Telebirr, CBE, cards | ~3.5% local | Yes | ETB | chapa.co |
| **Pesapal** | KE, UG, TZ, ZM, MW, ZW | Cards, M-Pesa, Airtel | ~3-3.5% | Yes | multi EA | pesapal.com |
| **Paymob** | EG (+ expansion) | Cards, wallets, Fawry | negotiated | Yes | EGP | paymob.com |

## How to pick

| Situation | Pick |
|---|---|
| NG/GH/KE/ZA, modern DX, clean recurring | **Paystack** |
| Multi-country anglophone + broad mobile money | **Flutterwave** |
| Francophone / Benin / WAEMU / XOF | **KkiaPay** or **FedaPay** (Benin-native DX), **CinetPay** (coverage), **Wave** (lowest fees) |
| Pan-African payouts (pay vendors/riders) | **Fincra** or **Kora** |
| One specific mobile-money market | Direct API (M-Pesa Daraja, MTN MoMo) — fewer fees |

## Non-negotiables when you integrate

- Webhook idempotency + signature verification.
- Daily reconciliation job.
- Retries on mobile-money failures (MoMo has many transient failures).
- Handle long `pending` states (MoMo can confirm minutes later).
- Never couple product code to one provider → use the `PaymentProvider` interface.
