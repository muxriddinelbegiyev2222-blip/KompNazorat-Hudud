// ==========================================================================
// 1. HUDUDIY TIZIM BAZASI VA STATISTIKASI
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

// FAOL VILOYAT
let activeRegionId = 'samarqand';

// HUDUDIY MA'LUMOTLAR
let regionalData = {
  proposals: [
    { id: 'TK-SAM-01', regionId: 'samarqand', type: 'Rotatsiya qilish', district: 'Pastdarg\'om filiali', officer: 'Mamatov Doniyor (Bosh muhandis)', desc: 'Bir lavozimda 4 yildan ortiq ishlagan, manfaatlar to\'qnashuvi xavfi mavjud.', status: 'Ko\'rib chiqilmoqda', date: '28.09.2026' },
    { id: 'TK-SAM-02', regionId: 'samarqand', type: 'Xizmat tekshiruvi tayinlash', district: 'Urgut filiali', officer: 'Aliyev Mansur', desc: 'Auksionsiz berilgan ekin yerini noturar toifaga o\'tkazishga ko\'maklashganlik shubhasi.', status: 'Qabul qilindi', date: '22.09.2026' }
  ],
  tasks: [
    { id: 'MT-084', regionId: 'samarqand', title: 'Qishloq xo\'jaligi yerlaridan maqsadsiz foydalanish holatlarini xatlovdan o\'tkazish', district: 'Barcha tuman filiallari', date: '15.09.2026', deadline: '05.10.2026', status: 'Jarayonda' },
    { id: 'MT-071', regionId: 'samarqand', title: 'Ko\'chmas mulk bazasida yaqin qarindoshlarga berilgan kadastr pasportlari auditi', district: 'Urgut va Pastdarg\'om', date: '01.09.2026', deadline: '25.09.2026', status: 'Bajarildi' }
  ],
  investigations: [
    { code: 'XT-SAM-012', regionId: 'samarqand', district: 'Pastdarg\'om filiali', officer: 'Aliyev Mansur (Bo\'lim boshlig\'i)', reason: '1.5 gektar yer maydonini noqonuniy o\'tkazish', result: 'Prokuraturaga yuborilgan', date: '20.09.2026' },
    { code: 'XT-SAM-015', regionId: 'samarqand', district: 'Urgut filiali', officer: 'Rustamov Bobur (Muhandis)', reason: 'Dalolatnomaga soxta koordinatalar kiritish', result: 'Intizomiy jazo (Hayfsan)', date: '12.09.2026' }
  ],
  riskEmployees: [
    { pinfl: '31804901230011', regionId: 'samarqand', name: 'Rahmonov Dilshod Anvarovich', district: 'Samarqand shahar filiali', role: 'Mulkni ro\'yxatga olish bo\'limi mudiri', category: 'A', reason: 'Auksionsiz yer maydoniga xulosa berish xavfi yuqori', action: 'Video nazoratda, imzo cheklangan' },
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
  const tabs = ['dashboard', 'proposals', 'tasks', 'investigations', 'risk', 'conflicts', 'operations'];
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
    'proposals': 'Respublika Komplayens Xizmatiga Yuborilgan Takliflar',
    'tasks': 'Respublika Markazidan Kelgan Topshiriqlar Ijrosi',
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
// 3. VILOYATNI TANLASH VA MA'LUMOTLARNI YANGILASH
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
  renderAllData();
};

// ==========================================================================
// 4. JADVALLARNI CHIQARISH VA DINAMIKASI
// ==========================================================================
function renderAllData() {
  const regProps = regionalData.proposals.filter(p => p.regionId === activeRegionId);
  const regTasks = regionalData.tasks.filter(t => t.regionId === activeRegionId);
  const regInvs = regionalData.investigations.filter(i => i.regionId === activeRegionId);
  const regRisks = regionalData.riskEmployees.filter(r => r.regionId === activeRegionId);
  const regConfs = regionalData.conflicts.filter(c => c.regionId === activeRegionId);
  const regOps = regionalData.operations.filter(o => o.regionId === activeRegionId);

  // DASHBOARD KPI
  document.getElementById('dash-prop-count').innerText = `${regProps.length} ta`;
  document.getElementById('dash-task-count').innerText = `${regTasks.length} ta`;
  document.getElementById('dash-risk-count').innerText = `${regRisks.length} nafar`;
  document.getElementById('dash-conf-count').innerText = `${regConfs.length} holat`;

  // MENYU BADGELARI
  document.getElementById('badge-proposals').innerText = `${regProps.length} ta`;
  document.getElementById('badge-tasks').innerText = `${regTasks.length} ta`;
  document.getElementById('badge-inv').innerText = `${regInvs.length} ta`;
  document.getElementById('badge-risk').innerText = `${regRisks.length} ta`;
  document.getElementById('badge-conf').innerText = `${regConfs.length} ta`;
  document.getElementById('badge-ops').innerText = `${regOps.length} ta`;

  // 1. DASHBOARD TUMANLAR JADVALI
  const currentReg = REGIONS_LIST.find(r => r.id === activeRegionId) || REGIONS_LIST[0];
  const dashTbody = document.getElementById('dashDistrictsTableBody');
  if (dashTbody) {
    dashTbody.innerHTML = currentReg.districts.map(dist => {
      const distInv = regInvs.filter(i => i.district.includes(dist)).length;
      const distRisk = regRisks.filter(r => r.district.includes(dist)).length;
      const distConf = regConfs.filter(c => c.district.includes(dist)).length;
      const distOps = regOps.filter(o => o.district.includes(dist)).length;
      return `
        <tr>
          <td style="font-weight: 700; color: #0b132b;">${dist}</td>
          <td style="text-align: center;"><span class="badge ${distInv > 0 ? 'badge-amber' : 'badge-slate'}">${distInv} ta</span></td>
          <td style="text-align: center;"><span class="badge ${distRisk > 0 ? 'badge-rose' : 'badge-slate'}">${distRisk} nafar</span></td>
          <td style="text-align: center;"><span class="badge ${distConf > 0 ? 'badge-blue' : 'badge-slate'}">${distConf} holat</span></td>
          <td style="text-align: center;"><span class="badge ${distOps > 0 ? 'badge-rose' : 'badge-slate'}">${distOps} ta</span></td>
        </tr>
      `;
    }).join('');
  }

  // 2. TAKLIFLAR JADVALI
  const propTbody = document.getElementById('proposalsTableBody');
  if (propTbody) {
    propTbody.innerHTML = regProps.length > 0 ? regProps.map(p => `
      <tr>
        <td><b>${p.id}</b><br><small style="color: #64748b;">${p.date}</small></td>
        <td><b>${p.district}</b><br><small style="color: #0284c7;">${p.type}</small></td>
        <td>${p.desc}</td>
        <td><small style="color: #047857;">Xizmat bildirishnomasi</small></td>
        <td style="text-align: center;"><span class="badge ${p.status === 'Qabul qilindi' ? 'badge-emerald' : 'badge-blue'}">${p.status}</span></td>
        <td style="text-align: center;"><button onclick="openPdf('proposal', '${p.id}', '${p.district}', '${p.date}', '${p.type}: ${p.desc}')" class="btn btn-blue">Taklif PDF</button></td>
      </tr>
    `).join('') : `<tr><td colspan="6" style="text-align: center; color: #64748b; padding: 20px;">Hozircha markazga yuborilgan takliflar mavjud emas.</td></tr>`;
  }

  // 3. TOPSHIRIQLAR JADVALI
  const taskTbody = document.getElementById('tasksTableBody');
  if (taskTbody) {
    taskTbody.innerHTML = regTasks.length > 0 ? regTasks.map(t => `
      <tr>
        <td><b>${t.id}</b> — ${t.title}</td>
        <td>${t.district}</td>
        <td>${t.date}</td>
        <td><b style="color: #be123c;">${t.deadline}</b></td>
        <td style="text-align: center;"><span class="badge ${t.status === 'Bajarildi' ? 'badge-emerald' : 'badge-amber'}">${t.status}</span></td>
        <td style="text-align: center;">
          ${t.status === 'Jarayonda' ? `<button onclick="markTaskDone('${t.id}')" class="btn btn-emerald">&#10004; Bajarildi</button>` : `<span style="font-size: 11px; color: #047857; font-weight: 700;">Hisobot yuborilgan</span>`}
        </td>
      </tr>
    `).join('') : `<tr><td colspan="6" style="text-align: center; color: #64748b; padding: 20px;">Faol topshiriqlar mavjud emas.</td></tr>`;
  }

  // 4. XIZMAT TEKSHIRUVLARI
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

  // 5. KORRUPSION XAVF (A, B, D)
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

  // 6. MANFAATLAR & STIR
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
    `).join('') : `<tr><td colspan="6" style="text-align: center; color: #64748b; padding: 20px;">Manfaatlar to'qnashuvi holatlari qayd etilmagan.</td></tr>`;
  }

  // 7. TEZKOR TADBIRLAR
  const opsTbody = document.getElementById('opsTableBody');
  if (opsTbody) {
    opsTbody.innerHTML = regOps.length > 0 ? regOps.map(o => `
      <tr>
        <td><b>${o.code}</b><br><small>${o.date}</small></td>
        <td><b>${o.district}</b></td>
        <td>${o.partner}</td>
        <td>${o.isCollab ? '<span class="badge badge-emerald">Hamkorlikda</span>' : '<span class="badge badge-slate">Organ mustaqil</span>'}</td>
        <td style="color: #be123c; font-weight: 800;">${o.proof}</td>
        <td>${o.desc}</td>
        <td style="text-align: center;"><button onclick="openPdf('operation', '${o.code}', '${o.district}', '${o.date}', '${o.partner}: ${o.desc}')" class="btn btn-rose">Svodka PDF</button></td>
      </tr>
    `).join('') : `<tr><td colspan="7" style="text-align: center; color: #64748b; padding: 20px;">Tezkor tadbirlar bildirishnomalari mavjud emas.</td></tr>`;
  }
}

// ==========================================================================
// 5. YANGI MA'LUMOT KIRITISH VA TOPSHIRIQNI BAJARISH
// ==========================================================================
window.submitNewProposal = function() {
  const type = document.getElementById('prop-type').value;
  const district = document.getElementById('prop-district').value;
  const officer = document.getElementById('prop-officer').value;
  const desc = document.getElementById('prop-desc').value;

  if (!district || !desc) {
    alert("Iltimos, tuman filiali va taklif mazmunini to'liq yozing!");
    return;
  }

  regionalData.proposals.unshift({
    id: 'TK-' + activeRegionId.slice(0, 3).toUpperCase() + '-' + Date.now().toString().slice(-3),
    regionId: activeRegionId,
    type: type,
    district: district,
    officer: officer || 'Mas\'ul xodim',
    desc: desc,
    status: 'Yuborildi (Ko\'rib chiqilmoqda)',
    date: '30.09.2026'
  });

  renderAllData();
  closeModal('newProposalModal');
  alert("Taklifingiz Respublika komplayens markaziga muvaffaqiyatli yuborildi!");
};

window.submitNewInvestigation = function() {
  const district = document.getElementById('inv-district').value;
  const officer = document.getElementById('inv-officer').value;
  const reasonType = document.getElementById('inv-reason-type').value;
  const desc = document.getElementById('inv-desc').value;

  if (!district || !officer || !desc) {
    alert("Iltimos, tuman, xodim va tekshiruv tafsilotini to'liq kiriting!");
    return;
  }

  regionalData.investigations.unshift({
    code: 'XT-' + activeRegionId.slice(0, 3).toUpperCase() + '-' + Date.now().toString().slice(-3),
    regionId: activeRegionId,
    district: district,
    officer: officer,
    reason: `${reasonType}: ${desc}`,
    result: 'Xizmat tekshiruvi boshlandi',
    date: '30.09.2026'
  });

  renderAllData();
  closeModal('newInvestigationModal');
  alert("Xizmat tekshiruvi rasmiylashtirildi va markaziy monitoringga olindi!");
};

window.submitNewRisk = function() {
  const name = document.getElementById('risk-name').value;
  const pinfl = document.getElementById('risk-pinfl').value;
  const district = document.getElementById('risk-district').value;
  const category = document.getElementById('risk-category').value;
  const role = document.getElementById('risk-role').value;
  const desc = document.getElementById('risk-desc').value;

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
    reason: desc || 'Korrupsion xavf omili aniqlandi',
    action: category === 'A' ? 'Audio/video nazorat ostida' : 'Profilaktik monitoring'
  });

  renderAllData();
  closeModal('newRiskModal');
  alert("Xodim korrupsion xavf reyestriga kiritildi!");
};

