/** Required create-flow sentences from docs/privacy-model.md. */
export const PRIVACY_SENTENCES = [
  "Private inputs are used to generate a zero-knowledge proof.",
  "The witness is not sent to the server.",
  "The blockchain transaction is public.",
  "Proof verification does not make the surrounding transactions anonymous.",
] as const;

export const ISSUER_SENTENCE =
  "The issuer is trusted to review eligibility and may keep its own record of who requested a credential. The issuer is not a custodian and cannot withdraw funds. Protection from the issuer is outside this protocol.";

export const FUNDING_SENTENCE =
  "Anmu is a funding protocol. It does not promise a return.";

export const PUBLIC_PAYMENT_SENTENCE =
  "Donations and claim payments are public. A claim shows the account that received the BNB. The campaign record does not store that account in advance.";

export const appUrl = publicHttp(import.meta.env.VITE_APP_URL as string | undefined, "https://app.anmu.pro");

export const telegramUrl = publicHttp(import.meta.env.VITE_TELEGRAM_URL as string | undefined, "https://t.me/anmuprotocol");

export const xUrl = publicHttp(import.meta.env.VITE_X_URL as string | undefined, "https://x.com/anmuprotocol");

function publicHttp(value: string | undefined, fallback: string): string {
  const candidate = value?.trim() || fallback;
  try {
    const url = new URL(candidate);
    if ((url.protocol !== "https:" && url.protocol !== "http:") || url.username || url.password) return fallback;
    return candidate;
  } catch {
    return fallback;
  }
}
