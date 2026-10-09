import { useI18n, type CopyKey } from "../i18n.tsx";
import { DocPage } from "../layout.tsx";

const SENTENCES = ["pvS1", "pvS2", "pvS3", "pvS4"] as const satisfies readonly CopyKey[];
const OFF_RECORD = ["pvOff1", "pvOff2", "pvOff3", "pvOff4", "pvOff5"] as const satisfies readonly CopyKey[];

export function PrivacyPage() {
  const { text } = useI18n();
  return (
    <DocPage
      kicker={text("privacy")}
      title={text("pvTitle")}
      lede={text("pvLede")}
      sections={[
        { id: "levels", label: text("pvLevels") },
        { id: "boundary", label: text("pvBoundary") },
        { id: "issuer", label: text("pvIssuer") },
        { id: "off-record", label: text("pvOff") },
      ]}
    >
      <section id="levels">
        <h2>{text("pvLevels")}</h2>
        <table>
          <thead>
            <tr><th>{text("pvLevel")}</th><th>{text("pvHolds")}</th></tr>
          </thead>
          <tbody>
            <tr><td>{text("pvL1")}</td><td>{text("pvL1b")}</td></tr>
            <tr><td>{text("pvL2")}</td><td>{text("pvL2b")}</td></tr>
            <tr><td>{text("pvL3")}</td><td>{text("pvL3b")}</td></tr>
          </tbody>
        </table>
      </section>
      <section id="boundary">
        <h2>{text("pvBoundary")}</h2>
        <ol className="sentences">
          {SENTENCES.map((key, index) => (
            <li key={key}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{text(key)}</p>
            </li>
          ))}
        </ol>
      </section>
      <section id="issuer">
        <h2>{text("pvIssuer")}</h2>
        <p>{text("pvIssuerP")}</p>
      </section>
      <section id="off-record">
        <h2>{text("pvOff")}</h2>
        <ul className="fields">
          {OFF_RECORD.map(key => <li key={key}>{text(key)}</li>)}
        </ul>
        <p>{text("pvClaim")}</p>
      </section>
    </DocPage>
  );
}
