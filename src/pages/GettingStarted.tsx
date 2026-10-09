import { appUrl } from "../copy.ts";
import { useI18n } from "../i18n.tsx";
import { DocPage } from "../layout.tsx";

export function GettingStartedPage() {
  const { text } = useI18n();
  return (
    <DocPage
      kicker={text("gettingStarted")}
      title={text("gsTitle")}
      lede={text("gsLede")}
      sections={[
        { id: "build", label: text("gsBuild") },
        { id: "submit", label: text("gsSubmit") },
        { id: "read", label: text("gsRead") },
      ]}
    >
      <section id="build">
        <h2>{text("gsBuild")}</h2>
        <p>{text("gsBuildP")}</p>
      </section>
      <section id="submit">
        <h2>{text("gsSubmit")}</h2>
        <p>{text("gsSubmitA")}<a href={`${appUrl}/create`}>{text("gsSubmitLink")}</a>{text("gsSubmitB")}</p>
      </section>
      <section id="read">
        <h2>{text("gsRead")}</h2>
        <p>{text("gsReadP")}</p>
      </section>
    </DocPage>
  );
}
