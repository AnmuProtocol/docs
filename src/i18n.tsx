import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { pageEn, pageZh } from "./pages.copy.ts";

export type Lang = "en" | "zh";

const chrome = {
  brand: "Anmu",
  ticker: "ANMU",
  docs: "Docs",
  launchpad: "Launchpad",
  gettingStarted: "Getting started",
  privacy: "Privacy",
  launches: "Launches",
  trading: "Trading and LP",
  review: "What a reviewer sees",
  overview: "Overview",
  launchToken: "Launch a token",
  documentation: "Record",
  language: "Language",
  previous: "Previous",
  next: "Next",
  copyright: "© 2026 Anmu. All rights reserved.",
  start: "Start",
  protocol: "Protocol",
  reviewNav: "Review",
  onThisPage: "On this page",
  useCases: "Use cases",
  resources: "Resources",
  system: "System",
  architecture: "Architecture",
  record: "Record",
  roles: "Roles",
  proofs: "Proofs",
  claims: "Claims",
  operations: "Operations",
  relayer: "Relayer",
  footerMark: "Campaign records store commitments. Payments stay public.",
} as const;

const chromeZh: { [K in keyof typeof chrome]: string } = {
  brand: "安幕",
  ticker: "ANMU",
  docs: "文档",
  launchpad: "发射台",
  gettingStarted: "开始",
  privacy: "隐私",
  launches: "发射",
  trading: "交易和 LP",
  review: "审查者看到什么",
  overview: "概览",
  launchToken: "发射代币",
  documentation: "记录",
  language: "语言",
  previous: "上一页",
  next: "下一页",
  copyright: "© 2026 安幕。保留所有权利。",
  start: "开始",
  protocol: "协议",
  reviewNav: "审查",
  onThisPage: "本页",
  useCases: "用途",
  resources: "资源",
  system: "系统",
  architecture: "架构",
  record: "记录",
  roles: "角色",
  proofs: "证明",
  claims: "领取",
  operations: "运行",
  relayer: "中继",
  footerMark: "战役记录保存承诺。付款保持公开。",
};

const en = { ...chrome, ...pageEn };
const zh: { [K in keyof typeof en]: string } = { ...chromeZh, ...pageZh };

export type CopyKey = keyof typeof en;

const I18nContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider(props: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const stored = localStorage.getItem("anmu-lang");
    if (stored === "zh" || stored === "en") {
      setLangState(stored);
      document.documentElement.lang = stored === "zh" ? "zh-Hans" : "en";
      document.title = stored === "zh" ? "安幕文档" : "Anmu Docs";
    }
  }, []);
  function setLang(next: Lang) {
    setLangState(next);
    localStorage.setItem("anmu-lang", next);
    document.documentElement.lang = next === "zh" ? "zh-Hans" : "en";
    document.title = next === "zh" ? "安幕文档" : "Anmu Docs";
  }
  return <I18nContext.Provider value={{ lang, setLang }}>{props.children}</I18nContext.Provider>;
}

export function useI18n() {
  const { lang, setLang } = useContext(I18nContext);
  const text = useCallback((key: CopyKey) => (lang === "zh" ? zh[key] : en[key]), [lang]);
  return { lang, setLang, text };
}

export function LanguageSwitch() {
  const { lang, setLang, text } = useI18n();
  return (
    <div className="lang-switch" role="group" aria-label={text("language")}>
      <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
      <button type="button" aria-pressed={lang === "zh"} onClick={() => setLang("zh")}>中文</button>
    </div>
  );
}
