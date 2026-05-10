/* ════════════════════════ STATE ════════════════════════ */
const KEY = 'sam_cv_v2';

const DEFAULTS = {
  ar:{
    name1:'سام اسكندر',name2:'الكاهلي',
    badge:'✦ مطور حلول تقنية & مدير عمليات المتاجر ✦',
    subPrefix:'متخصص في ',
    typing:['تطوير الويب (Full-Stack)','الربط البرمجي السلس (سلة)','إدارة المتاجر الإلكترونية','تحليل البيانات','برمجة مكائن الليزر (EZCAD2)'],
    desc:'أطوع البرمجة والتقنية لخدمة الأعمال والتجارة الإلكترونية. متخصص في بناء المنصات (مثل Postertic) وتنفيذ الربط البرمجي الاحترافي مع منصات مثل "سلة" لضمان تجربة شراء سلسة ومضاعفة المبيعات.',
    cta1:'تواصل معي ✦',cta2:'الخبرات المهنية',
    scroll:'اسحب للأسفل',
    footer:'صُمّم بـ ✦ لـ سام اسكندر الكاهلي · جميع الحقوق محفوظة © 2026',
    aboutTitle:'من أنا؟',
    aboutP1:'أنا مطور تقني وشخص اجتماعي ومرح. أستمتع جداً بإيجاد حلول تقنية ذكية للمشاكل المعقدة في التجارة الإلكترونية لتسهيل تجربة العميل.',
    aboutP2:'بعيداً عن الأكواد، أوازن حياتي بالالتزام في النادي (كمال أجسام)، ولعب البادل، والسباحة. من مشجعي كرة القدم الشغوفين، وأحب السفر المستمر (الرياض، نجران، جدة)، وتجربة مقاهي القهوة المختصة مع الأصدقاء.',
    stats:[{n:'+3',l:'سنوات خبرة'},{n:'Expert',l:'إدارة متاجر سلة'},{n:'100%',l:'ربط برمجي بدون ثغرات'},{n:'Full-Stack',l:'تطوير ويب'}],
    expTitle:'المسيرة المهنية والمشاريع',
    experience:[
      {period:'مشروع مستمر',role:'المؤسس والمطور الرئيسي',company:'Postertic Brand',points:['تأسيس وبناء معرض خارجي مستقل للعلامة التجارية باستخدام تقنيات الويب الحديثة (Python, Flask, Firebase).','تنفيذ ربط برمجي سلس، سريع، وآمن جداً مع منصة "سلة" لنقل البيانات.','ضمان استقرار الربط بدون أي ثغرات أو تعليق (Zero Downtime)، مما ضاعف المبيعات.','تصميم الهوية البصرية والمنتجات (مطبوعات ماتيه كلاسيكية) باستخدام فوتوشوب.']},
      {period:'يناير 2026 — الآن',role:'المدير العام (General Manager)',company:'متجر سوتار الإلكتروني (Soutar)',points:['إدارة العمليات التشغيلية والإدارية للمتجر على منصة سلة، مع التركيز على نمو المبيعات وتحليل البيانات.']},
      {period:'يناير 2023 — الآن',role:'مطور تقني ومصمم جرافيكس',company:'قصر ميان للتجارة، الرياض',points:['تطوير حلول برمجية ساهمت في تحسين أداء الأنظمة ورفع جودة تفاعل المستخدم.','تصميم أعمال جرافيكية جذابة عزّزت هوية العلامة التجارية وزادت من تفاعل العملاء.']}
    ],
    skTitle:'الكفاءات التقنية والعملية',
    skills:[
      {n:'الربط البرمجي السلس (سلة)',p:98,l:'Expert'},
      {n:'تطوير الويب (HTML, CSS, JS)',p:90,l:'Expert'},
      {n:'إدارة المتاجر الإلكترونية (سلة)',p:95,l:'Expert'},
      {n:'Python & Flask',p:85,l:'Advanced'},
      {n:'Firebase & Firestore',p:80,l:'Advanced'},
      {n:'UI/UX & Photoshop',p:85,l:'Advanced'},
      {n:'تحليل البيانات وسلوك العملاء',p:88,l:'Advanced'},
      {n:'صيانة الهاردوير وترقية الـ PC',p:80,l:'Advanced'},
      {n:'برمجة مكائن الليزر (EZCAD2)',p:75,l:'Intermediate'}
    ],
    eduTitle:'المسيرة التعليمية',
    education:[{ico:'<i class="bx bxs-graduation"></i>',deg:'جامعة تونتك الماليزية',field:'تكنولوجيا المعلومات والحوسبة',period:'فبراير 2019 — يونيو 2022',loc:'📍 صنعاء، اليمن'}],
    ctTitle:'تواصل معي',
    phone:'+966 55 360 7176',phoneHref:'tel:+966553607176',
    email:'samalkahli@gmail.com',emailHref:'mailto:samalkahli@gmail.com',
    address:'الديرة، الرياض 12663',project:'معرض أعمالي (Postertic)'
  },
  en:{
    name1:'Sam Iskandar',name2:'Al-Kahli',
    badge:'✦ Tech Solutions Developer & E-Commerce Manager ✦',
    subPrefix:'Specializing in ',
    typing:['Full-Stack Web Dev','Seamless API Integrations','E-Commerce Management','Data & Behavior Analysis','Laser Engraving (EZCAD2)'],
    desc:'I leverage programming to serve e-commerce. Specializing in building platforms (like Postertic) and executing professional API integrations with platforms like "Salla" to ensure a frictionless shopping experience and boost sales.',
    cta1:'Get In Touch ✦',cta2:'View Experience',
    scroll:'Scroll Down',
    footer:'Crafted with ✦ for Sam Iskandar Al-Kahli · All Rights Reserved © 2026',
    aboutTitle:'Who Am I?',
    aboutP1:'I am a tech developer with a sociable and cheerful personality. I thoroughly enjoy finding smart technical solutions to complex e-commerce problems, optimizing store integrations to make users\' lives easier.',
    aboutP2:'Away from code, I balance my life by staying committed to the gym (bodybuilding), playing Padel, and swimming. I am a passionate soccer fan, love traveling (Riyadh, Najran, Jeddah), and exploring specialty coffee shops.',
    stats:[{n:'+3',l:'Years Experience'},{n:'Expert',l:'Salla E-Commerce'},{n:'100%',l:'Bug-free Integrations'},{n:'Full-Stack',l:'Web Dev'}],
    expTitle:'Experience & Projects',
    experience:[
      {period:'Ongoing Project',role:'Founder & Lead Developer',company:'Postertic Brand',points:['Built an independent external gallery for the brand using modern web tech (Python, Flask, Firebase).','Executed a seamless, lightning-fast, and secure API integration with the "Salla" platform.','Ensured high stability with zero bugs or downtime, significantly boosting sales.','Designed visual identity and products (classic matte designs) using Photoshop.']},
      {period:'Jan 2026 — Present',role:'General Manager',company:'Soutar E-commerce Store',points:['Managing operations on the Salla platform, focusing on sales growth and data analysis.']},
      {period:'Jan 2023 — Present',role:'Tech Developer & Graphic Designer',company:'Qasr Myan Trading, Riyadh',points:['Developed custom software solutions to optimize systems and improve user interaction.','Created compelling graphic designs that strengthened brand presence.']}
    ],
    skTitle:'Technical Competencies',
    skills:[
      {n:'Seamless API Integrations (Salla)',p:98,l:'Expert'},
      {n:'Web Dev (HTML, CSS, JS)',p:90,l:'Expert'},
      {n:'E-Commerce Management',p:95,l:'Expert'},
      {n:'Python & Flask',p:85,l:'Advanced'},
      {n:'Firebase & Firestore',p:80,l:'Advanced'},
      {n:'UI/UX & Photoshop',p:85,l:'Advanced'},
      {n:'Data & Behavior Analysis',p:88,l:'Advanced'},
      {n:'PC Hardware Maintenance',p:80,l:'Advanced'},
      {n:'Laser Engraving (EZCAD2)',p:75,l:'Intermediate'}
    ],
    eduTitle:'Academic Background',
    education:[{ico:'<i class="bx bxs-graduation"></i>',deg:'TONTEC Malaysian University',field:'Information Technology & Computing',period:'Feb 2019 — Jun 2022',loc:'📍 Sana\'a, Yemen'}],
    ctTitle:'Get In Touch',
    phoneLbl:'Phone',emailLbl:'Email',addrLbl:'Location',
    addrVal:'Al-Darah, Riyadh 12663',projLbl:'Projects',projVal:'My Gallery (Postertic)'
  },
  colors:{gold:'#C9A84C',goldL:'#E8C97A',goldD:'#7a6129',bg:'#080808',bg2:'#0e0e0e',tx:'#e8e0d0',tx2:'#8a8070'},
  sections:{about:true,experience:true,skills:true,education:true,languages:true,contact:true}
};

