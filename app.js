// ==========================================================================
// 1. 14 TA VILOYAT VA HUDUDIY MA'LUMOTLAR BAZASI
// ==========================================================================

const REGIONS_LIST = [
  { id: 'samarqand', name: 'Samarqand viloyati', districts: ['Pastdarg\'om filiali', 'Urgut filiali', 'Samarqand shahar filiali', 'Toyloq filiali', 'Payariq filiali', 'Kattaqo\'rg\'on filiali'] },
  { id: 'toshkent_vil', name: 'Toshkent viloyati', districts: ['Qibray filiali', 'Zangiota filiali', 'Toshkent tuman filiali', 'Yangiyo\'l filiali', 'Bo\'stonliq filiali', 'Chinoz filiali'] },
  { id: 'andijon', name: 'Andijon viloyati', districts: ['Asaka filiali', 'Andijon shahar filiali', 'Shahrixon filiali', 'Xo\'jaobod filiali'] },
  { id: 'buxoro', name: 'Buxoro viloyati', districts: ['G\'ijduvon filiali', 'Buxoro shahar filiali', 'Kogon filiali', 'Vobkent filiali'] },
  { id: 'fargona', name: 'Farg\'ona viloyati', districts: ['Quva filiali', 'Farg\'ona shahar filiali', 'Marg\'ilon filiali', 'Qo\'qon filiali'] },
  { id: 'namangan', name: 'Namangan viloyati', districts: ['Namangan shahar filiali', 'Chortoq filiali', 'Uychi filiali', 'Kosonsoy filiali'] },
  { id: 'qashqadaryo', name: 'Qashqadaryo viloyati', districts: ['Koson filiali', 'Qarshi shahar filiali', 'Chiroqchi filiali', 'Shahrisabz filiali'] },
  { id: 'surxondaryo', name: 'Surxondaryo viloyati', districts: ['Termiz shahar filiali', 'Denov filiali', 'Sherobod filiali'] },
  { id: 'xorazm', name: 'Xorazm viloyati', districts: ['Urganch shahar filiali', 'Xiva filiali', 'Gurlan filiali'] },
  { id: 'jizzax', name: 'Jizzax viloyati', districts: ['Jizzax shahar filiali', 'Zomin filiali', 'G\'allaorol filiali'] },
  { id: 'sirdaryo', name: 'Sirdaryo viloyati', districts: ['Guliston shahar filiali', 'Boyovut filiali', 'Yangiyer filiali'] },
  { id: 'navoiy', name: 'Navoiy viloyati', districts: ['Navoiy shahar filiali', 'Zarafshon filiali', 'Karmana filiali'] },
  { id: 'toshkent_sh', name: 'Toshkent shahri', districts: ['Yunusobod filiali', 'Chilonzor filiali', 'Mirzo Ulug\'bek filiali', 'Yashnobod filiali'] },
  { id: 'qr', name: 'Qoraqalpog\'iston Resp.', districts: ['Nukus shahar filiali', 'Xo\'jayli filiali', 'Qo\'ng\'irot filiali'] }
];

// FAOL VILOYAT (STANDART: SAMARQAND)
let activeRegionId = 'samarqand';

