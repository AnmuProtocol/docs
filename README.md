# Anmu documentation

Public specification of **Anmu** (安幕), the CauseLaunch protocol on BNB Smart Chain. The live site is [https://docs.anmu.pro](https://docs.anmu.pro).

This package is that site. It is a static Vite application in English and Chinese. A reviewer uses it to read the two launch products, the campaign record, the proofs, the claims, the curve, the relayer, and the deployed addresses. The launchpad at [https://app.anmu.pro](https://app.anmu.pro) is the client that reads the chain and submits transactions. This site links to it and does not replace it.

The site carries no RPC client, no wallet connector, and no proof builder. Nothing on it posts a witness.

## Pages

| Path | What it specifies |
| --- | --- |
| `/` | The protocol in one reading: funding, the two launches, and the four sentences below |
| `/getting-started` | How a launch is prepared, paid, and broadcast |
| `/architecture` | Components, submission, the trust boundary, and the live addresses |
| `/record` | The campaign struct, the lifecycle, and the values that freeze at registration |
| `/roles` | Issuer, creator, beneficiary, fee receiver, relayer, and the administrator roles |
| `/privacy` | What the record hides, what every transaction still publishes, and the issuer sentence |
| `/proofs` | Creator authorization and the private-claim statement |
| `/claims` | A payment that opens a commitment and names a public recipient |
| `/launches` | Campaign donations and the standard-token creation fee |
| `/trading` | The bonding curve, the BNB fee, and migration to PancakeSwap V2 |
| `/relayer` | The operations wallet that builds the launch proof and broadcasts creation |
| `/review` | What a reviewer can check on the record and on the payment |

English and Chinese share one key set. A new string is added in both `pageEn` and `pageZh` in `src/pages.copy.ts`. Chrome strings live in `src/i18n.tsx` under the same rule.

## Sentences the copy keeps

These four sentences are protocol text. They stay verbatim:

- Private inputs are used to generate a zero-knowledge proof.
- The witness is not sent to the server.
- The blockchain transaction is public.
- Proof verification does not make the surrounding transactions anonymous.

The word "anonymous" appears only inside that last sentence.

The issuer sentence and the funding sentence are also fixed:

- The issuer is trusted to review eligibility and may keep its own record of who requested a credential. The issuer is not a custodian and cannot withdraw funds. Protection from the issuer is outside this protocol.
- Anmu is a funding protocol. It does not promise a return.

## Deployment the Architecture page publishes

BNB Smart Chain mainnet, chain id 56. Broadcast on 20 October 2026, starting at block 128647492. Each address on `/architecture` links to BscScan. The same table is the deployment record in the protocol repository.

| Contract | Address |
| --- | --- |
| CreatorAuthHonkVerifier | `0x8b6e8F7B7cc46FEe428AA3BE5437fB4C5D2e0967` |
| CreatorVerifier | `0x4d8fa488a519bF293b00763C1f53b4181579135A` |
| ClaimHonkVerifier | `0xd107ab3DF4a7cE6a0D2403FCe0db39885C5947d0` |
| ClaimVerifier | `0x513de405D23d90bB79d45365738611048B276A49` |
| CampaignRegistry | `0x26Fa379809809bCef5C12b5eBa30b59eb1f0b75A` |
| PrivateFeeVault | `0xA1034F4776683e9546CE1c9E770673bD898cdcC2` |
| PancakeLiquidityModule | `0xc53550E133e3EE3Aed985ee738B5A31C7de9e853` |
| BnbTradeRouter | `0xD272996546Ba6e976C90E9643cDCC698b5BB5065` |
| CampaignFactory | `0xae6b42Da848144ceA61CE19eA838fcFf5D6Cfb32` |
| VaultDeployer | `0x3aC61Bea0c2c50A1ec20291E7439eAF0c505c37c` |
| TokenDeployer | `0xFD96c6c504bd82a996Bb871465F2814439B4C6A0` |

The relayer account is `0xc086a238AFb5bf1DE9D56d9b83213D3Abd94ab3C`. It is an account. It holds no protocol role. `/relayer` publishes the same address.

The eleven contracts are verified on Sourcify. CreatorAuthHonkVerifier and ClaimHonkVerifier are a match. The other nine are an exact match. BscScan's verified badge is not submitted. Each launch then deploys its own token and vault. Those two addresses are on that campaign's record.

The PancakeSwap V2 router is `0x10ED43C718714eb63d5aA57B78B54704E256024E`. The authorization root is `0x205dc578df7131fb3779050cc02073adb79457cd13660700db37a99720de4666`.

## The two launches, as this site states them

A campaign credits a donation entirely to the beneficiary. There is no creation fee. The trade fee is 1% of the BNB: 0.5% for the creator and 0.5% parked for the pool.

A standard token charges 0.005 BNB at creation. That amount is credited to `PrivateFeeVault`. Donations are rejected. The trade fee is 1% plus an optional creator tax of 0%, 1%, 2%, or 3%: the creator receives 0.7% plus the tax, and the platform receives 0.3%.

Both products mint one fixed-supply token to that launch's vault and open the same curve. The curve is `(tokenReserve) * (realQuote + 4 BNB) = totalSupply * 4 BNB`. A buy that brings the real reserve to 16 BNB migrates in that transaction. The spot market cap there is 100 BNB. Twenty percent of the supply remains for the PancakeSwap pool. Ninety-five percent of the LP token is burned. Five percent stays with the vault for a creator claim.

`Launched` means the curve is open. `Active` means the curve has migrated. Proof verification does not make the surrounding transactions anonymous.

## Configuration

Copy `.env.example` to `.env`. Every `VITE_` value is compiled into the public site. Do not commit `.env`.

| Variable | Meaning |
| --- | --- |
| `VITE_APP_URL` | Launchpad origin. The header links here. Default `https://app.anmu.pro` |
| `VITE_TELEGRAM_URL` | `https://t.me/anmuprotocol` |
| `VITE_X_URL` | `https://x.com/anmuprotocol` |

## Hosting

The app uses `BrowserRouter`. A host that serves only `index.html` at `/` will 404 `/privacy` and the other paths. `vercel.json` rewrites those paths to `index.html`. Existing files are served before the rewrite. The privacy link from the launchpad and the landing site is `https://docs.anmu.pro/privacy`, so that rewrite has to be on the deployed site.

## Local

```bash
npm install
npm test
npm run dev
```

The dev server listens on [http://127.0.0.1:5174](http://127.0.0.1:5174). `npm test` renders every route, requires the Anmu mark, rejects the phrase "zk-verified campaign", and checks that the privacy sentences are present and that "anonymous" does not appear outside them.
