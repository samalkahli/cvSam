const KEY = 'sam_cv_v2';

const DEFAULTS = {
  ar:{
    profilePic:'',
    name1:'سام اسكندر',name2:'الكاهلي',
    badge:'✦ مطور حلول تقنية & مدير عمليات المتاجر ✦',
    subPrefix:'متخصص في ',
    typing:['تطوير الويب (Full-Stack)','الربط البرمجي السلس (سلة)','إدارة المتاجر الإلكترونية','تحليل البيانات','برمجة مكائن الليزر (EZCAD2)'],
    desc:'أطوع البرمجة والتقنية لخدمة الأعمال والتجارة الإلكترونية. متخصص في بناء المنصات (مثل Postertic) وتنفيذ الربط البرمجي الاحترافي مع منصات مثل "سلة" لضمان تجربة شراء سلسة ومضاعفة المبيعات.',
    cta1:'تواصل معي ✦',cta2:'المشاريع والخبرات',
    scroll:'اسحب للأسفل',
    footer:'صُمّم بـ ✦ لـ سام اسكندر الكاهلي · جميع الحقوق محفوظة © 2026',
    aboutTitle:'من أنا؟',
    aboutP1:'أنا مطور تقني وشخص اجتماعي ومرح. أستمتع جداً بإيجاد حلول تقنية ذكية للمشاكل المعقدة في التجارة الإلكترونية لتسهيل تجربة العميل.',
    aboutP2:'بعيداً عن الأكواد، أوازن حياتي بالالتزام في النادي (كمال أجسام)، ولعب البادل، والسباحة. من مشجعي كرة القدم الشغوفين، وأحب السفر المستمر.',
    stats:[{n:'+3',l:'سنوات خبرة'},{n:'Expert',l:'إدارة متاجر سلة'},{n:'100%',l:'ربط برمجي'},{n:'Full-Stack',l:'تطوير ويب'}],
    pjTitle:'مشاريع مختارة',
    projects:[
      {title:'منصة Postertic',desc:'معرض خارجي متكامل لبيع اللوحات الكلاسيكية مع ربط مباشر بمنصة سلة.',features:'ربط برمجي سلس وسريع (Salla API)\nنظام تصنيف متقدم وإدارة ذكية للصور\nاستقرار كامل (Zero Downtime)',link:'https://postertic.com',images:[]}
    ],
    expTitle:'المسيرة المهنية',
    experience:[
      {period:'مشروع مستمر',role:'المؤسس والمطور الرئيسي',company:'Postertic Brand',points:['تأسيس وبناء معرض خارجي مستقل.','تنفيذ ربط برمجي سلس، سريع، وآمن.']}
    ],
    skTitle:'الكفاءات التقنية',
    skills:[
      {n:'الربط البرمجي (سلة)',p:98,l:'Expert'},{n:'تطوير الويب',p:90,l:'Expert'},{n:'إدارة المتاجر',p:95,l:'Expert'}
    ],
    eduTitle:'المسيرة التعليمية',
    education:[{ico:'🎓',deg:'جامعة تونتك الماليزية',field:'هندسة برمجيات',period:'2019 — 2022',loc:'اليمن'}],
    ctTitle:'تواصل معي',
    phone:'+966 55 360 7176',phoneHref:'tel:+966553607176',
    email:'samalkahli@gmail.com',emailHref:'mailto:samalkahli@gmail.com',
    address:'الرياض',project:'معرض أعمالي'
  },
  en:{
    profilePic:'',
    name1:'Sam Iskandar',name2:'Al-Kahli',
    badge:'✦ Tech Solutions Developer ✦',
    subPrefix:'Specializing in ',
    typing:['Full-Stack Web Dev','API Integrations'],
    desc:'I leverage programming to serve e-commerce.',
    cta1:'Get In Touch ✦',cta2:'View Experience',
    scroll:'Scroll Down',
    footer:'Crafted for Sam',
    aboutTitle:'Who Am I?',
    aboutP1:'I am a tech developer.',
    aboutP2:'Away from code...',
    stats:[{n:'+3',l:'Years'}],
    pjTitle:'Projects',
    projects:[
      {title:'Postertic Platform',desc:'A specialized external gallery.',features:'Seamless Salla API\nAdvanced Image Management',link:'https://postertic.com',images:[]}
    ],
    expTitle:'Experience',
    experience:[{period:'Ongoing',role:'Founder & Dev',company:'Postertic',points:['Built independent gallery.']}],
    skTitle:'Skills',
    skills:[{n:'Web Dev',p:90,l:'Expert'}],
    eduTitle:'Education',
    education:[{ico:'🎓',deg:'TATI Univ',field:'Software Eng',period:'2019 — 2022',loc:'Yemen'}],
    ctTitle:'Contact',
    phoneLbl:'Phone',emailLbl:'Email',addrLbl:'Location',addrVal:'Riyadh',projLbl:'Projects',projVal:'Portfolio'
  },
  colors:{gold:'#C9A84C',goldL:'#E8C97A',goldD:'#7a6129',bg:'#080808',bg2:'#0e0e0e',tx:'#e8e0d0',tx2:'#8a8070'},
  sections:{about:true,projects:true,experience:true,skills:true,education:true,languages:true,contact:true}
};

