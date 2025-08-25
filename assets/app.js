/**
 * Mini Flowy - Main Application Logic
 * Основная логика приложения
 */

// Состояние приложения
const state = {
  pages: [],
  fuse: null,
  pzOn: true,
  theme: localStorage.getItem('theme') || 'light',
  colorScheme: localStorage.getItem('colorScheme') || 'blue',
  pzInstances: [],
  isFileProtocol: location.protocol === 'file:',
  activeTags: new Set(), // Активные фильтры по тегам
  filteredPages: [], // Отфильтрованные страницы
  collapsedCategories: new Set() // Свернутые категории
};

// Управление темами и цветовыми схемами
function setTheme(t) {
  state.theme = t;
  localStorage.setItem('theme', t);
  document.documentElement.setAttribute('data-theme', t === 'dark' ? 'dark' : '');
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    theme: t === 'dark' ? 'dark' : 'default',
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: 'basis'
    },
    themeVariables: {
      fontSize: '16px'
    }
  });
}

function setColorScheme(scheme) {
  state.colorScheme = scheme;
  localStorage.setItem('colorScheme', scheme);
  document.documentElement.setAttribute('data-color-scheme', scheme === 'blue' ? '' : scheme);
}

// Доступные цветовые схемы
const colorSchemes = {
  blue: { name: 'Синий', icon: '🔵' },
  emerald: { name: 'Изумрудный', icon: '🟢' },
  purple: { name: 'Фиолетовый', icon: '🟣' },
  amber: { name: 'Янтарный', icon: '🟡' },
  rose: { name: 'Розовый', icon: '🌹' },
  slate: { name: 'Серый', icon: '⚫' }
};

// Инициализация темы и цветовой схемы
setTheme(state.theme);
setColorScheme(state.colorScheme);

// Обработчики кнопок
document.getElementById('theme').onclick = () => setTheme(state.theme === 'dark' ? 'light' : 'dark');

// Создаем кнопку переключения цветовых схем
function createColorSchemeSelector() {
  const themeBtn = document.getElementById('theme');
  const colorBtn = document.createElement('button');
  colorBtn.className = 'btn';
  colorBtn.id = 'colorScheme';
  colorBtn.innerHTML = colorSchemes[state.colorScheme].icon;
  colorBtn.title = `Цветовая схема: ${colorSchemes[state.colorScheme].name}`;
  
  // Вставляем кнопку после кнопки темы
  themeBtn.parentNode.insertBefore(colorBtn, themeBtn.nextSibling);
  
  colorBtn.onclick = () => {
    // Циклично переключаем схемы
    const schemes = Object.keys(colorSchemes);
    const currentIndex = schemes.indexOf(state.colorScheme);
    const nextIndex = (currentIndex + 1) % schemes.length;
    const nextScheme = schemes[nextIndex];
    
    setColorScheme(nextScheme);
    colorBtn.innerHTML = colorSchemes[nextScheme].icon;
    colorBtn.title = `Цветовая схема: ${colorSchemes[nextScheme].name}`;
  };
}

// Инициализируем кнопку после загрузки DOM
setTimeout(createColorSchemeSelector, 100);

// Функции для шаринга и SEO
function updateMetaTags(page) {
  const baseUrl = location.origin + location.pathname;
  const pageUrl = baseUrl + '#/p/' + page.slug;
  const pageTitle = page.title + ' - Mini Flowy';
  const pageDescription = `${page.title} | Markdown + Mermaid диаграммы с панорамированием и зумом`;

  // Обновляем заголовок страницы
  document.title = pageTitle;

  // Обновляем meta-теги
  document.querySelector('meta[property="og:url"]').content = pageUrl;
  document.querySelector('meta[property="og:title"]').content = pageTitle;
  document.querySelector('meta[property="og:description"]').content = pageDescription;

  document.querySelector('meta[property="twitter:url"]').content = pageUrl;
  document.querySelector('meta[property="twitter:title"]').content = pageTitle;
  document.querySelector('meta[property="twitter:description"]').content = pageDescription;

  document.querySelector('meta[name="description"]').content = pageDescription;
  document.querySelector('link[rel="canonical"]').href = pageUrl;
}

