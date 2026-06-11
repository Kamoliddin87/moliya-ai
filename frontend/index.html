<!DOCTYPE html>
<html lang="uz">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Moliya AI — Ўзбекистон солиқ ва молия ёрдамчиси</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  :root{
    --blue:#1a56db;--blue-light:#e8f0fe;--blue-mid:#4285f4;
    --green:#0f9d58;--green-light:#e6f4ea;
    --amber:#f9ab00;--amber-light:#fef9e7;
    --red:#d93025;--red-light:#fce8e6;
    --gray:#5f6368;--gray-light:#f8f9fa;--gray-border:#e0e0e0;
    --text:#202124;--text-sec:#5f6368;
    --white:#fff;--shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.08);
  }
  body{font-family:'Segoe UI',system-ui,sans-serif;background:#f8f9fa;color:var(--text);min-height:100vh}

  /* HEADER */
  .header{background:var(--white);border-bottom:1px solid var(--gray-border);padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;box-shadow:var(--shadow)}
  .logo{display:flex;align-items:center;gap:10px;font-size:20px;font-weight:600;color:var(--blue)}
  .logo-icon{width:36px;height:36px;background:var(--blue);border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-size:18px}
  .header-badge{font-size:11px;background:var(--green-light);color:var(--green);padding:3px 10px;border-radius:20px;font-weight:500}
  .nav-links{display:flex;gap:8px}
  .nav-link{font-size:14px;color:var(--text-sec);padding:6px 14px;border-radius:6px;cursor:pointer;text-decoration:none;transition:background .15s}
  .nav-link:hover{background:var(--gray-light)}
  .tg-btn{background:var(--blue);color:white;border:none;border-radius:8px;padding:8px 16px;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:6px;text-decoration:none;transition:opacity .15s}
  .tg-btn:hover{opacity:.9}

  /* LAYOUT */
  .container{max-width:1100px;margin:0 auto;padding:24px 20px;display:grid;grid-template-columns:280px 1fr;gap:20px;align-items:start}
  @media(max-width:768px){.container{grid-template-columns:1fr}.sidebar{display:none}}

  /* SIDEBAR */
  .sidebar{display:flex;flex-direction:column;gap:12px;position:sticky;top:84px}
  .sidebar-card{background:var(--white);border:1px solid var(--gray-border);border-radius:12px;overflow:hidden;box-shadow:var(--shadow)}
  .sidebar-title{font-size:11px;font-weight:600;color:var(--text-sec);padding:12px 16px 8px;text-transform:uppercase;letter-spacing:.5px;border-bottom:1px solid var(--gray-border)}
  .sidebar-item{padding:10px 16px;font-size:14px;cursor:pointer;display:flex;align-items:center;gap:10px;transition:background .1s;border-bottom:1px solid #f0f0f0;color:var(--text)}
  .sidebar-item:last-child{border-bottom:none}
  .sidebar-item:hover,.sidebar-item.active{background:var(--blue-light);color:var(--blue)}
  .sidebar-item .icon{font-size:16px;width:20px;text-align:center}
  .sidebar-item .stavka{margin-left:auto;font-size:11px;background:var(--gray-light);color:var(--text-sec);padding:2px 7px;border-radius:20px}
  .sidebar-item.active .stavka{background:var(--blue);color:white}

  /* MAIN */
  .main{display:flex;flex-direction:column;gap:16px}

  /* CHAT */
  .chat-card{background:var(--white);border:1px solid var(--gray-border);border-radius:12px;box-shadow:var(--shadow);overflow:hidden}
  .chat-header{padding:16px 20px;border-bottom:1px solid var(--gray-border);display:flex;align-items:center;gap:12px}
  .chat-avatar{width:40px;height:40px;background:var(--blue);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:18px;flex-shrink:0}
  .chat-header-text h3{font-size:15px;font-weight:600}
  .chat-header-text p{font-size:12px;color:var(--text-sec);margin-top:2px}
  .online-dot{width:8px;height:8px;background:#0f9d58;border-radius:50%;display:inline-block;margin-right:4px}

  .messages{padding:20px;min-height:300px;max-height:480px;overflow-y:auto;display:flex;flex-direction:column;gap:16px}
  .msg{display:flex;gap:10px;align-items:flex-start}
  .msg.user{flex-direction:row-reverse}
  .msg-av{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;flex-shrink:0}
  .msg.ai .msg-av{background:var(--blue-light);color:var(--blue)}
  .msg.user .msg-av{background:var(--green-light);color:var(--green)}
  .msg-body{max-width:78%}
  .msg-bubble{padding:12px 16px;border-radius:12px;font-size:14px;line-height:1.65;word-wrap:break-word}
  .msg.ai .msg-bubble{background:var(--gray-light);color:var(--text);border-top-left-radius:4px}
  .msg.user .msg-bubble{background:var(--blue);color:white;border-top-right-radius:4px}
  .msg-time{font-size:11px;color:var(--text-sec);margin-top:4px;padding:0 4px}
  .msg.user .msg-time{text-align:right}

  .law-block{background:var(--white);border:1px solid var(--gray-border);border-left:3px solid var(--blue);border-radius:8px;padding:10px 14px;margin-top:8px;font-size:13px}
  .law-block .law-code{font-size:11px;font-weight:600;color:var(--blue);margin-bottom:4px;text-transform:uppercase}
  .law-block .law-text{color:var(--text-sec);line-height:1.5}

  .typing-indicator{display:flex;gap:4px;align-items:center;padding:14px 16px;background:var(--gray-light);border-radius:12px;border-top-left-radius:4px;width:fit-content}
  .typing-dot{width:7px;height:7px;border-radius:50%;background:var(--text-sec);animation:td 1.2s infinite}
  .typing-dot:nth-child(2){animation-delay:.2s}
  .typing-dot:nth-child(3){animation-delay:.4s}
  @keyframes td{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}

  .input-area{border-top:1px solid var(--gray-border);padding:12px 16px;display:flex;gap:8px;align-items:flex-end}
  .input-wrap{flex:1;border:1px solid var(--gray-border);border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:8px;transition:border .15s}
  .input-wrap:focus-within{border-color:var(--blue)}
  #chatInput{flex:1;border:none;outline:none;font-size:14px;font-family:inherit;resize:none;min-height:20px;max-height:100px;background:transparent;color:var(--text)}
  .send-btn{width:40px;height:40px;background:var(--blue);color:white;border:none;border-radius:10px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;transition:opacity .15s}
  .send-btn:hover{opacity:.85}
  .send-btn:disabled{opacity:.4;cursor:not-allowed}

  /* CHIPS */
  .chips-wrap{display:flex;gap:8px;flex-wrap:wrap;padding:12px 20px;border-bottom:1px solid var(--gray-border);background:#fafafa}
  .chip{font-size:12px;padding:6px 12px;border:1px solid var(--gray-border);border-radius:20px;cursor:pointer;background:var(--white);color:var(--text-sec);transition:all .15s;white-space:nowrap}
  .chip:hover{background:var(--blue-light);color:var(--blue);border-color:var(--blue)}

  /* СОЛИҚ КАРТОЧКАСИ */
  .soliq-card{background:var(--white);border:1px solid var(--gray-border);border-radius:12px;padding:20px;box-shadow:var(--shadow);display:none}
  .soliq-card.show{display:block}
  .soliq-card-header{display:flex;align-items:flex-start;gap:14px;margin-bottom:16px}
  .soliq-icon{width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
  .soliq-name{font-size:17px;font-weight:600;margin-bottom:4px}
  .soliq-modda{font-size:12px;color:var(--text-sec)}
  .stavka-badge{font-size:14px;font-weight:600;padding:4px 12px;border-radius:20px;margin-left:auto;white-space:nowrap}
  .imtiyoz-list{display:flex;flex-direction:column;gap:8px}
  .imtiyoz-item{background:var(--gray-light);border-radius:8px;padding:10px 14px;display:flex;flex-direction:column;gap:4px}
  .imtiyoz-text{font-size:14px;color:var(--text);display:flex;align-items:flex-start;gap:8px}
  .imtiyoz-qonun{font-size:11px;color:var(--blue);font-weight:500}
  .section-label{font-size:12px;font-weight:600;color:var(--text-sec);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;margin-top:16px}

  /* СТАТИСТИКА */
  .stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px}
  .stat-card{background:var(--white);border:1px solid var(--gray-border);border-radius:10px;padding:14px 16px;box-shadow:var(--shadow)}
  .stat-num{font-size:22px;font-weight:600;color:var(--blue)}
  .stat-label{font-size:12px;color:var(--text-sec);margin-top:3px}
</style>
</head>
<body>

<header class="header">
  <div class="logo">
    <div class="logo-icon">⚖️</div>
    Moliya AI
  </div>
  <div class="nav-links">
    <a class="nav-link" href="#soliqlar">Солиқлар</a>
    <a class="nav-link" href="#qonunlar">Қонунлар</a>
    <a class="nav-link" href="#haqida">Ҳақида</a>
  </div>
  <a class="tg-btn" href="https://t.me/your_bot" target="_blank">
    ✈️ Telegram Bot
  </a>
</header>

<div class="container">

  <!-- SIDEBAR -->
  <aside class="sidebar">
    <div class="sidebar-card">
      <div class="sidebar-title">Солиқ турлари</div>
      <div id="soliqList"></div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-num" id="statSoliq">8</div>
        <div class="stat-label">Солиқ тури</div>
      </div>
      <div class="stat-card">
        <div class="stat-num" id="statQonun">5</div>
        <div class="stat-label">Қонун ҳужжати</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">2025</div>
        <div class="stat-label">Охирги янгиланиш</div>
      </div>
    </div>
  </aside>

  <!-- MAIN -->
  <main class="main">

    <!-- СОЛИҚ КАРТОЧКАСИ -->
    <div class="soliq-card" id="soliqCard"></div>

    <!-- CHAT -->
    <div class="chat-card">
      <div class="chat-header">
        <div class="chat-avatar">🤖</div>
        <div class="chat-header-text">
          <h3>Moliya AI ёрдамчи</h3>
          <p><span class="online-dot"></span>Онлайн — Солиқ кодекси асосида жавоб беради</p>
        </div>
      </div>

      <div class="chips-wrap">
        <button class="chip" onclick="quickAsk('IT-парк имтиёзлари нима?')">🖥️ IT-парк</button>
        <button class="chip" onclick="quickAsk('ЯСТ ставкаси 2025 йилда қанча?')">📊 ЯСТ ставкаси</button>
        <button class="chip" onclick="quickAsk('Акциз солиғида имтиёзлар борми?')">🧾 Акциз</button>
        <button class="chip" onclick="quickAsk('ҚҚС имтиёзлари қайси моддада?')">📋 ҚҚС</button>
        <button class="chip" onclick="quickAsk('ЯТТ (IP) очиш учун нима керак?')">🏢 IP очиш</button>
        <button class="chip" onclick="quickAsk('Қайта тикланувчи энергия солиқ имтиёзлари')">⚡ Энергия</button>
      </div>

      <div class="messages" id="messages">
        <div class="msg ai">
          <div class="msg-av">AI</div>
          <div class="msg-body">
            <div class="msg-bubble">
              Салом! Мен <b>Moliya AI</b> — Ўзбекистон солиқ қонунчилиги ва молия масалалари бўйича ёрдамчиман.<br><br>
              Саволларингизга <b>аниқ қонун моддалари</b> ва расмий манбалар асосида жавоб бераман.<br><br>
              Қандай савол бор?
            </div>
            <div class="msg-time">Ҳозир</div>
          </div>
        </div>
      </div>

      <div class="input-area">
        <div class="input-wrap">
          <textarea id="chatInput" placeholder="Саволингизни ёзинг..." rows="1"
            onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendMsg()}"
            oninput="this.style.height='auto';this.style.height=this.scrollHeight+'px'"></textarea>
        </div>
        <button class="send-btn" id="sendBtn" onclick="sendMsg()">➤</button>
      </div>
    </div>

  </main>
</div>

<script>
const API = 'https://moliya-ai-production.up.railway.app'
let chatHistory = [];

// ==============================
// СОЛИҚЛАР РЎЙХАТИНИ ЮКЛАШ
// ==============================
async function loadSoliqlar() {
  try {
    let soliqlar;
    if (API) {
      const res = await fetch(`${API}/api/soliqlar`);
      soliqlar = await res.json();
    } else {
      soliqlar = LOCAL_SOLIQLAR;
    }

    const list = document.getElementById('soliqList');
    const icons = { yst:'💼', qqs:'🧾', aksiz:'🥃', yast:'📊', ijtimoiy:'👥', er:'🌱', it_park:'💻', qaytatiklanuvchi:'⚡' };
    const stavkaColors = { '15%':'#d93025', '12%':'#f9ab00', '4%':'#1a56db', '0% (кўп солиқлар бўйича)':'#0f9d58' };

    list.innerHTML = soliqlar.map(s => `
      <div class="sidebar-item" onclick="showSoliq('${s.id}')" id="sitem-${s.id}">
        <span class="icon">${icons[s.id]||'📌'}</span>
        ${s.nomi.length > 22 ? s.nomi.substring(0,22)+'...' : s.nomi}
        <span class="stavka">${s.stavka.split(' ')[0]}</span>
      </div>
    `).join('');

    document.getElementById('statSoliq').textContent = soliqlar.length;
  } catch(e) { console.error(e); }
}

// ==============================
// СОЛИҚ КАРТОЧКАСИНИ КЎРСАТИШ
// ==============================
async function showSoliq(id) {
  document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
  const item = document.getElementById('sitem-'+id);
  if (item) item.classList.add('active');

  try {
    let soliq;
    if (API) {
      const res = await fetch(`${API}/api/soliq/${id}`);
      soliq = await res.json();
    } else {
      soliq = LOCAL_SOLIQLAR.find(s => s.id === id);
    }

    const icons = { yst:'💼', qqs:'🧾', aksiz:'🥃', yast:'📊', ijtimoiy:'👥', er:'🌱', it_park:'💻', qaytatiklanuvchi:'⚡' };
    const bgColors = { yst:'#fce8e6', qqs:'#fef9e7', aksiz:'#f3e5f5', yast:'#e8f0fe', ijtimoiy:'#e6f4ea', er:'#e6f4ea', it_park:'#e8f0fe', qaytatiklanuvchi:'#fff3e0' };
    const textColors = { yst:'#d93025', qqs:'#f9ab00', aksiz:'#7b1fa2', yast:'#1a56db', ijtimoiy:'#0f9d58', er:'#0f9d58', it_park:'#1a56db', qaytatiklanuvchi:'#e65100' };

    const card = document.getElementById('soliqCard');
    card.className = 'soliq-card show';
    card.innerHTML = `
      <div class="soliq-card-header">
        <div class="soliq-icon" style="background:${bgColors[id]||'#e8f0fe'};color:${textColors[id]||'#1a56db'}">${icons[id]||'📌'}</div>
        <div style="flex:1">
          <div class="soliq-name">${soliq.nomi}</div>
          <div class="soliq-modda">📌 ${soliq.modda}</div>
          <div style="font-size:13px;color:#5f6368;margin-top:6px">${soliq.tavsif}</div>
        </div>
        <span class="stavka-badge" style="background:${bgColors[id]||'#e8f0fe'};color:${textColors[id]||'#1a56db'}">${soliq.stavka}</span>
      </div>
      <div class="section-label">✅ Солиқ имтиёзлари</div>
      <div class="imtiyoz-list">
        ${soliq.imtiyozlar.map(i => `
          <div class="imtiyoz-item">
            <div class="imtiyoz-text">✔ ${i.text}</div>
            <div class="imtiyoz-qonun">⚖️ ${i.qonun}</div>
          </div>
        `).join('')}
      </div>
    `;

    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } catch(e) { console.error(e); }
}

// ==============================
// CHAT — AI savol yuborish
// ==============================
function quickAsk(text) {
  document.getElementById('chatInput').value = text;
  sendMsg();
}

function addMsg(role, text) {
  const box = document.getElementById('messages');
  const isAI = role === 'ai';
  const div = document.createElement('div');
  div.className = `msg ${role}`;
  const now = new Date().toLocaleTimeString('uz-UZ', {hour:'2-digit',minute:'2-digit'});
  div.innerHTML = `
    <div class="msg-av">${isAI ? 'AI' : 'S'}</div>
    <div class="msg-body">
      <div class="msg-bubble">${text.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<b>$1</b>').replace(/📌|⚖️|💡|🔗/g, m => `<span style="margin-right:4px">${m}</span>`)}</div>
      <div class="msg-time">${now}</div>
    </div>
  `;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
  return div;
}

function showTyping() {
  const box = document.getElementById('messages');
  const div = document.createElement('div');
  div.className = 'msg ai';
  div.id = 'typing';
  div.innerHTML = `
    <div class="msg-av">AI</div>
    <div class="msg-body">
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>
  `;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

async function sendMsg() {
  const input = document.getElementById('chatInput');
  const savol = input.value.trim();
  if (!savol) return;

  input.value = '';
  input.style.height = 'auto';
  document.getElementById('sendBtn').disabled = true;

  addMsg('user', savol);
  showTyping();

  try {
    let javob;

    if (API) {
      const res = await fetch(`${API}/api/ask`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ savol, tarix: chatHistory.slice(-6) })
      });
      const data = await res.json();
      javob = data.javob;
    } else {
      // Demo rejimi — to'g'ridan to'g'ri Anthropic API
      const SYSTEM = `Sen "Moliya AI" — O'zbekiston soliq qonunchiligi bo'yicha mutaxassis AI yordamchisan. Kirill o'zbek tilida javob ber. Har doim aniq qonun moddasi va raqamini ko'rsat. Quyidagi qonun bazasidan foydalan:\n\nSoliq turlari: YaST (SK 266,269-moddalar), QQS (SK 197-264), Aksiz (SK 289-320), Ijtimoiy soliq 12%, ER solig'i (SK 429,437). IT-park rezidenarlari 2040 yilgacha 0% (URQ-1014). Mobil aloqa aksizdan ozod (URQ-1014). Parranda yer solig'idan ozod (URQ-1063, 16.05.2025).\n\nFormat: 📌 Asosiy javob → ⚖️ Qonuniy asos: [modda] → 💡 Amaliy maslahat`;

      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM,
          messages: [...chatHistory.slice(-6), {role:'user', content: savol}]
        })
      });
      const data = await res.json();
      javob = data.content?.[0]?.text || 'Жавоб олишда хатолик.';
    }

    document.getElementById('typing')?.remove();
    addMsg('ai', javob);
    chatHistory.push({role:'user', content: savol});
    chatHistory.push({role:'assistant', content: javob});

  } catch(e) {
    document.getElementById('typing')?.remove();
    addMsg('ai', '⚠️ Жавоб олишда хатолик юз берди. Интернет уланишини текширинг.');
  }

  document.getElementById('sendBtn').disabled = false;
}