function loadState(){ try{ const s=localStorage.getItem(KEY); return s?JSON.parse(s):JSON.parse(JSON.stringify(DEFAULTS)); }catch(e){return JSON.parse(JSON.stringify(DEFAULTS));} }

// دالة حفظ معدلة تصيد الخطأ لو امتلت الذاكرة بسبب كثرة الصور
function saveState(s){ 
    try {
        localStorage.setItem(KEY,JSON.stringify(s)); 
        return true;
    } catch(e) {
        alert("⚠️ عذراً! حجم البيانات كبير جداً بسبب كثرة الصور، المتصفح لا يسمح بحفظها.\nالحل: احذف بعض الصور أو قلل حجمها قبل الرفع.");
        return false;
    }
}

let S = loadState();

document.querySelectorAll('.sb-item').forEach(item=>{
  item.addEventListener('click',()=>{
    document.querySelectorAll('.sb-item').forEach(i=>i.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    item.classList.add('active');
    const panel = document.getElementById('panel-'+item.dataset.panel);
    if(panel) panel.classList.add('active');
  });
});

/* ====== دوال ضغط وتحويل الصور إلى Base64 ====== */
function processImageToBase64(file, maxWidth, quality, callback) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            let width = img.width; let height = img.height;
            if(width > maxWidth) { height = Math.round((height * maxWidth) / width); width = maxWidth; }
            canvas.width = width; canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            callback(canvas.toDataURL('image/jpeg', quality)); // ضغط وتقليل الحجم
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(file);
}

function handleProfileUpload(e, targetId) {
    const file = e.target.files[0];
    if(!file) return;
    // ضغط الصورة الشخصية وتصغيرها إلى 400 بكسل فقط
    processImageToBase64(file, 400, 0.7, (base64) => {
        document.getElementById(targetId).value = base64;
        showToast('📸 تم التقاط الصورة الشخصية وتجهيزها للحفظ');
    });
}

// إضافة المستمعات لحقول الصور الشخصية
setTimeout(() => {
    try {
        document.getElementById('ar-profile-file').addEventListener('change', e => handleProfileUpload(e, 'ar-profile-pic'));
        document.getElementById('en-profile-file').addEventListener('change', e => handleProfileUpload(e, 'en-profile-pic'));
    } catch(e) {}
}, 500);

window.handleImageUpload = function(event, lang, index) {
  const files = event.target.files;
  if (!files.length) return;
  const textarea = document.getElementById(`${lang}-pj-img-${index}`);
  
  Array.from(files).forEach(file => {
      // ضغط صور المشاريع وتصغيرها إلى 800 بكسل
      processImageToBase64(file, 800, 0.6, (base64) => {
          textarea.value = textarea.value + (textarea.value ? '\n' : '') + base64;
          showToast('🖼️ تم إضافة صورة للمشروع');
      });
  });
};
/* ================================================== */

