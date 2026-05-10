// البيانات الافتراضية في حال لم تقم بالحفظ من لوحة التحكم بعد
const DEFAULTS = {
  ar: {
    badge: '✦ مطور حلول تقنية & مدير عمليات المتاجر ✦',
    name1: 'سام اسكندر', name2: 'الكاهلي',
    subPrefix: 'متخصص في ',
    typing: ['تطوير الويب (Full-Stack)','الربط البرمجي السلس (سلة)','إدارة المتاجر الإلكترونية','تحليل البيانات وسلوك العملاء','برمجة مكائن الليزر (EZCAD2)'],
    desc: 'أطوع البرمجة والتقنية لخدمة الأعمال والتجارة الإلكترونية. متخصص في بناء المنصات (مثل Postertic) وتنفيذ الربط البرمجي الاحترافي مع منصات مثل "سلة" لضمان تجربة شراء سلسة ومضاعفة المبيعات.',
    cta1: 'تواصل معي ✦', cta2: 'الخبرات المهنية',
    scroll: 'اسحب للأسفل',
    aboutTitle: 'من أنا؟',
    aboutP1: 'أنا مطور تقني وشخص اجتماعي ومرح. أستمتع جداً بإيجاد حلول تقنية ذكية للمشاكل المعقدة في التجارة الإلكترونية، مثل برمجة أدوات مخصصة أو تحسين ربط المتاجر لتسهيل تجربة العميل.',
    aboutP2: 'بعيداً عن الأكواد، أوازن حياتي بالالتزام في النادي (كمال أجسام)، ولعب البادل، والسباحة. من مشجعي كرة القدم الشغوفين، وأحب السفر المستمر (الرياض، نجران، جدة)، وتجربة مقاهي القهوة المختصة مع الأصدقاء.',
    stats: [{n:'+3',l:'سنوات خبرة'},{n:'Expert',l:'إدارة متاجر سلة'},{n:'100%',l:'ربط برمجي بدون ثغرات'},{n:'Full-Stack',l:'تطوير الويب'}],
    expTitle: 'المسيرة المهنية والمشاريع',
    experience: [
      { period:'مشروع مستمر', role:'المؤسس والمطور الرئيسي', company:'Postertic Brand', points:['تأسيس وبناء معرض خارجي مستقل للعلامة التجارية باستخدام تقنيات الويب الحديثة (Python, Flask, Firebase).','تنفيذ ربط برمجي سلس، سريع، وآمن جداً مع منصة "سلة" لنقل البيانات.','ضمان استقرار الربط بدون أي ثغرات أو تعليق (Zero Downtime)، مما ضاعف المبيعات.','تصميم الهوية البصرية والمنتجات (مطبوعات ماتيه كلاسيكية) باستخدام فوتوشوب.'] },
      { period:'يناير 2026 — الآن', role:'المدير العام (General Manager)', company:'متجر سوتار الإلكتروني (Soutar)', points:['إدارة العمليات التشغيلية والإدارية للمتجر على منصة سلة، مع التركيز على نمو المبيعات وتحليل البيانات.'] },
      { period:'يناير 2023 — الآن', role:'مطور تقني ومصمم جرافيكس', company:'قصر ميان للتجارة، الرياض', points:['تطوير حلول برمجية ساهمت في تحسين أداء الأنظمة ورفع جودة تفاعل المستخدم.','تصميم أعمال جرافيكية جذابة عزّزت هوية العلامة التجارية وزادت من تفاعل العملاء.'] }
    ],
    skTitle: 'الكفاءات التقنية والعملية',
    skills: [
      {n:'الربط البرمجي السلس مع سلة',p:98,l:'Expert'},{n:'تطوير الويب (HTML, CSS, JS)',p:90,l:'Expert'},{n:'إدارة المتاجر (سلة)',p:95,l:'Expert'},{n:'Python & Flask',p:85,l:'Advanced'},{n:'Firebase & Firestore',p:80,l:'Advanced'},{n:'UI/UX & Photoshop',p:85,l:'Advanced'},{n:'تحليل البيانات وسلوك العملاء',p:88,l:'Advanced'},{n:'صيانة الهاردوير وترقية الـ PC',p:80,l:'Advanced'},{n:'برمجة مكائن الليزر (EZCAD2)',p:75,l:'Intermediate'}
    ],
    eduTitle: 'المسيرة التعليمية',
    education: [{ico:'🎓',deg:'جامعة تونتك الماليزية',field:'بكالوريوس هندسة برمجيات',period:'فبراير 2019 — يونيو 2022',loc:'📍 صنعاء، اليمن'}],
    ctTitle: 'تواصل معي',
    phone: '+966 55 360 7176', phoneHref: 'tel:+966553607176',
    email: 'samalkahli@gmail.com', emailHref: 'mailto:samalkahli@gmail.com',
    address: 'الديرة، الرياض 12663', project: 'معرض أعمالي (Postertic)',
    footer: 'صُمّم بـ <span class="g">✦</span> لـ <span class="g">سام اسكندر الكاهلي</span> · جميع الحقوق محفوظة © 2026'
  },
  en: {
    badge: '✦ Tech Solutions Developer & E-Commerce Manager ✦',
    name1: 'Sam Iskandar', name2: 'Al-Kahli',
    subPrefix: 'Specializing in ',
    typing: ['Full-Stack Web Dev','Seamless API Integrations','E-Commerce Management','Data & Behavior Analysis','Laser Engraving (EZCAD2)'],
    desc: 'I leverage programming to serve e-commerce. Specializing in building platforms (like Postertic) and executing professional API integrations with platforms like "Salla" to ensure a frictionless shopping experience and boost sales.',
    cta1: 'Get In Touch ✦', cta2: 'View Experience',
    scroll: 'Scroll Down',
    aboutTitle: 'Who Am I?',
    aboutP1: 'I am a tech developer with a sociable and cheerful personality. I thoroughly enjoy finding smart technical solutions to complex e-commerce problems, optimizing store integrations to make users\' lives easier.',
    aboutP2: 'Away from code, I balance my life by staying committed to the gym (bodybuilding), playing Padel, and swimming. I am a passionate soccer fan, love traveling (Riyadh, Najran, Jeddah), and exploring specialty coffee shops.',
    stats: [{n:'+3',l:'Years Experience'},{n:'Expert',l:'Salla E-Commerce'},{n:'100%',l:'Bug-free Integrations'},{n:'Full-Stack',l:'Web Dev'}],
    expTitle: 'Experience & Projects',
    experience: [
      { period:'Ongoing Project', role:'Founder & Lead Developer', company:'Postertic Brand', points:['Built an independent external gallery for the brand using modern web tech (Python, Flask, Firebase).','Executed a seamless, lightning-fast, and secure API integration with the "Salla" platform.','Ensured high stability with zero bugs or downtime, significantly boosting sales.','Designed visual identity and products (classic matte designs) using Photoshop.'] },
      { period:'Jan 2026 — Present', role:'General Manager', company:'Soutar E-commerce Store', points:['Managing operations on the Salla platform, focusing on sales growth and data analysis.'] },
      { period:'Jan 2023 — Present', role:'Tech Developer & Graphic Designer', company:'Qasr Myan Trading, Riyadh', points:['Developed custom software solutions to optimize systems and improve user interaction.','Created compelling graphic designs that strengthened brand presence.'] }
    ],
    skTitle: 'Technical Competencies',
    skills: [
      {n:'Seamless API Integrations (Salla)',p:98,l:'Expert'},{n:'Web Dev (HTML, CSS, JS)',p:90,l:'Expert'},{n:'E-Commerce Management',p:95,l:'Expert'},{n:'Python & Flask',p:85,l:'Advanced'},{n:'Firebase & Firestore',p:80,l:'Advanced'},{n:'UI/UX & Photoshop',p:85,l:'Advanced'},{n:'Data & Behavior Analysis',p:88,l:'Advanced'},{n:'PC Hardware Maintenance',p:80,l:'Advanced'},{n:'Laser Engraving (EZCAD2)',p:75,l:'Intermediate'}
    ],
    eduTitle: 'Academic Background',
    education: [{ico:'🎓',deg:'TATI University College',field:'BSc in Software Engineering',period:'Feb 2019 — Jun 2022',loc:'📍 Sana\'a, Yemen'}],
    ctTitle: 'Get In Touch',
    phoneLbl: 'Phone', emailLbl: 'Email', addrLbl: 'Location', addrVal: 'Al-Dirah, Riyadh 12663', projLbl: 'Projects', projVal: 'My Gallery (Postertic)',
    footer: 'Crafted with <span class="g">✦</span> for <span class="g">Sam Iskandar Al-Kahli</span> · All Rights Reserved © 2026'
  }
};