// Функция транслитерации для создания безопасных URL slug'ов
function createSafeSlug(text) {
  // Карта транслитерации для кириллицы
  const translitMap = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
    'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
    'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo',
    'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M',
    'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
    'Ф': 'F', 'Х': 'H', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sch',
    'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
  };
  
  return text
    .split('')
    .map(char => translitMap[char] || char) // Транслитерация
    .join('')
    .toLowerCase() // В нижний регистр
    .replace(/[^a-z0-9\s-]/g, '') // Только латиница, цифры, пробелы и дефисы
    .replace(/\s+/g, '-') // Пробелы в дефисы
    .replace(/-+/g, '-') // Множественные дефисы в один
    .replace(/^-+|-+$/g, ''); // Убираем дефисы в начале и конце
}

// Универсальная функция шаринга
async function shareContent(title, url, buttonElement = null) {
  if (navigator.share) {
    // Используем Web Share API если доступно (мобильные устройства)
    try {
      await navigator.share({
        title: title,
        text: `Посмотрите: ${title}`,
        url: url
      });
    } catch (err) {
      console.log('Sharing cancelled');
    }
  } else {
    // Копируем в буфер обмена
    try {
      await navigator.clipboard.writeText(url);
      // Показываем уведомление
      if (buttonElement) {
        const originalText = buttonElement.textContent;
        buttonElement.textContent = '✓ Скопировано!';
        buttonElement.style.background = 'var(--success-500)';
        buttonElement.style.color = 'white';
        setTimeout(() => {
          buttonElement.textContent = originalText;
          buttonElement.style.background = '';
          buttonElement.style.color = '';
        }, 2000);
      } else {
        // Если нет кнопки, показываем alert
        alert('✓ Ссылка скопирована в буфер обмена!');
      }
    } catch (err) {
      // Fallback для старых браузеров
      prompt('Скопируйте ссылку:', url);
    }
  }
}

// Кнопка "Поделиться"
document.getElementById('shareBtn').onclick = async () => {
  // Используем текущий URL как есть для статей
  const currentUrl = location.href;
  const btn = document.getElementById('shareBtn');
  await shareContent(document.title, currentUrl, btn);
};

// Навигация
const nav = document.getElementById('nav');
document.getElementById('toggleNav').onclick = () => {
  nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
};

// Загрузка манифеста
async function loadManifest() {
  if (state.isFileProtocol) {
    // Используем встроенные данные для file:// протокола
    state.pages = window.embeddedData.pages;
  } else {
    // Загружаем из внешних файлов для HTTP протокола
    const res = await fetch('pages.json', { cache: 'no-store' });
    state.pages = await res.json();
  }
  
  // Инициализируем отфильтрованные страницы всеми страницами
  state.filteredPages = state.pages;
  
  state.fuse = new Fuse(state.pages, { keys: ['title', 'tags', 'slug'], threshold: 0.35, ignoreLocation: true });
  renderList(state.pages);
  renderTags();
}

