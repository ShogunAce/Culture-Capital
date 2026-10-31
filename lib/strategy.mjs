// Deterministic strategist, evaluator and auditor. Scores are our rubric, not Qloo affinity.
export function buildCampaigns(brief, evidence) {
 const domains=['artist','brand','movie'];
 return domains.flatMap(category=>{
  const sources=evidence.filter(e=>e.category===category && e.id && e.rank>0).sort((a,b)=>a.rank-b.rank).slice(0,3);
  if(!sources.length)return [];
  const direction={artist:['A ritual worth sharing','A short founder-led ritual video','qualified landing-page visits'],brand:['The details that matter','A product-detail carousel','product-page click-through rate'],movie:['A story customers enter','A narrative email and landing page','email-to-landing-page click-through rate']}[category];
  const coverage=Math.min(30,sources.length*10),rankSupport=Math.round(40/sources[0].rank),feasibility=Number(brief.budget)>0?30:20;
  return [{id:category,title:direction[0],format:direction[1],hypothesis:`For ${brief.business}, test whether ${direction[1].toLowerCase()} about ${brief.product} earns more interest from ${brief.customer} than a plain product introduction.`,rationale:`Qloo returned ${sources.map(s=>s.name).join(', ')} in the ${category} query for the selected references. Use these as interview and creative-research prompts; Qloo does not establish a shared aesthetic, endorsement, or buying intent.`,creative:`Introduce ${brief.product}. Show one concrete benefit and invite the audience to ${brief.objective}. Before production, ask three target customers what they appreciate about ${sources[0].name}; adapt only themes they actually name.`,metric:direction[2],test:'Run two variants for 7 days with the same audience, offer and channel. A: plain product introduction. B: the customer-validated cultural framing. Aim for 100 visits per variant; smaller samples are directional only.',budget:Number(brief.budget),decision:'Advance only if B improves the chosen metric by at least 15% relative to A, with no negative qualitative feedback. This is a founder-set test threshold, not a statistical significance claim.',constraints:brief.constraints||'No additional founder constraints supplied.',risk:'Do not use names, likenesses, music, film clips, logos or imply partnerships without permission. Cultural adjacency is not evidence of customer identity or sales lift.',evidence:sources,score:coverage+rankSupport+feasibility,breakdown:{coverage,rankSupport,feasibility},audit:'PASS: every cultural reference links to a returned Qloo entity; business impact remains an untested hypothesis.'}];
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
