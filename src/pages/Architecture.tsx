import { useI18n } from "../i18n.tsx";
import { DocPage } from "../layout.tsx";

export const RELAYER_ADDRESS = "0xc086a238AFb5bf1DE9D56d9b83213D3Abd94ab3C";

const DEPLOYED = [
  ["CreatorAuthHonkVerifier", "0x8b6e8F7B7cc46FEe428AA3BE5437fB4C5D2e0967"],
  ["CreatorVerifier", "0x4d8fa488a519bF293b00763C1f53b4181579135A"],
  ["ClaimHonkVerifier", "0xd107ab3DF4a7cE6a0D2403FCe0db39885C5947d0"],
  ["ClaimVerifier", "0x513de405D23d90bB79d45365738611048B276A49"],
  ["CampaignRegistry", "0x26Fa379809809bCef5C12b5eBa30b59eb1f0b75A"],
  ["PrivateFeeVault", "0xA1034F4776683e9546CE1c9E770673bD898cdcC2"],
  ["PancakeLiquidityModule", "0xc53550E133e3EE3Aed985ee738B5A31C7de9e853"],
  ["BnbTradeRouter", "0xD272996546Ba6e976C90E9643cDCC698b5BB5065"],
  ["CampaignFactory", "0xae6b42Da848144ceA61CE19eA838fcFf5D6Cfb32"],
  ["VaultDeployer", "0x3aC61Bea0c2c50A1ec20291E7439eAF0c505c37c"],
  ["TokenDeployer", "0xFD96c6c504bd82a996Bb871465F2814439B4C6A0"],
] as const;

export function bscAddress(address: string): string {
  return `https://bscscan.com/address/${address}`;
}

export function ArchitecturePage() {
  const { text } = useI18n();
  return (
    <DocPage
      kicker={text("architecture")}
      title={text("arTitle")}
      lede={text("arLede")}
      sections={[
        { id: "components", label: text("arComp") },
        { id: "addresses", label: text("arLive") },
        { id: "submission", label: text("arSubmit") },
        { id: "boundary", label: text("arBound") },
      ]}
    >
      <section id="components">
        <h2>{text("arComp")}</h2>
        <table>
          <thead>
            <tr><th>{text("arContract")}</th><th>{text("arDuty")}</th></tr>
          </thead>
          <tbody>
            <tr><td>CampaignFactory</td><td>{text("arFactory")}</td></tr>
            <tr><td>CampaignRegistry</td><td>{text("arRegistry")}</td></tr>
            <tr><td>CauseToken</td><td>{text("arToken")}</td></tr>
            <tr><td>CampaignVault</td><td>{text("arVault")}</td></tr>
            <tr><td>PrivateFeeVault</td><td>{text("arFee")}</td></tr>
            <tr><td>PancakeLiquidityModule</td><td>{text("arLp")}</td></tr>
            <tr><td>BnbTradeRouter</td><td>{text("arRouter")}</td></tr>
          </tbody>
        </table>
      </section>
      <section id="addresses">
        <h2>{text("arLive")}</h2>
        <p>{text("arLiveP")}</p>
        <p>{text("arSourcify")}</p>
        <table>
          <thead>
            <tr><th>{text("arContract")}</th><th>{text("arAddress")}</th></tr>
          </thead>
          <tbody>
            {DEPLOYED.map(([name, address]) => (
              <tr key={address}>
                <td>{name}</td>
                <td><a href={bscAddress(address)} target="_blank" rel="noreferrer"><code>{address}</code></a></td>
              </tr>
            ))}
            <tr>
              <td>{text("relayer")}</td>
              <td><a href={bscAddress(RELAYER_ADDRESS)} target="_blank" rel="noreferrer"><code>{RELAYER_ADDRESS}</code></a></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="submission">
        <h2>{text("arSubmit")}</h2>
        <p>{text("arSubmit1")}</p>
        <p>{text("arSubmit2")}</p>
        <p>{text("arSubmit3")}</p>
      </section>
      <section id="boundary">
        <h2>{text("arBound")}</h2>
        <p>{text("arBoundP")}</p>
      </section>
    </DocPage>
  );
}
