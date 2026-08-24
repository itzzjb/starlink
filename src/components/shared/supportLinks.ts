// Every outbound destination the support menu offers, kept apart from the menu
// that renders them: a wrong one still draws as a perfectly ordinary row, so the
// wrongness only ever shows up in where the mail and traffic actually went.
// Gathered here so the whole set can be read, and guarded, in one place.
//
// The upstream author's personal sponsorship, donation and social addresses are
// deliberately not carried over — shipping someone else's financial links under
// a different name routes money without consent.

const REPO = "https://github.com/itzzjb/starlink";

export const SUPPORT_LINKS = {
  starRepo: REPO,
  latestRelease: `${REPO}/releases/latest`,
  reportIssue: `${REPO}/issues/new?labels=bug`,
  requestFeature: `${REPO}/issues/new?labels=enhancement`,
  privacyPolicy: `${REPO}/blob/main/PRIVACY.md`,
  disclaimer: `${REPO}/blob/main/DISCLAIMER.md`,
};
