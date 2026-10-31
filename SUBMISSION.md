# Devpost submission draft

## Elevator pitch (one line, ~200 char field)
Culture Capital turns what your customers already love into one small, testable campaign — with every cultural reference traceable back to a live Qloo entity, and the decision to run it left with you.

## Elevator pitch (spoken, ~30 seconds)
Independent founders guess at marketing, or they reach for stereotypes about who their customers are. Culture Capital takes a founder's brief, resolves the cultural references their customers actually love through Qloo, and turns the returned entities into three testable campaign directions — each one scored on a rubric you can inspect and backed by evidence you can audit down to the entity ID. Nothing is published automatically. The founder approves, exports a launch plan, and runs the experiment. Qloo tells you what is culturally adjacent; it does not tell you what will sell, and we are careful never to pretend otherwise.

---

## Project name
Culture Capital

## Tagline
Cultural intelligence for independent business.

## Demo
https://culture-capital.netlify.app

## Code
https://github.com/ShogunAce/Culture-Capital

## License
MIT

---

## About the project (Markdown, for the public project page)

## Culture Capital

**Turn what your customers already love into one small, testable campaign — with evidence you can inspect and a decision that stays yours.**

## Inspiration

Independent founders are told to "know your audience," and then handed tools that encourage exactly the wrong move: inferring what people will buy from who they appear to be. A founder selling plant-based hair care does not need a demographic bucket. They need a concrete, affordable next experiment, and an honest account of why that experiment is worth running.

Qloo is interesting precisely because it answers a narrower and more useful question — what else is culturally adjacent to this thing — and we wanted to build something that respected that narrowness instead of inflating it into a prediction. The design constraint we set ourselves was: every cultural claim in the output must be traceable to a returned entity, and nothing that is a hypothesis may be presented as a finding.

## What it does

1. **Set the context.** The founder writes a short brief: what they offer, who they want to reach, what they want those people to do, their constraints, and a budget ceiling.
2. **Follow cultural signals.** They search Qloo for a reference their customers already love and *explicitly resolve the exact entity* — searching "SZA" returns a person, an artist, and three places, and the founder picks. Names are ambiguous and the tool refuses to guess.
3. **Research.** One bounded pipeline queries three documented domains — artist, brand and movie — and returns real entities with their IDs, their rank within that domain's result list, the retrieval timestamp and the seed IDs that produced them.
4. **Choose an experiment.** A deterministic strategist generates one hypothesis per available domain, an evaluator scores them on a transparent rubric, and an auditor checks that every cultural reference links back to a returned entity.
5. **Approve.** The founder edits the creative brief and approves. Only then do the exports unlock: a Markdown launch plan and a JSON evidence package carrying the full provenance chain.

An optional **counterfactual comparison** re-runs the query with a changed reference and reports which entities appear, disappear or persist — a set comparison, explicitly not a causal estimate.

## How we built it

Next.js App Router with server routes, React, TypeScript and Zod, deployed on Netlify. Qloo credentials stay server-side; the browser never sees them. The agent pipeline is bounded and deterministic — research, strategy, evaluation, audit — with **no runtime LLM**, no unbounded agent loop, and no automatic publishing. That was a deliberate choice: a deterministic pipeline can be audited line by line, and for a tool whose entire value proposition is "you can check this," that mattered more than fluency.

The front end is built on a fixed design canvas: the hero is authored at 1172×657 px with every element positioned in design pixels, then scaled by a single transform, with three distinct architectures for desktop, tablet and phone. The carousel is a true 3D perspective ring — 37 cards placed on a cylinder whose camera sits at the ring centre, so each card faces the viewer exactly. Hero imagery was generated with ElevenLabs and compressed from 34 MB of PNG to 210 KB of WebP.

## Challenges we ran into

**The scoring rubric was silently broken.** Every campaign scored exactly 100/100 and we initially recorded this as "the documented tie behaviour." It was not. All three terms were constants: evidence coverage counted an already-truncated list, budget feasibility was flat for any non-zero budget, and "returned-rank support" divided by the top rank — which is always 1, because rank is a position *inside a single domain's own result list*.

That last one was the real lesson. Rank looked like a quality signal and was not one: artist #1, brand #1 and movie #1 all exist, so no arithmetic on rank could ever separate the three directions. The tempting fix was to manufacture a signal from it. We removed it from the score instead, kept it visible on every reference as provenance, and rebuilt the rubric on things that genuinely vary — how much evidence a domain actually returned, and what each format costs a solo founder to produce. The scores now move when the inputs move.

**Resisting the urge to over-claim.** The hardest ongoing constraint was linguistic. It is very easy to write "customers who love SZA also love Fenty Beauty" when what Qloo returned is a query-level relationship with no per-seed attribution. Nearly every string in the app was rewritten at least once to say less.

## What we learned

A saturated metric is worse than no metric: it looks like rigour while carrying no information, and it survives review because 100/100 reads like success. We now have tests that assert the rubric *discriminates*, not that it returns a particular number — the previous test asserted `score === 100` and so actively held the bug in place.

We also learned how much of "trustworthy AI" is editorial rather than technical. The pipeline was the easy part; deciding what each sentence was allowed to assert took longer.

## Limitations

Stated plainly, because the project would be dishonest otherwise:

- **No user validation.** Root & Ritual is an illustrative persona, not a customer. No founder interviews or observations have been conducted. Every claim about usefulness or time saved is an untested hypothesis.
- **Browser-local persistence.** Runs and approvals are saved in the founder's own browser. There is no shared account history and no tamper-proof approval record.
- **Scores are our rubric**, not Qloo affinity and not predicted ROI. Two of the three terms are our planning assumptions about production cost, labelled as such.
- **Deterministic, not clever.** No runtime LLM interpretation, and no LLM-only baseline to compare against.
- **No outcome tracking.** The tool helps design an experiment; it cannot yet tell you how it went.

## What's next

Durable private storage, so a founder can return to a run from another device. An evaluated LLM interpretation layer — but only once it can maintain the same evidence attribution the deterministic path guarantees. And, most importantly, founder interviews, because everything above is still a hypothesis about what independent founders need.

---

## Built with (tags, max 25)

`next.js` · `react` · `typescript` · `javascript` · `zod` · `qloo` · `node.js` · `netlify` · `css` · `html` · `webp` · `elevenlabs` · `github`

---

## Additional info (for judges and organizers)

**When did you begin your project?**
29 October 2026.

**The public URL to your project:**
https://culture-capital.netlify.app

**Link to your PUBLIC code repo:**
https://github.com/ShogunAce/Culture-Capital

**If this was an existing project, in what ways did you significantly upgrade and improve it to work with Qloo?**
Not an existing project. Culture Capital was started from an empty repository on 29 October 2026 for this hackathon, and Qloo is its only external data source — the entity resolution, the three-domain research pipeline and the evidence audit are the product, not an integration added to something that already existed.

---

## Verification status

See BUILD_STATUS.md for observed test and deployment results. The live workflow — search, explicit entity resolution, research, evidence audit, edit, approval, both exports, reload recovery and counterfactual comparison — has been exercised against production with real Qloo responses. Sixteen automated tests, TypeScript and the production build pass.

**Not yet done:** no demo video has been recorded, and no Devpost form has been submitted. This file is draft copy.
