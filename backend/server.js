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
  res.json({ status: 'ok' });
});

app.post('/api/ask', async (req, res) => {
  const { savol, tarix = [] } = req.body;
  if (!savol) return res.status(400).json({ error: 'Savol kerak' });
  try {
    const SYSTEM = "Sen Moliya AI — O'zbekiston soliq qonunchiligi bo'yicha mutaxassis. Kirill o'zbek tilida javob ber. Aniq qonun moddalarini ko'rsat.";
    const contents = [];
    for (const m of tarix.slice(-6)) {
      contents.push({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] });
    }
    contents.push({ role: 'user', parts: [{ text: SYSTEM + '\n\nSavol: ' + savol }] });
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + process.env.GEMINI_API_KEY,
      { contents },
      { headers: { 'Content-Type': 'application/json' } }
    );
    const javob = response.data.candidates[0].content.parts[0].text;
    res.json({ javob });
  } catch (err) {
    console.error(JSON.stringify(err.response?.data || err.message));
    res.status(500).json({ error: 'Xatolik' });
  }
});

app.get('/api/soliqlar', (req, res) => res.json(LOCAL_SOLIQLAR));
app.get('/api/soliq/:id', (req, res) => {
  const s = LOCAL_SOLIQLAR.find(s => s.id === req.params.id);
  if (!s) return res.status(404).json({ error: 'Topilmadi' });
  res.json(s);
});

const LOCAL_SOLIQLAR = [
  { id:'yst', nomi:'Foyda solighi', modda:'SK 337-modda', stavka:'15%', tavsif:'Yuridik shaxslar uchun.', imtiyozlar:[{text:'IT-park 0%',qonun:'URQ-1014'}]},
  { id:'qqs', nomi:'QQS', modda:'SK 197-264', stavka:'12%', tavsif:'Tovarlar aylanmasi.', imtiyozlar:[{text:'Eksport 0%',qonun:'SK 261'}]},
  { id:'yast', nomi:'YaST', modda:'SK 266-269', stavka:'4%', tavsif:'Kichik biznes.', imtiyozlar:[{text:'500 mln gacha 30 mln/yil',qonun:'SK 266'}]},
  { id:'ijtimoiy', nomi:'Ijtimoiy soliq', modda:'SK 399-420', stavka:'12%', tavsif:'Ish beruvchi.', imtiyozlar:[{text:'YaTT kamaytirildi',qonun:'URQ-1014'}]},
  { id:'it_park', nomi:'IT-park', modda:'IT-park qonuni', stavka:'0%', tavsif:'IT-park rezidenatlari.', imtiyozlar:[{text:'Foyda 0%, QQS 0%',qonun:'URQ-1014'}]}
];

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Moliya AI Server — port ' + PORT));