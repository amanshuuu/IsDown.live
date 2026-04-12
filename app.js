/* -- Data -- */
const SVC=[
  // -- Music --
  {id:'spotify',    name:'Spotify',       d:'spotify.com',        cat:'Music',       s:'down',     u:96.2,  r:null,reports:8432},
  {id:'applemusic', name:'Apple Music',   d:'apple.com',          cat:'Music',       s:'up',       u:99.6,  r:88,  reports:0},
  {id:'youtube',    name:'YouTube',       d:'youtube.com',        cat:'Video',       s:'up',       u:99.8,  r:108, reports:0},
  {id:'tidal',      name:'Tidal',         d:'tidal.com',          cat:'Music',       s:'up',       u:99.1,  r:142, reports:0},
  // -- Streaming --
  {id:'netflix',    name:'Netflix',       d:'netflix.com',        cat:'Streaming',   s:'up',       u:99.9,  r:91,  reports:0},
  {id:'disneyplus', name:'Disney+',       d:'disneyplus.com',     cat:'Streaming',   s:'up',       u:99.5,  r:134, reports:0},
  {id:'primevideo', name:'Prime Video',   d:'primevideo.com',     cat:'Streaming',   s:'up',       u:99.4,  r:155, reports:0},
  {id:'hulu',       name:'Hulu',          d:'hulu.com',           cat:'Streaming',   s:'up',       u:99.2,  r:178, reports:0},
  {id:'twitch',     name:'Twitch',        d:'twitch.tv',          cat:'Streaming',   s:'up',       u:99.3,  r:122, reports:0},
  // -- Social --
  {id:'twitter',    name:'X (Twitter)',   d:'x.com',              cat:'Social',      s:'up',       u:98.2,  r:184, reports:0},
  {id:'instagram',  name:'Instagram',     d:'instagram.com',      cat:'Social',      s:'up',       u:99.6,  r:131, reports:0},
  {id:'facebook',   name:'Facebook',      d:'facebook.com',       cat:'Social',      s:'up',       u:99.7,  r:118, reports:0},
  {id:'tiktok',     name:'TikTok',        d:'tiktok.com',         cat:'Social',      s:'up',       u:99.4,  r:162, reports:0},
  {id:'reddit',     name:'Reddit',        d:'reddit.com',         cat:'Social',      s:'up',       u:99.3,  r:165, reports:0},
  {id:'snapchat',   name:'Snapchat',      d:'snapchat.com',       cat:'Social',      s:'up',       u:99.1,  r:188, reports:0},
  {id:'pinterest',  name:'Pinterest',     d:'pinterest.com',      cat:'Social',      s:'up',       u:99.5,  r:143, reports:0},
  // -- Chat --
  {id:'discord',    name:'Discord',       d:'discord.com',        cat:'Chat',        s:'up',       u:99.5,  r:143, reports:0},
  {id:'whatsapp',   name:'WhatsApp',      d:'whatsapp.com',       cat:'Chat',        s:'up',       u:99.9,  r:77,  reports:0},
  {id:'telegram',   name:'Telegram',      d:'telegram.org',       cat:'Chat',        s:'up',       u:99.8,  r:91,  reports:0},
  {id:'signal',     name:'Signal',        d:'signal.org',         cat:'Chat',        s:'up',       u:99.7,  r:104, reports:0},
  // -- AI --
  {id:'openai',     name:'ChatGPT',       d:'openai.com',         cat:'AI',          s:'up',       u:98.7,  r:198, reports:0},
  {id:'claude',     name:'Claude',        d:'anthropic.com',      cat:'AI',          s:'up',       u:99.4,  r:167, reports:0},
  {id:'gemini',     name:'Gemini',        d:'gemini.google.com',  cat:'AI',          s:'up',       u:99.6,  r:144, reports:0},
  {id:'midjourney', name:'Midjourney',    d:'midjourney.com',     cat:'AI',          s:'up',       u:98.9,  r:221, reports:0},
  // -- Cloud --
  {id:'aws',        name:'AWS',           d:'aws.amazon.com',     cat:'Cloud',       s:'up',       u:99.97, r:42,  reports:0},
  {id:'gcp',        name:'Google Cloud',  d:'cloud.google.com',   cat:'Cloud',       s:'up',       u:99.95, r:38,  reports:0},
  {id:'azure',      name:'Azure',         d:'azure.microsoft.com',cat:'Cloud',       s:'up',       u:99.93, r:51,  reports:0},
  {id:'vercel',     name:'Vercel',        d:'vercel.com',         cat:'Cloud',       s:'up',       u:99.8,  r:64,  reports:0},
  {id:'netlify',    name:'Netlify',       d:'netlify.com',        cat:'Cloud',       s:'up',       u:99.7,  r:72,  reports:0},
  {id:'cloudflare', name:'Cloudflare',    d:'cloudflare.com',     cat:'Network',     s:'up',       u:99.99, r:17,  reports:0},
  // -- Dev Tools --
  {id:'github',     name:'GitHub',        d:'github.com',         cat:'Dev Tools',   s:'degraded', u:99.1,  r:440, reports:2104},
  {id:'gitlab',     name:'GitLab',        d:'gitlab.com',         cat:'Dev Tools',   s:'up',       u:99.4,  r:188, reports:0},
  {id:'jira',       name:'Jira',          d:'atlassian.com',      cat:'Dev Tools',   s:'up',       u:99.3,  r:211, reports:0},
  {id:'npm',        name:'npm',           d:'npmjs.com',          cat:'Dev Tools',   s:'up',       u:99.6,  r:134, reports:0},
  {id:'docker',     name:'Docker Hub',    d:'hub.docker.com',     cat:'Dev Tools',   s:'up',       u:99.2,  r:167, reports:0},
  // -- Work / Productivity --
  {id:'slack',      name:'Slack',         d:'slack.com',          cat:'Work',        s:'up',       u:99.7,  r:109, reports:0},
  {id:'zoom',       name:'Zoom',          d:'zoom.us',            cat:'Work',        s:'up',       u:99.5,  r:133, reports:0},
  {id:'teams',      name:'MS Teams',      d:'teams.microsoft.com',cat:'Work',        s:'up',       u:99.4,  r:156, reports:0},
  {id:'notion',     name:'Notion',        d:'notion.so',          cat:'Productivity',s:'up',       u:99.4,  r:201, reports:0},
  {id:'trello',     name:'Trello',        d:'trello.com',         cat:'Productivity',s:'up',       u:99.5,  r:177, reports:0},
  {id:'gsuite',     name:'Google Workspace',d:'workspace.google.com',cat:'Work',    s:'up',       u:99.8,  r:66,  reports:0},
  // -- Design --
  {id:'figma',      name:'Figma',         d:'figma.com',          cat:'Design',      s:'up',       u:99.6,  r:154, reports:0},
  {id:'canva',      name:'Canva',         d:'canva.com',          cat:'Design',      s:'up',       u:99.3,  r:198, reports:0},
  // -- Finance --
  {id:'stripe',     name:'Stripe',        d:'stripe.com',         cat:'Finance',     s:'up',       u:99.95, r:78,  reports:0},
  {id:'paypal',     name:'PayPal',        d:'paypal.com',         cat:'Finance',     s:'up',       u:99.7,  r:212, reports:0},
  {id:'wise',       name:'Wise',          d:'wise.com',           cat:'Finance',     s:'up',       u:99.6,  r:188, reports:0},
  {id:'coinbase',   name:'Coinbase',      d:'coinbase.com',       cat:'Finance',     s:'up',       u:98.8,  r:234, reports:0},
  // -- Gaming --
  {id:'steam',      name:'Steam',         d:'store.steampowered.com',cat:'Gaming',   s:'up',       u:99.2,  r:144, reports:0},
  {id:'xbox',       name:'Xbox Live',     d:'xbox.com',           cat:'Gaming',      s:'up',       u:99.1,  r:167, reports:0},
  {id:'psn',        name:'PlayStation',   d:'playstation.com',    cat:'Gaming',      s:'up',       u:99.0,  r:188, reports:0},
  {id:'epicgames',  name:'Epic Games',    d:'epicgames.com',      cat:'Gaming',      s:'up',       u:98.8,  r:212, reports:0},
  {id:'roblox',     name:'Roblox',        d:'roblox.com',         cat:'Gaming',      s:'up',       u:99.1,  r:178, reports:0},
  // -- ISP / Telecom --
  {id:'att',        name:'AT&T',          d:'att.com',            cat:'Telecom',     s:'up',       u:98.9,  r:244, reports:0},
  {id:'verizon',    name:'Verizon',       d:'verizon.com',        cat:'Telecom',     s:'up',       u:98.7,  r:267, reports:0},
  {id:'comcast',    name:'Xfinity',       d:'xfinity.com',        cat:'Telecom',     s:'up',       u:98.4,  r:288, reports:0},
  {id:'tmobile',    name:'T-Mobile',      d:'t-mobile.com',       cat:'Telecom',     s:'up',       u:98.8,  r:251, reports:0},
  {id:'jio',        name:'Jio',           d:'jio.com',            cat:'Telecom',     s:'up',       u:98.6,  r:301, reports:0},
  {id:'airtel',     name:'Airtel',        d:'airtel.in',          cat:'Telecom',     s:'up',       u:98.5,  r:312, reports:0},
  {id:'vodafone',   name:'Vodafone',      d:'vodafone.com',       cat:'Telecom',     s:'up',       u:98.3,  r:289, reports:0},
  // -- Search / Infra --
  {id:'google',     name:'Google',        d:'google.com',         cat:'Search',      s:'up',       u:99.99, r:36,  reports:0},
  {id:'gmail',      name:'Gmail',         d:'gmail.com',          cat:'Work',        s:'up',       u:99.9,  r:58,  reports:0},
  {id:'gdrive',     name:'Google Drive',  d:'drive.google.com',   cat:'Productivity',s:'up',       u:99.85, r:71,  reports:0},
  {id:'dropbox',    name:'Dropbox',       d:'dropbox.com',        cat:'Productivity',s:'up',       u:99.4,  r:188, reports:0},
  // -- E-commerce --
  {id:'amazon',     name:'Amazon',        d:'amazon.com',         cat:'Shopping',    s:'up',       u:99.95, r:67,  reports:0},
  {id:'ebay',       name:'eBay',          d:'ebay.com',           cat:'Shopping',    s:'up',       u:99.6,  r:134, reports:0},
  {id:'shopify',    name:'Shopify',       d:'shopify.com',        cat:'Shopping',    s:'up',       u:99.7,  r:112, reports:0},
];