const STATIC_UI = {
  ar: { nav: ['عني','الخبرات','المهارات','التعليم','التواصل'], secNums: ['01 — عني','02 — الخبرات','03 — المهارات','04 — التعليم','05 — اللغات','06 — التواصل'] },
  en: { nav: ['About','Experience','Skills','Education','Contact'], secNums: ['01 — About','02 — Experience','03 — Skills','04 — Education','05 — Languages','06 — Contact'] }
};

let LANG = localStorage.getItem('sam_lang') || 'ar';
let ACTIVE_DATA = null;

function renderPage(lang, animate) {
  // القراءة من لوحة التحكم (الادمن) مباشرة
  const savedState = JSON.parse(localStorage.getItem('sam_cv_v2'));
  ACTIVE_DATA = savedState ? savedState : DEFAULTS;
  
  const D = ACTIVE_DATA[lang];
  const isEn = lang === 'en';

  document.documentElement.lang = lang;
  document.documentElement.dir  = isEn ? 'ltr' : 'rtl';
  document.body.setAttribute('lang', lang);
  document.title = isEn ? 'Sam Iskandar Al-Kahli — Software Engineer' : 'سام اسكندر الكاهلي — مهندس برمجيات';

  document.getElementById('lbl-ar').className = isEn ? 'lang-inactive' : 'lang-active';
  document.getElementById('lbl-en').className = isEn ? 'lang-active' : 'lang-inactive';

  const navAs = document.querySelectorAll('#nav-links a');
  STATIC_UI[lang].nav.forEach((txt,i) => { if(navAs[i]) navAs[i].textContent = txt; });

  document.getElementById('pg-badge').textContent = D.badge || '';
  document.getElementById('pg-name1').textContent  = D.name1 || '';
  document.getElementById('pg-name2').textContent  = D.name2 || '';
  document.getElementById('pg-sub').innerHTML      = (D.subPrefix || '') + '<span id="typed"></span><span class="blink">|</span>';
  document.getElementById('pg-desc').textContent   = D.desc || '';
  document.getElementById('pg-cta1').textContent   = D.cta1 || '';
  document.getElementById('pg-cta2').textContent   = D.cta2 || '';
  document.getElementById('pg-scroll').textContent = D.scroll || '';

  const ids = ['lbl-about','lbl-exp','lbl-sk','lbl-edu','lbl-lng','lbl-ct'];
  ids.forEach((id,i) => { const el=document.getElementById(id); if(el) el.textContent=STATIC_UI[lang].secNums[i]; });

  document.getElementById('pg-about-title').textContent = D.aboutTitle || '';
  document.getElementById('pg-about-p1').textContent    = D.aboutP1 || '';
  document.getElementById('pg-about-p2').textContent    = D.aboutP2 || '';

  if(D.stats) {
    document.getElementById('pg-stats').innerHTML = D.stats.map(s=>`<div class="stat-c"><div class="stat-n">${s.n}</div><div class="stat-l">${s.l}</div></div>`).join('');
  }

  document.getElementById('pg-exp-title').textContent = D.expTitle || '';
  if(D.experience) {
    document.getElementById('pg-exp').innerHTML = D.experience.map(e=>`<div class="tl-item reveal"><div class="tl-period">${e.period}</div><div class="tl-role">${e.role}</div><div class="tl-co">${e.company}</div><ul class="tl-ul">${e.points.map(p=>`<li>${p}</li>`).join('')}</ul></div>`).join('');
  }

  document.getElementById('pg-sk-title').textContent = D.skTitle || '';
  if(D.skills) {
    document.getElementById('pg-skills').innerHTML = D.skills.map(s=>`<div class="sk-item reveal"><div class="sk-head"><span class="sk-name">${s.n}</span><span class="sk-level">${s.l}</span></div><div class="sk-bar"><div class="sk-fill" data-w="${s.p}"></div></div></div>`).join('');
  }

  document.getElementById('pg-edu-title').textContent = D.eduTitle || '';
  if(D.education) {
    document.getElementById('pg-edu').innerHTML = D.education.map(e=>`<div class="edu-c reveal"><div class="edu-ico">${e.ico}</div><div><div class="edu-deg">${e.deg}</div><div class="edu-field">${e.field}</div><div class="edu-period">${e.period}</div><div class="edu-loc">${e.loc}</div></div></div>`).join('');
  }

  document.getElementById('lng-ar-name').textContent   = lang === 'ar' ? 'العربية' : 'Arabic';
  document.getElementById('lng-ar-lv').textContent     = lang === 'ar' ? 'اللغة الأم — Native' : 'Native Speaker';
  document.getElementById('lng-en-lv').textContent     = lang === 'ar' ? 'B2 — متوسط متقدم' : 'B2 — Upper Intermediate';

  document.getElementById('pg-ct-title').textContent = D.ctTitle || '';
  
  // دمج بيانات التواصل من لوحة التحكم (عربي وإنجليزي)
  document.getElementById('pg-contact').innerHTML = `
    <a href="${ACTIVE_DATA.ar.phoneHref || '#'}" class="ct-c" target="_blank">
      <div class="ct-ico">📞</div>
      <div>
        <div class="ct-lbl">${lang === 'ar' ? 'الهاتف' : (D.phoneLbl || 'Phone')}</div>
        <div class="ct-val">${lang === 'ar' ? D.phone : ACTIVE_DATA.ar.phone}</div>
      </div>
    </a>
    <a href="${ACTIVE_DATA.ar.emailHref || '#'}" class="ct-c" target="_blank">
      <div class="ct-ico">✉️</div>
      <div>
        <div class="ct-lbl">${lang === 'ar' ? 'البريد الإلكتروني' : (D.emailLbl || 'Email')}</div>
        <div class="ct-val">${lang === 'ar' ? D.email : ACTIVE_DATA.ar.email}</div>
      </div>
    </a>
    <a href="#" class="ct-c" target="_self">
      <div class="ct-ico">📍</div>
      <div>
        <div class="ct-lbl">${lang === 'ar' ? 'الموقع' : (D.addrLbl || 'Location')}</div>
        <div class="ct-val">${lang === 'ar' ? D.address : D.addrVal}</div>
      </div>
    </a>
    <a href="https://gallery.postertic.com/" class="ct-c" target="_blank">
      <div class="ct-ico">🖼️</div>
      <div>
        <div class="ct-lbl">${lang === 'ar' ? 'المشاريع' : (D.projLbl || 'Projects')}</div>
        <div class="ct-val">${lang === 'ar' ? D.project : D.projVal}</div>
      </div>
    </a>
  `;

  document.getElementById('pg-footer').innerHTML = D.footer || '';

  // تطبيق الألوان من لوحة التحكم
  if(ACTIVE_DATA.colors) {
      const c = ACTIVE_DATA.colors;
      if(c.gold) document.documentElement.style.setProperty('--gold', c.gold);
      if(c.goldL) document.documentElement.style.setProperty('--gold-l', c.goldL);
      if(c.goldD) document.documentElement.style.setProperty('--gold-d', c.goldD);
      if(c.bg) document.documentElement.style.setProperty('--bg', c.bg);
      if(c.bg2) document.documentElement.style.setProperty('--bg2', c.bg2);
      if(c.tx) document.documentElement.style.setProperty('--tx', c.tx);
      if(c.tx2) document.documentElement.style.setProperty('--tx2', c.tx2);
  }

  // إظهار/إخفاء الأقسام بناءً على لوحة التحكم
  if(ACTIVE_DATA.sections) {
      const s = ACTIVE_DATA.sections;
      if(document.getElementById('about')) document.getElementById('about').style.display = s.about === false ? 'none' : 'block';
      if(document.getElementById('experience')) document.getElementById('experience').style.display = s.experience === false ? 'none' : 'block';
      if(document.getElementById('skills')) document.getElementById('skills').style.display = s.skills === false ? 'none' : 'block';
      if(document.getElementById('education')) document.getElementById('education').style.display = s.education === false ? 'none' : 'block';
      if(document.getElementById('languages')) document.getElementById('languages').style.display = s.languages === false ? 'none' : 'block';
      if(document.getElementById('contact')) document.getElementById('contact').style.display = s.contact === false ? 'none' : 'block';
  }

  initReveal();
  initSkillBars();
  restartTyping();

  if(animate) {
    document.querySelectorAll('.lang-fade').forEach(el=>{
      el.classList.remove('in');
      void el.offsetWidth;
      setTimeout(()=>el.classList.add('in'),50);
    });
  } else {
    document.querySelectorAll('.lang-fade').forEach(el=>el.classList.add('in'));
  }
}

