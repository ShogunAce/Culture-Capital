# Culture Capital

Cultural intelligence for independent entrepreneurs.

- App: https://culture-capital.netlify.app
- Source: https://github.com/ShogunAce/Culture-Capital
- License: MIT

## Workflow
Complete a founder brief, search Qloo and explicitly resolve ambiguous entities, then research artists, brands and movies. A bounded deterministic pipeline generates one campaign per available domain, evaluates a transparent rubric, attaches evidence and asks for human approval. Edit the creative brief, approve, and export Markdown or JSON. Change references to compare added, removed and retained results against the original run.

All evidence is live Qloo output. The example button supplies only an illustrative founder brief. No sample API results, inferred affinity scores or sales forecasts are supplied. There is no runtime LLM dependency.

## Run locally
Node 24: `npm ci`, `npm run dev`. Checks: `npm test`, `npm run typecheck`, `npm run build`.
Configure `QLOO_API_KEY` in `.env.local` securely. Existing `api_key` binding remains supported for compatibility. Never put secrets in client code or source control.

## Netlify
The main branch is the source for the existing Netlify project. `netlify.toml` selects Node 24, `npm run build`, and `.next`; Netlify's Next.js adapter serves API routes. The existing production secret is separate from local development. `/api/health` reports only whether a key exists, never its value.

## Evidence and methodology
Qloo requests use only `https://hackathon.api.qloo.com`, GET `/search` and `/v2/insights`, authenticated server-side with `X-Api-Key`. Redirects are rejected. Insights use `filter.type`, `signal.interests.entities`, and `take`. Returned positions are ranks within a category, not affinity values. Provenance includes real IDs, selected seed IDs, endpoint and retrieval timestamp. Combined-seed relationships are not attributed to individual seeds.

The strategist proposes experiments, not factual claims about a culture or audience. Score = coverage (10 per cited entity, capped at 30) + rank support (40 / top returned rank, rounded) + budget feasibility (30 with a positive budget, 20 otherwise). Ties use category name. Scores are heuristic and commonly tie; they are not outcome predictions. Permission and customer-validation checks remain human decisions.

## Persistence and limits
Briefs, runs and approvals persist in this browser's localStorage. There is no cross-device sync, shared history, account system or tamper-proof approval service. Clear workspace removes saved browser work; export preserves a portable copy. Do not use a shared browser for confidential briefs.

Requests are bounded, deduplicated within a research client, cached within that client, retried at most twice for 429/5xx, and time out after four seconds per attempt. Three-domain research is sequential with a 12-request budget. Partial failures are labeled. Current throttling is per server worker (12 requests/minute/IP and two active handlers), not a distributed quota; production-scale abuse protection remains future work.

## Documentation
Official guide: https://docs.qloo.com/reference/qloo-llm-hackathon-developer-guide
Endpoint references: `/reference/get-search`, `/reference/insights-api-deep-dive`, `/reference/parameters`, `/reference/available-parameters-by-entity-type` on docs.qloo.com.
See BUILD_STATUS.md for current verification, HANDOFF.md for continuation and DECISIONS.md for tradeoffs.

Hackathon keys expire after judging. The app will show unavailable research rather than silently switch API hosts. Any later commercial API migration requires an explicit configuration/code change and authorization.
