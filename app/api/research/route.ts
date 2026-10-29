import {z} from 'zod';
import {createQlooClient} from '../../../lib/qloo/client.mjs';
const input=z.discriminatedUnion('action',[z.object({action:z.literal('search'),query:z.string().trim().min(1).max(150)}),z.object({action:z.literal('insights'),ids:z.array(z.string().uuid()).min(1).max(5)})]);
const slots=new Map<string,number[]>();let active=0;
export async function POST(req:Request){
 if(req.headers.get('origin')&&req.headers.get('origin')!==new URL(req.url).origin)return Response.json({error:'Origin rejected'},{status:403});
 if(Number(req.headers.get('content-length')||0)>2048)return Response.json({error:'Request too large'},{status:413});
 const address=req.headers.get('x-nf-client-connection-ip')||'local';const now=Date.now();
 for(const [k,v]of slots)if(!v.some(t=>t>now-60000))slots.delete(k);
 const recent=(slots.get(address)||[]).filter(t=>t>now-60000);if(recent.length>=12||active>=2)return Response.json({error:'Research is busy. Retry in a minute.'},{status:429});
 recent.push(now);slots.set(address,recent);
 let body;try{const text=await req.text();if(text.length>2048)return Response.json({error:'Request too large'},{status:413});body=input.parse(JSON.parse(text))}catch{return Response.json({error:'Invalid research request'},{status:400})}
 active++;
 try{const client=createQlooClient();if(body.action==='search')return Response.json({matches:await client.search(body.query),mode:'live'},{headers:{'Cache-Control':'no-store'}});
 const evidence=[];for(const domain of ['artist','brand','movie'])evidence.push(...await client.insights(body.ids,domain));
 return Response.json({evidence,mode:'live',requestCount:client.requestCount},{headers:{'Cache-Control':'no-store'}});
 }catch(error){return Response.json({error:error instanceof Error?error.message:'Research failed'},{status:502})}finally{active--}
}