document.getElementById('lang-toggle').addEventListener('click', ()=>{
  LANG = LANG === 'ar' ? 'en' : 'ar';
  localStorage.setItem('sam_lang', LANG);
  renderPage(LANG, true);
});

function initReveal() {
  document.querySelectorAll('.reveal').forEach(el=>el.classList.remove('vis'));
  const obs = new IntersectionObserver(entries=>{
    entries.forEach((en,i)=>{ if(en.isIntersecting) setTimeout(()=>en.target.classList.add('vis'),i*70); });
  },{threshold:.1});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

function initSkillBars() {
  document.querySelectorAll('.sk-fill').forEach(f=>{ f.style.width='0'; f.classList.remove('anim'); });
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        const f=en.target;
        setTimeout(()=>{ f.style.width=f.dataset.w+'%'; f.classList.add('anim'); },180);
        obs.unobserve(f);
      }
    });
  },{threshold:.3});
  document.querySelectorAll('.sk-fill').forEach(f=>obs.observe(f));
}

let tTimer, tWi=0, tCi=0, tDel=false;
function getTyped(){ return document.getElementById('typed'); }
function type(){
  const words = ACTIVE_DATA[LANG].typing;
  const el = getTyped(); if(!el||!words||!words.length) return;
  const w = words[tWi%words.length];
  if(!tDel){ el.textContent=w.slice(0,++tCi); if(tCi===w.length){tDel=true;tTimer=setTimeout(type,1800);return;} tTimer=setTimeout(type,85); }
  else{ el.textContent=w.slice(0,--tCi); if(tCi===0){tDel=false;tWi=(tWi+1)%words.length;tTimer=setTimeout(type,300);return;} tTimer=setTimeout(type,42); }
}
function restartTyping(){ clearTimeout(tTimer);tWi=0;tCi=0;tDel=false;const el=getTyped();if(el)el.textContent='';tTimer=setTimeout(type,600); }



