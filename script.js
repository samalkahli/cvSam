

const STATIC_UI = {
  ar: { nav: ['عني','المشاريع','الخبرات','المهارات','التعليم','التواصل'], secNums: ['01 — عني','02 — المشاريع','03 — الخبرات','04 — المهارات','05 — اللغات','06 — التواصل'] },
  en: { nav: ['About','Projects','Experience','Skills','Education','Contact'], secNums: ['01 — About','02 — Projects','03 — Experience','04 — Skills','05 — Education','06 — Languages','07 — Contact'] }
};

let LANG = localStorage.getItem('sam_lang') || 'ar';
let ACTIVE_DATA = null;

function renderPage(lang, animate) {
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

  if (isEn) {
      document.getElementById('pg-ats-btn-ar').style.display = 'none';
      document.getElementById('pg-ats-btn-en').style.display = 'inline';
  } else {
      document.getElementById('pg-ats-btn-ar').style.display = 'inline';
      document.getElementById('pg-ats-btn-en').style.display = 'none';
  }

  const navAs = document.querySelectorAll('#nav-links a');
  STATIC_UI[lang].nav.forEach((txt,i) => { if(navAs[i]) navAs[i].textContent = txt; });

  const profileImg = document.getElementById('pg-profile-pic');
  if(D.profilePic && D.profilePic.trim() !== '') {
      profileImg.src = D.profilePic;
      profileImg.style.display = 'inline-block';
  } else {
      profileImg.style.display = 'none';
  }

  document.getElementById('pg-badge').textContent = D.badge || '';
  document.getElementById('pg-name1').textContent  = D.name1 || '';
  document.getElementById('pg-name2').textContent  = D.name2 || '';
  document.getElementById('pg-sub').innerHTML      = (D.subPrefix || '') + '<span id="typed"></span><span class="blink">|</span>';
  document.getElementById('pg-desc').textContent   = D.desc || '';
  document.getElementById('pg-cta1').textContent   = D.cta1 || '';
  document.getElementById('pg-cta2').textContent   = D.cta2 || '';
  document.getElementById('pg-scroll').textContent = D.scroll || '';

  const ids = ['lbl-about','lbl-pj','lbl-exp','lbl-sk','lbl-edu','lbl-lng','lbl-ct'];
  ids.forEach((id,i) => { const el=document.getElementById(id); if(el) el.textContent=STATIC_UI[lang].secNums[i]; });

  document.getElementById('pg-about-title').textContent = D.aboutTitle || '';
  document.getElementById('pg-about-p1').textContent    = D.aboutP1 || '';
  document.getElementById('pg-about-p2').textContent    = D.aboutP2 || '';

  if(D.stats) {
    document.getElementById('pg-stats').innerHTML = D.stats.map(s=>`<div class="stat-c"><div class="stat-n">${s.n}</div><div class="stat-l">${s.l}</div></div>`).join('');
  }

  document.getElementById('pg-pj-title').textContent = D.pjTitle || '';
  const projContainer = document.getElementById('pg-projects');
  if(D.projects && projContainer) {
    projContainer.innerHTML = D.projects.map(p => {
      let imgsHTML = '';
      if(p.images && p.images.length > 0) {
        imgsHTML = `<div class="pj-gallery">${p.images.map(img => `<img src="${img}" alt="${p.title}" class="pj-img">`).join('')}</div>`;
      }
      let featuresHTML = '';
      if(p.features) {
        featuresHTML = `<ul class="pj-features">${p.features.split('\n').filter(f=>f.trim()).map(f => `<li>${f}</li>`).join('')}</ul>`;
      }
      let linkHTML = '';
      if(p.link) {
        linkHTML = `<a href="${p.link}" target="_blank" class="btn btn-o pj-link">${isEn ? 'View Project' : 'عرض المشروع'} <i class='bx bx-link-external'></i></a>`;
      }
      return `<div class="pj-card reveal">
                ${imgsHTML}
                <div class="pj-info">
                  <h3 class="pj-title">${p.title}</h3>
                  <p class="pj-desc">${p.desc}</p>
                  ${featuresHTML}
                  ${linkHTML}
                </div>
              </div>`;
    }).join('');
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

  document.getElementById('pg-lng-title').textContent  = isEn ? 'Languages' : 'اللغات';
  document.getElementById('lng-ar-name').textContent   = isEn ? 'Arabic' : 'العربية';
  document.getElementById('lng-ar-lv').textContent     = isEn ? 'Native Speaker' : 'اللغة الأم — Native';
  document.getElementById('lng-en-lv').textContent     = isEn ? 'B2 — Upper Intermediate' : 'B2 — متوسط متقدم';

  document.getElementById('pg-ct-title').textContent = D.ctTitle || '';
  document.getElementById('pg-contact').innerHTML = `
    <a href="${ACTIVE_DATA.ar.phoneHref || '#'}" class="ct-c" target="_blank">
      <div class="ct-ico"><i class='bx bx-phone'></i></div>
      <div><div class="ct-lbl">${isEn ? (D.phoneLbl || 'Phone') : 'الهاتف'}</div><div class="ct-val">${isEn ? ACTIVE_DATA.ar.phone : D.phone}</div></div>
    </a>
    <a href="${ACTIVE_DATA.ar.emailHref || '#'}" class="ct-c" target="_blank">
      <div class="ct-ico"><i class='bx bx-envelope'></i></div>
      <div><div class="ct-lbl">${isEn ? (D.emailLbl || 'Email') : 'البريد الإلكتروني'}</div><div class="ct-val">${isEn ? ACTIVE_DATA.ar.email : D.email}</div></div>
    </a>
    <a href="#" class="ct-c" target="_self">
      <div class="ct-ico"><i class='bx bx-map'></i></div>
      <div><div class="ct-lbl">${isEn ? (D.addrLbl || 'Location') : 'الموقع'}</div><div class="ct-val">${isEn ? D.addrVal : D.address}</div></div>
    </a>
    <a href="https://gallery.postertic.com/" class="ct-c" target="_blank">
      <div class="ct-ico"><i class='bx bx-images'></i></div>
      <div><div class="ct-lbl">${isEn ? (D.projLbl || 'Projects') : 'المشاريع'}</div><div class="ct-val">${isEn ? D.projVal : D.project}</div></div>
    </a>
  `;

  document.getElementById('pg-footer').innerHTML = D.footer || '';

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

  if(ACTIVE_DATA.sections) {
      const s = ACTIVE_DATA.sections;
      if(document.getElementById('about')) document.getElementById('about').style.display = s.about === false ? 'none' : 'block';
      if(document.getElementById('projects')) document.getElementById('projects').style.display = s.projects === false ? 'none' : 'block';
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
  stars=[]; const n=Math.floor(W*H/5800);
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

window.addEventListener('scroll',()=>{ document.getElementById('navbar').style.background = scrollY>50?'rgba(8,8,8,.96)':'rgba(8,8,8,.75)'; });
window.addEventListener('scroll',()=>{ const h=document.getElementById('hero'),sy=scrollY; if(sy<innerHeight){h.style.transform=`translateY(${sy*.22}px)`;h.style.opacity=1-sy/(innerHeight*.82);} });

renderPage(LANG, false);
window.addEventListener('storage', (e) => { if (e.key === 'sam_cv_v2') renderPage(LANG, true); });

document.getElementById('btn-ats-download').addEventListener('click', function() {
    const savedState = JSON.parse(localStorage.getItem('sam_cv_v2'));
    const DATA_ALL = savedState ? savedState : DEFAULTS;
    const D = DATA_ALL[LANG];
    const isAr = LANG === 'ar';
    const printWindow = window.open('', '_blank');
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="${LANG}" dir="${isAr ? 'rtl' : 'ltr'}">
        <head>
            <meta charset="UTF-8">
            <title>${D.name1} ${D.name2} - ATS CV</title>
            <style>
                body { font-family: 'Arial', sans-serif; padding: 30px; color: #000; line-height: 1.6; max-width: 850px; margin: 0 auto; }
                h1 { font-size: 28pt; margin-bottom: 5px; text-align: center; text-transform: uppercase; }
                .contact-info { font-size: 11pt; margin-bottom: 20px; text-align: center; border-bottom: 2px solid #000; padding-bottom: 15px; }
                h2 { font-size: 16pt; text-transform: uppercase; margin-top: 25px; border-bottom: 1px solid #000; padding-bottom: 5px; background: #f2f2f2; padding-left: 5px; padding-right: 5px; }
                .section-content { padding: 0 5px; }
                .item-header { display: flex; justify-content: space-between; font-weight: bold; margin-top: 15px; font-size: 12pt; }
                .sub-header { font-style: italic; color: #333; margin-bottom: 5px; font-size: 11pt; }
                ul { margin-top: 5px; padding-inline-start: 20px; }
                li { margin-bottom: 5px; font-size: 11pt; }
                .stats-box { margin: 15px 0; padding: 10px; border: 1px dashed #666; display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
                .stat-item { font-size: 10pt; }
                .stat-item strong { color: #000; }
                p { font-size: 11pt; margin: 10px 0; }
                @media print { @page { margin: 1.5cm; } body { padding: 0; } }
            </style>
        </head>
        <body>
            <h1>${D.name1} ${D.name2}</h1>
            <div class="contact-info">
                ${D.badge}<br>
                ${isAr ? 'الموقع' : 'Location'}: ${isAr ? D.address : D.addrVal} | 
                ${isAr ? 'الهاتف' : 'Phone'}: ${isAr ? D.phone : DATA_ALL.ar.phone} | 
                ${isAr ? 'البريد' : 'Email'}: ${isAr ? D.email : DATA_ALL.ar.email}<br>
            </div>
            <h2>${D.aboutTitle}</h2>
            <div class="section-content"><p>${D.aboutP1}</p><p>${D.aboutP2}</p></div>
            ${D.stats ? `<h2>${isAr ? 'إحصائيات سريعة' : 'Key Statistics'}</h2><div class="stats-box">${D.stats.map(s => `<div class="stat-item"><strong>${s.n}:</strong> ${s.l}</div>`).join('')}</div>` : ''}
            ${D.projects && D.projects.length > 0 ? `<h2>${D.pjTitle}</h2><div class="section-content">${D.projects.map(p => `<div class="item-header"><span>${p.title}</span></div><div class="sub-header">${p.link || ''}</div><p style="margin: 5px 0; font-size: 11pt;">${p.desc}</p><ul>${p.features ? p.features.split('\n').filter(f=>f.trim()).map(f => `<li>${f.replace(/<\/?[^>]+(>|$)/g, "")}</li>`).join('') : ''}</ul>`).join('')}</div>` : ''}
            <h2>${D.expTitle}</h2>
            <div class="section-content">${D.experience.map(e => `<div class="item-header"><span>${e.role}</span><span>${e.period}</span></div><div class="sub-header">${e.company}</div><ul>${e.points.map(p => `<li>${p.replace(/<\/?[^>]+(>|$)/g, "")}</li>`).join('')}</ul>`).join('')}</div>
            <h2>${D.skTitle}</h2>
            <div class="section-content"><p>${D.skills.map(s => `${s.n} (${s.l})`).join(' • ')}</p></div>
            <h2>${D.eduTitle}</h2>
            <div class="section-content">${D.education.map(e => `<div class="item-header"><span>${e.deg}</span><span>${e.period}</span></div><div class="sub-header">${e.field} | ${e.loc}</div>`).join('')}</div>
        </body>
        </html>
    `;
    printWindow.document.write(htmlContent); printWindow.document.close(); printWindow.focus();
    setTimeout(() => { printWindow.print(); printWindow.close(); }, 500);
});