function renderAdmin(){
  const ar=S.ar, en=S.en;
  setVal('ar-profile-pic',ar.profilePic); setVal('en-profile-pic',en.profilePic);
  setVal('ar-name1',ar.name1);setVal('ar-name2',ar.name2);
  setVal('ar-badge',ar.badge);setVal('ar-subPrefix',ar.subPrefix);
  setVal('ar-typing',ar.typing.join('\n'));setVal('ar-desc',ar.desc);
  setVal('ar-cta1',ar.cta1);setVal('ar-cta2',ar.cta2);
  setVal('ar-scroll',ar.scroll);setVal('ar-footer',ar.footer);
  setVal('ar-aboutTitle',ar.aboutTitle);setVal('ar-aboutP1',ar.aboutP1);setVal('ar-aboutP2',ar.aboutP2);
  setVal('ar-pjTitle',ar.pjTitle);setVal('ar-expTitle',ar.expTitle);setVal('ar-skTitle',ar.skTitle);
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
  setVal('en-pjTitle',en.pjTitle);setVal('en-expTitle',en.expTitle);setVal('en-skTitle',en.skTitle);
  setVal('en-eduTitle',en.eduTitle);setVal('en-ctTitle',en.ctTitle);
  setVal('en-phoneLbl',en.phoneLbl);setVal('en-emailLbl',en.emailLbl);
  setVal('en-addrLbl',en.addrLbl);setVal('en-addrVal',en.addrVal);
  setVal('en-projLbl',en.projLbl);setVal('en-projVal',en.projVal);
  
  renderStats('ar',ar.stats);renderStats('en',en.stats);
  renderProjects('ar',ar.projects);renderProjects('en',en.projects);
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
  grid.innerHTML=stats.map((s,i)=>`<div style="background:var(--bg4);border:1px solid var(--bdr2);border-radius:var(--r);padding:.8rem;display:flex;flex-direction:column;gap:.4rem"><input class="f-input" data-lang="${lang}" data-stat="${i}" data-f="n" value="${s.n}" style="font-weight:700"><input class="f-input" data-lang="${lang}" data-stat="${i}" data-f="l" value="${s.l}"></div>`).join('');
}

function renderProjects(lang,projects){
  const list=document.getElementById(lang+'-pj-list');
  if(!list) return;
  list.innerHTML=projects.map((p,i)=>`
    <div class="list-item" id="${lang}-pj-${i}">
      <div class="list-item-head" data-toggle="${lang}-pj-${i}">
        <span class="list-item-title">${p.title||(lang==='ar'?'مشروع جديد':'New Project')}</span>
        <button class="del-btn" data-del-pj="${lang}-${i}" onclick="event.stopPropagation()"><i class='bx bx-trash'></i></button>
        <span class="list-item-arrow"><i class='bx bx-chevron-down'></i></span>
      </div>
      <div class="list-item-body">
        <div class="f-grid">
          <div class="f-group"><label class="f-label">${lang==='ar'?'الاسم':'Title'}</label><input class="f-input" data-lang="${lang}" data-pj="${i}" data-f="title" value="${p.title}"></div>
          <div class="f-group"><label class="f-label">${lang==='ar'?'الوصف':'Description'}</label><input class="f-input" data-lang="${lang}" data-pj="${i}" data-f="desc" value="${p.desc}"></div>
          <div class="f-group"><label class="f-label">${lang==='ar'?'المميزات (كل سطر نقطة)':'Features'}</label><textarea class="f-textarea" data-lang="${lang}" data-pj="${i}" data-f="features">${p.features}</textarea></div>
          <div class="f-group"><label class="f-label">${lang==='ar'?'الرابط':'Link'}</label><input class="f-input" data-lang="${lang}" data-pj="${i}" data-f="link" value="${p.link}"></div>
          <div class="f-group" style="background:rgba(201,168,76,.05); padding:1rem; border:1px dashed var(--gold); border-radius:var(--r);">
            <label class="f-label" style="color:var(--gold)">${lang==='ar'?'اضغط هنا لرفع صور للمشروع من جهازك':'Click to upload images'}</label>
            <input type="file" multiple accept="image/*" class="f-input" style="padding:0.4rem; margin-bottom:0.5rem;" onchange="handleImageUpload(event, '${lang}', ${i})">
            <textarea class="f-textarea" id="${lang}-pj-img-${i}" data-lang="${lang}" data-pj="${i}" data-f="images" style="font-size:10px; opacity:0.6;" placeholder="سيتولد كود الصورة هنا تلقائياً...">${p.images.join('\n')}</textarea>
          </div>
        </div>
      </div>
    </div>`).join('');
}

