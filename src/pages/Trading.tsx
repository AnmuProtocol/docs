import { useI18n } from "../i18n.tsx";
import { DocPage } from "../layout.tsx";

export function TradingPage() {
  const { text } = useI18n();
  return (
    <DocPage
      kicker={text("trading")}
      title={text("trTitle")}
      lede={text("trLede")}
      sections={[
        { id: "fee", label: text("trFee") },
        { id: "transfers", label: text("trMove") },
      ]}
    >
      <section id="fee">
        <h2>{text("trFee")}</h2>
        <p>{text("trFeeP")}</p>
      </section>
      <section id="transfers">
        <h2>{text("trMove")}</h2>
        <p>{text("trMoveP")}</p>
      </section>
    </DocPage>
  );
}
