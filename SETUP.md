# 🚀 Moliya AI — Сервер Созлаш Инструкцияси

## 1. VPS СОТИБ ОЛИШ
- **Airnet.uz** ёки **Serverspace.uz** га кириш
- VPS тарифи: **2 CPU / 2GB RAM / 40GB SSD** (~$12-18/ой)
- OS: **Ubuntu 22.04 LTS** танланг

---

## 2. СЕРВЕРГА УЛАНИШ
```bash
ssh root@YOUR_SERVER_IP
```

---

## 3. NODE.JS ЎРНАТИШ
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version  # v20.x чиқиши керак
```

---

## 4. PM2 ЎРНАТИШ (автоматик ишга тушириш)
```bash
npm install -g pm2
```

---

## 5. ЛОЙИҲАНИ ЮКЛАШ
```bash
cd /var/www
git clone https://github.com/YOUR_USERNAME/moliya-ai.git
# ёки:
# scp -r ./moliya-ai root@YOUR_SERVER_IP:/var/www/

cd moliya-ai
npm install
```

---

## 6. .env ФАЙЛИНИ СОЗЛАШ
```bash
cp .env.example .env
nano .env
```

Қуйидагиларни тўлдиринг:
```
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
TELEGRAM_TOKEN=1234567890:AAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PORT=3000
API_URL=http://localhost:3000
```

---

## 7. NGINX ЎРНАТИШ (веб-сайт учун)
```bash
sudo apt install nginx -y

sudo nano /etc/nginx/sites-available/moliya-ai
```

Қуйидагини ёзинг:
```nginx
server {
    listen 80;
    server_name YOUR_DOMAIN.uz;  # ёки IP

    # Frontend
    location / {
        root /var/www/moliya-ai/frontend;
        index index.html;
        try_files $uri $uri/ =404;
    }

    # Backend API
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/moliya-ai /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 8. BACKEND ИШГА ТУШИРИШ
```bash
cd /var/www/moliya-ai
pm2 start backend/server.js --name "moliya-api"
pm2 save
pm2 startup
```

---

## 9. TELEGRAM BOT ИШГА ТУШИРИШ
```bash
pm2 start bot/telegram_bot.js --name "moliya-bot"
pm2 save
```

---

## 10. SSL СЕРТИФИКАТ (HTTPS)
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d YOUR_DOMAIN.uz
```

---

## 11. FRONTEND СОЗЛАШ
`frontend/index.html` файлида:
```javascript
const API = 'https://YOUR_DOMAIN.uz';  // '' ни ўзгартиринг
```

---

## 12. TELEGRAM BOT ЯРАТИШ
1. Telegramда **@BotFather** га ёзинг
2. `/newbot` буйруғи
3. Бот номи: `Moliya AI`
4. Username: `moliya_ai_bot` (бўш бўлиши керак)
5. Токенни `.env` га қўйинг

---

## ✅ ТАЙЁР!

Ишга тушганини текшириш:
```bash
pm2 status           # Barcha processlar
pm2 logs moliya-api  # API loglari
pm2 logs moliya-bot  # Bot loglari
curl http://localhost:3000/health  # {"status":"ok"} chiqishi kerak
```

---

## 📊 PM2 ФОЙДАЛИ БУЙРУҚЛАР
```bash
pm2 restart all      # Барчасини қайта ишга тушириш
pm2 stop all         # Тўхтатиш
pm2 logs             # Логларни кўриш
pm2 monit            # Мониторинг
```

---

## 💡 МУАММОЛАР

**Port band:**
```bash
sudo lsof -i :3000
sudo kill -9 PID
```

**Nginx хатолик:**
```bash
sudo nginx -t
sudo tail -f /var/log/nginx/error.log
```