const cv=document.getElementById('stars'), cx=cv.getContext('2d');
let stars=[],W,H;
function rsz(){W=cv.width=innerWidth;H=cv.height=innerHeight;}
rsz(); window.addEventListener('resize',()=>{rsz();mkStars();});
function mkStars(){
  stars=[];
  const n=Math.floor(W*H/5800);
  for(let i=0;i<n;i++) stars.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.15+.2,a:Math.random(),sp:Math.random()*.28+.04,dr:(Math.random()-.5)*.25,g:Math.random()<.15});
}
mkStars();
let smx=W/2,smy=H/2;
document.addEventListener('mousemove',e=>{smx=e.clientX;smy=e.clientY});
(function drawS(t){
  cx.clearRect(0,0,W,H);
  const px=(smx-W/2)/W*10,py=(smy-H/2)/H*10;
  stars.forEach(s=>{
    s.a+=Math.sin(t*.0008+s.x)*.004; s.a=Math.max(.04,Math.min(1,s.a));
    s.x+=s.dr+px*.018; s.y-=s.sp;
    if(s.y<-2){s.y=H+2;s.x=Math.random()*W;}
    if(s.x<0)s.x=W; if(s.x>W)s.x=0;
    cx.beginPath(); cx.arc(s.x+px,s.y+py,s.r,0,Math.PI*2);
    cx.fillStyle=s.g?`rgba(201,168,76,${s.a*.65})`:`rgba(255,255,255,${s.a*.38})`;
    cx.fill();
  });
  stars.forEach((a,i)=>{
    stars.slice(i+1,i+4).forEach(b=>{
      const d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<85&&a.g&&b.g){cx.beginPath();cx.moveTo(a.x+px,a.y+py);cx.lineTo(b.x+px,b.y+py);cx.strokeStyle=`rgba(201,168,76,${(1-d/85)*.09})`;cx.lineWidth=.5;cx.stroke();}
    });
  });
  requestAnimationFrame(drawS);
})(0);

window.addEventListener('scroll',()=>{
  document.getElementById('navbar').style.background = scrollY>50?'rgba(8,8,8,.96)':'rgba(8,8,8,.75)';
});
window.addEventListener('scroll',()=>{
  const h=document.getElementById('hero'),sy=scrollY;
  if(sy<innerHeight){h.style.transform=`translateY(${sy*.22}px)`;h.style.opacity=1-sy/(innerHeight*.82);}
});

// إخفاء لوحة الألوان المدمجة لأننا نعتمد على لوحة تحكم الأدمن بالكامل
const inlineColorPanel = document.getElementById('color-panel');
if(inlineColorPanel) inlineColorPanel.style.display = 'none';

// تشغيل الصفحة عند التحميل
renderPage(LANG, false);

// مستمع لتحديث الصفحة أوتوماتيكياً في حال تم تغيير البيانات من لوحة تحكم الأدمن في تبويب آخر
window.addEventListener('storage', (e) => {
  if (e.key === 'sam_cv_v2') {
    renderPage(LANG, true);
  }
});