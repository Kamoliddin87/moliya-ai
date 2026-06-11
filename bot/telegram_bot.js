const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
require('dotenv').config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });
const API_URL = process.env.API_URL || 'http://localhost:3000';

// Ҳар бир фойдаланувчи учун суҳбат тарихи
const userHistory = {};

// ==============================
// /start
// ==============================
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  userHistory[chatId] = [];

  const welcomeText = `
💼 *Moliya AI* га хуш келибсиз!

Мен Ўзбекистон солиқ қонунчилиги ва молия масалалари бўйича ёрдам бераман.

📋 *Нималарни сўрашингиз мумкин:*
• Солиқ турлари ва ставкалари
• Солиқ имтиёзлари (ким, қанча, қайси модда)
• ЯТТ / IP / OOO очиш
• Бизнес-план ва молиявий ҳисоблар
• Аниқ қонун моддалари

⌨️ Саволингизни ёзинг ёки қуйидаги буйруқлардан фойдаланинг:
  `;

  const keyboard = {
    reply_markup: {
      keyboard: [
        ['📊 Солиқ турлари', '💰 Имтиёзлар'],
        ['🏢 IP/OOO очиш', '📈 ЯСТ ставкалари'],
        ['❓ Бошқа савол', '🔄 Янги суҳбат']
      ],
      resize_keyboard: true
    }
  };
  bot.sendMessage(chatId, welcomeText, { parse_mode: 'Markdown', ...keyboard });
});

// ==============================
// /help
// ==============================
bot.onText(/\/help/, (msg) => {
  const helpText = `
📌 *Буйруқлар:*
/start — Бошлаш
/soliqlar — Барча солиқ турлари
/qonunlar — Асосий қонунлар рўйхати
/reset — Суҳбатни тозалаш
/help — Ёрдам

💡 *Мисол саволлар:*
• "Акциз солиғида қандай имтиёзлар бор?"
• "IT-парк резидентлари қандай солиқ тўлайди?"
• "ЯСТ ставкаси қанча 2025 йилда?"
• "ЯТТ очиш учун нима керак?"
  `;
  bot.sendMessage(msg.chat.id, helpText, { parse_mode: 'Markdown' });
});

// ==============================
// /soliqlar — рўйхат
// ==============================
bot.onText(/\/soliqlar|📊 Солиқ турлари/, async (msg) => {
  const chatId = msg.chat.id;
  try {
    const res = await axios.get(`${API_URL}/api/soliqlar`);
    let text = '📋 *Солиқ турлари:*\n\n';
    res.data.forEach((s, i) => {
      text += `${i + 1}. *${s.nomi}*\n   Ставка: ${s.stavka}\n   Модда: ${s.modda}\n\n`;
    });
    text += '❓ Батафсил билиш учун солиқ номини ёзинг.';
    bot.sendMessage(chatId, text, { parse_mode: 'Markdown' });
  } catch {
    bot.sendMessage(chatId, '⚠️ Маълумот олишда хатолик. Сервер ишлаяптими?');
  }
});

// ==============================
// /qonunlar — қонунлар рўйхати
// ==============================
bot.onText(/\/qonunlar/, async (msg) => {
  const chatId = msg.chat.id;
  try {
    const res = await axios.get(`${API_URL}/api/qonunlar`);
    let text = '⚖️ *Асосий қонунлар:*\n\n';
    res.data.forEach(q => {
      text += `📌 *${q.kod}* (${q.sana})\n${q.nomi}\n🔗 ${q.url}\n\n`;
    });
    bot.sendMessage(chatId, text, { parse_mode: 'Markdown', disable_web_page_preview: true });
  } catch {
    bot.sendMessage(chatId, '⚠️ Хатолик юз берди.');
  }
});

// ==============================
// /reset
// ==============================
bot.onText(/\/reset|🔄 Янги суҳбат/, (msg) => {
  userHistory[msg.chat.id] = [];
  bot.sendMessage(msg.chat.id, '✅ Суҳбат тозаланди. Янги савол беринг!');
});

// ==============================
// Асосий матн — AI ga yuborish
// ==============================
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (!text || text.startsWith('/')) return;

  // Тезкор тугмалар
  const quickReplies = {
    '💰 Имтиёзлар': 'Ўзбекистондаги барча солиқ имтиёзларини қонун моддалари билан кўрсат',
    '🏢 IP/OOO очиш': 'IP ва OOO очиш учун нима керак, қандай солиқлар тўланади?',
    '📈 ЯСТ ставкалари': 'ЯСТ (айланмадан олинадиган солиқ) 2025 йилда қанча?',
    '❓ Бошқа савол': null
  };

  if (quickReplies[text] === null) {
    return bot.sendMessage(chatId, '✍️ Саволингизни ёзинг, жавоб бераман!');
  }

  const savol = quickReplies[text] || text;

  if (!userHistory[chatId]) userHistory[chatId] = [];

  // Ёзяпти...
  bot.sendChatAction(chatId, 'typing');

  try {
    const res = await axios.post(`${API_URL}/api/ask`, {
      savol,
      tarix: userHistory[chatId].slice(-6) // Охирги 6 хабар
    });

    const javob = res.data.javob;

    // Тарихга қўш
    userHistory[chatId].push({ role: 'user', content: savol });
    userHistory[chatId].push({ role: 'assistant', content: javob });

    // 4096 белгидан ошса, бўлиб юбор
    if (javob.length > 4000) {
      const parts = javob.match(/.{1,4000}/gs) || [];
      for (const part of parts) {
        await bot.sendMessage(chatId, part, { parse_mode: 'Markdown' });
      }
    } else {
      bot.sendMessage(chatId, javob, { parse_mode: 'Markdown' });
    }

  } catch (err) {
    console.error(err.message);
    bot.sendMessage(chatId, '⚠️ Жавоб олишда хатолик. Қайтадан уриниб кўринг.');
  }
});

console.log('✅ Moliya AI Telegram Bot ishga tushdi...');
