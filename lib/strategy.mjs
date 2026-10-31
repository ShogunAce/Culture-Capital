// Deterministic strategist, evaluator and auditor. Scores are our rubric, not Qloo affinity.
// Qloo rank is a position inside one domain's own result list, so the top entity of every
// domain is rank 1. Rank therefore cannot separate one domain from another: it is shown on
// each reference as provenance but is deliberately not scored. What can honestly separate
// the directions is how much evidence a domain actually returned, and what the format costs
// this founder to make - a planning judgement of ours, stated as such.
const PLAN={artist:{title:'A ritual worth sharing',format:'A short founder-led ritual video',metric:'qualified landing-page visits',effort:3,floor:250},brand:{title:'The details that matter',format:'A product-detail carousel',metric:'product-page click-through rate',effort:1,floor:80},movie:{title:'A story customers enter',format:'A narrative email and landing page',metric:'email-to-landing-page click-through rate',effort:2,floor:150}};
export function buildCampaigns(brief, evidence) {
 const budget=Math.max(0,Number(brief.budget)||0);
 return Object.keys(PLAN).flatMap(category=>{
  const pool=evidence.filter(e=>e.category===category && e.id && e.rank>0).sort((a,b)=>a.rank-b.rank);
  if(!pool.length)return [];
  const sources=pool.slice(0,3),plan=PLAN[category];
  // coverage: how much corroborating evidence this domain really returned, counted before
  // the top three are taken, so a thin domain scores lower instead of saturating.
  // budgetFit: the founder's budget against twice this format's production floor.
  // effortFit: how much of one founder's week the format consumes.
  const coverage=Math.min(40,pool.length*8),budgetFit=Math.max(0,Math.min(40,Math.round(40*budget/(plan.floor*2)))),effortFit=20-(plan.effort-1)*6;
  return [{id:category,title:plan.title,format:plan.format,hypothesis:`For ${brief.business}, test whether ${plan.format.toLowerCase()} about ${brief.product} earns more interest from ${brief.customer} than a plain product introduction.`,rationale:`Qloo returned ${pool.length} ${category} ${pool.length===1?'entity':'entities'} for the selected references, led by ${sources.map(s=>s.name).join(', ')}. Use these as interview and creative-research prompts; Qloo does not establish a shared aesthetic, endorsement, or buying intent.`,creative:`Introduce ${brief.product}. Show one concrete benefit and invite the audience to ${brief.objective}. Before production, ask three target customers what they appreciate about ${sources[0].name}; adapt only themes they actually name.`,metric:plan.metric,test:'Run two variants for 7 days with the same audience, offer and channel. A: plain product introduction. B: the customer-validated cultural framing. Aim for 100 visits per variant; smaller samples are directional only.',budget,decision:'Advance only if B improves the chosen metric by at least 15% relative to A, with no negative qualitative feedback. This is a founder-set test threshold, not a statistical significance claim.',constraints:brief.constraints||'No additional founder constraints supplied.',risk:'Do not use names, likenesses, music, film clips, logos or imply partnerships without permission. Cultural adjacency is not evidence of customer identity or sales lift.',evidence:sources,score:coverage+budgetFit+effortFit,breakdown:{coverage,budgetFit,effortFit},audit:'PASS: every cultural reference links to a returned Qloo entity; business impact remains an untested hypothesis.'}];
 }).sort((a,b)=>b.score-a.score||a.id.localeCompare(b.id));
}
export function exportExperiment(run, approval) {
 if(!approval?.approvedAt)throw new Error('Approve a campaign before export.');
 const c=run.campaigns.find(x=>x.id===approval.campaignId);if(!c)throw new Error('Approved campaign is absent from this run.');
 return {version:1,mode:'live-qloo',runId:run.id,createdAt:run.createdAt,brief:run.brief,seeds:run.seeds,campaign:{...c,creative:approval.creative},approval,provenance:{origin:'https://hackathon.api.qloo.com',endpoint:'/v2/insights',requestCount:run.requestCount},limitations:['Deterministic strategy; no runtime LLM.','Scores are a transparent planning rubric, not Qloo affinity or predicted ROI.','Approval is stored on this browser, not a shared audit service.']};
}
export function compareEvidence(baseline,alternative){
 const key=e=>`${e.category}:${e.id}`;const a=new Set(baseline.map(key)),b=new Set(alternative.map(key));
 return {added:alternative.filter(e=>!a.has(key(e))),removed:baseline.filter(e=>!b.has(key(e))),retained:alternative.filter(e=>a.has(key(e)))};
}
