
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: '1.0.0', name: 'Moliya AI' });
});

app.post('/api/ask', async (req, res) => {
  const { savol, tarix = [] } = req.body;
  if (!savol) return res.status(400).json({ error: 'Savol kerak' });

  try {
    const SYSTEM = `Sen "Moliya AI" — O'zbekiston soliq qonunchiligi bo'yicha mutaxassis AI yordamchisan. Kirill o'zbek tilida javob ber. Har doim aniq qonun moddasi va raqamini ko'rsat. Format: 📌 Asosiy javob → ⚖️ Qonuniy asos → 💡 Amaliy maslahat`;

    const messages = tarix.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));
    messages.push({ role: 'user', parts: [{ text: SYSTEM + '\n\n' + savol }] });

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`,
      { contents: messages },
      { headers: { 'Content-Type': 'application/json' } }
    );

    const javob = response.data.candidates[0].content.parts[0].text;
    res.json({ javob });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Javob berishda xatolik' });
  }
});

app.get('/api/soliqlar', (req, res) => {
  res.json(LOCAL_SOLIQLAR);
});

app.get('/api/soliq/:id', (req, res) => {
  const soliq = LOCAL_SOLIQLAR.find(s => s.id === req.params.id);
  if (!soliq) return res.status(404).json({ error: 'Topilmadi' });
  res.json(soliq);
});

const LOCAL_SOLIQLAR = [
  { id:'yst', nomi:'Foyda solig\'i', modda:'SK 337-modda', stavka:'15%', tavsif:'Yuridik shaxslarning sof foydasiga qo\'llaniladi.', imtiyozlar:[{text:'IT-park rezidenatlari — 0% (2040 yilgacha)',qonun:'URQ-1014'},{text:'Eksport daromadlari imtiyozi — bekor qilindi',qonun:'URQ-1014'}]},
  { id:'qqs', nomi:'QQS', modda:'SK 197-264-moddalar', stavka:'12%', tavsif:'Tovarlar va xizmatlar aylanmasiga qo\'llaniladi.', imtiyozlar:[{text:'IT-park — 0%',qonun:'URQ-1014'},{text:'Eksport — 0%',qonun:'SK 261-modda'}]},
  { id:'yast', nomi:'YaST', modda:'SK 266, 269-moddalar', stavka:'4%', tavsif:'Kichik biznes va YaTTlar uchun.', imtiyozlar:[{text:'500 mln so\'mgacha: yiliga 30 mln so\'m',qonun:'SK 266-modda'},{text:'Elektron tijorat: 3%',qonun:'SK 337, 467-modda'}]},
  { id:'ijtimoiy', nomi:'Ijtimoiy soliq', modda:'SK 399-420-moddalar', stavka:'12%', tavsif:'Ish beruvchi tomonidan to\'lanadi.', imtiyozlar:[{text:'YaTT xodimlari — kamaytirildi',qonun:'URQ-1014'}]},
  { id:'it_park', nomi:'IT-park imtiyozlari', modda:'IT-park qonuni', stavka:'0%', tavsif:'IT-park rezidentlariga.', imtiyozlar:[{text:'Foyda solig\'i — 0%',qonun:'URQ-1014'},{text:'QQS — 0%',qonun:'URQ-1014'}]}
];

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Moliya AI Server — http://localhost:${PORT}`));