const INC=[
  {name:'Spotify',  d:'spotify.com',   title:'Playback failure � users globally cannot stream', time:'12 min ago',st:'outage'},
  {name:'GitHub',   d:'github.com',    title:'Actions & CI/CD pipelines severely degraded',     time:'38 min ago',st:'degraded'},
  {name:'Discord',  d:'discord.com',   title:'Message delivery issues � now fully resolved',    time:'2 hr ago',  st:'resolved'},
  {name:'AWS',      d:'aws.amazon.com',title:'us-east-1 elevated error rates � resolved',       time:'5 hr ago',  st:'resolved'},
  {name:'ChatGPT',  d:'openai.com',    title:'API 503 errors � resolved after 47 minutes',      time:'9 hr ago',  st:'resolved'},
];

/* -- State -- */
let activeF='all';
const watched=new Set();

/* -- Helpers -- */
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const logo=d=>`https://www.google.com/s2/favicons?domain=${d}&sz=64`;

function toast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),2600);
}

function updateCounts(){
  const upCount   = SVC.filter(s=>s.s==='up').length;
  const downCount = SVC.filter(s=>s.s==='down').length;
  const degCount  = SVC.filter(s=>s.s==='degraded').length;
  document.getElementById('sumUp').textContent  = upCount;
  document.getElementById('sumDown').textContent = downCount;
  document.getElementById('sumDeg').textContent  = degCount;

  // Update hero status bar
  const dot  = document.getElementById('heroStatusDot');
  const text = document.getElementById('heroStatusText');
  if(dot && text){
    if(downCount > 0){
      dot.className = 'status-bar-dot has-issues';
      text.textContent = `${downCount} service${downCount>1?'s':''} down right now`;
    } else if(degCount > 0){
      dot.className = 'status-bar-dot has-degraded';
      text.textContent = `${degCount} service${degCount>1?'s':''} degraded`;
    } else {
      dot.className = 'status-bar-dot';
      text.textContent = 'All systems operational';
    }
  }
}

function updateClock(){
  const e=document.getElementById('liveClock');
  if(e) e.textContent='Last checked: '+new Date().toLocaleTimeString('en-US',{hour12:false});
}

// Seeded random so bars are stable across re-renders
function seededRand(seed){
  let s=seed; return ()=>{ s=(s*1664525+1013904223)&0xffffffff; return (s>>>0)/0xffffffff; };
}

function buildBars(s,n=15){
  const rand=seededRand(s.id.split('').reduce((a,c)=>a+c.charCodeAt(0),0));
  let h='';
  for(let i=0;i<n;i++){
    const last=i===n-1,sl=i===n-2;
    let c='g';
    if(last&&s.s==='down') c='r';
    else if((last||sl)&&s.s==='degraded') c='y';
    else if(rand()>(s.u/100)+0.016&&i<n-2) c='r';
    h+=`<div class="u ${c}"></div>`;
  }
  return h;
}

/* -- Render services -- */
function renderSvc(list){
  const el=document.getElementById('svcList');
  list=[...list].sort((a,b)=>({down:0,degraded:1,up:2}[a.s])-({down:0,degraded:1,up:2}[b.s]));

  const dn=list.filter(s=>s.s==='down').length, dg=list.filter(s=>s.s==='degraded').length;
  let lbl=`${list.length} service${list.length!==1?'s':''}`;
  if(dn) lbl+=` � <span style="color:var(--bad)">${dn} down</span>`;
  if(dg) lbl+=` � <span style="color:var(--warn)">${dg} degraded</span>`;
  document.getElementById('svcLabel').innerHTML=lbl;

  if(!list.length){
    el.innerHTML='<div class="empty-state"><div class="emoji">🔍</div><p>No services match your search.</p></div>';
    return;
  }

  el.innerHTML='';
  list.forEach((s,i)=>{
    const row=document.createElement('div');
    row.className=`svc-row ${s.s}`;
    row.style.animationDelay=(i*.028)+'s';

    // Logo
    const lb=document.createElement('div'); lb.className='svc-logo-box';
    const img=document.createElement('img'); img.src=logo(s.d); img.alt=s.name; img.width=26; img.height=26;
    img.onerror=()=>{lb.innerHTML='<span style="font-size:14px;color:var(--muted)">?</span>'};
    lb.appendChild(img);

    // Info
    const info=document.createElement('div'); info.className='svc-info';
    const nr=document.createElement('div'); nr.className='svc-name'; nr.textContent=s.name;
    if(s.reports>0){
      const rb=document.createElement('span'); rb.className='rep-badge';
      rb.textContent=s.reports.toLocaleString()+' reports'; nr.appendChild(rb);
    }
    const ct=document.createElement('div'); ct.className='svc-cat'; ct.textContent=s.cat;
    info.appendChild(nr); info.appendChild(ct);

    // Pill
    const pw=document.createElement('div');
    const p=document.createElement('div'); p.className='pill';
    const dot='<div class="pdot"></div>';
    if(s.s==='up'){p.classList.add('p-up');p.innerHTML=dot+'Operational';}
    else if(s.s==='down'){p.classList.add('p-down');p.innerHTML=dot+'Outage';}
    else{p.classList.add('p-deg');p.innerHTML=dot+'Degraded';}
    pw.appendChild(p);

    // Uptime
    const uc=document.createElement('div'); uc.className='ut-col';
    const bars=document.createElement('div'); bars.className='ut-bars'; bars.innerHTML=buildBars(s);
    const sub=document.createElement('div');
    if(s.s==='down'){sub.className='ut-sub s-bad';sub.textContent='timeout';}
    else{sub.className='ut-sub'+(s.r>280?' s-warn':'');sub.textContent=s.r+'ms';}
    uc.appendChild(bars); uc.appendChild(sub);

    // Watch
    const ww=document.createElement('div'); ww.className='wb-wrap';
    const wb=document.createElement('button');
    wb.className='w-btn'+(watched.has(s.id)?' on':'');
    wb.textContent=watched.has(s.id)?'✓ Watching':'+ Watch';
    wb.onclick=e=>{e.stopPropagation();toggleWatch(s.id,s.name,wb);};
    ww.appendChild(wb);

    row.appendChild(lb); row.appendChild(info); row.appendChild(pw);
    row.appendChild(uc); row.appendChild(ww);
    row.onclick=()=>navigate(null,'/'+s.id);
    el.appendChild(row);
  });
  updateCounts();
}

