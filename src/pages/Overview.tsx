import { appUrl } from "../copy.ts";
import { useI18n, type CopyKey } from "../i18n.tsx";
import { DocPage } from "../layout.tsx";

const ENTRIES = [
  ["/architecture", "ovE1t", "ovE1b", "ovE1c"],
  ["/proofs", "ovE2t", "ovE2b", "ovE2c"],
  ["/claims", "ovE3t", "ovE3b", "ovE3c"],
  ["/record", "ovE4t", "ovE4b", "ovE4c"],
  ["/launches", "ovE5t", "ovE5b", "ovE5c"],
  ["/trading", "ovE6t", "ovE6b", "ovE6c"],
] as const satisfies readonly (readonly [string, CopyKey, CopyKey, CopyKey])[];

export function OverviewPage() {
  const { text } = useI18n();
  return (
    <DocPage
      kicker={text("overview")}
      title={text("ovTitle")}
      lede={text("ovLede")}
      sections={[
        { id: "start", label: text("start") },
        { id: "use-cases", label: text("useCases") },
        { id: "resources", label: text("resources") },
      ]}
    >
      <div className="pills">
        <a href="/getting-started">{text("gettingStarted")}</a>
        <a className="ghost" href="/privacy">{text("privacy")}</a>
        <a className="ghost" href="/launches">{text("launches")}</a>
      </div>
      <div className="callout">
        <p>{text("ovFunding")}</p>
        <p>{text("ovPay")}</p>
      </div>
      <section id="start">
        <h2>{text("start")}</h2>
        <div className="entries">
          {ENTRIES.map(([href, title, body, cta]) => (
            <a key={href} href={href}>
              <strong>{text(title)}</strong>
              <p>{text(body)}</p>
              <span>{text(cta)}</span>
            </a>
          ))}
        </div>
      </section>
      <section id="use-cases">
        <h2>{text("useCases")}</h2>
        <div className="cases">
          <article>
            <small>{text("ovC1k")}</small>
            <h3>{text("ovC1t")}</h3>
            <p>{text("ovC1b")}</p>
          </article>
          <article>
            <small>{text("ovC2k")}</small>
            <h3>{text("ovC2t")}</h3>
            <p>{text("ovC2b")}</p>
          </article>
          <article>
            <small>{text("ovC3k")}</small>
            <h3>{text("ovC3t")}</h3>
            <p>{text("ovC3b")}</p>
          </article>
        </div>
      </section>
      <section id="resources">
        <h2>{text("resources")}</h2>
        <div className="resources">
          <a href={appUrl}><span>{text("launchpad")}</span><em>{text("badgeApp")}</em></a>
          <a href={`${appUrl}/create`}><span>{text("ovResCreate")}</span><em>{text("badgeApp")}</em></a>
          <a href="/privacy"><span>{text("ovResPrivacy")}</span><em>{text("badgeRecord")}</em></a>
          <a href="/launches"><span>{text("ovResTerms")}</span><em>{text("badgeRecord")}</em></a>
          <a href="/trading"><span>{text("ovResTrade")}</span><em>{text("badgeRecord")}</em></a>
          <a href="/review"><span>{text("ovResReview")}</span><em>{text("badgeRecord")}</em></a>
        </div>
      </section>
    </DocPage>
  );
}
