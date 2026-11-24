/** Proteção básica, por instância do servidor. Para escala/alta proteção use Redis/Upstash, WAF ou Vercel Firewall. */
type Bucket={count:number;expires:number};
const buckets=new Map<string,Bucket>();
export function allowRequest(req:Request,kind:string,limit:number,windowMs:number):boolean{
 const forwarded=req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
 const ip=(req.headers.get("x-real-ip")||forwarded||"unknown").slice(0,90);
 const key=`${kind}:${ip}`, now=Date.now();
 if(buckets.size>5000){for(const [k,v] of buckets){if(v.expires<now)buckets.delete(k);}if(buckets.size>5000)buckets.clear();}
 const old=buckets.get(key);
 if(!old||old.expires<now){buckets.set(key,{count:1,expires:now+windowMs});return true;}
 if(old.count>=limit)return false;
 old.count++;return true;
}
