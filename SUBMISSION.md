# Devpost submission draft

## Culture Capital
Cultural intelligence for independent entrepreneurs: turn what customers love into an evidence-connected launch experiment.

Demo: https://culture-capital.netlify.app
Code: https://github.com/ShogunAce/Culture-Capital
License: MIT

## Inspiration
Independent founders need practical ways to investigate audience interests without treating cultural stereotypes as customer evidence. Culture Capital makes the research chain visible and leaves the publishing decision with the founder.

## What it does
Founder brief -> explicit Qloo entity resolution -> artist, brand and movie research -> deterministic campaign hypotheses -> transparent ranking and evidence audit -> edit and approve -> portable launch plan. An optional changed-reference comparison shows which recommendations appear, disappear or remain.

## How it is built
Next.js, React, TypeScript, Zod, Qloo Hackathon API, GitHub and Netlify. Qloo credentials stay server-side. A bounded deterministic agent pipeline runs research, strategy generation, evaluation and audit; it does not call a runtime LLM. There is no unbounded agent loop or automatic campaign publishing.

## Demonstration (2 minutes)
Load the illustrative Root & Ritual brief. Search SZA, explicitly choose the artist result, and research. Open one campaign's evidence and test plan. Edit the creative brief, approve and export. Add another resolved reference and compare to the original. Emphasize that Qloo results are real but campaign performance is a hypothesis.

## Limitations and next steps
Browser-local storage, heuristic scores that can tie, per-worker throttling, and no outcome tracking or LLM-only baseline. Improve distributed quota enforcement and private durable storage before larger-scale use. Add evaluated LLM interpretation only after securing runtime credentials and maintaining evidence attribution.

## Verification
See BUILD_STATUS.md for observed test/deployment status. This is draft submission copy; no Devpost form has been submitted and no demo video has been recorded by this build.