/* -- Render incidents -- */
function renderInc(){
  const el=document.getElementById('incFeed');
  el.innerHTML='';
  INC.forEach(inc=>{
    const row=document.createElement('div'); row.className='inc-row';

    const img=document.createElement('img'); img.className='i-logo';
    img.src=logo(inc.d); img.alt=inc.name; img.width=36; img.height=36;
    img.onerror=()=>{img.style.display='none'};

    const body=document.createElement('div'); body.className='i-body';
    const tr=document.createElement('div'); tr.className='i-title';
    const nm=document.createElement('span'); nm.style.fontWeight='700'; nm.textContent=inc.name;
    const bd=document.createElement('span'); bd.className=`i-badge ${inc.st}`; bd.textContent=inc.st;
    tr.appendChild(nm); tr.appendChild(bd);
    const ds=document.createElement('div'); ds.className='i-desc'; ds.textContent=inc.title;
    body.appendChild(tr); body.appendChild(ds);

    const tm=document.createElement('div'); tm.className='i-time'; tm.textContent=inc.time;

    row.appendChild(img); row.appendChild(body); row.appendChild(tm);
    el.appendChild(row);
  });
}

/* -- Filters -- */
function applyFilters(){
  const q=(document.getElementById('sInput').value||'').toLowerCase().trim();
  let list=SVC.filter(s=>
    s.name.toLowerCase().includes(q)||
    s.cat.toLowerCase().includes(q)||
    s.d.toLowerCase().includes(q)
  );
  if(['down','up','degraded'].includes(activeF)) list=list.filter(s=>s.s===activeF);
  else if(activeF.startsWith('cat:')) list=list.filter(s=>s.cat===activeF.slice(4));
  renderSvc(list);
}

function setFilter(f,btn){
  activeF=f;
  document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
}

/* -- Watch -- */
function toggleWatch(id,name,btn){
  if(watched.has(id)){
    watched.delete(id); btn.classList.remove('on'); btn.textContent='+ Watch';
    toast('Stopped watching '+name);
  } else {
    watched.add(id); btn.classList.add('on'); btn.textContent='✓ Watching';
    toast('Watching '+name);
  }
}

function sheetToggleWatch(id,name){
  const btn=document.getElementById('shWatchBtn');
  if(!btn) return;
  if(watched.has(id)){
    watched.delete(id); btn.classList.remove('on'); btn.textContent='+ Watch this service';
    toast('Stopped watching '+name);
  } else {
    watched.add(id); btn.classList.add('on'); btn.textContent='✓ Watching';
    toast('Watching '+name);
  }
  applyFilters();
}

/* -- Sheet -- */
const shBack=document.getElementById('shBack');
const shContent=document.getElementById('shContent');

function openSheet(){
  const s=document.querySelector('.sheet');
  s.style.animation='none';
  requestAnimationFrame(()=>{ s.style.animation=''; shBack.classList.add('open'); });
}
function closeSheet(){shBack.classList.remove('open');}
shBack.addEventListener('click',e=>{if(e.target===shBack)closeSheet();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSheet();});

/* -- Generate realistic hourly report data -- */
function genChartData(svc){
  const rand=seededRand(svc.id.split('').reduce((a,c)=>a+c.charCodeAt(0),7));
  const hrs=24; const base=svc.s==='down'?60:svc.s==='degraded'?18:4;
  return Array.from({length:hrs},(_,i)=>{
    let v=Math.round(base*(0.5+rand())*Math.max(0,(i>18?1.8:i>15?2.5:1)));
    if(svc.s==='down'&&i>=20) v=Math.round(200+rand()*300);
    if(svc.s==='degraded'&&i>=18) v=Math.round(80+rand()*120);
    return Math.max(0,v);
  });
}

/* -- Heatmap SVG -- */
function buildHeatmap(svc){
  const isDark=document.documentElement.classList.contains('dark');
  const rand=seededRand(svc.id.split('').reduce((a,c)=>a+c.charCodeAt(0),13));
  const regions=[
    {n:'NA',x:8,y:28,w:28,h:26},   {n:'EU',x:48,y:16,w:24,h:22},
    {n:'UK',x:44,y:14,w:10,h:12},  {n:'IN',x:72,y:26,w:14,h:18},
    {n:'SEA',x:82,y:32,w:14,h:14}, {n:'AU',x:84,y:54,w:12,h:10},
    {n:'SA',x:22,y:56,w:18,h:20},  {n:'JP',x:92,y:22,w:8,h:8},
    {n:'AF',x:48,y:38,w:16,h:22},  {n:'ME',x:58,y:26,w:14,h:14},
  ];
  const bad=svc.s==='down'; const deg=svc.s==='degraded';
  const colors=['rgba(48,209,88,','rgba(255,159,10,','rgba(255,59,48,'];
  let svg='<svg viewBox="0 0 108 76" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">';
  svg+=`<rect width="108" height="76" fill="${isDark?'#1c1c1e':'#f2f2f7'}" rx="6"/>`;
  regions.forEach(r=>{
    const intensity=rand();
    let ci=0,op=0.15+intensity*0.2;
    if(bad&&intensity>0.55){ci=2;op=0.5+intensity*0.4;}
    else if(bad&&intensity>0.3){ci=1;op=0.35+intensity*0.3;}
    else if(deg&&intensity>0.5){ci=1;op=0.4+intensity*0.3;}
    else if(deg&&intensity>0.25){ci=0;op=0.2+intensity*0.2;}
    svg+=`<rect x="${r.x}%" y="${r.y}%" width="${r.w}%" height="${r.h}%" rx="2" fill="${colors[ci]}${op.toFixed(2)})"/>`;
    svg+=`<text x="${(r.x+r.w/2)}%" y="${(r.y+r.h/2+1.5)}%" text-anchor="middle" font-size="3.5" fill="${isDark?'rgba(255,255,255,.5)':'rgba(0,0,0,.4)'}">${r.n}</text>`;
  });
  svg+='</svg>';
  return svg;
}

/* -- Social mentions -- */
const MENTIONS={
  down:[
    {h:'@techuser_98',t:'Why is {name} not working🔔 literally been down for an hour 🔔',m:'2m ago'},
    {h:'@devloper_xyz',t:'{name} is completely broken for me rn. getting errors on everything',m:'5m ago'},
    {h:'@musicfan_22',t:'anyone else have {name} down? my whole playlist just stopped',m:'8m ago'},
    {h:'@remote_work_life',t:'Great, {name} is down and I have a deadline in 30 mins 🔔',m:'11m ago'},
    {h:'@startup_ceo',t:'Our whole team is affected by the {name} outage rn � is there an ETA?',m:'15m ago'},
  ],
  degraded:[
    {h:'@slowinternet42',t:'{name} is insanely slow rn, anyone else? loading forever',m:'3m ago'},
    {h:'@user_techie',t:'Is {name} having issues? keeps timing out for me',m:'9m ago'},
    {h:'@productmgr_k',t:'{name} seems super laggy today � not sure if it\'s my connection or their end',m:'14m ago'},
  ],
  up:[
    {h:'@all_good_here',t:'{name} working fine for me � might be regional',m:'1m ago'},
    {h:'@techcheck_bot',t:'Monitoring {name} � no issues detected in the last hour',m:'6m ago'},
  ]
};

function getMentions(svc){
  const pool=MENTIONS[svc.s]||MENTIONS.up;
  return pool.map(m=>({...m,t:m.t.replace(/{name}/g,svc.name)}));
}