// 29 USTUNLI MATRITSA HAR BIR VILOYAT UCHUN ANIQ QATORLARDA
const REGIONS_29_MATRIX = {
  'samarqand': { total: 38, hmmqo: 25, ichki: 13, hmmqo_prok: 2, hmmqo_iib: 1, hmmqo_dxx: 1, hmmqo_other: 0, ichki_prok: 2, ichki_iib: 1, ichki_dxx: 1, ichki_other: 0, hmmqo_crim: 1, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 2, hmmqo_fire: 3, hmmqo_disc: 8, ichki_crim: 1, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 1, ichki_fire: 3, ichki_disc: 7 },
  'toshkent_vil': { total: 32, hmmqo: 20, ichki: 12, hmmqo_prok: 1, hmmqo_iib: 0, hmmqo_dxx: 0, hmmqo_other: 1, ichki_prok: 1, ichki_iib: 1, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 1, hmmqo_fire: 2, hmmqo_disc: 7, ichki_crim: 1, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 1, ichki_fire: 2, ichki_disc: 6 },
  'andijon': { total: 13, hmmqo: 6, ichki: 7, hmmqo_prok: 3, hmmqo_iib: 3, hmmqo_dxx: 0, hmmqo_other: 0, ichki_prok: 1, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 6, hmmqo_fire: 2, hmmqo_disc: 2, ichki_crim: 0, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 4, ichki_fire: 4, ichki_disc: 2 },
  'buxoro': { total: 16, hmmqo: 3, ichki: 13, hmmqo_prok: 0, hmmqo_iib: 0, hmmqo_dxx: 0, hmmqo_other: 0, ichki_prok: 0, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 0, hmmqo_fire: 0, hmmqo_disc: 0, ichki_crim: 2, ichki_adm: 1, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 0, ichki_fire: 4, ichki_disc: 3 },
  'fargona': { total: 29, hmmqo: 19, ichki: 10, hmmqo_prok: 1, hmmqo_iib: 1, hmmqo_dxx: 0, hmmqo_other: 0, ichki_prok: 1, ichki_iib: 0, ichki_dxx: 0, ichki_other: 1, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 1, hmmqo_fire: 1, hmmqo_disc: 6, ichki_crim: 1, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 0, ichki_fire: 2, ichki_disc: 5 },
  'namangan': { total: 24, hmmqo: 15, ichki: 9, hmmqo_prok: 1, hmmqo_iib: 1, hmmqo_dxx: 0, hmmqo_other: 1, ichki_prok: 1, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 2, hmmqo_fire: 1, hmmqo_disc: 6, ichki_crim: 1, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 1, ichki_fire: 2, ichki_disc: 5 },
  'qashqadaryo': { total: 28, hmmqo: 18, ichki: 10, hmmqo_prok: 2, hmmqo_iib: 1, hmmqo_dxx: 0, hmmqo_other: 1, ichki_prok: 2, ichki_iib: 1, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 1, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 3, hmmqo_fire: 2, hmmqo_disc: 5, ichki_crim: 1, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 2, ichki_fire: 3, ichki_disc: 4 },
  'surxondaryo': { total: 22, hmmqo: 14, ichki: 8, hmmqo_prok: 1, hmmqo_iib: 1, hmmqo_dxx: 0, hmmqo_other: 0, ichki_prok: 0, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 1, hmmqo_fire: 1, hmmqo_disc: 5, ichki_crim: 0, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 1, ichki_fire: 1, ichki_disc: 4 },
  'xorazm': { total: 17, hmmqo: 10, ichki: 7, hmmqo_prok: 0, hmmqo_iib: 0, hmmqo_dxx: 0, hmmqo_other: 0, ichki_prok: 0, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 0, hmmqo_fire: 0, hmmqo_disc: 3, ichki_crim: 0, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 0, ichki_fire: 1, ichki_disc: 2 },
  'jizzax': { total: 36, hmmqo: 21, ichki: 15, hmmqo_prok: 1, hmmqo_iib: 1, hmmqo_dxx: 0, hmmqo_other: 0, ichki_prok: 0, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 0, hmmqo_fire: 0, hmmqo_disc: 2, ichki_crim: 0, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 0, ichki_fire: 0, ichki_disc: 8 },
  'sirdaryo': { total: 15, hmmqo: 10, ichki: 5, hmmqo_prok: 0, hmmqo_iib: 0, hmmqo_dxx: 0, hmmqo_other: 1, ichki_prok: 0, ichki_iib: 0, ichki_dxx: 0, ichki_other: 1, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 1, hmmqo_fire: 1, hmmqo_disc: 3, ichki_crim: 0, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 1, ichki_fire: 1, ichki_disc: 3 },
  'navoiy': { total: 18, hmmqo: 11, ichki: 7, hmmqo_prok: 1, hmmqo_iib: 0, hmmqo_dxx: 1, hmmqo_other: 0, ichki_prok: 0, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 1, hmmqo_fire: 1, hmmqo_disc: 4, ichki_crim: 0, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 1, ichki_fire: 2, ichki_disc: 3 },
  'toshkent_sh': { total: 32, hmmqo: 21, ichki: 11, hmmqo_prok: 1, hmmqo_iib: 0, hmmqo_dxx: 0, hmmqo_other: 0, ichki_prok: 0, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 0, hmmqo_fire: 0, hmmqo_disc: 3, ichki_crim: 0, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 0, ichki_fire: 1, ichki_disc: 3 },
  'qr': { total: 12, hmmqo: 7, ichki: 5, hmmqo_prok: 0, hmmqo_iib: 0, hmmqo_dxx: 0, hmmqo_other: 0, ichki_prok: 0, ichki_iib: 0, ichki_dxx: 0, ichki_other: 0, hmmqo_crim: 0, hmmqo_adm: 0, hmmqo_83: 0, hmmqo_84: 0, hmmqo_rej: 0, hmmqo_proc: 0, hmmqo_fire: 0, hmmqo_disc: 1, ichki_crim: 0, ichki_adm: 0, ichki_83: 0, ichki_84: 0, ichki_rej: 0, ichki_proc: 0, ichki_fire: 3, ichki_disc: 0 }
};

