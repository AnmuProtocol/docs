import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { App } from "./App.tsx";
import { PRIVACY_SENTENCES } from "./copy.ts";
import { OverviewPage } from "./pages/Overview.tsx";
import { PrivacyPage } from "./pages/Privacy.tsx";

describe("docs site", () => {
  it("renders each docs route without inventing a campaign", () => {
    for (const path of ["/", "/getting-started", "/architecture", "/record", "/roles", "/privacy", "/proofs", "/claims", "/launches", "/trading", "/relayer", "/review"]) {
      const html = renderToStaticMarkup(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );
      expect(html).toContain("Anmu");
      expect(html.toLowerCase()).not.toContain("zk-verified campaign");
    }
  });

  it("shows the required privacy sentences and does not call the protocol anonymous", () => {
    const html = [OverviewPage, PrivacyPage]
      .map((Page, index) => renderToStaticMarkup(
        <MemoryRouter initialEntries={[index === 0 ? "/" : "/privacy"]}>
          <Page />
        </MemoryRouter>,
      ))
      .join("\n");
    for (const sentence of PRIVACY_SENTENCES) expect(html).toContain(sentence);
    const outsideTheRequiredSentence = PRIVACY_SENTENCES.reduce(
      (text, sentence) => text.replaceAll(sentence, ""),
      html,
    );
    expect(outsideTheRequiredSentence.toLowerCase()).not.toContain("anonymous");
  });
});