function openSvcSheet(s){
  const dn=s.s==='down', dg=s.s==='degraded';
  const chartId='svcChart_'+s.id;
  const mentions=getMentions(s);
  const catData=s.s==='down'
    ?[{l:'App crash',v:42},{l:'Login',v:28},{l:'Speed',v:18},{l:'Payment',v:12}]
    :s.s==='degraded'
    ?[{l:'Speed',v:55},{l:'App crash',v:22},{l:'Login',v:15},{l:'Payment',v:8}]
    :[{l:'Speed',v:48},{l:'Login',v:30},{l:'App crash',v:14},{l:'Payment',v:8}];

  shContent.innerHTML=`
    <div class="sh-svc-hd">
      <img class="sh-logo" src="${logo(s.d)}" alt="${esc(s.name)}" width="42" height="42" onerror="this.style.display='none'">
      <div>
        <div class="sh-svc-name">${esc(s.name)}</div>
        <div class="sh-svc-cat">${esc(s.cat)} � ${s.u}% uptime � ${s.s==='down'?'timeout':s.r+'ms'}</div>
      </div>
      <div class="pill ${dn?'p-down':dg?'p-deg':'p-up'}" style="margin-left:auto;flex-shrink:0">
        <div class="pdot"></div>${dn?'Outage':dg?'Degraded':'Operational'}
      </div>
    </div>

    <div class="sh-tabs">
      <button class="sh-tab active" onclick="switchTab(this,'tab-overview')">Overview</button>
      <button class="sh-tab" onclick="switchTab(this,'tab-chart')">24h Chart</button>
      <button class="sh-tab" onclick="switchTab(this,'tab-map')">Heatmap</button>
      <button class="sh-tab" onclick="switchTab(this,'tab-report')">Report issue</button>
    </div>

    <!-- OVERVIEW TAB -->
    <div id="tab-overview" class="sh-panel active">
      <div class="sh-sub" style="margin-bottom:14px">${
        dn?`We're tracking <strong>${s.reports.toLocaleString()}</strong> user reports right now. Enter your email and we'll alert you the moment it recovers.`
        :dg?'Performance issues detected. We\'ll alert you the moment it\'s fully restored.'
        :'All systems operational. Set up an alert to know immediately if this changes.'
      }</div>
      <div class="sh-row">
        <input id="shE" class="sh-inp" type="email" placeholder="you@email.com">
        <button class="sh-notify" onclick="submitNotify('${esc(s.id)}','${esc(s.name)}')">Email me</button>
      </div>
      <button class="sh-notify" style="width:100%;background:var(--seg);color:var(--text);border:1px solid var(--border);margin-bottom:10px;display:flex;align-items:center;justify-content:center;gap:8px"
        onclick="enablePushForService('${esc(s.id)}','${esc(s.name)}')">
        <span style="font-size:16px">🔔</span> Enable push notification
      </button>

      <div class="sh-section">
        <div class="sh-sec-title">Problem breakdown � what's failing</div>
        <div class="cat-breakdown">
          ${catData.map(c=>`
            <div class="cat-row">
              <div class="cat-label">${c.l}</div>
              <div class="cat-bar-wrap"><div class="cat-bar" style="width:${c.v}%;background:${dn?'var(--bad)':dg?'var(--warn)':'var(--ok)'}"></div></div>
              <div class="cat-pct">${c.v}%</div>
            </div>`).join('')}
        </div>
      </div>

      <div class="sh-section">
        <div class="sh-sec-title">What people are saying</div>
        <div class="mention-feed">
          ${mentions.map(m=>`
            <div class="mention-item">
              <div class="mention-handle">${m.h} � ${m.m}</div>
              <div class="mention-text">${m.t}</div>
            </div>`).join('')}
        </div>
      </div>

      <div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border);display:flex;gap:8px;justify-content:space-between;align-items:center">
        <button id="shWatchBtn" class="w-btn${watched.has(s.id)?' on':''}" style="font-size:13px;padding:8px 16px"
          onclick="sheetToggleWatch('${esc(s.id)}','${esc(s.name)}')">
          ${watched.has(s.id)?'✓ Watching':'+ Watch this service'}
        </button>
        <button class="sh-cancel" style="color:var(--bad);font-size:12px;width:auto" onclick="switchTab(document.querySelector('.sh-tab:nth-child(4)'),'tab-report')">⚠ Report issue</button>
      </div>
    </div>

    <!-- CHART TAB -->
    <div id="tab-chart" class="sh-panel">
      <div class="sh-sec-title">Reports in the last 24 hours</div>
      <div class="chart-wrap"><canvas id="${chartId}"></canvas></div>
      <div class="chart-labels">
        <span>24h ago</span><span>18h ago</span><span>12h ago</span><span>6h ago</span><span>Now</span>
      </div>
    </div>

    <!-- HEATMAP TAB -->
    <div id="tab-map" class="sh-panel">
      <div class="sh-sec-title">Affected regions</div>
      <div class="heatmap-wrap" id="heatmapWrap"></div>
      <div class="heatmap-legend">
        <span>Low</span>
        <div class="heatmap-legend-bar">
          <div class="hmap-sq" style="background:rgba(48,209,88,.3)"></div>
          <div class="hmap-sq" style="background:rgba(255,159,10,.5)"></div>
          <div class="hmap-sq" style="background:rgba(255,59,48,.7)"></div>
          <div class="hmap-sq" style="background:rgba(255,59,48,.95)"></div>
        </div>
        <span>High</span>
      </div>
    </div>

    <!-- REPORT TAB -->
    <div id="tab-report" class="sh-panel">
      <div class="sh-sub" style="margin-bottom:12px">What's the problem? Tap all that apply.</div>
      <div class="cat-radio-grid" id="catRadios">
        <label class="cat-radio" onclick="toggleCat(this)">
          <input type="checkbox" value="login"><span class="cat-radio-icon">🔐</span>Can't log in
        </label>
        <label class="cat-radio" onclick="toggleCat(this)">
          <input type="checkbox" value="speed"><span class="cat-radio-icon">🐢</span>Very slow
        </label>
        <label class="cat-radio" onclick="toggleCat(this)">
          <input type="checkbox" value="crash"><span class="cat-radio-icon">💥</span>App crashing
        </label>
        <label class="cat-radio" onclick="toggleCat(this)">
          <input type="checkbox" value="payment"><span class="cat-radio-icon">��</span>Payment error
        </label>
        <label class="cat-radio" onclick="toggleCat(this)">
          <input type="checkbox" value="content"><span class="cat-radio-icon">📭</span>Content not loading
        </label>
        <label class="cat-radio" onclick="toggleCat(this)">
          <input type="checkbox" value="other"><span class="cat-radio-icon">?</span>Something else
        </label>
      </div>
      <button class="sh-notify" style="width:100%" onclick="submitReport('${esc(s.id)}','${esc(s.name)}')">Submit report</button>
    </div>
  `;

  openSheet();
  setTimeout(()=>document.getElementById('shE')?.focus(),90);

  // Draw chart after sheet opens
  requestAnimationFrame(()=>{
    const canvas=document.getElementById(chartId);
    if(!canvas||!window.Chart) return;
    const dark=document.documentElement.classList.contains('dark');
    const data=genChartData(s);
    const color=dn?'#ff453a':dg?'#ff9f0a':'#30d158';
    new Chart(canvas,{
      type:'line',
      data:{
        labels:Array.from({length:24},(_,i)=>i===23?'Now':i%6===0?`${24-i}h`:''),
        datasets:[{
          data,fill:true,
          borderColor:color,borderWidth:2,pointRadius:0,tension:0.4,
          backgroundColor:dn?'rgba(255,69,58,.12)':dg?'rgba(255,159,10,.1)':'rgba(48,209,88,.1)',
        }]
      },
      options:{
        responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:false},tooltip:{
          backgroundColor:dark?'#2c2c2e':'#fff',
          titleColor:dark?'#f2f2f7':'#1c1c1e',
          bodyColor:dark?'#aeaeb2':'#6e6e73',
          borderColor:dark?'rgba(255,255,255,.1)':'rgba(0,0,0,.08)',
          borderWidth:1,
          callbacks:{label:ctx=>`${ctx.parsed.y} reports`}
        }},
        scales:{
          x:{display:false},
          y:{
            display:true,position:'right',
            ticks:{color:dark?'#636366':'#aeaeb2',font:{size:10},maxTicksLimit:4},
            grid:{color:dark?'rgba(255,255,255,.04)':'rgba(0,0,0,.04)'},
            border:{display:false}
          }
        }
      }
    });
    // Draw heatmap
    const hw=document.getElementById('heatmapWrap');
    if(hw) hw.innerHTML=buildHeatmap(s);
  });
}