// HUDUDIY INTERAKTIV MA'LUMOTLAR
let regionalData = {
  tasks: [
    { id: 'MT-084', regionId: 'samarqand', title: 'Qishloq xo\'jaligi yerlaridan maqsadsiz foydalanish holatlarini xatlovdan o\'tkazish', district: 'Barcha tuman filiallari', date: '15.09.2026', deadline: '05.10.2026', status: 'Jarayonda', response: '', fileName: '' },
    { id: 'MT-071', regionId: 'samarqand', title: 'Ko\'chmas mulk bazasida yaqin qarindoshlarga berilgan kadastr pasportlari auditi', district: 'Urgut va Pastdarg\'om', date: '01.09.2026', deadline: '25.09.2026', status: 'Bajarildi', response: 'Audit yakunlandi, 2 ta shubhali holat aniqlanib bekor qilindi.', fileName: 'Audit_dalolatnomasi_2026.pdf' },
    { id: 'MT-089', regionId: 'toshkent_vil', title: 'Qibray tumani bo\'yicha auksionsiz ajratilgan yerlar reyestri', district: 'Qibray filiali', date: '12.09.2026', deadline: '28.09.2026', status: 'Bajarildi', response: '3 ta bino pasporti tekshirildi va prokuraturaga yuborildi.', fileName: 'Qibray_tekshiruv_hisoboti.pdf' }
  ],
  convicted: [
    { pinfl: '32004881120034', regionId: 'samarqand', name: 'Aliyev Vali G\'aniyevich', district: 'Samarqand shahar filiali', role: 'Davlat ro\'yxatidan o\'tkazuvchi', court: 'Samarqand shahar JIB sudi', date: '12.03.2024', articles: '167-m, 210-m', punishment: 'Jarima va mansab taqiqi', status: 'chetlatilgan' },
    { pinfl: '31904881120021', regionId: 'toshkent_vil', name: 'Ergashev Tohir Mansurovich', district: 'Qibray filiali', role: 'Yetakchi muhandis', court: 'Qibray tuman sudi', date: '18.04.2025', articles: '168-m, 205-m', punishment: 'Ozodlikni cheklash, mansab taqiqi', status: 'chetlatilgan' },
    { pinfl: '32501913340078', regionId: 'andijon', name: 'Qodirov Farrux Rustamovich', district: 'Asaka filiali', role: 'Arxiv mudiri', court: 'Andijon shahar sudi', date: '15.02.2026', articles: '209-modda', punishment: 'Ozodlikni cheklash', status: 'chetlatilgan' }
  ],
  proposals: [
    { id: 'TK-SAM-01', regionId: 'samarqand', type: 'Rotatsiya qilish', district: 'Pastdarg\'om filiali', desc: 'Bir lavozimda 4 yildan ortiq ishlagan, manfaatlar to\'qnashuvi xavfi mavjud.', status: 'Ko\'rib chiqilmoqda', date: '28.09.2026' },
    { id: 'TK-SAM-02', regionId: 'samarqand', type: 'Xizmat tekshiruvi tayinlash', district: 'Urgut filiali', desc: 'Auksionsiz berilgan ekin yerini noturar toifaga o\'tkazishga ko\'maklashganlik shubhasi.', status: 'Qabul qilindi', date: '22.09.2026' }
  ],
  investigations: [
    { code: 'XT-SAM-012', regionId: 'samarqand', district: 'Pastdarg\'om filiali', officer: 'Aliyev Mansur (Bo\'lim boshlig\'i)', reason: '1.5 gektar yer maydonini noqonuniy noturar toifaga o\'tkazish', result: 'Prokuraturaga yuborilgan', date: '20.09.2026' },
    { code: 'XT-SAM-015', regionId: 'samarqand', district: 'Urgut filiali', officer: 'Rustamov Bobur (Muhandis)', reason: 'Dalolatnomaga asossiz koordinatalar kiritish', result: 'Intizomiy jazo (Hayfsan)', date: '12.09.2026' }
  ],
  riskEmployees: [
    { pinfl: '31804901230011', regionId: 'samarqand', name: 'Rahmonov Dilshod Anvarovich', district: 'Samarqand shahar filiali', role: 'Mulkni ro\'yxatga olish bo\'lim mudiri', category: 'A', reason: 'Auksionsiz yer maydoniga xulosa berish xavfi yuqori', action: 'Video nazoratda, imzo cheklangan' },
    { pinfl: '31804901230077', regionId: 'samarqand', name: 'Valiyev Sardor Olimovich', district: 'Toyloq filiali', role: 'Katta muhandis', category: 'B', reason: 'Qarindoshlik va rieltorlik subyektlari bilan aloqa', action: 'Rotatsiya qilish tavsiya etildi' },
    { pinfl: '32001881230022', regionId: 'samarqand', name: 'Qosimov Rustam Alisherovich', district: 'Pastdarg\'om filiali', role: 'Yetakchi mutaxassis', category: 'D', reason: 'Ijro intizomi sustligi', action: 'Profilaktik ogohlantirish' }
  ],
  conflicts: [
    { pinfl: '32104921230055', regionId: 'samarqand', name: 'Rahmonov Dilshod Anvarovich', district: 'Samarqand shahar filiali', type: 'Manfaatlar to\'qnashuvi', detail: 'Ukasi Rahmonov Sanjar — xususiy kadastr firmasi rahbari', action: 'Komissiya a\'zoligidan chetlatilgan', status: 'Bartaraf etildi' },
    { pinfl: '31804901230077', regionId: 'samarqand', name: 'Valiyev Sardor Olimovich', district: 'Toyloq filiali', type: 'Tadbirkorlik (STIR)', detail: '"SAMARQAND AGRO" MCHJ (STIR: 305119842) ta\'sischisi', action: 'Ulushdan chiqish talabnomasi berilgan', status: 'Jarayonda' }
  ],
  operations: [
    { code: 'TT-SAM-08', regionId: 'samarqand', district: 'Pastdarg\'om filiali', partner: 'Davlat Xavfsizlik Xizmati (DXX)', isCollab: true, proof: '3,000 AQSH dollari', desc: 'Ekin yerini noturar joyga o\'tkazish evaziga ushlangan', date: '18.09.2026' }
  ]
};

// ==========================================================================
// 2. NAVIGATSIYA VA MODALLAR
// ==========================================================================
window.switchTab = function(tabId) {
  const tabs = ['dashboard', 'tasks', 'proposals', 'convicted', 'matrix', 'investigations', 'risk', 'conflicts', 'operations'];
  tabs.forEach(id => {
    const el = document.getElementById('tab-' + id);
    const btn = document.getElementById('btn-' + id);
    if (el) el.classList.add('hidden');
    if (btn) btn.classList.remove('active');
  });

  const current = document.getElementById('tab-' + tabId);
  if (current) current.classList.remove('hidden');

  const activeBtn = document.getElementById('btn-' + tabId);
  if (activeBtn) activeBtn.classList.add('active');

  const titles = {
    'dashboard': 'Viloyat Boshqaruvi va Nazorati',
    'tasks': 'Respublika Markazidan Kelgan Topshiriqlar Ijrosi',
    'proposals': 'Respublika Komplayens Xizmatiga Yuborilgan Takliflar',
    'convicted': 'Viloyat Bo\'yicha Sudlangan va Chetlatilgan Xodimlar Reyestri',
    'matrix': 'Viloyat Xizmat Tekshiruvlari Hisobot Matritsasi (29 Ustun)',
    'investigations': 'Viloyat Miqyosidagi Xizmat Tekshiruvlari',
    'risk': 'Korrupsion Xavf Guruhlariga Kiritilgan Xodimlar Reyestri',
    'conflicts': 'Manfaatlar To\'qnashuvi va Tadbirkorlik (STIR)',
    'operations': 'Tezkor Tadbirlar Operativ Bildirishnomalari'
  };
  if (document.getElementById('page-title')) {
    document.getElementById('page-title').innerText = titles[tabId] || 'Hududiy Portal';
  }
};

