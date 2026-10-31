export async function GET() {
 return Response.json({status:'mvp',version:'0.2.0',liveAnalysis:'research-strategy-approval-export',qlooKeyConfigured:Boolean(process.env.QLOO_API_KEY || process.env.api_key),persistence:'browser-local; no shared account history'}, {headers:{'Cache-Control':'no-store'}});
}