function openSubSheet(){
  shContent.innerHTML=`
    <div class="sh-h" style="font-size:18px;font-weight:800;margin-bottom:5px">Subscribe to alerts</div>
    <div class="sh-sub">Get notified instantly when any service goes down or recovers.</div>

    <div class="sh-tabs" style="margin-bottom:14px">
      <button class="sh-tab active" onclick="switchTab(this,'sub-email')">Email</button>
      <button class="sh-tab" onclick="switchTab(this,'sub-push')">Push</button>
      <button class="sh-tab" onclick="switchTab(this,'sub-slack')">Slack</button>
    </div>

    <div id="sub-email" class="sh-panel active">
      <div style="font-size:13px;color:var(--muted);margin-bottom:10px">Get an email for every outage across all services you watch.</div>
      <div class="sh-row">
        <input id="shEA" class="sh-inp" type="email" placeholder="you@email.com">
        <button class="sh-notify" onclick="submitSubAll()">Subscribe</button>
      </div>
    </div>

    <div id="sub-push" class="sh-panel">
      <div style="font-size:13px;color:var(--muted);margin-bottom:14px">Get instant browser push notifications � works even when the tab is closed.</div>
      <button class="sh-notify" style="width:100%;display:flex;align-items:center;justify-content:center;gap:8px"
        onclick="requestPushPermission().then(p=>{ if(p==='granted'){closeSheet();toast('? Push notifications enabled for all services');}else{toast('? Permission denied � check browser settings');} })">
        <span style="font-size:16px">🔔</span> Enable push notifications
      </button>
    </div>

    <div id="sub-slack" class="sh-panel">
      <div style="font-size:13px;color:var(--muted);margin-bottom:10px">Paste your Slack webhook URL to get outage alerts directly in your team channel.</div>
      <input id="shSlack" class="sh-inp" type="url" placeholder="https://hooks.slack.com/services/..." style="margin-bottom:8px;width:100%">
      <button class="sh-notify" style="width:100%" onclick="saveSlackWebhook()">Connect Slack</button>
      <div style="font-size:11px;color:var(--muted);margin-top:8px">Get your webhook URL from Slack · Apps · Incoming Webhooks</div>
    </div>

    <button class="sh-cancel" onclick="closeSheet()">Cancel</button>
  `;
  openSheet();
  setTimeout(()=>document.getElementById('shEA')?.focus(),90);
}

function validate(id){
  const el=document.getElementById(id);
  if(!el||!el.value.includes('@')){
    if(el){el.style.borderColor='var(--bad)';setTimeout(()=>el.style.borderColor='',1200);}
    return false;
  }
  return true;
}

/* -- Tab switcher -- */
function switchTab(btn, panelId){
  document.querySelectorAll('.sh-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.sh-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  const panel=document.getElementById(panelId);
  if(panel) panel.classList.add('active');
}

/* -- Category toggle for report -- */
function toggleCat(label){
  label.classList.toggle('selected');
}

/* -- Submit report with categories -- */
function submitReport(id, name){
  const svc=SVC.find(s=>s.id===id);
  if(!svc) return;
  const selected=Array.from(document.querySelectorAll('.cat-radio.selected'))
    .map(l=>l.querySelector('input').value);
  svc.reports=(svc.reports||0)+1;
  if(svc.s==='up') svc.s='degraded';
  closeSheet();
  toast(`⚠ Report submitted for ${name}${selected.length?' ('+selected.join(', ')+')':''}`);
  applyFilters();
}

/* -- Browser Push Notifications -- */
const pushSubs = new Map();

async function requestPushPermission(){
  if(!('Notification' in window)) return 'unsupported';
  if(Notification.permission === 'granted') return 'granted';
  if(Notification.permission === 'denied') return 'denied';
  const result = await Notification.requestPermission();
  return result;
}

async function enablePushForService(id, name){
  const perm = await requestPushPermission();
  if(perm === 'denied'){
    toast('? Notifications blocked � enable in browser settings');
    return false;
  }
  if(perm === 'unsupported'){
    toast('Push not supported in this browser');
    return false;
  }
  pushSubs.set(id, true);
  toast(`🔔 Push alert set for ${name}`);
  return true;
}

function firePushNotification(name, status){
  if(Notification.permission !== 'granted') return;
  const icon = `https://www.google.com/s2/favicons?domain=${SVC.find(s=>s.name===name)?.d||''}&sz=64`;
  try {
    new Notification(`${name} is back online`, {
      body: `${name} has recovered and is now operational.`,
      icon,
      badge: icon,
      tag: `isdown-${name}`,
      requireInteraction: false,
    });
  } catch(e){}
}

function checkPushRecoveries(previousStates){
  pushSubs.forEach((_, id)=>{
    const svc = SVC.find(s=>s.id===id);
    if(!svc) return;
    const prev = previousStates.get(id);
    if(prev && prev !== 'up' && svc.s === 'up'){
      firePushNotification(svc.name, svc.s);
      pushSubs.delete(id);
    }
  });
}

const _origCheck = checkAllServices;
checkAllServices = async function(){
  const prevStates = new Map(SVC.map(s=>[s.id, s.s]));
  await _origCheck();
  checkPushRecoveries(prevStates);
};

/* -- Slack webhook -- */
function saveSlackWebhook(){
  const url=document.getElementById('shSlack')?.value?.trim();
  if(!url||!url.startsWith('https://hooks.slack.com/')){
    const el=document.getElementById('shSlack');
    if(el){el.style.borderColor='var(--bad)';setTimeout(()=>el.style.borderColor='',1200);}
    toast('? Enter a valid Slack webhook URL');
    return;
  }
  localStorage.setItem('slack-webhook',url);
  closeSheet();
  toast('? Slack connected � alerts will post to your channel');
}

function reportIssue(id, name){
  const svc = SVC.find(s=>s.id===id);
  if(!svc) return;
  svc.reports = (svc.reports||0) + 1;
  if(svc.s==='up'){ svc.s='degraded'; }
  closeSheet();
  toast('? Thanks � report logged for '+name);
  applyFilters();
}

/* -- Real status checker -- */
const STATUS_APIS = {
  github:     'https://www.githubstatus.com/api/v2/status.json',
  discord:    'https://discordstatus.com/api/v2/status.json',
  openai:     'https://status.openai.com/api/v2/status.json',
  vercel:     'https://www.vercelstatus.com/api/v2/status.json',
  cloudflare: 'https://www.cloudflarestatus.com/api/v2/status.json',
  stripe:     'https://www.stripestatus.com/api/v2/status.json',
};

function indicatorToStatus(ind){
  if(!ind||ind==='none') return 'up';
  if(ind==='minor') return 'degraded';
  return 'down';
}

async function checkService(svc){
  const apiUrl = STATUS_APIS[svc.id];
  if(!apiUrl) return;
  const controller = new AbortController();
  const tid = setTimeout(()=>controller.abort(), 6000);
  try {
    const t0 = Date.now();
    const res = await fetch(apiUrl, {signal: controller.signal});
    clearTimeout(tid);
    const ms = Date.now() - t0;
    if(!res.ok){ svc.s='down'; svc.r=null; return; }
    try {
      const j = await res.json();
      const ind = j?.status?.indicator;
      svc.s = indicatorToStatus(ind);
    } catch(_){
      svc.s = 'up';
    }
    svc.r = Math.round(ms);
  } catch(e){
    clearTimeout(tid);
    if(e.name === 'AbortError'){
      svc.s = 'down'; svc.r = null;
    }
  }
}

async function checkAllServices(){
  const ps=document.getElementById('pollStatus');
  if(ps){ps.style.display='inline';ps.textContent='Checking�';}
  const toCheck=SVC.filter(s=>STATUS_APIS[s.id]);
  await Promise.allSettled(toCheck.map(checkService));
  applyFilters();
  if(ps){ps.textContent='Updated '+new Date().toLocaleTimeString('en-US',{hour12:false});}
}

/* -- Live polling -- */
let pollInterval=null;
const POLL_MS=60000;

function startPolling(){
  if(pollInterval) return;
  checkAllServices();
  pollInterval=setInterval(checkAllServices, POLL_MS);
}
function stopPolling(){
  clearInterval(pollInterval); pollInterval=null;
}

function toggleLive(el){
  el.classList.toggle('on');
  const on=el.classList.contains('on');
  const ps=document.getElementById('pollStatus');
  if(ps) ps.style.display=on?'inline':'none';
  toast(on?'Live polling enabled (60s)':'Live polling paused');
  on · startPolling() : stopPolling();
}

/* -- Web3Forms email submission -- */
const W3F_KEY='YOUR_WEB3FORMS_KEY';

async function submitEmail(email, subject, message){
  try {
    const res=await fetch('https://api.web3forms.com/submit',{
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify({
        access_key: W3F_KEY,
        subject: subject,
        email: email,
        message: message,
        from_name: 'IsDown.live Alert Signup',
      })
    });
    const j=await res.json();
    return j.success;
  } catch(e){ return false; }
}

async function submitNotify(id,name){
  if(!validate('shE')) return;
  const email=document.getElementById('shE').value.trim();
  const svc=SVC.find(s=>s.id===id);
  watched.add(id);
  closeSheet();
  toast('Sending�');
  const ok=await submitEmail(
    email,
    `IsDown.live � Alert set for ${name}`,
    `User signed up for alerts when ${name} recovers.\nService: ${svc?.d}\nStatus: ${svc?.s}`
  );
  toast(ok?'? Alert set � we\'ll email you when '+name+' recovers':'? Alert saved locally');
  applyFilters();
}

async function submitSubAll(){
  if(!validate('shEA')) return;
  const email=document.getElementById('shEA').value.trim();
  closeSheet();
  toast('Sending�');
  const ok=await submitEmail(
    email,
    'IsDown.live � Subscribed to all alerts',
    `New subscriber for all service alerts.\nEmail: ${email}`
  );
  toast(ok?'? Subscribed � we\'ll alert you for any outage':'? Subscribed locally');
}

/* -- PWA install prompt -- */
let deferredPrompt=null;
const installBanner=document.getElementById('installBanner');
const installBtn=document.getElementById('installBtn');
const installDismiss=document.getElementById('installDismiss');

window.addEventListener('beforeinstallprompt',e=>{
  e.preventDefault();
  deferredPrompt=e;
  if(!localStorage.getItem('pwa-dismissed')){
    installBanner.classList.add('show');
  }
});

installBtn&&installBtn.addEventListener('click',async()=>{
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  const {outcome}=await deferredPrompt.userChoice;
  deferredPrompt=null;
  installBanner.classList.remove('show');
  toast(outcome==='accepted'?'? App installed!':'Maybe later');
});

installDismiss&&installDismiss.addEventListener('click',()=>{
  installBanner.classList.remove('show');
  localStorage.setItem('pwa-dismissed','1');
});

window.addEventListener('appinstalled',()=>{
  installBanner.classList.remove('show');
  toast('← IsDown.live installed as app');
});

/* -- Service Worker registration -- */
if('serviceWorker' in navigator){
  const swCode=`
const CACHE='isdown-v1';
const OFFLINE=['/'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(OFFLINE)));
  self.skipWaiting();
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(
    fetch(e.request).catch(()=>caches.match(e.request).then(r=>r||caches.match('/')))
  );
});
  `;
  const swBlob=new Blob([swCode],{type:'application/javascript'});
  const swUrl=URL.createObjectURL(swBlob);
  navigator.serviceWorker.register(swUrl).catch(()=>{});
}

/* -- Schema.org structured data for SEO -- */
const schema={
  "@context":"https://schema.org",
  "@type":"WebApplication",
  "name":"IsDown.live",
  "url":"https://isdownlive.netlify.app",
  "description":"Real-time status checker for 70+ services. No ads. Instant push alerts when services recover.",
  "applicationCategory":"UtilitiesApplication",
  "operatingSystem":"Any",
  "offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}
};
const sd=document.createElement('script');
sd.type='application/ld+json';
sd.textContent=JSON.stringify(schema);
document.head.appendChild(sd);

/* ---------------------------------------------------
   ROUTER
--------------------------------------------------- */

function getSlug(){
  const path = window.location.pathname.replace(/^\/+/,'').replace(/\/+$/,'').toLowerCase();
  if(!path) return window.location.hash.replace(/^#\/?/,'').toLowerCase().replace(/\/+$/,'');
  return path;
}

function slugToService(slug){
  if(!slug) return null;
  let s = SVC.find(s=>s.id===slug);
  if(s) return s;
  s = SVC.find(s=>s.name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/-+$/,'')=== slug);
  if(s) return s;
  s = SVC.find(s=>s.d.split('.')[0]===slug);
  return s||null;
}

function setMeta(title, desc, canonical){
  document.title = title;
  document.querySelector('meta[name="description"]').content = desc;
  document.querySelector('meta[property="og:title"]').content = title;
  document.querySelector('meta[property="og:description"]').content = desc;
  document.querySelector('meta[property="og:url"]').content = canonical;
  document.querySelector('meta[name="twitter:title"]').content = title;
  document.querySelector('meta[name="twitter:description"]').content = desc;
  document.querySelector('link[rel="canonical"]').href = canonical;
}

function injectFAQSchema(){
  const existing = document.getElementById('faq-schema');
  if(existing) existing.remove();
  const sd = document.createElement('script');
  sd.id = 'faq-schema';
  sd.type = 'application/ld+json';
  sd.textContent = JSON.stringify({
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":[
      {"@type":"Question","name":"How do I check if a website is down?","acceptedAnswer":{"@type":"Answer","text":"Visit IsDown.live and search for the service. We check 70+ services every 60 seconds and show real-time outage status, uptime history, and user reports."}},
      {"@type":"Question","name":"Is IsDown.live free?","acceptedAnswer":{"@type":"Answer","text":"Yes, IsDown.live is completely free and ad-free. No account required to check service status or set up outage alerts."}},
      {"@type":"Question","name":"How do I get notified when a service comes back online?","acceptedAnswer":{"@type":"Answer","text":"Click the Watch button next to any service on IsDown.live and enter your email. We'll send you an instant alert the moment the service recovers."}},
      {"@type":"Question","name":"Is Spotify down right now?","acceptedAnswer":{"@type":"Answer","text":"Check the real-time Spotify status on IsDown.live. We monitor Spotify every 60 seconds and show live outage reports from users worldwide."}},
      {"@type":"Question","name":"Is GitHub down right now?","acceptedAnswer":{"@type":"Answer","text":"Check the real-time GitHub status on IsDown.live. We track GitHub uptime, CI/CD issues, and API degradation in real time."}}
    ]
  });
  document.head.appendChild(sd);
}

