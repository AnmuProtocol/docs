import { useI18n } from "../i18n.tsx";
import { DocPage } from "../layout.tsx";

export function LaunchesPage() {
  const { text } = useI18n();
  return (
    <DocPage
      kicker={text("launches")}
      title={text("lnTitle")}
      lede={text("lnLede")}
      sections={[
        { id: "configuration", label: text("lnConfig") },
        { id: "comparison", label: text("lnCompare") },
      ]}
    >
      <section id="configuration">
        <h2>{text("lnConfig")}</h2>
        <p>{text("lnConfigP")}</p>
      </section>
      <section id="comparison">
        <h2>{text("lnCompare")}</h2>
        <table>
          <thead>
            <tr><th></th><th>{text("lnCampaign")}</th><th>{text("lnStandard")}</th></tr>
          </thead>
          <tbody>
            <tr><td>{text("lnFee")}</td><td>{text("lnNone")}</td><td>0.005 BNB</td></tr>
            <tr><td>{text("lnDon")}</td><td>80 / 20 / 0</td><td>{text("lnRejected")}</td></tr>
            <tr><td>{text("lnTrade")}</td><td>{text("lnTradeC")}</td><td>{text("lnTradeS")}</td></tr>
            <tr><td>{text("lnLp")}</td><td>{text("lnLpC")}</td><td>{text("lnLpS")}</td></tr>
          </tbody>
        </table>
      </section>
    </DocPage>
  );
}
