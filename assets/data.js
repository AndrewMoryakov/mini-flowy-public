/**
 * Mini Flowy - Embedded Data (Public Build)
 * Встроенные данные для работы в file:// режиме - только публичный контент
 */

window.embeddedData = {
  "pages": [
    {
      "title": "Настройка VLESS через Xray на Windows",
      "slug": "vless-xray-setup",
      "path": "content/technologies/networking/vless-xray-setup.md",
      "category": "Технологии/Сетевые инструменты",
      "icon": "🔐",
      "tags": [
        "vless",
        "xray",
        "прокси",
        "vpn",
        "windows",
        "reality",
        "настройка"
      ],
      "public": true,
      "order": 1
    },
    {
      "title": "🚀 Скрипты для автоматической установки VLESS/Xray",
      "slug": "readme",
      "path": "content/technologies/networking/scripts/README.md",
      "category": "Технологии/Сетевые инструменты/Scripts",
      "icon": "📄",
      "tags": [],
      "public": true,
      "order": 0
    },
    {
      "title": "Кастомные темы",
      "slug": "custom-themes",
      "path": "content/advanced/custom-themes.md",
      "category": "Advanced",
      "icon": "📄",
      "tags": [],
      "public": true,
      "order": 0
    },
    {
      "title": "Пример: Mermaid",
      "slug": "diagrams",
      "path": "content/examples/diagrams.md",
      "category": "Examples",
      "icon": "📄",
      "tags": [],
      "public": true,
      "order": 0
    },
    {
      "title": "Примеры диаграмм",
      "slug": "flowcharts",
      "path": "content/examples/flowcharts.md",
      "category": "Examples",
      "icon": "📄",
      "tags": [],
      "public": true,
      "order": 0
    },
    {
      "title": "UI компоненты",
      "slug": "ui-components",
      "path": "content/examples/ui-components.md",
      "category": "Examples",
      "icon": "📄",
      "tags": [],
      "public": true,
      "order": 0
    },
    {
      "title": "Вступление",
      "slug": "intro",
      "path": "content/getting-started/intro.md",
      "category": "Getting Started",
      "icon": "📄",
      "tags": [],
      "public": true,
      "order": 0
    },
    {
      "title": "Установка",
      "slug": "installation",
      "path": "content/getting-started/installation.md",
      "category": "Getting Started",
      "icon": "📄",
      "tags": [],
      "public": true,
      "order": 0
    },
    {
      "title": "Первые шаги",
      "slug": "first-steps",
      "path": "content/getting-started/basics/first-steps.md",
      "category": "Getting Started/Основы работы",
      "icon": "👶",
      "tags": [
        "начало",
        "первые-шаги"
      ],
      "public": true,
      "order": 1
    },
    {
      "title": "Основы Markdown",
      "slug": "basic-markdown",
      "path": "content/tutorials/basic-markdown.md",
      "category": "Tutorials",
      "icon": "📄",
      "tags": [],
      "public": true,
      "order": 0
    },
    {
      "title": "Работа с Mermaid диаграммами",
      "slug": "mermaid-diagrams",
      "path": "content/tutorials/mermaid-diagrams.md",
      "category": "Tutorials",
      "icon": "📄",
      "tags": [],
      "public": true,
      "order": 0
    }
  ],
  "content": {
    "content/technologies/networking/vless-xray-setup.md": "---\ntitle: Настройка VLESS через Xray на Windows\nicon: 🔐\ntags: [vless, xray, прокси, vpn, windows, reality, настройка]\npublic: true\norder: 1\n---\n\n# Настройка VLESS через Xray на Windows\n\nПолное руководство по установке и настройке VLESS подключения с использованием Xray-core на Windows.\n\n## 🎯 Что такое VLESS?\n\n**VLESS** - это современный протокол для обхода блокировок, развитие технологии V2Ray. Основные преимущества:\n\n- 🚀 **Высокая скорость** - минимальные накладные расходы\n- 🔒 **Reality протокол** - имитация реального HTTPS трафика  \n- 🛡️ **Обход DPI** - устойчивость к глубокому анализу пакетов\n- 🌐 **XTLS поддержка** - ускорение TLS соединений\n\n## 🚀 Быстрая установка через скрипты\n\n> **💡 Рекомендуемый способ!** Используйте готовые автоматические скрипты для упрощения установки.\n\n📦 **[⬇️ Скачать все скрипты (ZIP)](content/technologies/networking/scripts/vless-xray-scripts.zip)** | **[📁 Просмотреть скрипты](content/technologies/networking/scripts/)**\n\n### Автоматическая установка:\n1. 📥 **[1-install-xray.bat](content/technologies/networking/scripts/1-install-xray.bat)** - Скачивание и установка Xray + curl\n2. ⚙️ **[2-setup-config.bat](content/technologies/networking/scripts/2-setup-config.bat)** - Настройка конфигурации\n3. 🚀 **[3-start-xray.bat](content/technologies/networking/scripts/3-start-xray.bat)** - Запуск прокси\n4. 🔍 **[4-check-connection.bat](content/technologies/networking/scripts/4-check-connection.bat)** - Проверка подключения  \n5. 💻 **[5-powershell-proxy.bat](content/technologies/networking/scripts/5-powershell-proxy.bat)** - PowerShell с прокси\n\n**Просто запустите скрипты по порядку!** 🎯\n\n---\n\n## 📥 Ручная установка\n\n### Шаг 1: Скачивание Xray\n\n```powershell\n# Создание рабочей папки\nmkdir D:\\xray\ncd D:\\xray\n\n# Скачивание последней версии Xray\nInvoke-WebRequest -Uri \"https://github.com/XTLS/Xray-core/releases/latest/download/Xray-windows-64.zip\" -OutFile \"xray.zip\"\n\n# Распаковка\nExpand-Archive xray.zip -DestinationPath .\n```\n\n### Шаг 2: Установка curl для тестирования\n\n```powershell\n# Переход в домашнюю папку\ncd C:\\Users\\%USERNAME%\n\n# Скачивание curl\nInvoke-WebRequest -Uri \"https://curl.se/windows/dl-8.10.1_4/curl-8.10.1_4-win64-mingw.zip\" -OutFile \"curl.zip\"\n\n# Распаковка\nExpand-Archive curl.zip\n```\n\n## ⚙️ Конфигурация\n\n### Создание config.json\n\nСохраните в `D:\\xray\\config.json`:\n\n```json\n{\n  \"log\": {\n    \"loglevel\": \"info\"\n  },\n  \"inbounds\": [\n    {\n      \"port\": 10808,\n      \"protocol\": \"socks\",\n      \"settings\": {\n        \"auth\": \"noauth\"\n      }\n    },\n    {\n      \"port\": 10809,\n      \"protocol\": \"http\"\n    }\n  ],\n  \"outbounds\": [\n    {\n      \"protocol\": \"vless\",\n      \"settings\": {\n        \"vnext\": [\n          {\n            \"address\": \"your-server.com\",\n            \"port\": 443,\n            \"users\": [\n              {\n                \"id\": \"your-uuid-here\",\n                \"encryption\": \"none\",\n                \"flow\": \"xtls-rprx-vision\"\n              }\n            ]\n          }\n        ]\n      },\n      \"streamSettings\": {\n        \"network\": \"tcp\",\n        \"security\": \"reality\",\n        \"realitySettings\": {\n          \"serverName\": \"example.com\",\n          \"fingerprint\": \"chrome\",\n          \"publicKey\": \"your-public-key\",\n          \"shortId\": \"your-short-id\"\n        }\n      }\n    }\n  ]\n}\n```\n\n### 📋 Извлечение параметров из VLESS ссылки\n\nДля ссылки вида:\n```\nvless://UUID@SERVER:PORT?security=reality&sni=DOMAIN&pbk=PUBKEY&sid=SHORTID&type=tcp&flow=FLOW#NAME\n```\n\n**Соответствие параметров:**\n- `UUID` → `\"id\": \"UUID\"`\n- `SERVER:PORT` → `\"address\": \"SERVER\", \"port\": PORT`\n- `sni=DOMAIN` → `\"serverName\": \"DOMAIN\"`\n- `pbk=PUBKEY` → `\"publicKey\": \"PUBKEY\"`\n- `sid=SHORTID` → `\"shortId\": \"SHORTID\"`\n- `flow=FLOW` → `\"flow\": \"FLOW\"`\n\n## 🚀 Автоматизация запуска\n\n> **💡 Используйте готовые скрипты!** Все необходимые bat-файлы уже созданы в [папке scripts](content/technologies/networking/scripts/).\n\n### Готовые скрипты из набора:\n- 🚀 **[3-start-xray.bat](content/technologies/networking/scripts/3-start-xray.bat)** - Автоматический запуск с проверками\n- 🔍 **[4-check-connection.bat](content/technologies/networking/scripts/4-check-connection.bat)** - Проверка работоспособности  \n- 💻 **[5-powershell-proxy.bat](content/technologies/networking/scripts/5-powershell-proxy.bat)** - PowerShell с настройками прокси\n\n### Создание bat-файлов вручную (если нужно)\n\n**D:\\xray\\start_xray.bat:**\n```batch\n@echo off\necho ===============================\necho    ЗАПУСК XRAY ПРОКСИ\necho ===============================\necho.\necho Запуск Xray с конфигурацией...\necho Прокси будет доступен на:\necho   SOCKS5: 127.0.0.1:10808\necho   HTTP:   127.0.0.1:10809\necho.\necho Для остановки нажмите Ctrl+C\necho.\ncd /d \"D:\\xray\"\nxray.exe run -config config.json\npause\n```\n\n**D:\\xray\\start_powershell_with_proxy.bat:**\n```batch\n@echo off\necho ===============================\necho   PowerShell с ПРОКСИ\necho ===============================\necho.\necho Настройка переменных прокси...\necho   HTTP_PROXY  = http://127.0.0.1:10809\necho   HTTPS_PROXY = http://127.0.0.1:10809\necho   ALL_PROXY   = socks5://127.0.0.1:10808\necho.\necho ВНИМАНИЕ: Убедитесь что Xray запущен!\necho.\necho Запуск PowerShell...\necho.\n\npowershell.exe -NoExit -Command \"& {$env:HTTP_PROXY='http://127.0.0.1:10809'; $env:HTTPS_PROXY='http://127.0.0.1:10809'; $env:ALL_PROXY='socks5://127.0.0.1:10808'; Write-Host 'Прокси настроен!' -ForegroundColor Green}\"\n```\n\n**D:\\xray\\check_ip.bat:**\n```batch\n@echo off\necho ===============================\necho     ПРОВЕРКА IP АДРЕСА\necho ===============================\necho.\necho Проверка IP без прокси...\nC:\\Users\\%USERNAME%\\curl\\curl-8.10.1_4-win64-mingw\\bin\\curl.exe ifconfig.me\necho.\necho.\necho Проверка IP через SOCKS5 прокси...\nC:\\Users\\%USERNAME%\\curl\\curl-8.10.1_4-win64-mingw\\bin\\curl.exe --proxy socks5://127.0.0.1:10808 ifconfig.me\necho.\npause\n```\n\n## 🔧 Использование\n\n### 🚀 С автоматическими скриптами (рекомендуется):\n\n1. **Скачайте:** [Все скрипты из папки scripts](content/technologies/networking/scripts/)\n2. **Установка:** Запустите `1-install-xray.bat`\n3. **Настройка:** Запустите `2-setup-config.bat` (отредактируйте config.json)\n4. **Запуск:** Запустите `3-start-xray.bat`\n5. **Проверка:** Запустите `4-check-connection.bat`\n6. **Работа:** Используйте `5-powershell-proxy.bat`\n\n### 📋 Ручной способ:\n\n1. **Запустите Xray:** Двойной клик по `start_xray.bat`\n2. **Дождитесь сообщения:** \"Xray started\"\n3. **Проверьте работу:** Запустите `check_ip.bat`\n4. **Работайте через прокси:** Используйте `start_powershell_with_proxy.bat`\n\n### Проверка подключения:\n\n```powershell\n# Через SOCKS5\ncurl --proxy socks5://127.0.0.1:10808 ifconfig.me\n\n# Через HTTP\ncurl --proxy http://127.0.0.1:10809 ifconfig.me\n\n# Детальная информация\ncurl --proxy socks5://127.0.0.1:10808 ipinfo.io\n```\n\n## 🌐 Настройка браузера\n\n### Chrome/Edge:\n1. Настройки → Дополнительные → Система\n2. Открыть настройки прокси-сервера компьютера\n3. Включить прокси-сервер\n4. **SOCKS5:** `127.0.0.1:10808` (рекомендуется)\n5. **HTTP:** `127.0.0.1:10809`\n\n### Firefox:\n1. Настройки → Прокси → Ручная настройка\n2. **SOCKS Host:** `127.0.0.1`, **Port:** `10808`\n3. Выбрать \"SOCKS v5\"\n\n## 🛠️ Решение проблем\n\n### ❌ \"unexpected response version\"\n**Причина:** V2Ray не поддерживает современный Reality  \n**Решение:** Используйте Xray вместо V2Ray\n\n### ❌ \"context canceled\"\n**Причина:** Проблемы с flow параметром  \n**Решение:** Попробуйте убрать или изменить `\"flow\": \"xtls-rprx-vision\"`\n\n### ❌ \"connection refused\"\n**Причина:** Сервер недоступен или заблокирован  \n**Решение:** \n1. Проверьте доступность: `Test-NetConnection SERVER PORT`\n2. Попробуйте другую VLESS ссылку\n\n### ❌ PowerShell не использует прокси\n**Причина:** Invoke-WebRequest не поддерживает переменные прокси  \n**Решение:** Используйте настоящий curl или настройте браузер\n\n## 📊 Диаграмма работы VLESS\n\n```mermaid\ngraph TD\n    A[Приложение] --> B[Локальный прокси<br/>SOCKS5: 10808<br/>HTTP: 10809]\n    B --> C[Xray Client]\n    C --> D[VLESS + Reality<br/>Шифрование]\n    D --> E[Интернет через<br/>VLESS сервер]\n    E --> F[Целевой сайт]\n    \n    style A fill:#e1f5fe\n    style B fill:#f3e5f5\n    style C fill:#e8f5e8\n    style D fill:#fff3e0\n    style E fill:#fce4ec\n    style F fill:#e1f5fe\n```\n\n## 🔐 Безопасность\n\n### Reality протокол:\n- **Маскировка под реальный HTTPS** - трафик неотличим от обычного\n- **TLS fingerprinting** - имитация популярных браузеров\n- **SNI сокрытие** - использование доменов крупных сайтов\n\n### Рекомендации:\n- ✅ Регулярно обновляйте Xray\n- ✅ Используйте актуальные параметры сервера\n- ✅ Не логируйте чувствительные данные\n- ⚠️ Не делитесь конфигурацией с UUID\n\n## 📦 Скачать готовые скрипты\n\n> **🎯 Упростите процесс!** Все необходимые файлы для автоматической установки и настройки.\n\n### 📦 Быстрое скачивание\n\n**[⬇️ Скачать vless-xray-scripts.zip](content/technologies/networking/scripts/vless-xray-scripts.zip)** - Все скрипты одним архивом\n\n### 📁 [Папка со скриптами](content/technologies/networking/scripts/)\n\n- **[README.md](content/technologies/networking/scripts/README.md)** - Подробная инструкция по использованию\n- **[1-install-xray.bat](content/technologies/networking/scripts/1-install-xray.bat)** - Автоматическая установка\n- **[2-setup-config.bat](content/technologies/networking/scripts/2-setup-config.bat)** - Настройка конфигурации  \n- **[3-start-xray.bat](content/technologies/networking/scripts/3-start-xray.bat)** - Запуск прокси\n- **[4-check-connection.bat](content/technologies/networking/scripts/4-check-connection.bat)** - Проверка подключения\n- **[5-powershell-proxy.bat](content/technologies/networking/scripts/5-powershell-proxy.bat)** - PowerShell с прокси\n\n**Рекомендуется скачать ZIP-архив для удобства!**\n\n## 📝 Заключение\n\nVLESS с Reality через Xray - это современное решение для обхода блокировок с высоким уровнем безопасности и производительности. Правильная настройка обеспечивает стабильное соединение даже в условиях жесткой интернет-цензуры.\n\n**Ключевые преимущества:**\n- 🚀 Высокая скорость благодаря XTLS\n- 🔒 Надежное шифрование Reality\n- 🛡️ Устойчивость к DPI анализу\n- ⚙️ Простота автоматизации\n\n**С готовыми скриптами весь процесс занимает 5-10 минут!** 🎯\n\n---\n\n*Статья написана на основе практического опыта настройки VLESS подключений на Windows.*",
    "content/technologies/networking/scripts/README.md": "# 🚀 Скрипты для автоматической установки VLESS/Xray\n\nНабор bat-файлов для быстрой установки и настройки VLESS подключения через Xray на Windows.\n\n## 📦 Скачать все скрипты\n\n**[⬇️ Скачать vless-xray-scripts.zip](./vless-xray-scripts.zip)** - Все скрипты в одном архиве\n\n## 📋 Порядок использования\n\n### 1️⃣ Установка компонентов\n```\n1-install-xray.bat\n```\n**Что делает:**\n- ⬇️ Скачивает последнюю версию Xray-core\n- ⬇️ Скачивает curl для Windows\n- 📁 Создает рабочие папки\n- 🧹 Очищает временные файлы\n\n**Результат:** Готовая установка в `D:\\xray\\` и curl в профиле пользователя\n\n---\n\n### 2️⃣ Настройка конфигурации\n```\n2-setup-config.bat\n```\n**Что делает:**\n- 📝 Запрашивает VLESS ссылку\n- ⚙️ Создает шаблон config.json\n- 💾 Сохраняет ссылку в файл\n- 🛠️ Создает вспомогательные скрипты\n\n**Важно:** После выполнения нужно вручную отредактировать `config.json`\n\n---\n\n### 3️⃣ Запуск прокси\n```\n3-start-xray.bat\n```\n**Что делает:**\n- ✅ Проверяет наличие файлов\n- 🔍 Валидирует конфигурацию\n- 🚀 Запускает Xray прокси\n\n**Результат:** Активные прокси на портах 10808 (SOCKS5) и 10809 (HTTP)\n\n---\n\n### 4️⃣ Проверка подключения\n```\n4-check-connection.bat\n```\n**Что делает:**\n- 🌐 Проверяет интернет соединение\n- 🔌 Проверяет доступность прокси\n- 📍 Показывает IP и геолокацию\n- ✅ Подтверждает работоспособность\n\n---\n\n### 5️⃣ PowerShell с прокси\n```\n5-powershell-proxy.bat\n```\n**Что делает:**\n- 🔧 Настраивает переменные окружения\n- 💻 Запускает PowerShell с прокси\n- 📝 Показывает полезные команды\n\n## 🎯 Быстрый старт\n\n1. Скачайте все файлы в одну папку\n2. Запустите `1-install-xray.bat`\n3. Запустите `2-setup-config.bat` с вашей VLESS ссылкой\n4. Отредактируйте `D:\\xray\\config.json` вручно\n5. Запустите `3-start-xray.bat`\n6. Проверьте работу через `4-check-connection.bat`\n\n## ⚠️ Важные замечания\n\n- **Конфигурация:** После `2-setup-config.bat` обязательно отредактируйте `config.json`\n- **Права:** Запускайте от имени обычного пользователя\n- **Антивирус:** Возможны ложные срабатывания на сетевые утилиты\n- **Брандмауэр:** Windows может запросить разрешение на сетевой доступ\n\n## 🗂️ Структура файлов после установки\n\n```\nD:\\xray\\\n├── xray.exe              # Основной исполняемый файл\n├── config.json           # Конфигурация VLESS\n├── vless-url.txt         # Ваша VLESS ссылка\n├── start_xray.bat        # Запуск прокси\n└── check_connection.bat  # Проверка соединения\n\nC:\\Users\\%USERNAME%\\curl\\\n└── curl-8.10.1_4-win64-mingw\\\n    └── bin\\\n        └── curl.exe      # Утилита для проверки IP\n```\n\n## 🛠️ Устранение неисправностей\n\n### ❌ \"Xray не найден\"\n**Решение:** Запустите заново `1-install-xray.bat`\n\n### ❌ \"PLACEHOLDER в конфигурации\"\n**Решение:** Отредактируйте `D:\\xray\\config.json`, заменив все PLACEHOLDER_* на реальные значения\n\n### ❌ \"Прокси не работает\"\n**Решение:** Проверьте конфигурацию, попробуйте другую VLESS ссылку\n\n### ❌ \"Нет интернета через прокси\"\n**Решение:** Проверьте доступность сервера: `Test-NetConnection SERVER PORT`\n\n---\n\n*Скрипты созданы для упрощения настройки VLESS подключений на Windows*",
    "content/advanced/custom-themes.md": "# Кастомные темы\n\nНаучитесь создавать собственные темы оформления для Mini Flowy.\n\n## Структура CSS переменных\n\nMini Flowy использует CSS Custom Properties для тем:\n\n```css\n:root {\n  --bg: #ffffff;        /* Фон */\n  --fg: #0f172a;        /* Основной текст */\n  --muted: #64748b;     /* Приглушенный текст */\n  --border: #e5e7eb;    /* Границы */\n  --accent: #0ea5e9;    /* Акцентный цвет */\n  --codebg: #0b1220;    /* Фон кода */\n  --codefg: #e2e8f0;    /* Текст кода */\n}\n```\n\n## Темная тема\n\n```css\n[data-theme=\"dark\"] {\n  --bg: #0b1220;\n  --fg: #e2e8f0;\n  --muted: #94a3b8;\n  --border: #172554;\n  --accent: #38bdf8;\n  --codebg: #0b1220;\n  --codefg: #e2e8f0;\n}\n```\n\n## Создание кастомной темы\n\n1. **Определите цветовую палитру**\n2. **Создайте CSS селектор** `[data-theme=\"my-theme\"]`\n3. **Переопределите переменные**\n4. **Добавьте логику переключения** в JavaScript\n\n### Пример: Природная тема\n\n```css\n[data-theme=\"nature\"] {\n  --bg: #f0f9f0;\n  --fg: #1a4d1a;\n  --muted: #4a7c59;\n  --border: #90c695;\n  --accent: #2d5a37;\n  --codebg: #e8f5e8;\n  --codefg: #1a4d1a;\n}\n```\n\n## Советы по дизайну\n\n- 🎨 **Контрастность**: обеспечьте читаемость текста\n- 🔄 **Консистентность**: используйте согласованную палитру  \n- 🌙 **Темные темы**: делайте фон темным, текст светлым\n- ✨ **Акценты**: используйте яркие цвета экономно\n",
    "content/examples/diagrams.md": "# Пример: Mermaid\n\nТеперь Mermaid диаграммы отображаются в полном размере с удобным панорамированием и зумом!\n\n## Простая диаграмма\n\n```mermaid\nflowchart TD\n    A[Пользователь] --> B{Авторизован?}\n    B -->|Да| C[Главная страница]\n    B -->|Нет| D[Страница входа]\n    D --> E[Ввод данных]\n    E --> F{Проверка}\n    F -->|OK| C\n    F -->|Ошибка| D\n    C --> G[Функции системы]\n    G --> H[Просмотр данных]\n    G --> I[Редактирование]\n    G --> J[Настройки]\n```\n\n## Более сложная диаграмма\n\n```mermaid\ngraph TB\n    subgraph Frontend\n        A[React App] --> B[Components]\n        B --> C[State Management]\n        C --> D[API Layer]\n    end\n    \n    subgraph Backend\n        E[REST API] --> F[Business Logic]\n        F --> G[Data Access]\n        G --> H[(Database)]\n    end\n    \n    subgraph Infrastructure\n        I[Load Balancer] --> J[Web Servers]\n        J --> K[Application Servers]\n        K --> L[Cache]\n        L --> M[Storage]\n    end\n    \n    D --> E\n    I --> A\n    K --> F\n    \n    style A fill:#e1f5fe\n    style E fill:#f3e5f5\n    style H fill:#e8f5e8\n```\n",
    "content/examples/flowcharts.md": "# Примеры диаграмм\n\nКоллекция красивых Mermaid диаграмм для вдохновения.\n\n## Простая блок-схема\n\n```mermaid\nflowchart TD\n    A[Начало] --> B{Условие}\n    B -->|Да| C[Действие 1]\n    B -->|Нет| D[Действие 2]\n    C --> E[Конец]\n    D --> E\n```\n\n## Схема процесса авторизации\n\n```mermaid\nflowchart TD\n    Start([Пользователь заходит на сайт]) --> Check{Авторизован?}\n    Check -->|Да| Dashboard[Дашборд]\n    Check -->|Нет| Login[Страница входа]\n    Login --> Form[Форма входа]\n    Form --> Validate{Проверка данных}\n    Validate -->|Успех| Dashboard\n    Validate -->|Ошибка| Error[Показать ошибку]\n    Error --> Form\n    Dashboard --> Logout[Выход]\n    Logout --> Start\n    \n    style Start fill:#e1f5fe\n    style Dashboard fill:#e8f5e8\n    style Error fill:#ffebee\n```\n\n## Архитектура системы\n\n```mermaid\ngraph TB\n    subgraph \"Frontend\"\n        UI[User Interface]\n        React[React Components]\n        State[State Management]\n    end\n    \n    subgraph \"Backend\"\n        API[REST API]\n        Auth[Authentication]\n        Logic[Business Logic]\n    end\n    \n    subgraph \"Database\"\n        DB[(PostgreSQL)]\n        Cache[(Redis)]\n    end\n    \n    UI --> React\n    React --> State\n    State --> API\n    API --> Auth\n    API --> Logic\n    Logic --> DB\n    Logic --> Cache\n    \n    style UI fill:#e3f2fd\n    style API fill:#f3e5f5\n    style DB fill:#e8f5e8\n```\n",
    "content/examples/ui-components.md": "# UI компоненты\n\nПримеры создания пользовательских интерфейсов с помощью диаграмм.\n\n## Структура веб-приложения\n\n```mermaid\nflowchart TD\n    subgraph \"Header\"\n        Logo[Логотип]\n        Nav[Навигация]\n        Profile[Профиль]\n    end\n    \n    subgraph \"Sidebar\"\n        Menu[Меню]\n        Filters[Фильтры]\n    end\n    \n    subgraph \"Main Content\"\n        Content[Основной контент]\n        Pagination[Пагинация]\n    end\n    \n    subgraph \"Footer\"\n        Links[Ссылки]\n        Copyright[Копирайт]\n    end\n    \n    Logo --- Nav\n    Nav --- Profile\n    Menu --- Filters\n    Content --- Pagination\n    Links --- Copyright\n    \n    style Header fill:#e3f2fd\n    style Sidebar fill:#f3e5f5\n    style \"Main Content\" fill:#e8f5e8\n    style Footer fill:#fff3e0\n```\n\n## Пользовательский путь\n\n```mermaid\njourney\n    title Путь пользователя в интернет-магазине\n    section Поиск товара\n      Заходит на сайт           : 5: Пользователь\n      Ищет товар               : 3: Пользователь\n      Просматривает результаты : 4: Пользователь\n    section Покупка\n      Добавляет в корзину      : 5: Пользователь\n      Оформляет заказ          : 3: Пользователь\n      Оплачивает               : 1: Пользователь\n    section После покупки\n      Получает товар           : 5: Пользователь\n      Оставляет отзыв          : 4: Пользователь\n```\n\n## Архитектура микросервисов\n\n```mermaid\ngraph TB\n    subgraph \"API Gateway\"\n        Gateway[Nginx/Kong]\n    end\n    \n    subgraph \"Микросервисы\"\n        User[User Service]\n        Product[Product Service]\n        Order[Order Service]\n        Payment[Payment Service]\n    end\n    \n    subgraph \"Данные\"\n        UserDB[(User DB)]\n        ProductDB[(Product DB)]\n        OrderDB[(Order DB)]\n    end\n    \n    Gateway --> User\n    Gateway --> Product\n    Gateway --> Order\n    Gateway --> Payment\n    \n    User --> UserDB\n    Product --> ProductDB\n    Order --> OrderDB\n    \n    Order -.-> User\n    Order -.-> Product\n    Payment -.-> Order\n    \n    style Gateway fill:#e1f5fe\n    style User fill:#f3e5f5\n    style Product fill:#e8f5e8\n    style Order fill:#fff3e0\n    style Payment fill:#fce4ec\n```\n",
    "content/getting-started/intro.md": "# Вступление\n\nЭто ваш мини-AppFlowy на GitHub Pages.\n",
    "content/getting-started/installation.md": "# Установка\n\nДобро пожаловать в Mini Flowy! Этот гайд поможет вам быстро начать работу.\n\n## 🚀 Быстрый старт\n\n1. **Скачайте файлы** или клонируйте репозиторий\n2. **Откройте index.html** в браузере\n3. **Готово!** Начинайте создавать контент\n\n## 📁 Структура проекта\n\nMini Flowy использует простую структуру папок для организации контента:\n\n```\ncontent/\n├── getting-started/     # Начало работы\n├── tutorials/          # Туториалы\n├── examples/           # Примеры\n└── advanced/           # Продвинутые темы\n```\n\n## ✨ Возможности\n\n- 📝 Markdown поддержка\n- 📊 Mermaid диаграммы  \n- 🏷️ Система тегов\n- 📱 Адаптивный дизайн\n- 🎨 Темная тема\n",
    "content/getting-started/basics/first-steps.md": "---\ntitle: Первые шаги\nicon: 👶\ntags: [начало, первые-шаги]\npublic: true\norder: 1\n---\n\n# Первые шаги в Mini Flowy\n\nДобро пожаловать в Mini Flowy! Этот гайд поможет вам сделать первые шаги.\n\n## Что такое Mini Flowy?\n\nMini Flowy - это легкий просмотрщик Markdown документов с поддержкой диаграмм Mermaid.\n\n## Основные возможности\n\n- 📝 Просмотр Markdown файлов\n- 📊 Интерактивные диаграммы Mermaid\n- 🔍 Поиск по содержимому\n- 🏷️ Система тегов\n- 📱 Адаптивный дизайн\n\n## Начало работы\n\n1. Создайте папку с вашим контентом\n2. Добавьте `.md` файлы\n3. Запустите `npm run generate`\n4. Откройте `index.html`\n\nГотово! 🎉",
    "content/tutorials/basic-markdown.md": "# Основы Markdown\n\nИзучите базовый синтаксис Markdown для создания красивого контента.\n\n## Заголовки\n\n```markdown\n# H1 Заголовок\n## H2 Заголовок  \n### H3 Заголовок\n```\n\n## Форматирование текста\n\n- **Жирный текст**: `**жирный**`\n- *Курсив*: `*курсив*`\n- `Код`: `` `код` ``\n- ~~Зачеркнутый~~: `~~зачеркнутый~~`\n\n## Списки\n\n### Маркированный список\n- Элемент 1\n- Элемент 2\n  - Подэлемент 2.1\n  - Подэлемент 2.2\n\n### Нумерованный список\n1. Первый пункт\n2. Второй пункт\n3. Третий пункт\n\n## Ссылки и изображения\n\n- Ссылка: `[текст](URL)`\n- Изображение: `![alt](URL)`\n\n## Блоки кода\n\n\\`\\`\\`javascript\nfunction hello() {\n  console.log(\"Hello, Mini Flowy!\");\n}\n\\`\\`\\`\n",
    "content/tutorials/mermaid-diagrams.md": "# Работа с Mermaid диаграммами\n\nПодробное руководство по созданию интерактивных диаграмм в Mini Flowy.\n\n## Что такое Mermaid?\n\nMermaid - это библиотека для создания диаграмм и схем из текста. В Mini Flowy диаграммы поддерживают:\n\n- 🔍 **Панорамирование и зум**\n- 📱 **Адаптивность**\n- ⬇️ **Экспорт в SVG**\n- 🎨 **Темная/светлая тема**\n\n## Типы диаграмм\n\n### Flowchart (Блок-схемы)\n\n```mermaid\nflowchart LR\n    A[Прямоугольник] --> B(Скругленный)\n    B --> C{Ромб}\n    C -->|Да| D[Результат 1]\n    C -->|Нет| E[Результат 2]\n```\n\n### Sequence (Диаграммы последовательности)\n\n```mermaid\nsequenceDiagram\n    participant A as Клиент\n    participant B as Сервер\n    participant C as База данных\n    \n    A->>B: Запрос данных\n    B->>C: SQL запрос\n    C-->>B: Результат\n    B-->>A: JSON ответ\n```\n\n### Gantt (Диаграммы Гантта)\n\n```mermaid\ngantt\n    title Планирование проекта\n    dateFormat  YYYY-MM-DD\n    section Планирование\n    Анализ требований    :a1, 2024-01-01, 30d\n    Дизайн               :a2, after a1, 20d\n    section Разработка\n    Frontend             :b1, after a2, 45d\n    Backend              :b2, after a2, 40d\n    section Тестирование\n    QA тестирование      :c1, after b1, 15d\n```\n\n## Советы по созданию диаграмм\n\n1. **Планируйте структуру** заранее\n2. **Используйте понятные названия** узлов\n3. **Группируйте связанные элементы** в подграфы\n4. **Добавляйте стили** для важных элементов\n5. **Тестируйте на разных размерах** экрана\n"
  }
};