window.submitNewOperation = function() {
  const district = document.getElementById('op-district').value;
  const partner = document.getElementById('op-partner').value;
  const isCollab = document.getElementById('op-collab').checked;
  const proof = document.getElementById('op-proof').value;
  const desc = document.getElementById('op-desc').value;

  if (!district || !desc) {
    alert("Iltimos, tuman va tezkor tadbir tafsilotini kiriting!");
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
  alert("Tezkor xabarnoma Respublika markaziga darhol uzatildi!");
};

window.markTaskDone = function(taskId) {
  const task = regionalData.tasks.find(t => t.id === taskId);
  if (task) {
    task.status = 'Bajarildi';
    renderAllData();
    alert("Topshiriq ijrosi bajarilgan deb belgilandi va markazga hisobot jo'natildi!");
  }
};

// ==========================================================================
// 6. RASMIY DEMO PDF GENERATORI
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

  if (type === 'proposal') {
    document.getElementById('pdfDocTitle').innerText = `Markazga Xizmat Taklifi — ${p1}`;
    html += `
      <div class="pdf-header">
        <h2>KADASTR AGENTLIGI RESPUBLIKA KOMPLAYENS NAZORATI XIZMATIGA</h2>
        <h2>XIZMAT BILDIRISHNOMASI VA TAKLIF</h2>
        <p>Hujjat kodi: ${p1} | Hudud: ${p2} | Sana: ${p3}</p>
      </div>
      <p style="text-indent: 30px; margin-bottom: 15px;">
        ${currentReg.name} kadastr organlari tizimida o'tkazilgan o'rganishlar davomida korrupsion xavflarni bartaraf etish yuzasidan quyidagi taklif kiritiladi:
      </p>
      <p style="text-indent: 30px; margin-bottom: 20px;">
        Tafsilot va asos: <b>${p4}</b>.
      </p>
      <p style="text-indent: 30px; font-weight: bold; margin-bottom: 25px;">
        Yuqoridagilardan kelib chiqib, taklif etilayotgan chorani Respublika apparati darajasida tasdiqlashingizni so'raymiz.
      </p>
      <div class="pdf-stamp">
        <div><p>Viloyat komplayens inspektori: ____________</p><p style="font-size: 10px; color: #666;">Elektron tasdiqlangan</p></div>
        <div class="stamp-box">KOMPLAYENS TAKLIFNOMA<br>${currentReg.name.toUpperCase()}</div>
      </div>
    `;
  } else if (type === 'risk') {
    document.getElementById('pdfDocTitle').innerText = `Korrupsion Xavf Bahosi — ${p1}`;
    html += `
      <div class="pdf-header">
        <h2>KORRUPSION XAVFNI BAHOLASH VA MONITORING DOSYESI</h2>
        <p>Xodim: ${p1} | Filial: ${p2} | Yil: ${p3}</p>
      </div>
      <p style="text-indent: 30px; margin-bottom: 15px;">
        Monitoring jarayonida xodimning faoliyatida quyidagi korrupsion xavf aniqlangan:
      </p>
      <p style="text-indent: 30px; font-weight: bold; margin-bottom: 25px;">
        Xavf omili: ${p4}.
      </p>
      <div class="pdf-stamp">
        <div><p>Viloyat inspektori: ____________</p></div>
        <div class="stamp-box" style="border-color: #be123c; color: #be123c;">XAVF GURUHI NAZORATDA<br>${currentReg.name.toUpperCase()}</div>
      </div>
    `;
  } else {
    document.getElementById('pdfDocTitle').innerText = `Rasmiy Xulosa / Svodka — ${p1}`;
    html += `
      <div class="pdf-header">
        <h2>RASMIY KOMPLAYENS XULOSASI VA SVODKASI</h2>
        <p>${p1} | ${p2} | ${p3}</p>
      </div>
      <p style="text-indent: 30px; margin-bottom: 25px;">
        Holat: <b>${p4}</b>.
      </p>
      <div class="pdf-stamp">
        <div><p>Inspektor: ____________</p></div>
        <div class="stamp-box" style="border-color: #047857; color: #047857;">KOMPLAYENS NAZORATI<br>TASDIQLANDI</div>
      </div>
    `;
  }

  paper.innerHTML = html;
  openModal('pdfViewerModal');
};

// DASTUR DASTLABKI YUKLANGANDA
window.addEventListener('DOMContentLoaded', () => {
  initRegionSelector();
  renderAllData();
});
