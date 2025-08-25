/**
 * Mini Flowy - Embedded Data (Public Build)
 * Встроенные данные для работы в file:// режиме - только публичный контент
 */

window.embeddedData = {
  "pages": [
    {
      "title": "Введение",
      "slug": "intro",
      "path": "content/getting-started/intro.md",
      "category": "Начало работы",
      "icon": "🚀",
      "tags": [
        "overview",
        "start"
      ],
      "public": true
    },
    {
      "title": "Установка",
      "slug": "installation",
      "path": "content/getting-started/installation.md",
      "category": "Начало работы",
      "icon": "🚀",
      "tags": [
        "setup",
        "install"
      ],
      "public": true
    },
    {
      "title": "Основы Markdown",
      "slug": "basic-markdown",
      "path": "content/tutorials/basic-markdown.md",
      "category": "Туториалы",
      "icon": "📚",
      "tags": [
        "markdown",
        "basics",
        "tutorial"
      ],
      "public": true
    },
    {
      "title": "Примеры диаграмм",
      "slug": "flowcharts",
      "path": "content/examples/flowcharts.md",
      "category": "Примеры",
      "icon": "🎨",
      "tags": [
        "mermaid",
        "flowchart",
        "examples"
      ],
      "public": true
    }
  ],
  "content": {
    "content/getting-started/intro.md": "# Вступление\n\nЭто ваш мини-AppFlowy на GitHub Pages.\n",
    "content/getting-started/installation.md": "# Установка\r\n\r\nДобро пожаловать в Mini Flowy! Этот гайд поможет вам быстро начать работу.\r\n\r\n## 🚀 Быстрый старт\r\n\r\n1. **Скачайте файлы** или клонируйте репозиторий\r\n2. **Откройте index.html** в браузере\r\n3. **Готово!** Начинайте создавать контент\r\n\r\n## 📁 Структура проекта\r\n\r\nMini Flowy использует простую структуру папок для организации контента:\r\n\r\n```\r\ncontent/\r\n├── getting-started/     # Начало работы\r\n├── tutorials/          # Туториалы\r\n├── examples/           # Примеры\r\n└── advanced/           # Продвинутые темы\r\n```\r\n\r\n## ✨ Возможности\r\n\r\n- 📝 Markdown поддержка\r\n- 📊 Mermaid диаграммы  \r\n- 🏷️ Система тегов\r\n- 📱 Адаптивный дизайн\r\n- 🎨 Темная тема\r\n",
    "content/tutorials/basic-markdown.md": "# Основы Markdown\r\n\r\nИзучите базовый синтаксис Markdown для создания красивого контента.\r\n\r\n## Заголовки\r\n\r\n```markdown\r\n# H1 Заголовок\r\n## H2 Заголовок  \r\n### H3 Заголовок\r\n```\r\n\r\n## Форматирование текста\r\n\r\n- **Жирный текст**: `**жирный**`\r\n- *Курсив*: `*курсив*`\r\n- `Код`: `` `код` ``\r\n- ~~Зачеркнутый~~: `~~зачеркнутый~~`\r\n\r\n## Списки\r\n\r\n### Маркированный список\r\n- Элемент 1\r\n- Элемент 2\r\n  - Подэлемент 2.1\r\n  - Подэлемент 2.2\r\n\r\n### Нумерованный список\r\n1. Первый пункт\r\n2. Второй пункт\r\n3. Третий пункт\r\n\r\n## Ссылки и изображения\r\n\r\n- Ссылка: `[текст](URL)`\r\n- Изображение: `![alt](URL)`\r\n\r\n## Блоки кода\r\n\r\n\\`\\`\\`javascript\r\nfunction hello() {\r\n  console.log(\"Hello, Mini Flowy!\");\r\n}\r\n\\`\\`\\`\r\n",
    "content/examples/flowcharts.md": "# Примеры диаграмм\r\n\r\nКоллекция красивых Mermaid диаграмм для вдохновения.\r\n\r\n## Простая блок-схема\r\n\r\n```mermaid\r\nflowchart TD\r\n    A[Начало] --> B{Условие}\r\n    B -->|Да| C[Действие 1]\r\n    B -->|Нет| D[Действие 2]\r\n    C --> E[Конец]\r\n    D --> E\r\n```\r\n\r\n## Схема процесса авторизации\r\n\r\n```mermaid\r\nflowchart TD\r\n    Start([Пользователь заходит на сайт]) --> Check{Авторизован?}\r\n    Check -->|Да| Dashboard[Дашборд]\r\n    Check -->|Нет| Login[Страница входа]\r\n    Login --> Form[Форма входа]\r\n    Form --> Validate{Проверка данных}\r\n    Validate -->|Успех| Dashboard\r\n    Validate -->|Ошибка| Error[Показать ошибку]\r\n    Error --> Form\r\n    Dashboard --> Logout[Выход]\r\n    Logout --> Start\r\n    \r\n    style Start fill:#e1f5fe\r\n    style Dashboard fill:#e8f5e8\r\n    style Error fill:#ffebee\r\n```\r\n\r\n## Архитектура системы\r\n\r\n```mermaid\r\ngraph TB\r\n    subgraph \"Frontend\"\r\n        UI[User Interface]\r\n        React[React Components]\r\n        State[State Management]\r\n    end\r\n    \r\n    subgraph \"Backend\"\r\n        API[REST API]\r\n        Auth[Authentication]\r\n        Logic[Business Logic]\r\n    end\r\n    \r\n    subgraph \"Database\"\r\n        DB[(PostgreSQL)]\r\n        Cache[(Redis)]\r\n    end\r\n    \r\n    UI --> React\r\n    React --> State\r\n    State --> API\r\n    API --> Auth\r\n    API --> Logic\r\n    Logic --> DB\r\n    Logic --> Cache\r\n    \r\n    style UI fill:#e3f2fd\r\n    style API fill:#f3e5f5\r\n    style DB fill:#e8f5e8\r\n```\r\n"
  }
};
