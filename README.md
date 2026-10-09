# Docs website

Separate documentation site for Anmu (安幕). It does not read the chain, submit proofs, or connect a wallet.

Local default: http://127.0.0.1:5174

`VITE_APP_URL` is the launchpad origin this site links back to. Every `VITE_` value is public in the built site. Do not commit `.env`.

```bash
npm install
npm test
npm run dev
```