window.openModal = function(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('hidden');
};

window.closeModal = function(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('hidden');
};

// ==========================================================================
// 3. VILOYATNI TANLASH VA BARCHA MA'LUMOTLARNI MOSLASHTIRISH
// ==========================================================================
function initRegionSelector() {
  const sel = document.getElementById('activeRegionSelect');
  if (!sel) return;
  sel.innerHTML = REGIONS_LIST.map(r => `
    <option value="${r.id}" ${r.id === activeRegionId ? 'selected' : ''}>${r.name}</option>
  `).join('');
}

window.onRegionChange = function() {
  activeRegionId = document.getElementById('activeRegionSelect').value;
  const currentReg = REGIONS_LIST.find(r => r.id === activeRegionId);
  document.getElementById('sidebarInspectorName').innerText = `${currentReg.name} Komplayens Xizmati`;
  document.getElementById('dashDistrictsHeader').innerText = `${currentReg.name} Tuman Filiallari Bo'yicha Holat`;
  document.getElementById('regionMatrixHeaderTitle').innerText = `${currentReg.name} Xizmat Tekshiruvlari Hisobot Matritsasi (29 Ustun)`;
  renderAllData();
};

// ==========================================================================
// 4. BARCHA MA'LUMOTLARNI JADVALLARGA CHIQARISH
// ==========================================================================
function renderAllData() {
  const regTasks = regionalData.tasks.filter(t => t.regionId === activeRegionId);
  const regConv = regionalData.convicted.filter(c => c.regionId === activeRegionId);
  const regProps = regionalData.proposals.filter(p => p.regionId === activeRegionId);
  const regInvs = regionalData.investigations.filter(i => i.regionId === activeRegionId);
  const regRisks = regionalData.riskEmployees.filter(r => r.regionId === activeRegionId);
  const regConfs = regionalData.conflicts.filter(c => c.regionId === activeRegionId);
  const regOps = regionalData.operations.filter(o => o.regionId === activeRegionId);

  const matrixRow = REGIONS_29_MATRIX[activeRegionId] || { total: regInvs.length, hmmqo: 0, ichki: regInvs.length };

  // 1. DASHBOARD KPI
  document.getElementById('dash-inv-count').innerText = `${matrixRow.total || regInvs.length} ta`;
  document.getElementById('dash-inv-sub').innerText = `HMMQO: ${matrixRow.hmmqo || 0} | Ichki: ${matrixRow.ichki || 0}`;

  document.getElementById('dash-conv-count').innerText = `${regConv.length} nafar`;

  const doneTasks = regTasks.filter(t => t.status === 'Bajarildi').length;
  document.getElementById('dash-task-count').innerText = `${regTasks.length} ta`;
  document.getElementById('dash-task-sub').innerText = `Bajarildi: ${doneTasks} | Jarayonda: ${regTasks.length - doneTasks}`;

  const riskA = regRisks.filter(r => r.category === 'A').length;
  const riskB = regRisks.filter(r => r.category === 'B').length;
  const riskD = regRisks.filter(r => r.category === 'D').length;
  document.getElementById('dash-risk-count').innerText = `${regRisks.length} nafar`;
  document.getElementById('dash-risk-sub').innerHTML = `<span class="risk-badge-A">A: ${riskA}</span> | <span class="risk-badge-B">B: ${riskB}</span> | <span class="risk-badge-D">D: ${riskD}</span>`;

  document.getElementById('dash-conf-count').innerText = `${regConfs.length} holat`;

  // BADGELAR
  document.getElementById('badge-tasks').innerText = `${regTasks.length} ta`;
  document.getElementById('badge-convicted').innerText = `${regConv.length} nafar`;
  document.getElementById('badge-proposals').innerText = `${regProps.length} ta`;
  document.getElementById('badge-inv').innerText = `${regInvs.length} ta`;
  document.getElementById('badge-risk').innerText = `${regRisks.length} ta`;
  document.getElementById('badge-conf').innerText = `${regConfs.length} ta`;
  document.getElementById('badge-ops').innerText = `${regOps.length} ta`;

  // 2. DASHBOARD TUMANLAR JADVALI
  const currentReg = REGIONS_LIST.find(r => r.id === activeRegionId) || REGIONS_LIST[0];
  const dashTbody = document.getElementById('dashDistrictsTableBody');
  if (dashTbody) {
    dashTbody.innerHTML = currentReg.districts.map(dist => {
      const distInv = regInvs.filter(i => i.district.includes(dist)).length;
      const distConv = regConv.filter(c => c.district.includes(dist)).length;
      const distRisk = regRisks.filter(r => r.district.includes(dist)).length;
      const distConf = regConfs.filter(c => c.district.includes(dist)).length;
      const distOps = regOps.filter(o => o.district.includes(dist)).length;
      return `
        <tr>
          <td style="font-weight: 700; color: #0b132b;">${dist}</td>
          <td style="text-align: center;"><span class="badge ${distInv > 0 ? 'badge-amber' : 'badge-slate'}">${distInv} ta</span></td>
          <td style="text-align: center;"><span class="badge ${distConv > 0 ? 'badge-rose' : 'badge-slate'}">${distConv} nafar</span></td>
          <td style="text-align: center;"><span class="badge ${distRisk > 0 ? 'badge-rose' : 'badge-slate'}">${distRisk} nafar</span></td>
          <td style="text-align: center;"><span class="badge ${distConf > 0 ? 'badge-blue' : 'badge-slate'}">${distConf} holat</span></td>
          <td style="text-align: center;"><span class="badge ${distOps > 0 ? 'badge-rose' : 'badge-slate'}">${distOps} ta</span></td>
        </tr>
      `;
    }).join('');
  }

  // 3. TOPSHIRIQLAR JADVALI (JAVOB VA FAYL BIRIKTIRISH BILAN)
  const taskTbody = document.getElementById('tasksTableBody');
  if (taskTbody) {
    taskTbody.innerHTML = regTasks.length > 0 ? regTasks.map(t => `
      <tr>
        <td><b>${t.id}</b> — ${t.title}</td>
        <td>${t.district}</td>
        <td>${t.date}</td>
        <td><b style="color: #be123c;">${t.deadline}</b></td>
        <td style="text-align: center;">
          <span class="badge ${t.status === 'Bajarildi' ? 'badge-emerald' : 'badge-amber'}">${t.status}</span>
        </td>
        <td>
          ${t.response ? `
            <div style="font-size: 11px; color: #047857; font-weight: 600;">&#10004; ${t.response}</div>${t.fileName ? `<div style="font-size: 10px; color: #1d4ed8; font-weight: 700; margin-top: 2px;">&#128206; ${t.fileName}</div>` : ''}
          ` : `<span style="font-size: 11px; color: #64748b;">Hozircha javob berilmagan</span>`}
        </td>
        <td style="text-align: center;">
          <button onclick="openTaskResponseModal('${t.id}')" class="btn ${t.status === 'Bajarildi' ? 'btn-slate' : 'btn-emerald'}">
            ${t.status === 'Bajarildi' ? '&#9998; Javobni yangilash' : '&#9993; Javob yo\'llash'}
          </button>
        </td>
      </tr>
    `).join('') : `<tr><td colspan="7" style="text-align: center; color: #64748b; padding: 20px;">Topshiriqlar mavjud emas.</td></tr>`;
  }

  // 4. SUDLANGANLAR REYESTRI
  renderConvictedTable(regConv);

  // 5. VILOYATNING 29 USTUNLI MATRITSASI (AYNAN O'Z QATORI)
  renderRegionMatrix(matrixRow, currentReg.name);

  // 6. TAKLIFLAR
  const propTbody = document.getElementById('proposalsTableBody');
  if (propTbody) {
    propTbody.innerHTML = regProps.length > 0 ? regProps.map(p => `
      <tr>
        <td><b>${p.id}</b><br><small style="color: #64748b;">${p.date}</small></td>
        <td><b>${p.district}</b><br><small style="color: #0284c7;">${p.type}</small></td>
        <td>${p.desc}</td>
        <td style="text-align: center;"><span class="badge ${p.status === 'Qabul qilindi' ? 'badge-emerald' : 'badge-blue'}">${p.status}</span></td>
        <td style="text-align: center;"><button onclick="openPdf('proposal', '${p.id}', '${p.district}', '${p.date}', '${p.type}: ${p.desc}')" class="btn btn-blue">Taklif PDF</button></td>
      </tr>
    `).join('') : `<tr><td colspan="5" style="text-align: center; color: #64748b; padding: 20px;">Markazga yuborilgan takliflar mavjud emas.</td></tr>`;
  }

  // 7. XIZMAT TEKSHIRUVLARI
  const invTbody = document.getElementById('invTableBody');
  if (invTbody) {
    invTbody.innerHTML = regInvs.length > 0 ? regInvs.map(i => `
      <tr>
        <td><b>${i.code}</b><br><small>${i.date}</small></td>
        <td><b>${i.district}</b></td>
        <td>${i.officer}</td>
        <td>${i.reason}</td>
        <td style="color: #b45309; font-weight: 700;">${i.result}</td>
        <td style="text-align: center;"><button onclick="openPdf('investigation', '${i.code}', '${i.district}', '${i.date}', '${i.officer}: ${i.reason}')" class="btn btn-amber">Xulosa PDF</button></td>
      </tr>
    `).join('') : `<tr><td colspan="6" style="text-align: center; color: #64748b; padding: 20px;">Xizmat tekshiruvlari mavjud emas.</td></tr>`;
  }

  // 8. KORRUPSION XAVF (A, B, D)
  const riskTbody = document.getElementById('riskTableBody');
  if (riskTbody) {
    riskTbody.innerHTML = regRisks.length > 0 ? regRisks.map(r => `
      <tr>
        <td><b>${r.name}</b><br><small style="color: #0284c7;">${r.pinfl}</small></td>
        <td><b>${r.district}</b><br><small>${r.role}</small></td>
        <td style="text-align: center;"><span class="risk-badge-${r.category}">${r.category} toifa</span></td>
        <td>${r.reason}</td>
        <td style="color: #047857; font-weight: 600;">${r.action}</td>
        <td style="text-align: center;"><button onclick="openPdf('risk', '${r.name}', '${r.district}', '2026', '${r.category} toifa: ${r.reason}')" class="btn btn-rose">Dosye PDF</button></td>
      </tr>
    `).join('') : `<tr><td colspan="6" style="text-align: center; color: #64748b; padding: 20px;">Xavf guruhiga olingan xodimlar mavjud emas.</td></tr>`;
  }

  // 9. MANFAATLAR & STIR
  const confTbody = document.getElementById('conflictsTableBody');
  if (confTbody) {
    confTbody.innerHTML = regConfs.length > 0 ? regConfs.map(c => `
      <tr>
        <td><b>${c.name}</b><br><small style="color: #0284c7;">${c.pinfl}</small></td>
        <td>${c.district}</td>
        <td><span class="badge ${c.type.includes('STIR') ? 'badge-amber' : 'badge-blue'}">${c.type}</span></td>
        <td>${c.detail}</td>
        <td style="color: #047857; font-weight: 600;">${c.action}</td>
        <td style="text-align: center;"><span class="badge ${c.status === 'Bartaraf etildi' ? 'badge-emerald' : 'badge-amber'}">${c.status}</span></td>
      </tr>
    `).join('') : `<tr><td colspan="6" style="text-align: center; color: #64748b; padding: 20px;">Manfaatlar to'qnashuvi qayd etilmagan.</td></tr>`;
  }

  // 10. TEZKOR TADBIRLAR
  const opsTbody = document.getElementById('opsTableBody');
  if (opsTbody) {
    opsTbody.innerHTML = regOps.length > 0 ? regOps.map(o => `
      <tr>
        <td><b>${o.code}</b><br><small>${o.date}</small></td>
        <td><b>${o.district}</b></td>
        <td>${o.partner}</td>
        <td>${o.isCollab ? '<span class="badge badge-emerald">Hamkorlikda</span>' : '<span class="badge badge-slate">Mustaqil</span>'}</td>
        <td style="color: #be123c; font-weight: 800;">${o.proof}</td>
        <td>${o.desc}</td>
        <td style="text-align: center;"><button onclick="openPdf('operation', '${o.code}', '${o.district}', '${o.date}', '${o.partner}: ${o.desc}')" class="btn btn-rose">Svodka PDF</button></td>
      </tr>
    `).join('') : `<tr><td colspan="7" style="text-align: center; color: #64748b; padding: 20px;">Tezkor tadbirlar bildirishnomalari mavjud emas.</td></tr>`;
  }
}

