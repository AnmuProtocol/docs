import { useI18n } from "../i18n.tsx";
import { DocPage } from "../layout.tsx";

export function ArchitecturePage() {
  const { text } = useI18n();
  return (
    <DocPage
      kicker={text("architecture")}
      title={text("arTitle")}
      lede={text("arLede")}
      sections={[
        { id: "components", label: text("arComp") },
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
