/**
 * Mini Flowy - Privacy System
 * Система управления приватностью контента
 */

// Функция для фильтрации публичного контента
function filterPublicContent(pages, content) {
  const publicPages = pages.filter(page => page.public !== false);
  const publicContent = {};
  
  // Копируем только публичный контент
  publicPages.forEach(page => {
    if (content[page.path]) {
      publicContent[page.path] = content[page.path];
    }
  });
  
  return { pages: publicPages, content: publicContent };
}

// Функция проверки режима приватности
function getPrivacyMode() {
  // Проверяем URL или localStorage для определения режима
  const urlParams = new URLSearchParams(window.location.search);
  const publicMode = urlParams.get('public') === 'true' || 
                     localStorage.getItem('publicMode') === 'true';
  return publicMode ? 'public' : 'private';
}

// Функция переключения режима
function togglePrivacyMode() {
  const currentMode = getPrivacyMode();
  const newMode = currentMode === 'public' ? 'private' : 'public';
  
  localStorage.setItem('publicMode', newMode === 'public');
  
  // Перезагружаем страницу
  window.location.reload();
}

// Функция создания публичной сборки
function generatePublicBuild() {
  const publicData = filterPublicContent(
    window.embeddedData.pages, 
    window.embeddedData.content
  );
  
  const publicConfig = {
    pages: publicData.pages,
    content: publicData.content
  };
  
  // Генерируем публичные файлы
  const publicPagesJson = JSON.stringify(publicData.pages, null, 2);
  const publicDataJs = `window.embeddedData = ${JSON.stringify(publicConfig, null, 2)};`;
  
  return {
    'pages.json': publicPagesJson,
    'assets/data.js': publicDataJs
  };
}

// Инициализация системы приватности
function initPrivacySystem() {
  const mode = getPrivacyMode();
  
  if (mode === 'public') {
    // В публичном режиме показываем только публичные статьи
    const publicData = filterPublicContent(
      state.pages || window.embeddedData.pages,
      window.embeddedData.content
    );
    
    state.pages = publicData.pages;
    window.embeddedData = publicData;
    
    // Добавляем индикатор публичного режима
    document.body.setAttribute('data-privacy-mode', 'public');
    
    // Скрываем приватные функции
    hidePrivateFeatures();
  }
}

// Скрытие приватных функций в публичном режиме
function hidePrivateFeatures() {
  // Можно скрыть определенные элементы управления
  // Например, кнопку редактирования или админ-функции
}

// Экспорт функций
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    filterPublicContent,
    getPrivacyMode,
    togglePrivacyMode,
    generatePublicBuild,
    initPrivacySystem
  };
}