// Рендеринг списка страниц с группировкой по категориям
function renderList(items, activeSlug) {
  const el = document.getElementById('list');
  el.innerHTML = '';
  
  // Группируем страницы по категориям
  const categorized = groupByCategory(items);
  
  // Если нет категорий, показываем обычный список
  if (categorized.uncategorized && categorized.uncategorized.length === items.length) {
    renderSimpleList(items, activeSlug, el);
    return;
  }
  
  // Рендерим категоризованный список
  Object.keys(categorized).forEach(categoryName => {
    if (categoryName === 'uncategorized' && categorized[categoryName].length === 0) return;
    
    const pages = categorized[categoryName];
    const categoryId = categoryName.replace(/\s+/g, '-').toLowerCase();
    const isCollapsed = state.collapsedCategories.has(categoryId);
    const icon = pages[0]?.icon || '📁';
    
    // Заголовок категории
    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'category-header';
    categoryHeader.innerHTML = `
      <div class="category-toggle" data-category="${categoryId}">
        <span class="category-icon">${isCollapsed ? '▶' : '▼'}</span>
        <span class="category-name">${icon} ${categoryName === 'uncategorized' ? 'Без категории' : categoryName}</span>
        <span class="category-count">${pages.length}</span>
        <button class="category-share-btn" onclick="event.stopPropagation(); shareCategory('${categoryName}', event)" title="Поделиться категорией">🔗</button>
      </div>
    `;
    
    // Обработчик сворачивания/разворачивания
    categoryHeader.onclick = () => toggleCategory(categoryId);
    
    el.appendChild(categoryHeader);
    
    // Контейнер для страниц категории
    if (!isCollapsed) {
      const categoryContent = document.createElement('div');
      categoryContent.className = 'category-content';
      
      pages.forEach(page => {
        const isPrivate = page.public === false;
        const div = document.createElement('div');
        div.className = 'item' + (page.slug === activeSlug ? ' active' : '') + (isPrivate ? ' private' : '');
        div.innerHTML = `
          <div class="item-title">
            ${page.title}
            ${isPrivate ? '<span class="lock-icon">🔒</span>' : ''}
          </div>
          <div class="item-tags">${(page.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
        `;
        div.onclick = () => { location.hash = '#/p/' + page.slug; };
        categoryContent.appendChild(div);
      });
      
      el.appendChild(categoryContent);
    }
  });
}

// Группировка страниц по категориям
function groupByCategory(pages) {
  const groups = {};
  
  pages.forEach(page => {
    const category = page.category || 'uncategorized';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(page);
  });
  
  // Сортируем категории в определенном порядке
  const sortedGroups = {};
  const categoryOrder = ['Начало работы', 'Туториалы', 'Примеры', 'Продвинутое'];
  
  categoryOrder.forEach(cat => {
    if (groups[cat]) {
      sortedGroups[cat] = groups[cat];
    }
  });
  
  // Добавляем остальные категории
  Object.keys(groups).forEach(cat => {
    if (!categoryOrder.includes(cat)) {
      sortedGroups[cat] = groups[cat];
    }
  });
  
  return sortedGroups;
}

// Открытие категории
function openCategory(categorySlug) {
  // Находим все публичные статьи в категории
  // Ищем по транслитерированному slug'у
  const categoryPages = state.pages.filter(page => {
    const pageCategoryName = (page.category || 'uncategorized');
    const pageCategorySlug = createSafeSlug(pageCategoryName);
    const targetCategorySlug = categorySlug.toLowerCase();
    
    // Проверяем совпадение по slug'у (транслитерированному)
    return pageCategorySlug === targetCategorySlug && page.public !== false;
  });
  
  if (categoryPages.length === 0) {
    // Если не найдено, пытаемся найти хотя бы одну страницу для получения названия категории
    const allCategoryPages = state.pages.filter(page => {
      const pageCategoryName = (page.category || 'uncategorized');
      const pageCategorySlug = createSafeSlug(pageCategoryName);
      const targetCategorySlug = categorySlug.toLowerCase();
      
      return pageCategorySlug === targetCategorySlug;
    });
    
    const categoryName = allCategoryPages[0]?.category || decodeURIComponent(categorySlug).replace(/-/g, ' ');
    showCategoryNotFound(categoryName);
    return;
  }
  
  // Получаем оригинальное название категории для отображения
  const actualCategoryName = categoryPages[0]?.category || 'Без категории';
  
  // Обновляем мета-теги для категории
  updateMetaTagsForCategory(actualCategoryName, categoryPages);
  
  // Создаем страницу категории
  showCategoryPage(actualCategoryName, categoryPages);
}

