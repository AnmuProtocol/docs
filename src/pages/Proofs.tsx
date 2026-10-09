import { useI18n, type CopyKey } from "../i18n.tsx";
import { DocPage } from "../layout.tsx";

const LIMITS = ["prLim1", "prLim2", "prLim3", "prLim4", "prLim5", "prLim6", "prLim7"] as const satisfies readonly CopyKey[];

export function ProofsPage() {
  const { text } = useI18n();
  return (
    <DocPage
      kicker={text("proofs")}
      title={text("prTitle")}
      lede={text("prLede")}
      sections={[
        { id: "statement", label: text("prStatement") },
        { id: "toolchain", label: text("prTool") },
        { id: "inputs", label: text("prInputs") },
        { id: "checks", label: text("prChecks") },
        { id: "limits", label: text("prLimits") },
      ]}
    >
      <section id="statement">
        <h2>{text("prStatement")}</h2>
        <p>{text("prStatementP")}</p>
        <pre>{`creator_commitment = PedersenHash_1(creator_secret, blinding_factor)
leaf               = PedersenHash_3(PedersenHash_2(authorization_secret))
nullifier          = PedersenHash_5(1, creator_secret, nonce, hi, lo)`}</pre>
        <p>{text("prMerkle")}</p>
      </section>
      <section id="toolchain">
        <h2>{text("prTool")}</h2>
        <table>
          <thead>
            <tr><th>{text("prItem")}</th><th>{text("prPin")}</th></tr>
          </thead>
          <tbody>
            <tr><td>{text("prLang")}</td><td>Noir</td></tr>
            <tr><td>{text("prCompiler")}</td><td>nargo 1.0.0-rc.2</td></tr>
            <tr><td>{text("prField")}</td><td>{text("prFieldV")}</td></tr>
            <tr><td>{text("prHash")}</td><td>stdlib pedersen_hash_with_separator</td></tr>
            <tr><td>{text("prBackend")}</td><td>Barretenberg 6.0.0-nightly.20260916, ultra_honk</td></tr>
            <tr><td>{text("prVerifier")}</td><td>{text("prVerifierV")}</td></tr>
          </tbody>
        </table>
        <p>{text("prToolP")}</p>
      </section>
      <section id="inputs">
        <h2>{text("prInputs")}</h2>
        <table>
          <thead>
            <tr><th>{text("prIndex")}</th><th>{text("prInput")}</th></tr>
          </thead>
          <tbody>
            <tr><td>0</td><td>creator_commitment</td></tr>
            <tr><td>1</td><td>{text("prIn1")}</td></tr>
            <tr><td>2</td><td>{text("prIn2")}</td></tr>
            <tr><td>3</td><td>campaign_nonce</td></tr>
            <tr><td>4</td><td>{text("prIn4")}</td></tr>
            <tr><td>5</td><td>nullifier</td></tr>
            <tr><td>6</td><td>authorization_root</td></tr>
          </tbody>
        </table>
        <p>{text("prInputsP")}</p>
      </section>
      <section id="checks">
        <h2>{text("prChecks")}</h2>
        <p>{text("prChecksP")}</p>
      </section>
      <section id="limits">
        <h2>{text("prLimits")}</h2>
        <ul className="fields">
          {LIMITS.map(key => <li key={key}>{text(key)}</li>)}
        </ul>
        <p>{text("prLimitsP")}</p>
      </section>
    </DocPage>
  );
}
