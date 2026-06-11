const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ==============================
// ҚОНУН БАЗАСИ
// ==============================
const lawDatabase = {
  soliq_turlari: [
    {
      id: 'yst',
      nomi: 'Юридик шахслардан олинадиган фойда солиғи',
      modda: 'Солиқ кодекси 337-модда',
      stavka: '15%',
      tavsif: 'Юридик шахсларнинг соф фойдасига қўлланилади.',
      imtiyozlar: [
        { text: 'IT-парк резидентлари — 0% (2040 йилгача)', qonun: 'ЎРҚ-1014, 24.12.2024' },
        { text: 'Экспорт даромадларига — бекор қилинди', qonun: 'ЎРҚ-1014, СК 337-модда' }
      ]
    },
    {
      id: 'qqs',
      nomi: 'Қўшилган қиймат солиғи (ҚҚС)',
      modda: 'Солиқ кодекси 197–264-моддалар',
      stavka: '12%',
      tavsif: 'Товарлар ва хизматлар айланмасига қўлланилади.',
      imtiyozlar: [
        { text: 'Давлат мулкини реализация қилиш — озод', qonun: 'СК 133, 261-модда; ЎРҚ-1014' },
        { text: 'IT-парк резидентлари — 0%', qonun: 'ЎРҚ-1014, 24.12.2024' },
        { text: 'Экспорт товарлари — 0%', qonun: 'СК 261-модда' },
        { text: 'Табиий шарбатлар (шакарсиз) — озод', qonun: 'ЎРҚ-1014' }
      ]
    },
    {
      id: 'aksiz',
      nomi: 'Акциз солиғи',
      modda: 'Солиқ кодекси 289–320-моддалар',
      stavka: 'Маҳсулотга қараб',
      tavsif: 'Акцизли товарлар (спиртли ичимликлар, тамаки, ёқилғи ва б.) га қўлланилади.',
      imtiyozlar: [
        { text: 'Мобиль алоқа хизматлари — бекор қилинди (илгари 10%)', qonun: 'ЎРҚ-1014, 24.12.2024' },
        { text: 'Табиий газ акцизи — 20%дан 12%га туширилди', qonun: 'ЎРҚ-1014, 24.12.2024' },
        { text: 'Табиий мева шарбатлари — акцизсиз', qonun: 'СК 289-модда' }
      ]
    },
    {
      id: 'yast',
      nomi: 'Айланмадан олинадиган солиқ (ЯСТ)',
      modda: 'Солиқ кодекси 266, 269-моддалар',
      stavka: '4%',
      tavsif: 'Кичик бизнес ва ЯТТлар учун соддалаштирилган солиқ тизими.',
      imtiyozlar: [
        { text: 'Айланма 500 млн сўмгача: йилига 30 млн сўм қатъий ставка', qonun: 'СК 266-модда; ЎРҚ-1014' },
        { text: 'Айланма 500 млн сўмдан юқори: йилига 40 млн сўм', qonun: 'СК 269-модда; ЎРҚ-1014' },
        { text: 'Электрон тижорат: 3% (илгари 2%)', qonun: 'СК 337, 467-модда; ЎРҚ-1014' }
      ]
    },
    {
      id: 'ijtimoiy',
      nomi: 'Ижтимоий солиқ',
      modda: 'Солиқ кодекси 399–420-моддалар',
      stavka: '12% (бюджет: 25%)',
      tavsif: 'Иш берувчи томонидан ходимлар иши ҳисобидан тўланади.',
      imtiyozlar: [
        { text: 'ЯТТ ходимлари учун — камайтирилди', qonun: 'ЎРҚ-1014, 24.12.2024' },
        { text: 'Кам таъминланган оила ходимлари — вақтинча имтиёз', qonun: 'ЎРҚ-1104, 25.12.2025' }
      ]
    },
    {
      id: 'er',
      nomi: 'Ер солиғи',
      modda: 'Солиқ кодекси 429, 437-моддалар',
      stavka: 'Ҳудуд ва категорияга қараб',
      tavsif: 'Ер участкаси эгалари тўлайди.',
      imtiyozlar: [
        { text: 'Паррандачилик маҳсулоти ишлаб чиқарувчилар — озод', qonun: 'ЎРҚ-1063, 16.05.2025' },
        { text: 'Шаҳар ерлари учун 2х миқдорда ҳисоблаш — бекор қилинди', qonun: 'ЎРҚ-1014, 24.12.2024' },
        { text: 'Ставкалар ўртача 10% индексация қилинди', qonun: 'СК 429-модда; ЎРҚ-1014' }
      ]
    },
    {
      id: 'it_park',
      nomi: 'IT-парк резидентлари имтиёзлари',
      modda: 'IT-парк тўғрисидаги қонун + СК махсус нормалар',
      stavka: '0% (кўп солиқлар бўйича)',
      tavsif: 'IT-парк резидентларига берилган кенг имтиёзлар пакети.',
      imtiyozlar: [
        { text: 'Фойда солиғи — 0% (2040 йилгача)', qonun: 'ЎРҚ-1014; 2040 йилга узайтирилди' },
        { text: 'ҚҚС — 0%', qonun: 'ЎРҚ-1014' },
        { text: 'Мол-мулк солиғи — 0%', qonun: 'ЎРҚ-1014' },
        { text: 'Шарт: экспорт ҳажми 50%дан юқори', qonun: 'ЎРҚ-1014, 24.12.2024' }
      ]
    },
    {
      id: 'qaytatiklanuvchi',
      nomi: 'Қайта тикланувчи энергия имтиёзлари',
      modda: 'СК махсус норма; ЎРҚ-1014',
      stavka: 'Вақтинча имтиёз',
      tavsif: 'Қуёш, шамол ва бошқа қайта тикланувчи энергия манбаларини ўрнатганларга.',
      imtiyozlar: [
        { text: 'Қурилма ўрнатган жисмоний ва юридик шахслар — солиқ имтиёзи', qonun: 'ЎРҚ-1014, 24.12.2024' }
      ]
    }
  ],
  qonunlar: [
    { kod: 'ЎРҚ-1014', sana: '24.12.2024', nomi: '2025 йилга солиқ ва бюджет сиёсати', url: 'https://lex.uz/uz/docs/7279923' },
    { kod: 'ЎРҚ-1063', sana: '16.05.2025', nomi: 'Солиқ кодексига ўзгартишлар (паррандачилик, болалар оромгоҳлари)', url: 'https://lex.uz' },
    { kod: 'ЎРҚ-1104', sana: '25.12.2025', nomi: 'Тадбиркорликни қўллаб-қувватлаш қонуни', url: 'https://lex.uz/uz/docs/7942942' },
    { kod: 'ЎРҚ-1108', sana: '25.12.2025', nomi: '2026 йилга солиқ ва бюджет сиёсати', url: 'https://lex.uz/docs/7944527' },
    { kod: 'ЎРҚ-599', sana: '30.12.2019', nomi: 'Солиқ кодекси (янги таҳрир)', url: 'https://lex.uz' }
  ]
};