// Показ страницы категории
function showCategoryPage(categoryName, pages) {
  const content = document.querySelector('#content');
  const icon = pages[0]?.icon || '📁';
  
  content.innerHTML = `
    <div class="category-page">
      <div class="category-page-header">
        <h1>${icon} ${categoryName}</h1>
        <p class="category-description">
          Всего публичных статей в категории: <strong>${pages.length}</strong>
        </p>
        <div class="category-actions">
          <button class="btn btn-share" onclick="shareCategoryPage('${categoryName}', event)">
            🔗 Поделиться категорией
          </button>
        </div>
      </div>
      
      <div class="category-page-content">
        ${pages.map(page => `
          <div class="category-page-item" onclick="openPage('${page.slug}')">
            <div class="item-header">
              <span class="item-icon">${page.icon || '📄'}</span>
              <h3 class="item-title">${page.title}</h3>
            </div>
            <div class="item-meta">
              <div class="item-tags">
                ${(page.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  // Подсвечиваем активную категорию в сайдбаре
  highlightActiveCategory(categoryName);
}

// Показ ошибки категории не найдена
function showCategoryNotFound(categoryName) {
  const content = document.querySelector('#content');
  content.innerHTML = `
    <div class="error-page">
      <h1>❌ Категория не найдена</h1>
      <p>Категория "${categoryName}" не содержит публичных статей или не существует.</p>
      <button class="btn" onclick="location.hash = ''">🏠 На главную</button>
    </div>
  `;
}

// Обновление мета-тегов для категории
function updateMetaTagsForCategory(categoryName, pages) {
  const title = `${categoryName} - Mini Flowy`;
  const description = `Категория "${categoryName}" содержит ${pages.length} статей: ${pages.map(p => p.title).join(', ')}`;
  
  const categorySlug = createSafeSlug(categoryName);
  
  // Генерируем правильный URL в зависимости от протокола
  let url;
  if (window.location.protocol === 'file:') {
    // Для локальной работы используем полный путь к файлу
    url = `${window.location.href.split('#')[0]}#/category/${categorySlug}`;
  } else {
    // Для веб-серверов используем стандартный подход
    url = `${window.location.origin}${window.location.pathname}#/category/${categorySlug}`;
  }
  
  document.title = title;
  
  updateMetaTag('description', description);
  updateMetaTag('og:title', title);
  updateMetaTag('og:description', description);
  updateMetaTag('og:url', url);
  updateMetaTag('twitter:title', title);
  updateMetaTag('twitter:description', description);
}

// Подсветка активной категории
function highlightActiveCategory(categoryName) {
  // Убираем активность у статей
  document.querySelectorAll('.item.active').forEach(el => el.classList.remove('active'));
  
  // Добавляем класс активной категории
  document.querySelectorAll('.category-header').forEach(header => {
    const headerCategoryName = header.querySelector('.category-name').textContent.trim();
    if (headerCategoryName.includes(categoryName)) {
      header.classList.add('active-category');
    } else {
      header.classList.remove('active-category');
    }
  });
}

// Поделиться категорией
async function shareCategoryPage(categoryName, event) {
  // Находим кнопку, которая была нажата
  const button = event ? event.target : null;
  
  const categorySlug = createSafeSlug(categoryName);
  
  // Генерируем правильный URL в зависимости от протокола
  let url;
  if (window.location.protocol === 'file:') {
    // Для локальной работы используем полный путь к файлу
    url = `${window.location.href.split('#')[0]}#/category/${categorySlug}`;
  } else {
    // Для веб-серверов используем стандартный подход
    url = `${window.location.origin}${window.location.pathname}#/category/${categorySlug}`;
  }
  
  const title = `${categoryName} - Mini Flowy`;
  
  await shareContent(title, url, button);
}

// Поделиться категорией (из сайдбара)
async function shareCategory(categoryName, event) {
  // Находим кнопку, которая была нажата
  const button = event ? event.target : null;
  
  const categorySlug = createSafeSlug(categoryName);
  
  // Генерируем правильный URL в зависимости от протокола
  let url;
  if (window.location.protocol === 'file:') {
    // Для локальной работы используем полный путь к файлу
    url = `${window.location.href.split('#')[0]}#/category/${categorySlug}`;
  } else {
    // Для веб-серверов используем стандартный подход
    url = `${window.location.origin}${window.location.pathname}#/category/${categorySlug}`;
  }
  
  const title = `${categoryName} - Mini Flowy`;
  
  await shareContent(title, url, button);
}

// Рендеринг простого списка (без категорий)
function renderSimpleList(items, activeSlug, container) {
  items.forEach(p => {
    const div = document.createElement('div');
    div.className = 'item' + (p.slug === activeSlug ? ' active' : '');
    div.innerHTML = `
      <div class="item-title">${p.title}</div>
      <div class="item-tags">${(p.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
    `;
    div.onclick = () => { location.hash = '#/p/' + p.slug; };
    container.appendChild(div);
  });
}

// Переключение видимости категории
function toggleCategory(categoryId) {
  if (state.collapsedCategories.has(categoryId)) {
    state.collapsedCategories.delete(categoryId);
  } else {
    state.collapsedCategories.add(categoryId);
  }
  
  // Сохраняем состояние в localStorage
  localStorage.setItem('collapsedCategories', JSON.stringify([...state.collapsedCategories]));
  
  // Перерендериваем список
  renderList(state.filteredPages, getSlugFromHash());
}

// Рендеринг тегов
function renderTags() {
  const all = new Set();
  state.pages.forEach(p => (p.tags || []).forEach(t => all.add(t)));
  const el = document.getElementById('tags');
  
  // Создаем контейнер для активных фильтров и кнопки сброса
  let html = '';
  
  // Если есть активные фильтры, показываем их и кнопку сброса
  if (state.activeTags.size > 0) {
    html += '<div class="active-filters">';
    html += '<span class="filter-label">Активные фильтры:</span>';
    html += [...state.activeTags].map(t => 
      `<span class="tag active" data-tag="${t}">${t} ✕</span>`
    ).join(' ');
    html += '<button class="btn-reset-filter">✕ Сбросить все</button>';
    html += '</div>';
  }
  
  // Добавляем все доступные теги
  html += '<div class="all-tags">';
  html += [...all].sort().map(t => {
    const isActive = state.activeTags.has(t);
    return `<span class="tag ${isActive ? 'active' : ''}" data-tag="${t}">${t}</span>`;
  }).join(' ');
  html += '</div>';
  
  el.innerHTML = html;
  
  // Обработчики для тегов
  el.querySelectorAll('.tag').forEach(tagEl => {
    tagEl.onclick = () => toggleTagFilter(tagEl.dataset.tag);
  });
  
  // Обработчик для кнопки сброса
  const resetBtn = el.querySelector('.btn-reset-filter');
  if (resetBtn) {
    resetBtn.onclick = () => {
      state.activeTags.clear();
      applyFilters();
      renderTags();
    };
  }
}

// Функция переключения фильтра по тегу
function toggleTagFilter(tag) {
  if (state.activeTags.has(tag)) {
    state.activeTags.delete(tag);
  } else {
    state.activeTags.add(tag);
  }
  applyFilters();
  renderTags();
}

// Применение фильтров
function applyFilters() {
  if (state.activeTags.size === 0) {
    state.filteredPages = state.pages;
  } else {
    state.filteredPages = state.pages.filter(page => {
      const pageTags = page.tags || [];
      return [...state.activeTags].every(activeTag => pageTags.includes(activeTag));
    });
  }
  renderList(state.filteredPages, getSlugFromHash());
}

// Поиск
document.getElementById('q').addEventListener('input', e => {
  const q = e.target.value.trim();
  if (!q) { 
    // Если поиск пустой, показываем отфильтрованные по тегам страницы
    renderList(state.filteredPages, getSlugFromHash()); 
    return; 
  }
  
  // Ищем среди отфильтрованных по тегам страниц
  const searchSource = state.filteredPages.length > 0 ? state.filteredPages : state.pages;
  const fuse = new Fuse(searchSource, { keys: ['title', 'tags', 'slug'], threshold: 0.35, ignoreLocation: true });
  const res = fuse.search(q).map(r => r.item);
  renderList(res);
});

// Извлечение slug из хеша
function getSlugFromHash() {
  const m = location.hash.match(/^#\/p\/([^?]+)/);
  return m ? decodeURIComponent(m[1]) : (state.pages[0]?.slug);
}

// Роутинг
function handleRoute() {
  const hash = location.hash.substring(1);
  
  if (hash.startsWith('/p/')) {
    const slug = hash.substring(3);
    openPage(slug);
  } else if (hash.startsWith('/category/')) {
    const categorySlug = decodeURIComponent(hash.substring(10));
    openCategory(categorySlug);
  } else if (hash.startsWith('/search/')) {
    const query = decodeURIComponent(hash.substring(8));
    state.searchQuery = query;
    document.querySelector('.search input').value = query;
    search();
  } else {
    // Показываем первую страницу
    if (state.pages.length > 0) {
      openPage(state.pages[0].slug);
    }
  }
}

// Обработчик изменения хеша
window.addEventListener('hashchange', handleRoute);

// Открытие страницы
async function openPage(slug) {
  if (!slug) { return; }
  const p = state.pages.find(x => x.slug === slug);
  if (!p) { document.getElementById('content').innerHTML = '<p>Не найдено.</p>'; return; }

  // Обновляем meta-теги и заголовок для текущей страницы
  updateMetaTags(p);

  document.getElementById('rawLink').href = p.path;

  let md;
  if (state.isFileProtocol) {
    // Используем встроенный контент для file:// протокола
    md = window.embeddedData.content[p.path] || `# Ошибка\n\nКонтент не найден для ${p.path}`;
  } else {
    // Загружаем из внешних файлов для HTTP протокола
    const res = await fetch(p.path, { cache: 'no-store' });
    md = await res.text();
  }

  const html = marked.parse(md, { mangle: false, headerIds: true });
  const root = document.getElementById('content');
  root.innerHTML = html;
  
  // Обработка Mermaid диаграмм (через модуль MermaidRenderer)
  const blocks = root.querySelectorAll('pre code.language-mermaid');

  // Сносим старые инстансы
  state.pzInstances.forEach(p => p?.destroy?.());
  state.pzInstances = [];

  for (let i = 0; i < blocks.length; i++) {
    const codeEl = blocks[i];
    const code = codeEl.textContent;

    // Создаём рендер
    const renderer = window.MermaidRenderer.renderDiagram(code, i);
    codeEl.closest('pre').replaceWith(renderer.wrap);

    // Рендерим и подключаем pan/zoom
    try {
      const { svg, destroy } = await renderer.mountAndRender();
      const pz = window.PanZoomManager.init(svg, renderer.container);

      // Контролы
      renderer.ctrl.addEventListener('click', (e) => {
        const b = e.target.closest('button'); if(!b) return;
        if (b.dataset.act === 'reset') pz.reset();
        if (b.dataset.act === 'download') {
          const blob = new Blob([svg.outerHTML], { type: 'image/svg+xml;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url; a.download = `diagram-${i+1}.svg`; a.click(); URL.revokeObjectURL(url);
        }
      });

      state.pzInstances.push({ destroy: ()=>{ destroy(); pz.destroy(); } });
    } catch (err) {
      console.error('Failed to render diagram:', err);
    }
  }
  
  renderList(state.pages, slug);
  if (window.innerWidth < 900) nav.style.display = 'none';
  root.scrollTop = 0;
}

// Переключатель Pan&Zoom
document.getElementById('pz').onchange = (e) => {
  state.pzOn = e.target.checked;
  // При отключении/включении — просто пересоздадим страницу
  openPage(getSlugFromHash());
};

// Инициализация состояния категорий из localStorage
function initializeState() {
  const collapsed = localStorage.getItem('collapsedCategories');
  if (collapsed) {
    try {
      const collapsedArray = JSON.parse(collapsed);
      state.collapsedCategories = new Set(collapsedArray);
    } catch (e) {
      console.warn('Failed to parse collapsed categories from localStorage');
    }
  }
}

// Инициализация приложения
(async () => {
  initializeState();
  await loadManifest();
  if (!location.hash) { location.hash = '#/p/' + (state.pages[0]?.slug || ''); }
  handleRoute();
})();
