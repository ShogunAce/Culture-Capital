# Decisions
- Netlify is the exclusive deployment target. Next.js App Router with server routes; no additional backend.
- Deterministic strategy generation first; LLM optional.
- No final Qloo adapter until required official documentation is accessible. Never use alternate Qloo hosts or inferred credentials.
- Durable storage must be selected and verified before multi-request workflows ship; Netlify Blobs is a candidate, not implemented.
- Considered Inter/Fraunces, Manrope/DM Serif, and IBM Plex Sans/Serif. Bootstrap uses system sans and Georgia to avoid font downloads; final typography remains open. Forest green, warm off-white, and restrained ochre signal actions and caution.
- No sample evidence in the bootstrap. Explicitly label unavailable functionality.
- Live Qloo verified after network publication. User-authorized existing api_key binding is accepted server-side.
- Search remains unfiltered to preserve supported returned types and let founders select ambiguous entities. Research uses documented artist/brand/movie categories with entity IDs and take only.
- Result positions are preserved as ranks, not invented affinity values. Evidence describes combined-seed query provenance, not unsupported per-seed edges.

## Local MVP continuation, 2026-10-30
- User explicitly chose local development and rejected Codex Cloud. Reuse the existing GitHub repository and Netlify site, including its working server-only Qloo binding.
- Retain the existing Next.js stack. No new backend, LLM provider or secret transfer.
- Deadline MVP uses browser-local durable saving and downloadable files, not server-side run retrieval. No shared-account persistence or tamper-proof approval is claimed. This supersedes the earlier requirement to select Netlify Blobs before the approval flow.
- Bound the orchestrator to three sequential research domains, deterministic strategy, transparent evaluator and evidence audit. Human approval gates export; no autonomous publishing.
- A failed domain produces an explicit warning; successful evidence remains usable. No fictional replacement evidence.
- Counterfactual comparison means query-result set comparison, not causal inference.
- Preserve original exact-host and redirect restrictions; shorten request timeout to four seconds so bounded retries fit serverless execution.
