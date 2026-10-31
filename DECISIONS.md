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

## Visual direction, 2026-10-30
- The interface moves to a dark shell: near-black ground with the existing ochre and forest accents kept as the signal colours. This supersedes the warm off-white paper surface; ochre and forest keep their earlier meaning.
- Typography is settled: Poppins for interface and display, Playfair Display for campaign titles and editorial moments. This closes the open typography question from the bootstrap.
- The landing screen is a fixed design canvas (1172x657) scaled by one transform, with three architectures: scaled canvas on desktop, a narrowed design window on tablet, and a real flow column below 700px. The page still scrolls into the four working steps, so the canvas is one full-height section rather than a non-scrolling shell.
- Hero imagery is generated, not photographed, and depicts cultural artefacts rather than people or real brands. No image carries text; all card typography is HTML overlay. Assets are committed as sized WebP under public/hero.
- The browser mock in the hero shows a Culture Capital approved experiment, not an invented storefront, so the landing screen advertises the actual output. Its content is illustrative Root & Ritual copy, consistent with the existing persona.