// ==========================================================================
// 5. SUDLANGANLAR REYESTRI VA JONLI QIDIRUV
// ==========================================================================
function renderConvictedTable(list) {
  const tbody = document.getElementById('convictedTableBody');
  if (!tbody) return;
  tbody.innerHTML = list.length > 0 ? list.map(c => `
    <tr>
      <td><b>${c.name}</b><br><small style="color: #0284c7; font-weight: 700;">${c.pinfl}</small></td>
      <td><b>${c.district}</b><br><small style="color: #64748b;">${c.role}</small></td>
      <td>${c.court}<br><small style="color: #64748b;">${c.date}</small></td>
      <td><span class="badge badge-rose">${c.articles}</span></td>
      <td style="font-weight: 600;">${c.punishment}</td>
      <td style="text-align: center;"><span class="badge ${c.status === 'chetlatilgan' ? 'badge-emerald' : 'badge-rose'}">${c.status === 'chetlatilgan' ? 'Chetlatilgan' : 'Ishlamoqda'}</span></td>
      <td style="text-align: center;"><button onclick="openPdf('court', '${c.name}', '${c.court}', '${c.date}', '${c.articles}: ${c.punishment}')" class="btn btn-rose">Hukm PDF</button></td>
    </tr>
  `).join('') : `<tr><td colspan="7" style="text-align: center; color: #64748b; padding: 20px;">Viloyat bo'yicha sudlangan xodimlar mavjud emas.</td></tr>`;
}

