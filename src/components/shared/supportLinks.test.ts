import { describe, expect, it } from "vitest";
import { SUPPORT_LINKS } from "./supportLinks";

// The expected values are written out in full rather than built from REPO the
// way the source builds them. Sharing that constant would make this pass no
// matter what REPO became — precisely the substitution worth catching. Spelled
// out, changing any link takes a second deliberate edit here.
//
// `toEqual` on the whole object rather than key by key, so a row that appears or
// disappears fails too — including any reappearance of the
// upstream author's personal donation links, which must not ship.
describe("support menu links", () => {
  it("point where they are meant to", () => {
    expect(SUPPORT_LINKS).toEqual({
      starRepo: "https://github.com/itzzjb/starlink",
      latestRelease: "https://github.com/itzzjb/starlink/releases/latest",
      reportIssue: "https://github.com/itzzjb/starlink/issues/new?labels=bug",
      requestFeature: "https://github.com/itzzjb/starlink/issues/new?labels=enhancement",
      privacyPolicy: "https://github.com/itzzjb/starlink/blob/main/PRIVACY.md",
      disclaimer: "https://github.com/itzzjb/starlink/blob/main/DISCLAIMER.md",
    });
  });
});