// ==============================
// ЛОКАЛ МАЪЛУМОТЛАР (API yo'q bo'lganda)
// ==============================
const LOCAL_SOLIQLAR = [
  { id:'yst', nomi:'Фойда солиғи', modda:'СК 337-модда', stavka:'15%', tavsif:'Юридик шахсларнинг соф фойдасига қўлланилади.',
    imtiyozlar:[{text:'IT-парк резидентлари — 0% (2040 йилгача)',qonun:'ЎРҚ-1014, 24.12.2024'},{text:'Экспорт даромадлари имтиёзи — бекор қилинди',qonun:'ЎРҚ-1014'}]},
  { id:'qqs', nomi:'ҚҚС', modda:'СК 197–264-моддалар', stavka:'12%', tavsif:'Товарлар ва хизматлар айланмасига қўлланилади.',
    imtiyozlar:[{text:'IT-парк — 0%',qonun:'ЎРҚ-1014'},{text:'Давлат мулки реализацияси — озод',qonun:'СК 133, 261-модда'},{text:'Экспорт — 0%',qonun:'СК 261-модда'}]},
  { id:'aksiz', nomi:'Акциз солиғи', modda:'СК 289–320-моддалар', stavka:'Маҳсулотга қараб', tavsif:'Акцизли товарларга қўлланилади.',
    imtiyozlar:[{text:'Мобиль алоқа — бекор қилинди (илгари 10%)',qonun:'ЎРҚ-1014, 24.12.2024'},{text:'Табиий газ — 20%дан 12%га',qonun:'ЎРҚ-1014'},{text:'Табиий шарбатлар — акцизсиз',qonun:'СК 289-модда'}]},
  { id:'yast', nomi:'ЯСТ (Айланмадан солиқ)', modda:'СК 266, 269-моддалар', stavka:'4%', tavsif:'Кичик бизнес ва ЯТТлар учун.',
    imtiyozlar:[{text:'500 млн сўмгача: йилига 30 млн сўм',qonun:'СК 266-модда; ЎРҚ-1014'},{text:'500 млн сўмдан юқори: йилига 40 млн сўм',qonun:'СК 269-модда; ЎРҚ-1014'},{text:'Электрон тижорат: 3%',qonun:'СК 337, 467-модда'}]},
  { id:'ijtimoiy', nomi:'Ижтимоий солиқ', modda:'СК 399–420-моддалар', stavka:'12%', tavsif:'Иш берувчи ходимлар учун тўлайди.',
    imtiyozlar:[{text:'ЯТТ ходимлари — камайтирилди',qonun:'ЎРҚ-1014'},{text:'Кам таъминланган оила ходимлари — вақтинча имтиёз',qonun:'ЎРҚ-1104, 25.12.2025'}]},
  { id:'er', nomi:'Ер солиғи', modda:'СК 429, 437-моддалар', stavka:'Ҳудудга қараб', tavsif:'Ер участкаси эгалари тўлайди.',
    imtiyozlar:[{text:'Паррандачилик ишлаб чиқарувчилар — озод',qonun:'ЎРҚ-1063, 16.05.2025'},{text:'Ставкалар +10% индексация',qonun:'СК 429-модда; ЎРҚ-1014'}]},
  { id:'it_park', nomi:'IT-парк имтиёзлари', modda:'IT-парк қонуни + СК', stavka:'0% (2040 йилгача)', tavsif:'IT-парк резидентларига кенг имтиёзлар.',
    imtiyozlar:[{text:'Фойда солиғи — 0%',qonun:'ЎРҚ-1014'},{text:'ҚҚС — 0%',qonun:'ЎРҚ-1014'},{text:'Мол-мулк солиғи — 0%',qonun:'ЎРҚ-1014'},{text:'Шарт: экспорт 50%дан юқори',qonun:'ЎРҚ-1014, 24.12.2024'}]},
  { id:'qaytatiklanuvchi', nomi:'Қайта тикланувчи энергия', modda:'СК махсус норма', stavka:'Вақтинча имтиёз', tavsif:'Қуёш, шамол энергияси ўрнатганларга.',
    imtiyozlar:[{text:'Қурилма ўрнатган шахслар — солиқ имтиёзи',qonun:'ЎРҚ-1014, 24.12.2024'}]}
];

loadSoliqlar();
</script>
</body>
</html>
