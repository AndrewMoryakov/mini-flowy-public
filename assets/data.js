/**
 * Mini Flowy - Embedded Data (Public Build)
 * Встроенные данные для работы в file:// режиме - только публичный контент
 */

window.embeddedData = {
  "pages": [
    {
      "title": "Кастомные темы",
      "slug": "custom-themes",
      "path": "advanced/custom-themes.md",
      "category": "Advanced",
      "icon": "📄",
      "tags": [],
      "public": true,
      "order": 0
    },
    {
      "title": "Пример: Mermaid",
      "slug": "diagrams",
      "path": "examples/diagrams.md",
      "category": "Examples",
      "icon": "📄",
      "tags": [],
      "public": true,
      "order": 0
    },
    {
      "title": "Примеры диаграмм",
      "slug": "flowcharts",
      "path": "examples/flowcharts.md",
      "category": "Examples",
      "icon": "📄",
      "tags": [],
      "public": true,
      "order": 0
    },
    {
      "title": "UI компоненты",
      "slug": "ui-components",
      "path": "examples/ui-components.md",
      "category": "Examples",
      "icon": "📄",
      "tags": [],
      "public": true,
      "order": 0
    },
    {
      "title": "Вступление",
      "slug": "intro",
      "path": "getting-started/intro.md",
      "category": "Getting Started",
      "icon": "📄",
      "tags": [],
      "public": true,
      "order": 0
    },
    {
      "title": "Установка",
      "slug": "installation",
      "path": "getting-started/installation.md",
      "category": "Getting Started",
      "icon": "📄",
      "tags": [],
      "public": true,
      "order": 0
    },
    {
      "title": "Первые шаги",
      "slug": "first-steps",
      "path": "getting-started/basics/first-steps.md",
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
      "path": "tutorials/basic-markdown.md",
      "category": "Tutorials",
      "icon": "📄",
      "tags": [],
      "public": true,
      "order": 0
    },
    {
      "title": "Работа с Mermaid диаграммами",
      "slug": "mermaid-diagrams",
      "path": "tutorials/mermaid-diagrams.md",
      "category": "Tutorials",
      "icon": "📄",
      "tags": [],
      "public": true,
      "order": 0
    }
  ],
  "content": {
    "advanced/custom-themes.md": "# Кастомные темы\n\nНаучитесь создавать собственные темы оформления для Mini Flowy.\n\n## Структура CSS переменных\n\nMini Flowy использует CSS Custom Properties для тем:\n\n```css\n:root {\n  --bg: #ffffff;        /* Фон */\n  --fg: #0f172a;        /* Основной текст */\n  --muted: #64748b;     /* Приглушенный текст */\n  --border: #e5e7eb;    /* Границы */\n  --accent: #0ea5e9;    /* Акцентный цвет */\n  --codebg: #0b1220;    /* Фон кода */\n  --codefg: #e2e8f0;    /* Текст кода */\n}\n```\n\n## Темная тема\n\n```css\n[data-theme=\"dark\"] {\n  --bg: #0b1220;\n  --fg: #e2e8f0;\n  --muted: #94a3b8;\n  --border: #172554;\n  --accent: #38bdf8;\n  --codebg: #0b1220;\n  --codefg: #e2e8f0;\n}\n```\n\n## Создание кастомной темы\n\n1. **Определите цветовую палитру**\n2. **Создайте CSS селектор** `[data-theme=\"my-theme\"]`\n3. **Переопределите переменные**\n4. **Добавьте логику переключения** в JavaScript\n\n### Пример: Природная тема\n\n```css\n[data-theme=\"nature\"] {\n  --bg: #f0f9f0;\n  --fg: #1a4d1a;\n  --muted: #4a7c59;\n  --border: #90c695;\n  --accent: #2d5a37;\n  --codebg: #e8f5e8;\n  --codefg: #1a4d1a;\n}\n```\n\n## Советы по дизайну\n\n- 🎨 **Контрастность**: обеспечьте читаемость текста\n- 🔄 **Консистентность**: используйте согласованную палитру  \n- 🌙 **Темные темы**: делайте фон темным, текст светлым\n- ✨ **Акценты**: используйте яркие цвета экономно\n",
    "examples/diagrams.md": "# Пример: Mermaid\n\nТеперь Mermaid диаграммы отображаются в полном размере с удобным панорамированием и зумом!\n\n## Простая диаграмма\n\n```mermaid\nflowchart TD\n    A[Пользователь] --> B{Авторизован?}\n    B -->|Да| C[Главная страница]\n    B -->|Нет| D[Страница входа]\n    D --> E[Ввод данных]\n    E --> F{Проверка}\n    F -->|OK| C\n    F -->|Ошибка| D\n    C --> G[Функции системы]\n    G --> H[Просмотр данных]\n    G --> I[Редактирование]\n    G --> J[Настройки]\n```\n\n## Более сложная диаграмма\n\n```mermaid\ngraph TB\n    subgraph Frontend\n        A[React App] --> B[Components]\n        B --> C[State Management]\n        C --> D[API Layer]\n    end\n    \n    subgraph Backend\n        E[REST API] --> F[Business Logic]\n        F --> G[Data Access]\n        G --> H[(Database)]\n    end\n    \n    subgraph Infrastructure\n        I[Load Balancer] --> J[Web Servers]\n        J --> K[Application Servers]\n        K --> L[Cache]\n        L --> M[Storage]\n    end\n    \n    D --> E\n    I --> A\n    K --> F\n    \n    style A fill:#e1f5fe\n    style E fill:#f3e5f5\n    style H fill:#e8f5e8\n```\n",
    "examples/flowcharts.md": "# Примеры диаграмм\n\nКоллекция красивых Mermaid диаграмм для вдохновения.\n\n## Простая блок-схема\n\n```mermaid\nflowchart TD\n    A[Начало] --> B{Условие}\n    B -->|Да| C[Действие 1]\n    B -->|Нет| D[Действие 2]\n    C --> E[Конец]\n    D --> E\n```\n\n## Схема процесса авторизации\n\n```mermaid\nflowchart TD\n    Start([Пользователь заходит на сайт]) --> Check{Авторизован?}\n    Check -->|Да| Dashboard[Дашборд]\n    Check -->|Нет| Login[Страница входа]\n    Login --> Form[Форма входа]\n    Form --> Validate{Проверка данных}\n    Validate -->|Успех| Dashboard\n    Validate -->|Ошибка| Error[Показать ошибку]\n    Error --> Form\n    Dashboard --> Logout[Выход]\n    Logout --> Start\n    \n    style Start fill:#e1f5fe\n    style Dashboard fill:#e8f5e8\n    style Error fill:#ffebee\n```\n\n## Архитектура системы\n\n```mermaid\ngraph TB\n    subgraph \"Frontend\"\n        UI[User Interface]\n        React[React Components]\n        State[State Management]\n    end\n    \n    subgraph \"Backend\"\n        API[REST API]\n        Auth[Authentication]\n        Logic[Business Logic]\n    end\n    \n    subgraph \"Database\"\n        DB[(PostgreSQL)]\n        Cache[(Redis)]\n    end\n    \n    UI --> React\n    React --> State\n    State --> API\n    API --> Auth\n    API --> Logic\n    Logic --> DB\n    Logic --> Cache\n    \n    style UI fill:#e3f2fd\n    style API fill:#f3e5f5\n    style DB fill:#e8f5e8\n```\n",
    "examples/ui-components.md": "# UI компоненты\n\nПримеры создания пользовательских интерфейсов с помощью диаграмм.\n\n## Структура веб-приложения\n\n```mermaid\nflowchart TD\n    subgraph \"Header\"\n        Logo[Логотип]\n        Nav[Навигация]\n        Profile[Профиль]\n    end\n    \n    subgraph \"Sidebar\"\n        Menu[Меню]\n        Filters[Фильтры]\n    end\n    \n    subgraph \"Main Content\"\n        Content[Основной контент]\n        Pagination[Пагинация]\n    end\n    \n    subgraph \"Footer\"\n        Links[Ссылки]\n        Copyright[Копирайт]\n    end\n    \n    Logo --- Nav\n    Nav --- Profile\n    Menu --- Filters\n    Content --- Pagination\n    Links --- Copyright\n    \n    style Header fill:#e3f2fd\n    style Sidebar fill:#f3e5f5\n    style \"Main Content\" fill:#e8f5e8\n    style Footer fill:#fff3e0\n```\n\n## Пользовательский путь\n\n```mermaid\njourney\n    title Путь пользователя в интернет-магазине\n    section Поиск товара\n      Заходит на сайт           : 5: Пользователь\n      Ищет товар               : 3: Пользователь\n      Просматривает результаты : 4: Пользователь\n    section Покупка\n      Добавляет в корзину      : 5: Пользователь\n      Оформляет заказ          : 3: Пользователь\n      Оплачивает               : 1: Пользователь\n    section После покупки\n      Получает товар           : 5: Пользователь\n      Оставляет отзыв          : 4: Пользователь\n```\n\n## Архитектура микросервисов\n\n```mermaid\ngraph TB\n    subgraph \"API Gateway\"\n        Gateway[Nginx/Kong]\n    end\n    \n    subgraph \"Микросервисы\"\n        User[User Service]\n        Product[Product Service]\n        Order[Order Service]\n        Payment[Payment Service]\n    end\n    \n    subgraph \"Данные\"\n        UserDB[(User DB)]\n        ProductDB[(Product DB)]\n        OrderDB[(Order DB)]\n    end\n    \n    Gateway --> User\n    Gateway --> Product\n    Gateway --> Order\n    Gateway --> Payment\n    \n    User --> UserDB\n    Product --> ProductDB\n    Order --> OrderDB\n    \n    Order -.-> User\n    Order -.-> Product\n    Payment -.-> Order\n    \n    style Gateway fill:#e1f5fe\n    style User fill:#f3e5f5\n    style Product fill:#e8f5e8\n    style Order fill:#fff3e0\n    style Payment fill:#fce4ec\n```\n",
    "getting-started/intro.md": "# Вступление\n\nЭто ваш мини-AppFlowy на GitHub Pages.\n",
    "getting-started/installation.md": "# Установка\n\nДобро пожаловать в Mini Flowy! Этот гайд поможет вам быстро начать работу.\n\n## 🚀 Быстрый старт\n\n1. **Скачайте файлы** или клонируйте репозиторий\n2. **Откройте index.html** в браузере\n3. **Готово!** Начинайте создавать контент\n\n## 📁 Структура проекта\n\nMini Flowy использует простую структуру папок для организации контента:\n\n```\ncontent/\n├── getting-started/     # Начало работы\n├── tutorials/          # Туториалы\n├── examples/           # Примеры\n└── advanced/           # Продвинутые темы\n```\n\n## ✨ Возможности\n\n- 📝 Markdown поддержка\n- 📊 Mermaid диаграммы  \n- 🏷️ Система тегов\n- 📱 Адаптивный дизайн\n- 🎨 Темная тема\n",
    "getting-started/basics/first-steps.md": "---\ntitle: Первые шаги\nicon: 👶\ntags: [начало, первые-шаги]\npublic: true\norder: 1\n---\n\n# Первые шаги в Mini Flowy\n\nДобро пожаловать в Mini Flowy! Этот гайд поможет вам сделать первые шаги.\n\n## Что такое Mini Flowy?\n\nMini Flowy - это легкий просмотрщик Markdown документов с поддержкой диаграмм Mermaid.\n\n## Основные возможности\n\n- 📝 Просмотр Markdown файлов\n- 📊 Интерактивные диаграммы Mermaid\n- 🔍 Поиск по содержимому\n- 🏷️ Система тегов\n- 📱 Адаптивный дизайн\n\n## Начало работы\n\n1. Создайте папку с вашим контентом\n2. Добавьте `.md` файлы\n3. Запустите `npm run generate`\n4. Откройте `index.html`\n\nГотово! 🎉",
    "tutorials/basic-markdown.md": "# Основы Markdown\n\nИзучите базовый синтаксис Markdown для создания красивого контента.\n\n## Заголовки\n\n```markdown\n# H1 Заголовок\n## H2 Заголовок  \n### H3 Заголовок\n```\n\n## Форматирование текста\n\n- **Жирный текст**: `**жирный**`\n- *Курсив*: `*курсив*`\n- `Код`: `` `код` ``\n- ~~Зачеркнутый~~: `~~зачеркнутый~~`\n\n## Списки\n\n### Маркированный список\n- Элемент 1\n- Элемент 2\n  - Подэлемент 2.1\n  - Подэлемент 2.2\n\n### Нумерованный список\n1. Первый пункт\n2. Второй пункт\n3. Третий пункт\n\n## Ссылки и изображения\n\n- Ссылка: `[текст](URL)`\n- Изображение: `![alt](URL)`\n\n## Блоки кода\n\n\\`\\`\\`javascript\nfunction hello() {\n  console.log(\"Hello, Mini Flowy!\");\n}\n\\`\\`\\`\n",
    "tutorials/mermaid-diagrams.md": "# Работа с Mermaid диаграммами\n\nПодробное руководство по созданию интерактивных диаграмм в Mini Flowy.\n\n## Что такое Mermaid?\n\nMermaid - это библиотека для создания диаграмм и схем из текста. В Mini Flowy диаграммы поддерживают:\n\n- 🔍 **Панорамирование и зум**\n- 📱 **Адаптивность**\n- ⬇️ **Экспорт в SVG**\n- 🎨 **Темная/светлая тема**\n\n## Типы диаграмм\n\n### Flowchart (Блок-схемы)\n\n```mermaid\nflowchart LR\n    A[Прямоугольник] --> B(Скругленный)\n    B --> C{Ромб}\n    C -->|Да| D[Результат 1]\n    C -->|Нет| E[Результат 2]\n```\n\n### Sequence (Диаграммы последовательности)\n\n```mermaid\nsequenceDiagram\n    participant A as Клиент\n    participant B as Сервер\n    participant C as База данных\n    \n    A->>B: Запрос данных\n    B->>C: SQL запрос\n    C-->>B: Результат\n    B-->>A: JSON ответ\n```\n\n### Gantt (Диаграммы Гантта)\n\n```mermaid\ngantt\n    title Планирование проекта\n    dateFormat  YYYY-MM-DD\n    section Планирование\n    Анализ требований    :a1, 2024-01-01, 30d\n    Дизайн               :a2, after a1, 20d\n    section Разработка\n    Frontend             :b1, after a2, 45d\n    Backend              :b2, after a2, 40d\n    section Тестирование\n    QA тестирование      :c1, after b1, 15d\n```\n\n## Советы по созданию диаграмм\n\n1. **Планируйте структуру** заранее\n2. **Используйте понятные названия** узлов\n3. **Группируйте связанные элементы** в подграфы\n4. **Добавляйте стили** для важных элементов\n5. **Тестируйте на разных размерах** экрана\n"
  }
};