function renderExp(lang,exp){
  const list=document.getElementById(lang+'-exp-list');
  if(!list) return;
  list.innerHTML=exp.map((e,i)=>`
    <div class="list-item" id="${lang}-exp-${i}">
      <div class="list-item-head" data-toggle="${lang}-exp-${i}"><span class="list-item-title">${e.role||'Experience'}</span><button class="del-btn" data-del-exp="${lang}-${i}"><i class='bx bx-trash'></i></button><span class="list-item-arrow"><i class='bx bx-chevron-down'></i></span></div>
      <div class="list-item-body">
        <div class="f-grid" style="margin-bottom:.8rem"><div class="f-grid f-grid-2"><div class="f-group"><label class="f-label">Period</label><input class="f-input" data-lang="${lang}" data-exp="${i}" data-f="period" value="${e.period}"></div><div class="f-group"><label class="f-label">Role</label><input class="f-input" data-lang="${lang}" data-exp="${i}" data-f="role" value="${e.role}"></div></div><div class="f-group"><label class="f-label">Company</label><input class="f-input" data-lang="${lang}" data-exp="${i}" data-f="company" value="${e.company}"></div></div>
        <div class="points-wrap" id="${lang}-exp-points-${i}">${e.points.map((p,pi)=>`<div class="point-row"><input class="f-input" data-lang="${lang}" data-exp="${i}" data-pt="${pi}" value="${p}"><button class="del-btn" data-del-pt="${lang}-${i}-${pi}"><i class='bx bx-x'></i></button></div>`).join('')}</div>
        <button class="add-btn" data-add-pt="${lang}-${i}"><i class='bx bx-plus'></i> Add Task</button>
      </div>
    </div>`).join('');
}

function renderSkills(lang,skills){
  const list=document.getElementById(lang+'-sk-list');
  if(!list) return;
  list.innerHTML=skills.map((s,i)=>`
    <div class="list-item" id="${lang}-sk-${i}">
      <div class="list-item-head" data-toggle="${lang}-sk-${i}"><span class="list-item-title">${s.n||'Skill'}</span><button class="del-btn" data-del-sk="${lang}-${i}"><i class='bx bx-trash'></i></button><span class="list-item-arrow"><i class='bx bx-chevron-down'></i></span></div>
      <div class="list-item-body"><div class="f-grid"><div class="f-group"><label class="f-label">Skill</label><input class="f-input" data-lang="${lang}" data-sk="${i}" data-f="n" value="${s.n}"></div><div class="f-grid f-grid-2"><div class="f-group"><label class="f-label">%</label><input class="f-input" type="number" data-lang="${lang}" data-sk="${i}" data-f="p" value="${s.p}"></div><div class="f-group"><label class="f-label">Level</label><input class="f-input" data-lang="${lang}" data-sk="${i}" data-f="l" value="${s.l}"></div></div></div></div>
    </div>`).join('');
}