function loadState(){ try{ const s=localStorage.getItem(KEY); return s?JSON.parse(s):JSON.parse(JSON.stringify(DEFAULTS)); }catch(e){return JSON.parse(JSON.stringify(DEFAULTS));} }
function saveState(s){ localStorage.setItem(KEY,JSON.stringify(s)); }

let S = loadState();

/* ════════════════════════ SIDEBAR TABS ════════════════════════ */
document.querySelectorAll('.sb-item').forEach(item=>{
  item.addEventListener('click',()=>{
    document.querySelectorAll('.sb-item').forEach(i=>i.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    item.classList.add('active');
    const panel = document.getElementById('panel-'+item.dataset.panel);
    if(panel) panel.classList.add('active');
  });
});

/* ════════════════════════ RENDER ADMIN FROM STATE ════════════════════════ */
function renderAdmin(){
  const ar=S.ar, en=S.en;
  setVal('ar-name1',ar.name1);setVal('ar-name2',ar.name2);
  setVal('ar-badge',ar.badge);setVal('ar-subPrefix',ar.subPrefix);
  setVal('ar-typing',ar.typing.join('\n'));setVal('ar-desc',ar.desc);
  setVal('ar-cta1',ar.cta1);setVal('ar-cta2',ar.cta2);
  setVal('ar-scroll',ar.scroll);setVal('ar-footer',ar.footer);
  setVal('ar-aboutTitle',ar.aboutTitle);setVal('ar-aboutP1',ar.aboutP1);setVal('ar-aboutP2',ar.aboutP2);
  setVal('ar-expTitle',ar.expTitle);setVal('ar-skTitle',ar.skTitle);
  setVal('ar-eduTitle',ar.eduTitle);setVal('ar-ctTitle',ar.ctTitle);
  setVal('ar-phone',ar.phone);setVal('ar-phone-href',ar.phoneHref);
  setVal('ar-email',ar.email);setVal('ar-email-href',ar.emailHref);
  setVal('ar-address',ar.address);setVal('ar-project',ar.project);
  
  setVal('en-name1',en.name1);setVal('en-name2',en.name2);
  setVal('en-badge',en.badge);setVal('en-subPrefix',en.subPrefix);
  setVal('en-typing',en.typing.join('\n'));setVal('en-desc',en.desc);
  setVal('en-cta1',en.cta1);setVal('en-cta2',en.cta2);
  setVal('en-scroll',en.scroll);setVal('en-footer',en.footer);
  setVal('en-aboutTitle',en.aboutTitle);setVal('en-aboutP1',en.aboutP1);setVal('en-aboutP2',en.aboutP2);
  setVal('en-expTitle',en.expTitle);setVal('en-skTitle',en.skTitle);
  setVal('en-eduTitle',en.eduTitle);setVal('en-ctTitle',en.ctTitle);
  setVal('en-phoneLbl',en.phoneLbl);setVal('en-emailLbl',en.emailLbl);
  setVal('en-addrLbl',en.addrLbl);setVal('en-addrVal',en.addrVal);
  setVal('en-projLbl',en.projLbl);setVal('en-projVal',en.projVal);
  
  renderStats('ar',ar.stats);renderStats('en',en.stats);
  renderExp('ar',ar.experience);renderExp('en',en.experience);
  renderSkills('ar',ar.skills);renderSkills('en',en.skills);
  renderEdu('ar',ar.education);renderEdu('en',en.education);
  
  renderColorPickers();
  document.querySelectorAll('[data-sec]').forEach(el=>{ el.checked=S.sections[el.dataset.sec]!==false; });
}

function setVal(id,val){ const el=document.getElementById(id); if(el) el.value=val||''; }

function renderStats(lang,stats){
  const grid=document.getElementById(lang+'-stats-grid');
  if(!grid) return;
  grid.innerHTML=stats.map((s,i)=>`
    <div style="background:var(--bg4);border:1px solid var(--bdr2);border-radius:var(--r);padding:.8rem;display:flex;flex-direction:column;gap:.4rem">
      <input class="f-input" data-lang="${lang}" data-stat="${i}" data-f="n" value="${s.n}" placeholder="رقم / Number" style="font-weight:700">
      <input class="f-input" data-lang="${lang}" data-stat="${i}" data-f="l" value="${s.l}" placeholder="تسمية / Label">
    </div>`).join('');
}

function renderExp(lang,exp){
  const list=document.getElementById(lang+'-exp-list');
  if(!list) return;
  list.innerHTML=exp.map((e,i)=>`
    <div class="list-item" id="${lang}-exp-${i}">
      <div class="list-item-head" data-toggle="${lang}-exp-${i}">
        <span class="list-item-title">${e.role||'New Experience'}</span>
        <button class="del-btn" data-del-exp="${lang}-${i}" onclick="event.stopPropagation()"><i class='bx bx-trash'></i></button>
        <span class="list-item-arrow"><i class='bx bx-chevron-down'></i></span>
      </div>
      <div class="list-item-body">
        <div class="f-grid" style="margin-bottom:.8rem">
          <div class="f-grid f-grid-2">
            <div class="f-group"><label class="f-label">Period</label><input class="f-input" data-lang="${lang}" data-exp="${i}" data-f="period" value="${e.period}"></div>
            <div class="f-group"><label class="f-label">Role / Title</label><input class="f-input" data-lang="${lang}" data-exp="${i}" data-f="role" value="${e.role}"></div>
          </div>
          <div class="f-group"><label class="f-label">Company</label><input class="f-input" data-lang="${lang}" data-exp="${i}" data-f="company" value="${e.company}"></div>
        </div>
        <div class="f-label" style="margin-bottom:.5rem">Tasks / Achievements</div>
        <div class="points-wrap" id="${lang}-exp-points-${i}">
          ${e.points.map((p,pi)=>`
          <div class="point-row">
            <input class="f-input" data-lang="${lang}" data-exp="${i}" data-pt="${pi}" value="${p}">
            <button class="del-btn" data-del-pt="${lang}-${i}-${pi}"><i class='bx bx-x'></i></button>
          </div>`).join('')}
        </div>
        <button class="add-btn" style="margin-top:.4rem;padding:.5rem;font-size:.76rem" data-add-pt="${lang}-${i}"><i class='bx bx-plus'></i> Add Task</button>
      </div>
    </div>`).join('');
}

function renderSkills(lang,skills){
  const list=document.getElementById(lang+'-sk-list');
  if(!list) return;
  list.innerHTML=skills.map((s,i)=>`
    <div class="list-item">
      <div class="list-item-head" data-toggle-sk="${lang}-sk-body-${i}">
        <span class="list-item-title">${s.n}</span>
        <button class="del-btn" data-del-sk="${lang}-${i}" onclick="event.stopPropagation()"><i class='bx bx-trash'></i></button>
        <span class="list-item-arrow"><i class='bx bx-chevron-down'></i></span>
      </div>
      <div class="list-item-body" id="${lang}-sk-body-${i}">
        <div class="f-grid">
          <div class="f-group"><label class="f-label">Skill Name</label><input class="f-input" data-lang="${lang}" data-sk="${i}" data-f="n" value="${s.n}"></div>
          <div class="f-grid f-grid-2">
            <div class="f-group"><label class="f-label">Percentage (0-100)</label><input class="f-input" type="number" min="0" max="100" data-lang="${lang}" data-sk="${i}" data-f="p" value="${s.p}"></div>
            <div class="f-group"><label class="f-label">Level</label>
              <select class="f-select" data-lang="${lang}" data-sk="${i}" data-f="l">
                <option ${s.l==='Beginner'?'selected':''}>Beginner</option>
                <option ${s.l==='Intermediate'?'selected':''}>Intermediate</option>
                <option ${s.l==='Advanced'?'selected':''}>Advanced</option>
                <option ${s.l==='Expert'?'selected':''}>Expert</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>`).join('');
}

function renderEdu(lang,edu){
  const list=document.getElementById(lang+'-edu-list');
  if(!list) return;
  list.innerHTML=edu.map((e,i)=>`
    <div class="list-item">
      <div class="list-item-head" data-toggle-edu="${lang}-edu-body-${i}">
        <span class="list-item-title">${e.deg}</span>
        <button class="del-btn" data-del-edu="${lang}-${i}" onclick="event.stopPropagation()"><i class='bx bx-trash'></i></button>
        <span class="list-item-arrow"><i class='bx bx-chevron-down'></i></span>
      </div>
      <div class="list-item-body" id="${lang}-edu-body-${i}">
        <div class="f-grid">
          <div class="f-grid f-grid-2">
            <div class="f-group"><label class="f-label">Icon (HTML/Emoji)</label><input class="f-input" data-lang="${lang}" data-edu="${i}" data-f="ico" value='${e.ico}'></div>
            <div class="f-group"><label class="f-label">Institution Name</label><input class="f-input" data-lang="${lang}" data-edu="${i}" data-f="deg" value="${e.deg}"></div>
          </div>
          <div class="f-group"><label class="f-label">Field / Major</label><input class="f-input" data-lang="${lang}" data-edu="${i}" data-f="field" value="${e.field}"></div>
          <div class="f-grid f-grid-2">
            <div class="f-group"><label class="f-label">Period</label><input class="f-input" data-lang="${lang}" data-edu="${i}" data-f="period" value="${e.period}"></div>
            <div class="f-group"><label class="f-label">Location</label><input class="f-input" data-lang="${lang}" data-edu="${i}" data-f="loc" value="${e.loc}"></div>
          </div>
        </div>
      </div>
    </div>`).join('');
}

const COLOR_FIELDS=[
  {key:'gold',label:'الذهبي / Gold'},{key:'goldL',label:'ذهبي فاتح / Light Gold'},
  {key:'goldD',label:'ذهبي داكن / Dark Gold'},{key:'bg',label:'الخلفية / Background'},
  {key:'bg2',label:'خلفية ثانوية / BG2'},{key:'tx',label:'النص / Text'},
  {key:'tx2',label:'نص خافت / Dim Text'}
];
function renderColorPickers(){
  const wrap=document.getElementById('color-pickers');
  wrap.innerHTML=COLOR_FIELDS.map(f=>`
    <div class="color-item">
      <div class="f-label">${f.label}</div>
      <div class="color-row">
        <div class="c-swatch" id="csw-${f.key}" style="background:${S.colors[f.key]||'#888'}" onclick="document.getElementById('ccp-${f.key}').click()"></div>
        <input type="color" id="ccp-${f.key}" value="${S.colors[f.key]||'#888888'}">
        <input class="c-hex f-input" id="chx-${f.key}" value="${S.colors[f.key]||'#888888'}" maxlength="7" style="font-family:monospace">
      </div>
    </div>`).join('');
  COLOR_FIELDS.forEach(f=>{
    const cp=document.getElementById('ccp-'+f.key);
    const sw=document.getElementById('csw-'+f.key);
    const hx=document.getElementById('chx-'+f.key);
    cp.addEventListener('input',()=>{ sw.style.background=cp.value; hx.value=cp.value; S.colors[f.key]=cp.value; });
    hx.addEventListener('input',()=>{ if(/^#[0-9a-fA-F]{6}$/.test(hx.value)){ cp.value=hx.value; sw.style.background=hx.value; S.colors[f.key]=hx.value; } });
  });
}

function collectState(){
  const ar=S.ar, en=S.en;
  ar.name1=gv('ar-name1');ar.name2=gv('ar-name2');ar.badge=gv('ar-badge');ar.subPrefix=gv('ar-subPrefix');
  ar.typing=gv('ar-typing').split('\n').filter(l=>l.trim());ar.desc=gv('ar-desc');
  ar.cta1=gv('ar-cta1');ar.cta2=gv('ar-cta2');ar.scroll=gv('ar-scroll');ar.footer=gv('ar-footer');
  ar.aboutTitle=gv('ar-aboutTitle');ar.aboutP1=gv('ar-aboutP1');ar.aboutP2=gv('ar-aboutP2');
  ar.expTitle=gv('ar-expTitle');ar.skTitle=gv('ar-skTitle');ar.eduTitle=gv('ar-eduTitle');ar.ctTitle=gv('ar-ctTitle');
  ar.phone=gv('ar-phone');ar.phoneHref=gv('ar-phone-href');ar.email=gv('ar-email');ar.emailHref=gv('ar-email-href');
  ar.address=gv('ar-address');ar.project=gv('ar-project');

  en.name1=gv('en-name1');en.name2=gv('en-name2');en.badge=gv('en-badge');en.subPrefix=gv('en-subPrefix');
  en.typing=gv('en-typing').split('\n').filter(l=>l.trim());en.desc=gv('en-desc');
  en.cta1=gv('en-cta1');en.cta2=gv('en-cta2');en.scroll=gv('en-scroll');en.footer=gv('en-footer');
  en.aboutTitle=gv('en-aboutTitle');en.aboutP1=gv('en-aboutP1');en.aboutP2=gv('en-aboutP2');
  en.expTitle=gv('en-expTitle');en.skTitle=gv('en-skTitle');en.eduTitle=gv('en-eduTitle');en.ctTitle=gv('en-ctTitle');
  en.phoneLbl=gv('en-phoneLbl');en.emailLbl=gv('en-emailLbl');en.addrLbl=gv('en-addrLbl');
  en.addrVal=gv('en-addrVal');en.projLbl=gv('en-projLbl');en.projVal=gv('en-projVal');

  document.querySelectorAll('[data-stat]').forEach(el=>{
    const lang=el.dataset.lang,i=+el.dataset.stat,f=el.dataset.f;
    if(S[lang]&&S[lang].stats[i]) S[lang].stats[i][f]=el.value;
  });
  document.querySelectorAll('[data-exp][data-f]').forEach(el=>{
    const lang=el.dataset.lang,i=+el.dataset.exp,f=el.dataset.f;
    if(S[lang]&&S[lang].experience[i]) S[lang].experience[i][f]=el.value;
  });
  document.querySelectorAll('[data-pt]').forEach(el=>{
    const lang=el.dataset.lang,i=+el.dataset.exp,pi=+el.dataset.pt;
    if(S[lang]&&S[lang].experience[i]&&S[lang].experience[i].points[pi]!==undefined) S[lang].experience[i].points[pi]=el.value;
  });
  document.querySelectorAll('[data-sk][data-f]').forEach(el=>{
    const lang=el.dataset.lang,i=+el.dataset.sk,f=el.dataset.f;
    if(S[lang]&&S[lang].skills[i]) S[lang].skills[i][f]=f==='p'?+el.value:el.value;
  });
  document.querySelectorAll('[data-edu][data-f]').forEach(el=>{
    const lang=el.dataset.lang,i=+el.dataset.edu,f=el.dataset.f;
    if(S[lang]&&S[lang].education[i]) S[lang].education[i][f]=el.value;
  });
  document.querySelectorAll('[data-sec]').forEach(el=>{ S.sections[el.dataset.sec]=el.checked; });
}

function gv(id){ const el=document.getElementById(id); return el?el.value:''; }

document.getElementById('main').addEventListener('click',e=>{
  const t=e.target;
  const btn = t.closest('button, .list-item-head');
  if(!btn) return;

  if(btn.dataset.toggle){ const id=btn.dataset.toggle; const item=document.getElementById(id); if(item){item.classList.toggle('open'); item.querySelector('.list-item-body').style.display=item.classList.contains('open')?'block':'none';} }
  if(btn.dataset.toggleSk){ const id=btn.dataset.toggleSk; const body=document.getElementById(id); const item=btn.closest('.list-item'); if(body&&item){item.classList.toggle('open'); body.style.display=item.classList.contains('open')?'block':'none';} }
  if(btn.dataset.toggleEdu){ const id=btn.dataset.toggleEdu; const body=document.getElementById(id); const item=btn.closest('.list-item'); if(body&&item){item.classList.toggle('open'); body.style.display=item.classList.contains('open')?'block':'none';} }

  if(btn.dataset.delExp){ const [lang,i]=btn.dataset.delExp.split('-'); S[lang].experience.splice(+i,1); renderExp(lang,S[lang].experience); }
  if(btn.dataset.delSk){ const [lang,i]=btn.dataset.delSk.split('-'); S[lang].skills.splice(+i,1); renderSkills(lang,S[lang].skills); }
  if(btn.dataset.delEdu){ const [lang,i]=btn.dataset.delEdu.split('-'); S[lang].education.splice(+i,1); renderEdu(lang,S[lang].education); }
  if(btn.dataset.delPt){ const [lang,ei,pi]=btn.dataset.delPt.split('-'); S[lang].experience[+ei].points.splice(+pi,1); renderExp(lang,S[lang].experience); const item=document.getElementById(lang+'-exp-'+ei); item.classList.add('open'); item.querySelector('.list-item-body').style.display='block'; }
  if(btn.dataset.addPt){ const [lang,ei]=btn.dataset.addPt.split('-'); S[lang].experience[+ei].points.push(''); renderExp(lang,S[lang].experience); const item=document.getElementById(lang+'-exp-'+ei); item.classList.add('open'); item.querySelector('.list-item-body').style.display='block'; }
});

document.getElementById('ar-add-exp').onclick=()=>{ S.ar.experience.push({period:'',role:'خبرة جديدة',company:'',points:['']});renderExp('ar',S.ar.experience); };
document.getElementById('en-add-exp').onclick=()=>{ S.en.experience.push({period:'',role:'New Experience',company:'',points:['']});renderExp('en',S.en.experience); };
document.getElementById('ar-add-sk').onclick=()=>{ S.ar.skills.push({n:'مهارة جديدة',p:70,l:'Intermediate'});renderSkills('ar',S.ar.skills); };
document.getElementById('en-add-sk').onclick=()=>{ S.en.skills.push({n:'New Skill',p:70,l:'Intermediate'});renderSkills('en',S.en.skills); };
document.getElementById('ar-add-edu').onclick=()=>{ S.ar.education.push({ico:'<i class="bx bxs-graduation"></i>',deg:'اسم المؤسسة',field:'التخصص',period:'الفترة',loc:'📍 الموقع'});renderEdu('ar',S.ar.education); };
document.getElementById('en-add-edu').onclick=()=>{ S.en.education.push({ico:'<i class="bx bxs-graduation"></i>',deg:'Institution Name',field:'Field',period:'Period',loc:'📍 Location'});renderEdu('en',S.en.education); };

document.querySelectorAll('.preset').forEach(dot=>{
  dot.addEventListener('click',()=>{
    const p=JSON.parse(dot.dataset.p);
    Object.assign(S.colors,p);
    renderColorPickers();
    showToast('✦ تم تطبيق الثيم');
  });
});

document.getElementById('btn-save').addEventListener('click',()=>{
  collectState();
  saveState(S);
  const st=document.getElementById('save-status');
  st.textContent='✓ تم الحفظ';st.className='save-status ok';
  setTimeout(()=>{st.textContent='محفوظ';st.className='save-status ok';},2000);
  showToast('💾 تم الحفظ بنجاح — افتح index.html لترى التغييرات');
});

document.getElementById('btn-reset').addEventListener('click',()=>{
  if(confirm('إعادة تعيين كل البيانات للإعدادات الافتراضية المحدثة الخاصة بك؟')){
      localStorage.removeItem(KEY);
      S=JSON.parse(JSON.stringify(DEFAULTS));
      saveState(S);
      renderAdmin();
      showToast('↺ تمت إعادة التعيين بنجاح'); 
  }
});

function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2800);
}

renderAdmin();
document.getElementById('save-status').textContent=localStorage.getItem(KEY)?'محفوظ مسبقاً ✓':'افتراضي';
if(localStorage.getItem(KEY)) document.getElementById('save-status').className='save-status ok';