window.filterRegionConvicted = function() {
  const q = document.getElementById('convictedSearch').value.toLowerCase().trim();
  const regConv = regionalData.convicted.filter(c => c.regionId === activeRegionId);
  const filtered = regConv.filter(c => c.name.toLowerCase().includes(q) || c.pinfl.includes(q));
  renderConvictedTable(filtered);
};

// ==========================================================================
// 6. VILOYATNING O'ZIGA TEGISHLI 29 USTUNLI MATRITSA QATORI
// ==========================================================================
function renderRegionMatrix(r, regionName) {
  const tbody = document.getElementById('regionMatrixTbody');
  if (!tbody) return;

  tbody.innerHTML = `
    <tr style="background: #fff; font-weight: 700;">
      <td style="text-align: center;">1</td>
      <td style="text-align: left; font-weight: 800; color: #0284c7;">${regionName}</td>
      <td style="background: #f0fdf4; font-weight: 800; color: #047857;">${r.total}</td>
      <td>${r.hmmqo}</td>
      <td>${r.ichki}</td>
      <td>${r.hmmqo_prok || '-'}</td><td>${r.hmmqo_iib || '-'}</td><td>${r.hmmqo_dxx || '-'}</td><td>${r.hmmqo_other || '-'}</td>
      <td>${r.ichki_prok || '-'}</td><td>${r.ichki_iib || '-'}</td><td>${r.ichki_dxx || '-'}</td><td>${r.ichki_other || '-'}</td>
      <td style="color: #be123c;">${r.hmmqo_crim || '-'}</td><td>${r.hmmqo_adm || '-'}</td><td>${r.hmmqo_83 || '-'}</td><td>${r.hmmqo_84 || '-'}</td><td>${r.hmmqo_rej || '-'}</td><td>${r.hmmqo_proc || '-'}</td><td style="color:#be123c; font-weight:800;">${r.hmmqo_fire || '-'}</td><td>${r.hmmqo_disc || '-'}</td>
      <td style="color: #be123c;">${r.ichki_crim || '-'}</td><td>${r.ichki_adm || '-'}</td><td>${r.ichki_83 || '-'}</td><td>${r.ichki_84 || '-'}</td><td>${r.ichki_rej || '-'}</td><td>${r.ichki_proc || '-'}</td><td style="color:#be123c; font-weight:800;">${r.ichki_fire || '-'}</td><td>${r.ichki_disc || '-'}</td>
    </tr>
  `;
}