function renderEdu(lang,edu){
  const list=document.getElementById(lang+'-edu-list');
  if(!list) return;
  list.innerHTML=edu.map((e,i)=>`
    <div class="list-item" id="${lang}-edu-${i}">
      <div class="list-item-head" data-toggle="${lang}-edu-${i}"><span class="list-item-title">${e.deg||'Education'}</span><button class="del-btn" data-del-edu="${lang}-${i}"><i class='bx bx-trash'></i></button><span class="list-item-arrow"><i class='bx bx-chevron-down'></i></span></div>
      <div class="list-item-body"><div class="f-grid"><div class="f-grid f-grid-2"><div class="f-group"><label class="f-label">Icon</label><input class="f-input" data-lang="${lang}" data-edu="${i}" data-f="ico" value='${e.ico}'></div><div class="f-group"><label class="f-label">Degree</label><input class="f-input" data-lang="${lang}" data-edu="${i}" data-f="deg" value="${e.deg}"></div></div><div class="f-group"><label class="f-label">Field</label><input class="f-input" data-lang="${lang}" data-edu="${i}" data-f="field" value="${e.field}"></div><div class="f-grid f-grid-2"><div class="f-group"><label class="f-label">Period</label><input class="f-input" data-lang="${lang}" data-edu="${i}" data-f="period" value="${e.period}"></div><div class="f-group"><label class="f-label">Location</label><input class="f-input" data-lang="${lang}" data-edu="${i}" data-f="loc" value="${e.loc}"></div></div></div></div>
    </div>`).join('');
}

