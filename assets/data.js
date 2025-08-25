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
    "content/getting-started/installation.md": "# Установка\n\nДобро пожаловать в Mini Flowy! Этот гайд поможет вам быстро начать работу.\n\n## 🚀 Быстрый старт\n\n1. **Скачайте файлы** или клонируйте репозиторий\n2. **Откройте index.html** в браузере\n3. **Готово!** Начинайте создавать контент\n\n## 📁 Структура проекта\n\nMini Flowy использует простую структуру папок для организации контента:\n\n```\ncontent/\n├── getting-started/     # Начало работы\n├── tutorials/          # Туториалы\n├── examples/           # Примеры\n└── advanced/           # Продвинутые темы\n```\n\n## ✨ Возможности\n\n- 📝 Markdown поддержка\n- 📊 Mermaid диаграммы  \n- 🏷️ Система тегов\n- 📱 Адаптивный дизайн\n- 🎨 Темная тема\n",
    "content/tutorials/basic-markdown.md": "# Основы Markdown\n\nИзучите базовый синтаксис Markdown для создания красивого контента.\n\n## Заголовки\n\n```markdown\n# H1 Заголовок\n## H2 Заголовок  \n### H3 Заголовок\n```\n\n## Форматирование текста\n\n- **Жирный текст**: `**жирный**`\n- *Курсив*: `*курсив*`\n- `Код`: `` `код` ``\n- ~~Зачеркнутый~~: `~~зачеркнутый~~`\n\n## Списки\n\n### Маркированный список\n- Элемент 1\n- Элемент 2\n  - Подэлемент 2.1\n  - Подэлемент 2.2\n\n### Нумерованный список\n1. Первый пункт\n2. Второй пункт\n3. Третий пункт\n\n## Ссылки и изображения\n\n- Ссылка: `[текст](URL)`\n- Изображение: `![alt](URL)`\n\n## Блоки кода\n\n\\`\\`\\`javascript\nfunction hello() {\n  console.log(\"Hello, Mini Flowy!\");\n}\n\\`\\`\\`\n",
    "content/examples/flowcharts.md": "# Примеры диаграмм\n\nКоллекция красивых Mermaid диаграмм для вдохновения.\n\n## Простая блок-схема\n\n```mermaid\nflowchart TD\n    A[Начало] --> B{Условие}\n    B -->|Да| C[Действие 1]\n    B -->|Нет| D[Действие 2]\n    C --> E[Конец]\n    D --> E\n```\n\n## Схема процесса авторизации\n\n```mermaid\nflowchart TD\n    Start([Пользователь заходит на сайт]) --> Check{Авторизован?}\n    Check -->|Да| Dashboard[Дашборд]\n    Check -->|Нет| Login[Страница входа]\n    Login --> Form[Форма входа]\n    Form --> Validate{Проверка данных}\n    Validate -->|Успех| Dashboard\n    Validate -->|Ошибка| Error[Показать ошибку]\n    Error --> Form\n    Dashboard --> Logout[Выход]\n    Logout --> Start\n    \n    style Start fill:#e1f5fe\n    style Dashboard fill:#e8f5e8\n    style Error fill:#ffebee\n```\n\n## Архитектура системы\n\n```mermaid\ngraph TB\n    subgraph \"Frontend\"\n        UI[User Interface]\n        React[React Components]\n        State[State Management]\n    end\n    \n    subgraph \"Backend\"\n        API[REST API]\n        Auth[Authentication]\n        Logic[Business Logic]\n    end\n    \n    subgraph \"Database\"\n        DB[(PostgreSQL)]\n        Cache[(Redis)]\n    end\n    \n    UI --> React\n    React --> State\n    State --> API\n    API --> Auth\n    API --> Logic\n    Logic --> DB\n    Logic --> Cache\n    \n    style UI fill:#e3f2fd\n    style API fill:#f3e5f5\n    style DB fill:#e8f5e8\n```\n"
  }
};