// ==============================
// SYSTEM PROMPT
// ==============================
const SYSTEM_PROMPT = `Сен "Moliya AI" — Ўзбекистон учун молия, солиқ ва бизнес бўйича мутахассис AI ёрдамчисан.

МУҲИМ ҚОИДАЛАР:
1. Фақат ўзбек тилида (кириллча) жавоб бер
2. Ҳар доим АНИҚ қонун моддаси ва рақамини кўрсат
3. Мавжуд қонун базасидаги маълумотлардан фойдалан
4. Агар аниқ билмасанг — lex.uz ёки soliq.uz га йўналтир
5. Жавоб таркиби: Асосий жавоб → Қонун моддаси → Амалий маслаҳат

ҚОНУН БАЗАСИ:
${JSON.stringify(lawDatabase, null, 2)}

Формат:
📌 Асосий жавоб (қисқа ва аниқ)
⚖️ Қонуний асос: [модда рақами] — [қонун номи]
💡 Амалий маслаҳат
🔗 Расмий манба: lex.uz / soliq.uz`;

// ==============================
// API ENDPOINTS
// ==============================

// Соғлиқ текшируви
app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: '1.0.0', name: 'Moliya AI' });
});

// Барча солиқлар рўйхати
app.get('/api/soliqlar', (req, res) => {
  res.json(lawDatabase.soliq_turlari);
});

// Барча қонунлар
app.get('/api/qonunlar', (req, res) => {
  res.json(lawDatabase.qonunlar);
});

// Битта солиқ маълумоти
app.get('/api/soliq/:id', (req, res) => {
  const soliq = lawDatabase.soliq_turlari.find(s => s.id === req.params.id);
  if (!soliq) return res.status(404).json({ error: 'Топилмади' });
  res.json(soliq);
});

// AI савол-жавоб (асосий)
app.post('/api/ask', async (req, res) => {
  const { savol, tarix = [] } = req.body;
  if (!savol) return res.status(400).json({ error: 'Савол керак' });

  try {
    const messages = [
      ...tarix,
      { role: 'user', content: savol }
    ];

    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1500,
        system: SYSTEM_PROMPT,
        messages
      },
      {
        headers: {
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json'
        }
      }
    );

    const javob = response.data.content[0].text;
    res.json({ javob, model: 'claude-sonnet-4-20250514' });

  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'AI жавоб беrishда хатолик' });
  }
});

// Қидируv
app.get('/api/search', (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  if (!q) return res.json([]);

  const results = lawDatabase.soliq_turlari.filter(s =>
    s.nomi.toLowerCase().includes(q) ||
    s.tavsif.toLowerCase().includes(q) ||
    s.imtiyozlar.some(i => i.text.toLowerCase().includes(q))
  );
  res.json(results);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Moliya AI Server — http://localhost:${PORT}`);
});
