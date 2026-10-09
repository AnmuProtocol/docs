import { useI18n } from "../i18n.tsx";
import { DocPage } from "../layout.tsx";

export function RolesPage() {
  const { text } = useI18n();
  return (
    <DocPage
      kicker={text("roles")}
      title={text("roTitle")}
      lede={text("roLede")}
      sections={[
        { id: "table", label: text("roTable") },
        { id: "funds", label: text("roFunds") },
      ]}
    >
      <section id="table">
        <h2>{text("roTable")}</h2>
        <table>
          <thead>
            <tr><th>{text("roRole")}</th><th>{text("roAllowed")}</th><th>{text("roForbidden")}</th></tr>
          </thead>
          <tbody>
            <tr><td>DEFAULT_ADMIN_ROLE</td><td>{text("roAdminA")}</td><td>{text("roAdminF")}</td></tr>
            <tr><td>VERIFIER_ROLE</td><td>{text("roVerA")}</td><td>{text("roVerF")}</td></tr>
            <tr><td>PAUSER_ROLE</td><td>{text("roPauseA")}</td><td>{text("roPauseF")}</td></tr>
            <tr><td>FACTORY_ROLE</td><td>{text("roFacA")}</td><td>{text("roFacF")}</td></tr>
          </tbody>
        </table>
      </section>
      <section id="funds">
        <h2>{text("roFunds")}</h2>
        <p>{text("roFunds1")}</p>
        <p>{text("roFunds2")}</p>
      </section>
    </DocPage>
  );
}
