// نستخدم نفس الداتا الافتراضية إذا لم يكن هناك داتا سابقة
const state = JSON.parse(localStorage.getItem('sam_cv_v2')) || {
    ar: { name1: 'سام اسكندر', name2: 'الكاهلي', badge: '✦ مطور حلول تقنية & مدير متاجر إلكترونية ✦', desc: '', aboutP1: '', aboutP2: '' },
    colors: { bg: '#0b0f19', gold: '#d4af37' }
};

// تعبئة الحقول بالبيانات
document.getElementById('ar-name1').value = state.ar.name1 || '';
document.getElementById('ar-name2').value = state.ar.name2 || '';
document.getElementById('ar-badge').value = state.ar.badge || '';
document.getElementById('ar-desc').value = state.ar.desc || '';
document.getElementById('ar-aboutP1').value = state.ar.aboutP1 || '';
document.getElementById('ar-aboutP2').value = state.ar.aboutP2 || '';
document.getElementById('color-bg').value = state.colors.bg || '#0b0f19';
document.getElementById('color-gold').value = state.colors.gold || '#d4af37';

// دالة الحفظ
document.getElementById('btn-save').addEventListener('click', () => {
    state.ar.name1 = document.getElementById('ar-name1').value;
    state.ar.name2 = document.getElementById('ar-name2').value;
    state.ar.badge = document.getElementById('ar-badge').value;
    state.ar.desc = document.getElementById('ar-desc').value;
    state.ar.aboutP1 = document.getElementById('ar-aboutP1').value;
    state.ar.aboutP2 = document.getElementById('ar-aboutP2').value;
    
    state.colors.bg = document.getElementById('color-bg').value;
    state.colors.gold = document.getElementById('color-gold').value;

    localStorage.setItem('sam_cv_v2', JSON.stringify(state));
    
    const status = document.getElementById('save-status');
    status.textContent = 'تم الحفظ بنجاح ✓';
    status.style.color = '#4ade80';
    setTimeout(() => { status.textContent = 'جاهز للحفظ'; status.style.color = 'inherit'; }, 2000);
});