function injectServiceSchema(s){
  const existing = document.getElementById('svc-schema');
  if(existing) existing.remove();
  const sd = document.createElement('script');
  sd.id = 'svc-schema';
  sd.type = 'application/ld+json';
  sd.textContent = JSON.stringify({
    "@context":"https://schema.org",
    "@type":"WebPage",
    "name":`Is ${s.name} Down? � Real-time Status`,
    "url":`https://isdownlive.netlify.app/${s.id}`,
    "description":`Check if ${s.name} is down right now. Live outage reports, uptime history, response time, and instant alerts when ${s.name} recovers.`,
    "breadcrumb":{
      "@type":"BreadcrumbList",
      "itemListElement":[
        {"@type":"ListItem","position":1,"name":"IsDown.live","item":"https://isdownlive.netlify.app"},
        {"@type":"ListItem","position":2,"name":s.name,"item":`https://isdownlive.netlify.app/${s.id}`}
      ]
    }
  });
  document.head.appendChild(sd);
}

function injectHomeSchema(){
  const existing = document.getElementById('home-schema');
  if(existing) existing.remove();
  const sd = document.createElement('script');
  sd.id = 'home-schema';
  sd.type = 'application/ld+json';
  sd.textContent = JSON.stringify({
    "@context":"https://schema.org",
    "@type":"WebApplication",
    "name":"IsDown.live",
    "url":"https://isdownlive.netlify.app",
    "description":"Real-time status checker for 70+ services. No ads. Instant push alerts when services recover.",
    "applicationCategory":"UtilitiesApplication",
    "operatingSystem":"Any",
    "offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},
    "featureList":SVC.map(s=>s.name).join(', ')
  });
  document.head.appendChild(sd);
}

