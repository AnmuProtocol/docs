import { useI18n } from "../i18n.tsx";
import { DocPage } from "../layout.tsx";

export function ClaimsPage() {
  const { text } = useI18n();
  return (
    <DocPage
      kicker={text("claims")}
      title={text("clTitle")}
      lede={text("clLede")}
      sections={[
        { id: "roles", label: text("clRoles") },
        { id: "inputs", label: text("clInputs") },
        { id: "payment", label: text("clPay") },
      ]}
    >
      <section id="roles">
        <h2>{text("clRoles")}</h2>
        <p>{text("clRolesP")}</p>
        <pre>{`commitment = PedersenHash_s(secret, blinding_factor)
nullifier  = PedersenHash_8(1, role, secret, campaign_id, claim_nonce, recipient, amount)`}</pre>
      </section>
      <section id="inputs">
        <h2>{text("clInputs")}</h2>
        <table>
          <thead>
            <tr><th>{text("prIndex")}</th><th>{text("prInput")}</th></tr>
          </thead>
          <tbody>
            <tr><td>0</td><td>commitment</td></tr>
            <tr><td>1</td><td>{text("clIn1")}</td></tr>
            <tr><td>2</td><td>{text("clIn2")}</td></tr>
            <tr><td>3</td><td>{text("clIn3")}</td></tr>
            <tr><td>4</td><td>nullifier</td></tr>
            <tr><td>5</td><td>{text("clIn5")}</td></tr>
            <tr><td>6</td><td>{text("clIn6")}</td></tr>
          </tbody>
        </table>
        <p>{text("clInputsP")}</p>
      </section>
      <section id="payment">
        <h2>{text("clPay")}</h2>
        <p>{text("clPay1")}</p>
        <p>{text("clPay2")}</p>
      </section>
    </DocPage>
  );
}
