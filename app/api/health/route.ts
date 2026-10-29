export async function GET() {
 return Response.json({status:'bootstrap',liveAnalysis:'unavailable',qlooKeyConfigured:Boolean(process.env.QLOO_API_KEY),reason:'Qloo adapter documentation and live verification pending'}, {headers:{'Cache-Control':'no-store'}});
}
