import { type ReactNode } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { appUrl, telegramUrl, xUrl } from "./copy.ts";
import { LanguageSwitch, useI18n, type CopyKey } from "./i18n.tsx";

export const GROUPS = [
  ["start", [
    ["/", "overview"],
    ["/getting-started", "gettingStarted"],
  ]],
  ["system", [
    ["/architecture", "architecture"],
    ["/record", "record"],
    ["/roles", "roles"],
  ]],
  ["protocol", [
    ["/privacy", "privacy"],
    ["/proofs", "proofs"],
    ["/claims", "claims"],
    ["/launches", "launches"],
    ["/trading", "trading"],
  ]],
  ["operations", [
    ["/relayer", "relayer"],
    ["/review", "review"],
  ]],
] as const satisfies readonly (readonly [CopyKey, readonly (readonly [string, CopyKey])[]])[];

export const NAV = GROUPS.flatMap(([, items]) => items);

export function DocPage(props: {
  kicker: string;
  title: string;
  lede?: string;
  sections?: readonly { id: string; label: string }[];
  children: ReactNode;
}) {
  const { pathname } = useLocation();
  const { text } = useI18n();
  const index = NAV.findIndex(([to]) => to === pathname);
  const prev = index > 0 ? NAV[index - 1] : null;
  const next = index >= 0 && index < NAV.length - 1 ? NAV[index + 1] : null;
  return (
    <article className="doc">
      <div className="doc-main">
        <nav className="crumb" aria-label="Breadcrumb">
          <NavLink to="/">{text("docs")}</NavLink>
          <span aria-hidden="true">/</span>
          <span>{props.kicker}</span>
        </nav>
        <header className="doc-head">
          <h1>{props.title}</h1>
          {props.lede ? <p className="lede">{props.lede}</p> : null}
        </header>
        {props.children}
        <nav className="doc-pager">
          {prev ? <NavLink to={prev[0]}><small>{text("previous")}</small>{text(prev[1])}</NavLink> : <span />}
          {next ? <NavLink className="is-next" to={next[0]}><small>{text("next")}</small>{text(next[1])}</NavLink> : <span />}
        </nav>
      </div>
      {props.sections && props.sections.length > 0 ? (
        <aside className="doc-toc">
          <p>{text("onThisPage")}</p>
          {props.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.label}</a>)}
        </aside>
      ) : null}
    </article>
  );
}

export function Layout() {
  const { text } = useI18n();
  return (
    <div className="docs-app">
      <header className="docs-top">
        <div className="docs-top-inner">
          <NavLink className="brand" to="/">
            <img className="mark" src="/anmu-logo.png" alt="" />
            <span>{text("brand")}</span>
          </NavLink>
          <nav className="docs-tools">
            <LanguageSwitch />
            <a className="launch" href={appUrl}>{text("launchpad")}</a>
          </nav>
        </div>
      </header>
      <div className="docs-shell">
        <aside className="docs-nav">
          {GROUPS.map(([label, items]) => (
            <nav key={label} aria-label={text(label)}>
              <p className="group">{text(label)}</p>
              {items.map(([to, item]) => (
                <NavLink key={to} to={to} end={to === "/"}>{text(item)}</NavLink>
              ))}
            </nav>
          ))}
        </aside>
        <main className="docs-body">
          <Outlet />
        </main>
      </div>
      <footer className="docs-foot">
        <div className="docs-foot-band">
          <div>
            <NavLink className="brand" to="/">
              <img className="mark" src="/anmu-logo.png" alt="" />
              <span>{text("brand")}</span>
            </NavLink>
            <p className="docs-foot-mark">{text("footerMark")}</p>
          </div>
          <div className="docs-socials">
            {[
              ["Telegram", telegramUrl, false, ["m22 2-7 20-4-9-9-4Z", "M22 2 11 13"]],
              ["X", xUrl, true, ["M17.6 3h3l-6.6 7.5L22 21h-6.2l-4.8-6.3L6 21H3l7-8L2.2 3H8.6l4.4 5.8L17.6 3zm-1.1 16.2h1.7L7.7 4.7H5.9l10.6 14.5z"]],
            ].map(([label, href, filled, paths]) => (
              <a key={String(label)} href={String(href)} target="_blank" rel="noreferrer" aria-label={String(label)}>
                <svg className={filled ? "is-fill" : undefined} viewBox="0 0 24 24" aria-hidden="true">
                  {(paths as string[]).map(d => <path key={d} d={d} />)}
                </svg>
              </a>
            ))}
          </div>
        </div>
        <div className="docs-foot-bottom">
          <span>{text("copyright")}</span>
          <a href={appUrl}>{text("launchpad")}</a>
        </div>
      </footer>
    </div>
  );
}
