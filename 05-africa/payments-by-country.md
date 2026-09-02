# Payments by country

Provider details & fees: [`../02-tools-stack/payments-africa.md`](../02-tools-stack/payments-africa.md).
Structured source of truth: `data/payments/<iso>.yml`.

| Country | Dominant mobile money | Recommended providers / APIs | Currency |
|---|---|---|---|
| **Benin** | MTN MoMo, Moov Money, Celtiis Cash | **KkiaPay**, FedaPay, CinetPay, PayDunya | XOF |
| Côte d'Ivoire | Orange, MTN, Moov, Wave | CinetPay, PayDunya, Wave API, Hub2 | XOF |
| Senegal | Orange Money, Free Money, Wave | Wave, PayDunya, CinetPay, InTouch | XOF |
| Togo | T-Money, Flooz (Moov) | CinetPay, PayGate, Semoa | XOF |
| Burkina Faso | Orange, Moov | CinetPay, Ligdicash | XOF |
| Mali | Orange Money, Moov | CinetPay, SamaMoney | XOF |
| Cameroon | MTN MoMo, Orange Money | CinetPay, Notch Pay, Flutterwave | XAF |
| **Nigeria** | bank transfer > MoMo; OPay, PalmPay, Moniepoint | **Paystack**, Flutterwave, Monnify, Kora, Squad | NGN |
| Ghana | MTN MoMo, Telecel, AirtelTigo | Paystack, Flutterwave, Hubtel, ExpressPay | GHS |
| Kenya | **M-Pesa** (dominant), Airtel | M-Pesa Daraja API, Flutterwave, Paystack, Pesapal, IntaSend | KES |
| Uganda | MTN MoMo, Airtel Money | Flutterwave, Pesapal, DusuPay | UGX |
| Tanzania | M-Pesa, Tigo Pesa, Airtel | Flutterwave, Pesapal, Selcom, ClickPesa | TZS |
| Rwanda | MTN MoMo, Airtel | Flutterwave, Paypack, Kpay, IremboPay | RWF |
| South Africa | cards + instant EFT > MoMo | Yoco, Peach, Ozow, Stitch, PayFast, Paystack | ZAR |
| Egypt | Vodafone Cash, Fawry | Paymob, Fawry, Kashier, Flutterwave | EGP |
| Morocco | cards, cash; inwi money, Orange | CMI, YouCan Pay, PayZone, Flutterwave | MAD |
| Ethiopia | Telebirr | Chapa, ArifPay, SantimPay | ETB |
| Zambia | MTN, Airtel, Zamtel | Flutterwave, Broadpay, Lenco, Pesapal | ZMW |
| DR Congo | Orange, Airtel, M-Pesa (Vodacom) | CinetPay, FlexPay, MaxiCash | CDF |
| Zimbabwe | EcoCash | Paynow, Pesepay | USD/ZWG |

**Implementation:** keep one "broad" provider (Flutterwave) + one "local optimum" per priority
market. Always handle webhook idempotency, daily reconciliation, MoMo retries, long `pending` states.

> Missing your country? Add `data/payments/<iso>.yml` (copy `data/payments/_template.yml`) and a
> row here. Dated source required.
