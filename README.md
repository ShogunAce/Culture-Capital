# Culture Capital
Cultural intelligence for independent business.

Early bootstrap, not a completed hackathon application. No live Qloo analysis or deployment has been verified.

## Development
Node 24; run `npm ci`, `npm run dev`. Validate with `npm test`, `npm run typecheck`, `npm run build`.
Copy `.env.example` to `.env.local` and configure secrets securely. Netlify needs separate server-side credentials. Never commit keys.

The founder brief is browser-local and unsaved. `/api/health` reports bootstrap status without secrets. See HANDOFF.md for the remaining implementation path.

Source target: https://github.com/ShogunAce/Culture-Capital (public visibility and push not verified).
License: MIT.

## Live research milestone
Search and cross-domain discovery now work against live Qloo. Select the intended entity explicitly, then retrieve artist, brand, and movie evidence. Campaign generation remains incomplete. Existing Codex `api_key` is supported as a server-only alternative to `QLOO_API_KEY`. In Codex run `NODE_USE_ENV_PROXY=1 npm start` so Node uses the inherited proxy. Never transfer cloud secrets into source or client assets.

## Netlify deployment
Connect this repository's `main` branch. The committed `netlify.toml` sets Node 24, build command `npm run build`, and publish directory `.next`; Netlify must detect Next.js and provision its framework adapter (server routes are required).

In Netlify environment variables, securely configure `QLOO_API_KEY` (or `api_key`) for Functions/runtime, set `QLOO_BASE_URL=https://hackathon.api.qloo.com`, and set `APP_URL` to the site's HTTPS URL. Cloud credentials are not transferred automatically. Do not enable `NODE_USE_ENV_PROXY` on Netlify.

After deploying, check `/api/health` for `qlooKeyConfigured: true`, then use the page's live research section to search SZA, explicitly select the artist, and retrieve cultural evidence. A successful static page alone does not verify the server functions or Qloo credentials. This remains a research preview, not the complete campaign workflow.
