/**
 * MermaidRenderer
 * Ответственный за преобразование markdown-кода Mermaid в SVG
 * и создание контейнера с корректной адаптивной высотой.
 */

(function(){
  function ensureMermaid() {
    if (!window.mermaid) {
      throw new Error('Mermaid library is not loaded');
    }
  }

  /**
   * Создает контейнер, рендерит диаграмму и настраивает ResizeObserver.
   * @param {string} mermaidCode - код диаграммы mermaid
   * @param {number} index - индекс диаграммы на странице
   * @returns {{wrap:HTMLElement, container:HTMLElement, svg:SVGSVGElement, destroy:Function}}
   */
  function renderDiagram(mermaidCode, index){
    ensureMermaid();

    const wrap = document.createElement('div');
    wrap.className = 'merwrap';

    const ctrl = document.createElement('div');
    ctrl.className = 'merctrl';
    ctrl.innerHTML = '<button class="btn" data-act="reset">Reset</button>\n<button class="btn" data-act="download">Export SVG</button>';

    const container = document.createElement('div');
    container.className = 'mermaid';
    container.dataset.id = String(index);
    container.textContent = mermaidCode;

    wrap.appendChild(ctrl);
    wrap.appendChild(container);

    return {
      wrap,
      container,
      ctrl,
      /** Выполнить mermaid.run и вернуть SVG */
      async mountAndRender(){
        // mermaid.run преобразует все .mermaid внутри документа
        await mermaid.run({ querySelector: '.mermaid' });
        /** @type {SVGSVGElement|null} */
        const svg = container.querySelector('svg');
        if(!svg){ throw new Error('Mermaid did not render SVG'); }

        // Нормализация SVG: используем viewBox как источник правды, убираем width/height
        const vb = svg.getAttribute('viewBox');
        if(!vb){
          // Иногда Mermaid не ставит viewBox. В этом случае попытаемся вычислить его из bbox
          try {
            const bb = svg.getBBox();
            svg.setAttribute('viewBox', `0 0 ${Math.max(1, bb.width)} ${Math.max(1, bb.height)}`);
          } catch(_){ /* игнорируем */ }
        }
        
        // Принудительно убираем все размеры от Mermaid
        svg.removeAttribute('width');
        svg.removeAttribute('height');
        svg.style.removeProperty('width');
        svg.style.removeProperty('height');
        svg.style.removeProperty('max-width');
        svg.style.removeProperty('max-height');
        
        // Устанавливаем нужные размеры
        svg.style.setProperty('width', '100%', 'important');
        svg.style.setProperty('height', '100%', 'important');
        svg.style.setProperty('display', 'block', 'important');

        // Устанавливаем константную высоту = 1/3 рабочей области
        function setContainerHeight(){
          try {
            const viewportH = window.innerHeight || document.documentElement.clientHeight || 800;
            // Примерная высота header + отступы
            const headerHeight = 80;
            const workingAreaHeight = viewportH - headerHeight;
            // 1/3 рабочей области, но не меньше 250px и не больше 600px
            const targetHeight = Math.max(250, Math.min(600, Math.round(workingAreaHeight / 3)));
            container.style.height = targetHeight + 'px';
          } catch(_) { 
            // Fallback на фиксированную высоту
            container.style.height = '350px';
          }
        }

        // Первичная установка высоты
        setContainerHeight();

        // Наблюдаем за ресайзом окна для пересчёта высоты
        const ro = new ResizeObserver(()=>setContainerHeight());
        ro.observe(container);

        // Подписка на resize окна
        const onWinResize = ()=>setContainerHeight();
        window.addEventListener('resize', onWinResize);

        return { svg, destroy: ()=>{ ro.disconnect(); window.removeEventListener('resize', onWinResize); } };
      }
    };
  }

  window.MermaidRenderer = { renderDiagram };
})();