window.exportRegionMatrixToExcel = function() {
  alert(`${REGIONS_LIST.find(r => r.id === activeRegionId).name} 29 ustunli hisobot matritsasi Excel formatida eksport qilinmoqda...`);
};

// ==========================================================================
// 7. TOPSHIRIQQA JAVOB YO'LLASH VA FAYL BIRIKTIRISH
// ==========================================================================
window.openTaskResponseModal = function(taskId) {
  const task = regionalData.tasks.find(t => t.id === taskId);
  if (!task) return;

  document.getElementById('task-resp-id').value = task.id;
  document.getElementById('task-resp-title').innerText = `${task.id}: ${task.title}`;
  document.getElementById('task-resp-text').value = task.response || '';
  document.getElementById('task-resp-file').value = '';

  openModal('taskResponseModal');
};

window.submitTaskResponse = function() {
  const id = document.getElementById('task-resp-id').value;
  const text = document.getElementById('task-resp-text').value.trim();
  const fileInput = document.getElementById('task-resp-file');

  if (!text) {
    alert("Iltimos, topshiriq ijrosi bo'yicha javob hisobotini yozing!");
    return;
  }

  const task = regionalData.tasks.find(t => t.id === id);
  if (task) {
    task.status = 'Bajarildi';
    task.response = text;
    if (fileInput.files && fileInput.files.length > 0) {
      task.fileName = fileInput.files[0].name;
    } else if (!task.fileName) {
      task.fileName = 'Ijro_dalolatnomasi_tasdiqlangan.pdf';
    }

    renderAllData();
    closeModal('taskResponseModal');
    alert("Topshiriqqa javob va biriktirilgan rasmiy fayl Respublika markaziga muvaffaqiyatli uzatildi!");
  }
};

// ==========================================================================
// 8. YANGI SUDLANGAN XODIM KIRITISH
// ==========================================================================
window.submitNewConvicted = function() {
  const name = document.getElementById('conv-input-name').value.trim();
  const pinfl = document.getElementById('conv-input-pinfl').value.trim();
  const district = document.getElementById('conv-input-district').value.trim();
  const role = document.getElementById('conv-input-role').value.trim();
  const court = document.getElementById('conv-input-court').value.trim();
  const date = document.getElementById('conv-input-date').value;
  const articles = document.getElementById('conv-input-articles').value.trim();
  const punish = document.getElementById('conv-input-punish').value.trim();

  if (!name || !pinfl || !district || !articles) {
    alert("Iltimos, xodim F.I.SH, 14 xonali JSHSHIR, tuman va JK moddalarini to'liq kiriting!");
    return;
  }

  regionalData.convicted.unshift({
    pinfl: pinfl,
    regionId: activeRegionId,
    name: name,
    district: district,
    role: role || 'Yetakchi mutaxassis',
    court: court || 'Tuman JIB sudi',
    date: date || '30.09.2026',
    articles: articles,
    punishment: punish || 'Mansab huquqidan mahrum qilish',
    status: 'chetlatilgan'
  });

  renderAllData();
  closeModal('newConvictedModal');
  alert("Sudlangan xodim reyestrga kiritildi va tizimdan to'liq chetlatildi!");
};

// ==========================================================================
// 9. BOSHQA MODALLAR (TAKLIF, XAVF, SVODKA, TEKSHIRUV)
// ==========================================================================
window.submitNewProposal = function() {
  const type = document.getElementById('prop-type').value;
  const district = document.getElementById('prop-district').value.trim();
  const desc = document.getElementById('prop-desc').value.trim();

  if (!district || !desc) {
    alert("Iltimos, tuman filiali va taklif mazmunini to'liq yozing!");
    return;
  }

  regionalData.proposals.unshift({
    id: 'TK-' + activeRegionId.slice(0, 3).toUpperCase() + '-' + Date.now().toString().slice(-3),
    regionId: activeRegionId,
    type: type,
    district: district,
    desc: desc,
    status: 'Yuborildi (Ko\'rib chiqilmoqda)',
    date: '30.09.2026'
  });

  renderAllData();
  closeModal('newProposalModal');
  alert("Taklifingiz Respublika markaziga yuborildi!");
};

window.submitNewInvestigation = function() {
  const district = document.getElementById('inv-district').value.trim();
  const officer = document.getElementById('inv-officer').value.trim();
  const desc = document.getElementById('inv-desc').value.trim();

  if (!district || !officer || !desc) {
    alert("Iltimos, barcha maydonlarni to'ldiring!");
    return;
  }

  regionalData.investigations.unshift({
    code: 'XT-' + activeRegionId.slice(0, 3).toUpperCase() + '-' + Date.now().toString().slice(-3),
    regionId: activeRegionId,
    district: district,
    officer: officer,
    reason: desc,
    result: 'Xizmat tekshiruvi ochildi',
    date: '30.09.2026'
  });

  renderAllData();
  closeModal('newInvestigationModal');
  alert("Xizmat tekshiruvi ochildi!");
};

