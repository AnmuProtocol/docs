import { useI18n } from "../i18n.tsx";
import { DocPage } from "../layout.tsx";

export function RecordPage() {
  const { text } = useI18n();
  return (
    <DocPage
      kicker={text("record")}
      title={text("rcTitle")}
      lede={text("rcLede")}
      sections={[
        { id: "lifecycle", label: text("rcLife") },
        { id: "fields", label: text("rcFields") },
        { id: "digest", label: text("rcDigest") },
      ]}
    >
      <section id="lifecycle">
        <h2>{text("rcLife")}</h2>
        <p><code>None → Pending → Verified → Launched → Active → Closed</code></p>
        <table>
          <thead>
            <tr><th>{text("rcStatus")}</th><th>{text("rcMeaning")}</th><th>{text("rcWho")}</th></tr>
          </thead>
          <tbody>
            <tr><td>{text("rcPending")}</td><td>{text("rcPendingM")}</td><td>{text("rcPendingW")}</td></tr>
            <tr><td>{text("rcVerified")}</td><td>{text("rcVerifiedM")}</td><td>{text("rcVerifiedW")}</td></tr>
            <tr><td>{text("rcClosedP")}</td><td>{text("rcClosedPM")}</td><td>{text("rcVerifiedW")}</td></tr>
            <tr><td>{text("rcLaunched")}</td><td>{text("rcLaunchedM")}</td><td>{text("rcLaunchedW")}</td></tr>
            <tr><td>{text("rcActive")}</td><td>{text("rcActiveM")}</td><td>{text("rcActiveW")}</td></tr>
            <tr><td>{text("rcClosed")}</td><td>{text("rcClosedM")}</td><td>{text("rcClosedW")}</td></tr>
          </tbody>
        </table>
        <p>{text("rcLaunchNote")}</p>
      </section>
      <section id="fields">
        <h2>{text("rcFields")}</h2>
        <p>{text("rcFieldsP")}</p>
        <p>{text("rcAbsent")}</p>
      </section>
      <section id="digest">
        <h2>{text("rcDigest")}</h2>
        <p>{text("rcDigestP")}</p>
        <pre>{`keccak256(abi.encode(
  uint256(2),
  name, symbol, totalSupply, metadataURI,
  beneficiaryCommitment, feeReceiverCommitment,
  beneficiaryBps, liquidityBps, protocolBps,
  launchKind, creatorTaxBps
))`}</pre>
        <p>{text("rcDigestNote")}</p>
      </section>
    </DocPage>
  );
}
