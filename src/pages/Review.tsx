import { useI18n, type CopyKey } from "../i18n.tsx";
import { DocPage } from "../layout.tsx";

const VISIBLE = ["rv1", "rv2", "rv3", "rv4", "rv5", "rv6", "rv7", "rv8", "rv9", "rv10"] as const satisfies readonly CopyKey[];

export function ReviewPage() {
  const { text } = useI18n();
  return (
    <DocPage
      kicker={text("review")}
      title={text("rvTitle")}
      lede={text("rvLede")}
      sections={[{ id: "fields", label: text("rvFields") }]}
    >
      <section id="fields">
        <h2>{text("rvFields")}</h2>
        <ul className="fields">
          {VISIBLE.map(key => <li key={key}>{text(key)}</li>)}
        </ul>
      </section>
    </DocPage>
  );
}
