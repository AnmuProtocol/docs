import { useI18n, type CopyKey } from "../i18n.tsx";
import { DocPage } from "../layout.tsx";

const RULES = ["ry1", "ry2", "ry3", "ry4", "ry5", "ry6"] as const satisfies readonly CopyKey[];

export function RelayerPage() {
  const { text } = useI18n();
  return (
    <DocPage
      kicker={text("relayer")}
      title={text("ryTitle")}
      lede={text("ryLede")}
      sections={[
        { id: "relayer", label: text("ryRelayer") },
        { id: "indexer", label: text("ryIndex") },
      ]}
    >
      <section id="relayer">
        <h2>{text("ryRelayer")}</h2>
        <p>{text("ryRelayerP")}</p>
        <ul className="fields">
          {RULES.map(key => <li key={key}>{text(key)}</li>)}
        </ul>
        <p>{text("ryRelayerQ")}</p>
      </section>
      <section id="indexer">
        <h2>{text("ryIndex")}</h2>
        <p>{text("ryIndex1")}</p>
        <p>{text("ryIndex2")}</p>
      </section>
    </DocPage>
  );
}
