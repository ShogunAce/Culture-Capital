export function qlooOrigin(value = 'https://hackathon.api.qloo.com') {
 const url = new URL(value);
 if (url.origin !== 'https://hackathon.api.qloo.com' || url.username || url.password || url.pathname !== '/' || url.search || url.hash) throw new Error('Only the Qloo hackathon origin is authorized');
 return url.origin;
}
