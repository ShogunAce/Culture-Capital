// Netlify may reconstruct Request.url using a deploy hostname. Do not trust client
// Host/X-Forwarded-Host to authorize another Origin.
export function allowedOrigin(origin,requestUrl,appUrl=process.env.APP_URL){
 if(!origin)return true;
 const allowed=new Set(['https://culture-capital.netlify.app',new URL(requestUrl).origin]);
 if(appUrl){try{const u=new URL(appUrl);if(u.protocol==='https:')allowed.add(u.origin)}catch{/* invalid optional configuration grants no access */}}
 return allowed.has(origin);
}