const COLOR_FIELDS=[{key:'gold',label:'الذهبي'},{key:'goldL',label:'فاتح'},{key:'goldD',label:'داكن'},{key:'bg',label:'الخلفية'},{key:'bg2',label:'الخلفية 2'},{key:'tx',label:'النص'},{key:'tx2',label:'نص خافت'}];
function renderColorPickers(){
  const wrap=document.getElementById('color-pickers');
  wrap.innerHTML=COLOR_FIELDS.map(f=>`<div class="color-item"><div class="f-label">${f.label}</div><div class="color-row"><div class="c-swatch" id="csw-${f.key}" style="background:${S.colors[f.key]}" onclick="document.getElementById('ccp-${f.key}').click()"></div><input type="color" id="ccp-${f.key}" value="${S.colors[f.key]}"><input class="c-hex f-input" id="chx-${f.key}" value="${S.colors[f.key]}" maxlength="7"></div></div>`).join('');
  COLOR_FIELDS.forEach(f=>{ const cp=document.getElementById('ccp-'+f.key),sw=document.getElementById('csw-'+f.key),hx=document.getElementById('chx-'+f.key); cp.addEventListener('input',()=>{ sw.style.background=cp.value; hx.value=cp.value; S.colors[f.key]=cp.value; }); hx.addEventListener('input',()=>{ if(/^#[0-9a-fA-F]{6}$/.test(hx.value)){ cp.value=hx.value; sw.style.background=hx.value; S.colors[f.key]=hx.value; } }); });
}

function collectState(){
  const ar=S.ar, en=S.en;
  ar.profilePic=gv('ar-profile-pic'); en.profilePic=gv('en-profile-pic');
  ar.name1=gv('ar-name1');ar.name2=gv('ar-name2');ar.badge=gv('ar-badge');ar.subPrefix=gv('ar-subPrefix');ar.typing=gv('ar-typing').split('\n').filter(l=>l.trim());ar.desc=gv('ar-desc');ar.cta1=gv('ar-cta1');ar.cta2=gv('ar-cta2');ar.scroll=gv('ar-scroll');ar.footer=gv('ar-footer');ar.aboutTitle=gv('ar-aboutTitle');ar.aboutP1=gv('ar-aboutP1');ar.aboutP2=gv('ar-aboutP2');ar.pjTitle=gv('ar-pjTitle');ar.expTitle=gv('ar-expTitle');ar.skTitle=gv('ar-skTitle');ar.eduTitle=gv('ar-eduTitle');ar.ctTitle=gv('ar-ctTitle');ar.phone=gv('ar-phone');ar.phoneHref=gv('ar-phone-href');ar.email=gv('ar-email');ar.emailHref=gv('ar-email-href');ar.address=gv('ar-address');ar.project=gv('ar-project');
  
  en.name1=gv('en-name1');en.name2=gv('en-name2');en.badge=gv('en-badge');en.subPrefix=gv('en-subPrefix');en.typing=gv('en-typing').split('\n').filter(l=>l.trim());en.desc=gv('en-desc');en.cta1=gv('en-cta1');en.cta2=gv('en-cta2');en.scroll=gv('en-scroll');en.footer=gv('en-footer');en.aboutTitle=gv('en-aboutTitle');en.aboutP1=gv('en-aboutP1');en.aboutP2=gv('en-aboutP2');en.pjTitle=gv('en-pjTitle');en.expTitle=gv('en-expTitle');en.skTitle=gv('en-skTitle');en.eduTitle=gv('en-eduTitle');en.ctTitle=gv('en-ctTitle');en.phoneLbl=gv('en-phoneLbl');en.emailLbl=gv('en-emailLbl');en.addrLbl=gv('en-addrLbl');en.addrVal=gv('en-addrVal');en.projLbl=gv('en-projLbl');en.projVal=gv('en-projVal');

  document.querySelectorAll('[data-stat]').forEach(el=>{ const lang=el.dataset.lang,i=+el.dataset.stat,f=el.dataset.f; if(S[lang]&&S[lang].stats[i]) S[lang].stats[i][f]=el.value; });
  document.querySelectorAll('[data-pj][data-f]').forEach(el=>{ const lang=el.dataset.lang,i=+el.dataset.pj,f=el.dataset.f; if(S[lang]&&S[lang].projects[i]){ if(f==='images'){ S[lang].projects[i][f]=el.value.split('\n').filter(l=>l.trim()); } else{ S[lang].projects[i][f]=el.value; } } });
  document.querySelectorAll('[data-exp][data-f]').forEach(el=>{ const lang=el.dataset.lang,i=+el.dataset.exp,f=el.dataset.f; if(S[lang]&&S[lang].experience[i]) S[lang].experience[i][f]=el.value; });
  document.querySelectorAll('[data-pt]').forEach(el=>{ const lang=el.dataset.lang,i=+el.dataset.exp,pi=+el.dataset.pt; if(S[lang]&&S[lang].experience[i]&&S[lang].experience[i].points[pi]!==undefined) S[lang].experience[i].points[pi]=el.value; });
  document.querySelectorAll('[data-sk][data-f]').forEach(el=>{ const lang=el.dataset.lang,i=+el.dataset.sk,f=el.dataset.f; if(S[lang]&&S[lang].skills[i]) S[lang].skills[i][f]=f==='p'?+el.value:el.value; });
  document.querySelectorAll('[data-edu][data-f]').forEach(el=>{ const lang=el.dataset.lang,i=+el.dataset.edu,f=el.dataset.f; if(S[lang]&&S[lang].education[i]) S[lang].education[i][f]=el.value; });
  document.querySelectorAll('[data-sec]').forEach(el=>{ S.sections[el.dataset.sec]=el.checked; });
}

function gv(id){ const el=document.getElementById(id); return el?el.value:''; }

document.getElementById('main').addEventListener('click', e => {
  const t = e.target;
  const delBtn = t.closest('.del-btn');
  if (delBtn) {
    e.stopPropagation();
    if(delBtn.dataset.delPj){ const [lang,i]=delBtn.dataset.delPj.split('-'); S[lang].projects.splice(+i,1); renderProjects(lang,S[lang].projects); }
    else if(delBtn.dataset.delExp){ const [lang,i]=delBtn.dataset.delExp.split('-'); S[lang].experience.splice(+i,1); renderExp(lang,S[lang].experience); }
    else if(delBtn.dataset.delSk){ const [lang,i]=delBtn.dataset.delSk.split('-'); S[lang].skills.splice(+i,1); renderSkills(lang,S[lang].skills); }
    else if(delBtn.dataset.delEdu){ const [lang,i]=delBtn.dataset.delEdu.split('-'); S[lang].education.splice(+i,1); renderEdu(lang,S[lang].education); }
    else if(delBtn.dataset.delPt){ const [lang,ei,pi]=delBtn.dataset.delPt.split('-'); S[lang].experience[+ei].points.splice(+pi,1); renderExp(lang,S[lang].experience); const item=document.getElementById(lang+'-exp-'+ei); if(item) { item.classList.add('open'); item.querySelector('.list-item-body').style.display='block'; } }
    return;
  }
  const head = t.closest('.list-item-head');
  if (head && head.dataset.toggle) { const id = head.dataset.toggle; const item = document.getElementById(id); if (item) { item.classList.toggle('open'); item.querySelector('.list-item-body').style.display = item.classList.contains('open') ? 'block' : 'none'; } return; }
  const addBtn = t.closest('.add-btn');
  if (addBtn && addBtn.dataset.addPt) { const [lang,ei] = addBtn.dataset.addPt.split('-'); S[lang].experience[+ei].points.push(''); renderExp(lang,S[lang].experience); const item = document.getElementById(lang+'-exp-'+ei); if(item) { item.classList.add('open'); item.querySelector('.list-item-body').style.display='block'; } }
});

document.getElementById('ar-add-pj').onclick=()=>{ S.ar.projects.push({title:'مشروع جديد',desc:'',features:'',link:'',images:[]});renderProjects('ar',S.ar.projects); };
document.getElementById('en-add-pj').onclick=()=>{ S.en.projects.push({title:'New Project',desc:'',features:'',link:'',images:[]});renderProjects('en',S.en.projects); };
document.getElementById('ar-add-exp').onclick=()=>{ S.ar.experience.push({period:'',role:'خبرة جديدة',company:'',points:['']});renderExp('ar',S.ar.experience); };
document.getElementById('en-add-exp').onclick=()=>{ S.en.experience.push({period:'',role:'New',company:'',points:['']});renderExp('en',S.en.experience); };
document.getElementById('ar-add-sk').onclick=()=>{ S.ar.skills.push({n:'مهارة',p:70,l:'Intermediate'});renderSkills('ar',S.ar.skills); };
document.getElementById('en-add-sk').onclick=()=>{ S.en.skills.push({n:'Skill',p:70,l:'Intermediate'});renderSkills('en',S.en.skills); };
document.getElementById('ar-add-edu').onclick=()=>{ S.ar.education.push({ico:'🎓',deg:'اسم',field:'التخصص',period:'الفترة',loc:'الموقع'});renderEdu('ar',S.ar.education); };
document.getElementById('en-add-edu').onclick=()=>{ S.en.education.push({ico:'🎓',deg:'Name',field:'Field',period:'Period',loc:'Loc'});renderEdu('en',S.en.education); };

document.getElementById('btn-save').addEventListener('click',()=>{ 
    collectState(); 
    if(saveState(S)) {
        const st=document.getElementById('save-status'); 
        st.textContent='✓ تم الحفظ';st.className='save-status ok'; 
        setTimeout(()=>{st.textContent='محفوظ';st.className='save-status ok';},2000); 
        showToast('💾 تم الحفظ بنجاح — افتح index.html لترى التغييرات'); 
    }
});

document.getElementById('btn-reset').addEventListener('click',()=>{ if(confirm('هل أنت متأكد من إعادة تعيين جميع البيانات؟')){ localStorage.removeItem(KEY); S=JSON.parse(JSON.stringify(DEFAULTS)); saveState(S); renderAdmin(); showToast('↺ تمت إعادة التعيين بنجاح'); } });

function showToast(msg){ const t=document.getElementById('toast'); t.textContent=msg;t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2800); }

renderAdmin();
document.getElementById('save-status').textContent=localStorage.getItem(KEY)?'محفوظ مسبقاً ✓':'افتراضي';
if(localStorage.getItem(KEY)) document.getElementById('save-status').className='save-status ok';