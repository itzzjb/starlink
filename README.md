# <img src="docs/logo.svg" alt="" width="34" height="34" align="top"> Starlink

Monitor the performance and health of your Starlink. Reads your dish and router
directly over your own LAN, so it keeps working during an outage — which is
exactly when you want to see what happened.

Ships as two things from one codebase: a **macOS** and **Windows** desktop
app, and a **browser extension** for Chrome, Edge and Firefox.

## Desktop and extension

| Platform | Form | Build |
| --- | --- | --- |
| macOS 12+ | `.dmg`, arm64 + x64 | `npm run pack:mac` |
| Windows 10+ | `.exe` installer, x64 + arm64 | `npm run pack:win` |
| Chrome / Edge / Firefox | Extension | `npm run build:extension` |

Tagged `v*` pushes build both desktop platforms and the extension into a
draft GitHub Release. Nothing reaches installed apps until the draft is
published by hand — `electron-updater` ignores drafts, so that click is the
rollout.

## Develop

```bash
npm ci
npm run dev              # browser, on the vite dev server
npm run dev:electron     # desktop shell
npm run dev:extension    # extension, loaded unpacked
```

```bash
npm test          # 1172 tests: logic in node, components in real Chromium
npm run lint
npm run typecheck
```

The browser-mode tests render canvas and WebGL, so they need a Chromium binary:
`npx playwright install chromium`.

## What it reads

Everything comes from the local APIs on your own network. `LOCAL-API.md`
documents the endpoints and their quirks in detail.

- Live downlink and uplink, ping latency, ping success rate, power draw
- Sky obstruction map and alignment, rendered as a 3D dome
- Outage history and an alert engine
- Per-device usage and network control through the router
- An optional Starlink account sign-in for account-level data. Everything above
  works without it.

## Privacy

No account is required and nothing is sent to a server owned by this project.
See [PRIVACY.md](PRIVACY.md), and [DISCLAIMER.md](DISCLAIMER.md) for the usual
warnings about talking to hardware you own.

## Licence

MIT — see [LICENSE](LICENSE).