window.submitNewRisk = function() {
  const name = document.getElementById('risk-name').value.trim();
  const pinfl = document.getElementById('risk-pinfl').value.trim();
  const district = document.getElementById('risk-district').value.trim();
  const category = document.getElementById('risk-category').value;
  const role = document.getElementById('risk-role').value.trim();
  const desc = document.getElementById('risk-desc').value.trim();

  if (!name || !pinfl || !district) {
    alert("Iltimos, xodim F.I.SH, JSHSHIR va tuman filialini kiriting!");
    return;
  }

  regionalData.riskEmployees.unshift({
    pinfl: pinfl,
    regionId: activeRegionId,
    name: name,
    district: district,
    role: role || 'Yetakchi mutaxassis',
    category: category,
    reason: desc || 'Korrupsion xavf omili qayd etildi',
    action: category === 'A' ? 'Audio/video nazorat ostida' : 'Profilaktik monitoring'
  });

  renderAllData();
  closeModal('newRiskModal');
  alert("Xodim xavf reyestriga kiritildi!");
};

window.submitNewOperation = function() {
  const district = document.getElementById('op-district').value.trim();
  const partner = document.getElementById('op-partner').value;
  const isCollab = document.getElementById('op-collab').checked;
  const proof = document.getElementById('op-proof').value.trim();
  const desc = document.getElementById('op-desc').value.trim();

  if (!district || !desc) {
    alert("Iltimos, tuman va holat tavsifini kiriting!");
    return;
  }

  regionalData.operations.unshift({
    code: 'TT-' + activeRegionId.slice(0, 3).toUpperCase() + '-' + Date.now().toString().slice(-3),
    regionId: activeRegionId,
    district: district,
    partner: partner,
    isCollab: isCollab,
    proof: proof || 'Mablag\' aniqlanmoqda',
    desc: desc,
    date: '30.09.2026'
  });

  renderAllData();
  closeModal('newOperationModal');
  alert("Tezkor xabar Respublika markaziga darhol uzatildi!");
};

// ==========================================================================
// 10. DEMO PDF GENERATORI
// ==========================================================================
window.openPdf = function(type, p1, p2, p3, p4) {
  const paper = document.getElementById('pdfPaperContent');
  if (!paper) return;

  const currentReg = REGIONS_LIST.find(r => r.id === activeRegionId) || REGIONS_LIST[0];

  let html = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; border-bottom: 1px solid #ccc; padding-bottom: 8px;">
      <span style="font-size: 12px; font-weight: bold; color: #333;">O'zbekiston Respublikasi Kadastr Agentligi ${currentReg.name} Komplayens Xizmati</span>
      <button onclick="window.print()" class="btn btn-blue">&#128438; Chop etish / PDF Saqlash</button>
    </div>
  `;

  if (type === 'court') {
    document.getElementById('pdfDocTitle').innerText = `Sud Hukmi Nusxasi — ${p1}`;
    html += `
      <div class="pdf-header">
        <h2>O'ZBEKISTON RESPUBLIKASI NOMI BILAN</h2>
        <h2>JINOYAT ISHLARI BO'YICHA SUD HUKMI (NUSXA)</h2>
        <p>Xodim: ${p1} | Sud: ${p2} | Sana: ${p3}</p>
      </div>
      <p style="text-indent: 30px; margin-bottom: 15px;">
        Sud hay'ati o'rganish natijasida xodimning mansab soxtakorligi va poraxo'rlik jinoyatini tasdiqladi:
      </p>
      <p style="text-indent: 30px; font-weight: bold; margin-bottom: 25px;">
        HUKM: ${p4}. Davlat kadastrlari tizimida mansabdorlik lavozimlarida ishlash huquqidan mahrum etilsin.
      </p>
      <div class="pdf-stamp">
        <div><p>Sudya: ____________</p><p style="font-size: 10px; color: #666;">Yagona sud tizimi orqali tasdiqlangan</p></div>
        <div class="stamp-box" style="border-color: #be123c; color: #be123c;">SUD HUKMI QONUNIY<br>KUCHGA KIRGAN</div>
      </div>
    `;
  } else if (type === 'proposal') {
    document.getElementById('pdfDocTitle').innerText = `Markazga Xizmat Taklifi — ${p1}`;
    html += `
      <div class="pdf-header">
        <h2>KADASTR AGENTLIGI RESPUBLIKA KOMPLAYENS XIZMATIGA</h2>
        <h2>XIZMAT BILDIRISHNOMASI VA TAKLIF</h2>
        <p>Hujjat kodi: ${p1} | Hudud: ${p2} | Sana: ${p3}</p>
      </div>
      <p style="text-indent: 30px; margin-bottom: 15px;">
        ${currentReg.name} tizimida korrupsion xavflarni bartaraf etish bo'yicha quyidagi rasmiy taklif kiritiladi:
      </p>
      <p style="text-indent: 30px; margin-bottom: 20px;">
        Asos va tavsiya: <b>${p4}</b>.
      </p>
      <div class="pdf-stamp">
        <div><p>Viloyat inspektori: ____________</p></div>
        <div class="stamp-box">KOMPLAYENS TAKLIFNOMA<br>${currentReg.name.toUpperCase()}</div>
      </div>
    `;
  } else {
    document.getElementById('pdfDocTitle').innerText = `Rasmiy Hujjat — ${p1}`;
    html += `
      <div class="pdf-header">
        <h2>RASMIY KOMPLAYENS DALOLATNOMASI</h2>
        <p>${p1} | ${p2} | ${p3}</p>
      </div>
      <p style="text-indent: 30px; margin-bottom: 25px;">Tafsilot: <b>${p4}</b></p>
      <div class="pdf-stamp">
        <div><p>Inspektor: ____________</p></div>
        <div class="stamp-box" style="border-color: #047857; color: #047857;">KOMPLAYENS NAZORATI<br>TASDIQLANDI</div>
      </div>
    `;
  }

  paper.innerHTML = html;
  openModal('pdfViewerModal');
};

// ==========================================================================
// 11. DASTURNI DASTLABKI YUKLASH
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
  initRegionSelector();
  renderAllData();
});
