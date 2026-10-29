import {z} from 'zod';
import {qlooOrigin} from '../config.mjs';
const entity = z.object({entity_id:z.string().uuid(),name:z.string().min(1),types:z.array(z.string()).optional(),subtype:z.string().optional()});
export class QlooError extends Error {constructor(code,status=502){super(code);this.code=code;this.status=status}}
export function createQlooClient({key=process.env.QLOO_API_KEY || process.env.api_key,base=process.env.QLOO_BASE_URL,transport=fetch,budget=12}={}){
 const origin=qlooOrigin(base);let requests=0;const cache=new Map();const pending=new Map();
 async function request(path,params){
  if(!key)throw new QlooError('QLOO_NOT_CONFIGURED',503);
  const url=new URL(path,origin);url.search=new URLSearchParams(params).toString();
  if(cache.has(url.href))return cache.get(url.href);
  if(pending.has(url.href))return pending.get(url.href);
  const work=(async()=>{for(let attempt=0;attempt<3;attempt++){
   if(requests>=budget)throw new QlooError('REQUEST_BUDGET_EXHAUSTED',429);requests++;
   let response;try{response=await transport(url,{headers:{'X-Api-Key':key},redirect:'error',signal:AbortSignal.timeout(12000)});}catch{throw new QlooError('QLOO_NETWORK_OR_TIMEOUT',504)}
   if((response.status===429||response.status>=500)&&attempt<2){await new Promise(r=>setTimeout(r,300*2**attempt+Math.random()*100));continue}
   if(!response.ok)throw new QlooError(`QLOO_HTTP_${response.status}`,response.status);
   let data;try{data=await response.json()}catch{throw new QlooError('QLOO_MALFORMED_RESPONSE')}
   cache.set(url.href,data);return data;
  }})();pending.set(url.href,work);try{return await work}finally{pending.delete(url.href)}
 }
 function parse(schema,data){const r=schema.safeParse(data);if(!r.success)throw new QlooError('QLOO_MALFORMED_RESPONSE');return r.data}
 return {
  get requestCount(){return requests},
  async search(query){if(typeof query!=='string'||!query.trim()||query.length>150)throw new QlooError('INVALID_SEARCH',400);const data=parse(z.object({results:z.array(entity)}),await request('/search',{query:query.trim(),take:'5'}));return data.results.filter(x=>x.types?.some(t=>t.startsWith('urn:entity:'))).map(x=>({id:x.entity_id,name:x.name,types:x.types,input:query}));},
  async insights(ids,category){if(!['artist','brand','movie'].includes(category)||!Array.isArray(ids)||ids.length<1||ids.length>5||ids.some(id=>!z.string().uuid().safeParse(id).success))throw new QlooError('INVALID_INSIGHTS_INPUT',400);
   const data=parse(z.object({success:z.literal(true),results:z.object({entities:z.array(entity)})}),await request('/v2/insights',{'filter.type':`urn:entity:${category}`,'signal.interests.entities':ids.join(','),take:'5'}));
   const retrievedAt=new Date().toISOString();return data.results.entities.map((x,i)=>({id:x.entity_id,name:x.name,type:x.subtype,rank:i+1,source:'/v2/insights',category,seedIds:[...ids],retrievedAt,limitation:'Query-level relationship; no individual seed attribution or sales prediction.'}));
  }
 };
}
