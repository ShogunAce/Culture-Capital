export async function GET() {
 return Response.json({status:'research-preview',liveAnalysis:'research-only',qlooKeyConfigured:Boolean(process.env.QLOO_API_KEY || process.env.api_key),reason:'Campaign workflow and persistence incomplete'}, {headers:{'Cache-Control':'no-store'}});
}