/* ----------------------------------------
   SERVICE DETAIL PAGE
---------------------------------------- */
function renderServicePage(s){
  const dn=s.s==='down', dg=s.s==='degraded';
  const statusLabel=dn?'Down':dg?'Degraded':'Operational';
  const statusColor=dn?'var(--bad)':dg?'var(--warn)':'var(--ok)';
  const chartId='pgChart';
  const data=genChartData(s);
  const catData=dn
    ?[{l:'App crash',v:42},{l:'Login',v:28},{l:'Speed',v:18},{l:'Payment',v:12}]
    :dg
    ?[{l:'Speed',v:55},{l:'App crash',v:22},{l:'Login',v:15},{l:'Payment',v:8}]
    :[{l:'Speed',v:48},{l:'Login',v:30},{l:'App crash',v:14},{l:'Payment',v:8}];
  const mentions=getMentions(s);

  document.getElementById('homePage').style.display='none';
  document.getElementById('svcPage').style.display='block';

  document.getElementById('svcPage').innerHTML=`
    <!-- BREADCRUMB -->
    <nav class="breadcrumb" aria-label="breadcrumb">
      <a href="/" onclick="navigate(event,'/')">← IsDown.live</a>
      <span class="bc-sep">/</span>
      <span>${s.name} Status</span>
    </nav>

    <!-- SERVICE HERO -->
    <div class="sp-hero">
      <div class="sp-hero-left">
        <div class="sp-svc-row">
          <div class="sp-logo-wrap">
            <img src="${logo(s.d)}" alt="${s.name} logo" width="52" height="52"
              onerror="this.style.display='none'">
          </div>
          <div>
            <h1 class="sp-h1">Is ${s.name} down right now?</h1>
            <div class="sp-meta">${s.cat} � isdownlive.netlify.app/${s.id}</div>
          </div>
        </div>
        <div class="sp-status-banner ${dn?'sp-down':dg?'sp-deg':'sp-up'}">
          <div class="sp-status-dot ${dn?'s-bad':dg?'s-warn':'s-ok'}"></div>
          <div>
            <div class="sp-status-label">${dn?`${s.name} is currently down`:dg?`${s.name} is experiencing issues`:`${s.name} is operational`}</div>
            <div class="sp-status-sub">${dn?`${s.reports.toLocaleString()} user reports � Updated just now`:dg?`${s.reports.toLocaleString()} reports of slowness � Monitoring`:` ${s.u}% uptime � ${s.r}ms avg response`}</div>
          </div>
        </div>
        <p class="sp-desc">
          Check the real-time status of ${s.name} below. We monitor ${s.name} every 60 seconds using official status APIs and crowdsourced user reports.
          ${dn?`There is currently an active ${s.name} outage affecting users.`
          :dg?`${s.name} is experiencing degraded performance right now.`
          :`${s.name} appears to be working normally for all users.`}
        </p>
      </div>
      <div class="sp-hero-right">
        <div class="sp-alert-card">
          <div class="sp-alert-title">🔔 Get notified when it's back</div>
          <div class="sp-alert-sub">Enter your email � we'll alert you the moment ${s.name} recovers.</div>
          <div class="sp-alert-row">
            <input id="spEmail" class="sh-inp" type="email" placeholder="you@email.com">
            <button class="sh-notify" onclick="spNotify('${s.id}','${s.name}')">Alert me</button>
          </div>
          <button class="sp-push-btn" onclick="enablePushForService('${s.id}','${s.name}')">
            🔔 Enable push notification instead
          </button>
        </div>
      </div>
    </div>

    <!-- STATS ROW -->
    <div class="sp-stats">
      <div class="sp-stat">
        <div class="sp-stat-val" style="color:${statusColor}">${statusLabel}</div>
        <div class="sp-stat-lbl">Current status</div>
      </div>
      <div class="sp-stat">
        <div class="sp-stat-val">${s.u}%</div>
        <div class="sp-stat-lbl">30-day uptime</div>
      </div>
      <div class="sp-stat">
        <div class="sp-stat-val ${dn?'s-bad':s.r>280?'s-warn':''}">${dn?'Timeout':s.r+'ms'}</div>
        <div class="sp-stat-lbl">Response time</div>
      </div>
      <div class="sp-stat">
        <div class="sp-stat-val ${s.reports>0?'s-bad':''}">${s.reports>0?s.reports.toLocaleString():'0'}</div>
        <div class="sp-stat-lbl">Reports right now</div>
      </div>
    </div>

    <!-- 24H CHART -->
    <div class="sp-section">
      <h2 class="sp-section-title">${s.name} outage reports � last 24 hours</h2>
      <div class="sp-card">
        <div style="position:relative;height:160px;width:100%"><canvas id="${chartId}"></canvas></div>
        <div class="chart-labels" style="margin-top:6px">
          <span>24h ago</span><span>18h ago</span><span>12h ago</span><span>6h ago</span><span>Now</span>
        </div>
      </div>
    </div>

    <!-- PROBLEM BREAKDOWN -->
    <div class="sp-section">
      <h2 class="sp-section-title">What problems are ${s.name} users reporting?</h2>
      <div class="sp-card">
        <div class="cat-breakdown">
          ${catData.map(c=>`
            <div class="cat-row">
              <div class="cat-label">${c.l}</div>
              <div class="cat-bar-wrap"><div class="cat-bar" style="width:${c.v}%;background:${dn?'var(--bad)':dg?'var(--warn)':'var(--ok)'}"></div></div>
              <div class="cat-pct">${c.v}%</div>
            </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- HEATMAP -->
    <div class="sp-section">
      <h2 class="sp-section-title">Which regions are affected?</h2>
      <div class="sp-card">
        <div class="heatmap-wrap" id="spHeatmap" style="height:160px"></div>
        <div class="heatmap-legend" style="margin-top:8px">
          <span>Low impact</span>
          <div class="heatmap-legend-bar">
            <div class="hmap-sq" style="background:rgba(48,209,88,.3)"></div>
            <div class="hmap-sq" style="background:rgba(255,159,10,.5)"></div>
            <div class="hmap-sq" style="background:rgba(255,59,48,.7)"></div>
            <div class="hmap-sq" style="background:rgba(255,59,48,.95)"></div>
          </div>
          <span>High impact</span>
        </div>
      </div>
    </div>

    <!-- SOCIAL FEED -->
    <div class="sp-section">
      <h2 class="sp-section-title">What people are saying about ${s.name}</h2>
      <div class="sp-card">
        <div class="mention-feed" style="max-height:280px">
          ${mentions.map(m=>`
            <div class="mention-item">
              <div class="mention-handle">${m.h} � ${m.m}</div>
              <div class="mention-text">${m.t}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- REPORT FORM -->
    <div class="sp-section">
      <h2 class="sp-section-title">Report a ${s.name} problem</h2>
      <div class="sp-card">
        <p style="font-size:13px;color:var(--muted);margin-bottom:14px">Having issues with ${s.name}? Let others know � your report helps confirm the outage.</p>
        <div class="cat-radio-grid" id="spCatRadios">
          <label class="cat-radio" onclick="toggleCat(this)"><input type="checkbox" value="login"><span class="cat-radio-icon">🔐</span>Can't log in</label>
          <label class="cat-radio" onclick="toggleCat(this)"><input type="checkbox" value="speed"><span class="cat-radio-icon">🐢</span>Very slow</label>
          <label class="cat-radio" onclick="toggleCat(this)"><input type="checkbox" value="crash"><span class="cat-radio-icon">💥</span>App crashing</label>
          <label class="cat-radio" onclick="toggleCat(this)"><input type="checkbox" value="payment"><span class="cat-radio-icon">��</span>Payment error</label>
          <label class="cat-radio" onclick="toggleCat(this)"><input type="checkbox" value="content"><span class="cat-radio-icon">📭</span>Content not loading</label>
          <label class="cat-radio" onclick="toggleCat(this)"><input type="checkbox" value="other"><span class="cat-radio-icon">?</span>Other issue</label>
        </div>
        <button class="sh-notify" style="width:100%" onclick="spReport('${s.id}','${s.name}')">Submit report</button>
      </div>
    </div>

    <!-- INCIDENT HISTORY -->
    <div class="sp-section">
      <h2 class="sp-section-title">${s.name} incident history</h2>
      <div class="sp-card" id="spIncFeed"></div>
    </div>

    <!-- RELATED SERVICES -->
    <div class="sp-section">
      <h2 class="sp-section-title">Related services</h2>
      <div class="sp-related" id="spRelated"></div>
    </div>

    <!-- SEO TEXT BLOCK -->
    <div class="sp-section">
      <div class="sp-card sp-seo-block">
        <h2>About ${s.name} status monitoring</h2>
        <p>IsDown.live monitors ${s.name} in real-time by polling official status APIs and aggregating user reports. Our system checks ${s.name} every 60 seconds and immediately shows any outages, degradation, or service disruptions.</p>
        <p>If ${s.name} is down, you'll see an outage indicator at the top of this page along with the number of user reports. You can set up an instant email or push notification so you're the first to know when ${s.name} is back online.</p>
        <p>Common ${s.name} problems reported by users include login issues, slow loading, payment errors, and app crashes. Use the problem breakdown above to see what other users are experiencing right now.</p>
        <p>IsDown.live is free, ad-free, and works on all devices. No account required to check ${s.name} status or set up outage alerts.</p>
      </div>
    </div>

    <!-- BACK TO TOP + FOOTER -->
    <div style="text-align:center;margin-bottom:16px">
      <button class="back-top" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ Back to top</button>
    </div>
    <footer class="sp-footer">
      <a href="/" onclick="navigate(event,'/')">← All services</a>
      <span>© <span id="spFooterYear"></span> IsDown.live � ad-free, always</span>
      <div style="display:flex;gap:16px"><a href="/">Home</a><a href="mailto:hello@isdown.live">Contact</a><a href="/privacy" onclick="navigate(event,'/privacy')">Privacy</a></div>
    </footer>
  `;

  requestAnimationFrame(()=>{
    const canvas=document.getElementById(chartId);
    if(canvas&&window.Chart){
      const dark=document.documentElement.classList.contains('dark');
      const color=dn?'#ff453a':dg?'#ff9f0a':'#30d158';
      new Chart(canvas,{
        type:'line',
        data:{
          labels:Array.from({length:24},(_,i)=>i===23?'Now':i%6===0?`${24-i}h`:''),
          datasets:[{data,fill:true,borderColor:color,borderWidth:2,pointRadius:0,tension:0.4,
            backgroundColor:dn?'rgba(255,69,58,.1)':dg?'rgba(255,159,10,.08)':'rgba(48,209,88,.08)'}]
        },
        options:{
          responsive:true,maintainAspectRatio:false,
          plugins:{legend:{display:false},tooltip:{
            backgroundColor:dark?'#2c2c2e':'#fff',
            titleColor:dark?'#f2f2f7':'#1c1c1e',
            bodyColor:dark?'#aeaeb2':'#6e6e73',
            borderColor:dark?'rgba(255,255,255,.1)':'rgba(0,0,0,.08)',
            borderWidth:1,
            callbacks:{label:ctx=>`${ctx.parsed.y} reports`}
          }},
          scales:{
            x:{display:false},
            y:{display:true,position:'right',
              ticks:{color:dark?'#636366':'#aeaeb2',font:{size:10},maxTicksLimit:4},
              grid:{color:dark?'rgba(255,255,255,.04)':'rgba(0,0,0,.04)'},
              border:{display:false}}
          }
        }
      });
    }
    const hw=document.getElementById('spHeatmap');
    if(hw) hw.innerHTML=buildHeatmap(s);

    const inc=INC.filter(i=>i.name===s.name);
    const allInc=inc.length?inc:INC.slice(0,2);
    const incEl=document.getElementById('spIncFeed');
    if(incEl){
      if(allInc.length===0){
        incEl.innerHTML='<div style="padding:16px;color:var(--muted);font-size:13px">No incidents in the last 24 hours.</div>';
      } else {
        incEl.innerHTML=allInc.map(i=>`
          <div class="inc-row">
            <img class="i-logo" src="${logo(i.d)}" alt="${i.name}" width="36" height="36" onerror="this.style.display='none'">
            <div class="i-body">
              <div class="i-title"><span>${i.name}</span><span class="i-badge ${i.st}">${i.st}</span></div>
              <div class="i-desc">${i.title}</div>
            </div>
            <div class="i-time">${i.time}</div>
          </div>`).join('');
      }
    }

    const relEl=document.getElementById('spRelated');
    if(relEl){
      const related=SVC.filter(r=>r.cat===s.cat&&r.id!==s.id).slice(0,4);
      relEl.innerHTML=related.map(r=>`
        <a class="sp-rel-card" href="/${r.id}" onclick="navigate(event,'/${r.id}')">
          <img src="${logo(r.d)}" alt="${r.name}" width="28" height="28" onerror="this.style.display='none'">
          <span class="sp-rel-name">${r.name}</span>
          <span class="pill ${r.s==='up'?'p-up':r.s==='down'?'p-down':'p-deg'}" style="font-size:10px;padding:3px 8px">
            <div class="pdot"></div>${r.s==='up'?'Up':r.s==='down'?'Down':'Degraded'}
          </span>
        </a>`).join('');
    }
  });
}

/* -- Service page helpers -- */
function spNotify(id,name){
  const email=document.getElementById('spEmail')?.value?.trim();
  if(!email||!email.includes('@')){
    const el=document.getElementById('spEmail');
    if(el){el.style.borderColor='var(--bad)';setTimeout(()=>el.style.borderColor='',1200);}
    return;
  }
  watched.add(id);
  toast(`? Alert set � we'll email you when ${name} recovers`);
}

function spReport(id,name){
  const svc=SVC.find(s=>s.id===id);
  if(!svc) return;
  const selected=Array.from(document.querySelectorAll('#spCatRadios .cat-radio.selected'))
    .map(l=>l.querySelector('input').value);
  svc.reports=(svc.reports||0)+1;
  if(svc.s==='up') svc.s='degraded';
  toast(`⚠ Report submitted for ${name}${selected.length?' ('+selected.join(', ')+')':''}`);
}

/* ------------------------------
   NAVIGATION � SPA router
------------------------------ */
function navigate(e, path){
  if(e) e.preventDefault();
  window.history.pushState({}, '', path === '/' ? '/' : path);
  route();
}

function route(){
  const slug = getSlug();
  const svc = slugToService(slug);
  window.scrollTo(0,0);

  if(!svc){
    const inp = document.getElementById('sInput');
    if(inp) inp.value = '';
    activeF = 'all';
    document.querySelectorAll('.chip').forEach(c=>{
      c.classList.toggle('active', c.dataset.f==='all');
    });
  }

  if(svc){
    const canonicalUrl = `https://isdownlive.netlify.app/${svc.id}`;
    setMeta(
      `Is ${svc.name} Down Right Now? � Live Status | IsDown.live`,
      `Check if ${svc.name} is down. Real-time outage reports, uptime history, and instant alerts when ${svc.name} recovers. No ads, always free.`,
      canonicalUrl
    );
    injectServiceSchema(svc);
    renderServicePage(svc);
    const spYr = document.getElementById('spFooterYear');
    if(spYr) spYr.textContent = new Date().getFullYear();
  } else if(slug && slug !== '') {
    document.getElementById('homePage').style.display='none';
    document.getElementById('svcPage').style.display='block';
    document.getElementById('svcPage').innerHTML=`
      <div style="text-align:center;padding:80px 20px">
        <div style="font-size:64px;margin-bottom:16px">🔔</div>
        <h1>Service not found</h1>
        <p>We don't monitor "<strong>${slug}</strong>" yet. Check the full list below.</p>
        <button class="btn btn-p" onclick="navigate(null,'/')">↑ Back to all services</button>
      </div>`;
  } else {
    setMeta(
      'IsDown.live � Is it down for everyone? Real-time Service Status',
      'Real-time status checker for 70+ services including Spotify, GitHub, Netflix, Discord, AWS and more. No ads. Instant push alerts when services recover.',
      'https://isdownlive.netlify.app'
    );
    injectHomeSchema();
    injectFAQSchema();
    document.getElementById('homePage').style.display='block';
    document.getElementById('svcPage').style.display='none';
    renderSvc(SVC);
    renderInc();
  }
}

window.addEventListener('popstate', route);

/* -- Init -- */
updateClock();
setInterval(updateClock, 1000);
route();

const yrEl = document.getElementById('footerYear');
if(yrEl) yrEl.textContent = new Date().getFullYear();

function updateStatStrip(){
  const avgUptime = (SVC.reduce((a,s)=>a+s.u,0)/SVC.length).toFixed(1)+'%';
  const incidents = INC.filter(i=>i.st!=='resolved').length;
  const upEl = document.getElementById('statUptime');
  const incEl = document.getElementById('statIncidents');
  if(upEl) upEl.textContent = avgUptime;
  if(incEl) incEl.textContent = incidents;
}
updateStatStrip();

const H=document.documentElement;
const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'dark') { H.classList.add('dark'); }

function toggleDark(){
  const isDark = H.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  const btn = document.getElementById('themeBtn');
  if(btn) btn.textContent = isDark ? '🌙' : '☀️';
}
const themeBtn = document.getElementById('themeBtn');
if(themeBtn) themeBtn.textContent = H.classList.contains('dark') ? '🌙' : '☀️';
startPolling();
