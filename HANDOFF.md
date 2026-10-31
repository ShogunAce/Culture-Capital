# Handoff

User requested local development, explicitly no Codex Cloud. Checkout: culture-capital under the Kenosis Interactive Labs workspace. Repository: https://github.com/ShogunAce/Culture-Capital (main). Existing Netlify site: e83c9c01-532d-4e05-8270-15d2ddfb148d, https://culture-capital.netlify.app. GitHub connector works; local gh auth is invalid. Use connector Git data operations to publish a tree/commit and update main with expected-head protection. Do not expose credentials or change secrets.

Current code implements the full MVP workflow and passes nine unit tests, typecheck and production build. Next task: publish changed files via the GitHub connector, verify Netlify deploy ready, exercise live browser search -> artist choice -> research -> review/edit -> approval -> both exports -> reload recovery -> comparison. Update BUILD_STATUS with observed results.

Local QLOO_API_KEY absent; existing Netlify health reports configured and production search succeeded. Do not fetch the secret. Only hackathon.api.qloo.com is allowed. Official docs read this session. No live Qloo response dataset should be committed.

Key files: app/page.tsx, lib/strategy.mjs, lib/qloo/client.mjs, app/api/research/route.ts, app/api/health/route.ts, tests/strategy.test.mjs. Browser stores run and approval locally; it is not shared storage. This is an explicit deadline tradeoff.

Checks: npm test; npm run typecheck; npm run build. npm ci completed with zero reported vulnerabilities. Do not claim UI/production verification until actually performed.
