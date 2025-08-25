/**
 * PanZoomManager
 * Инкапсулирует инициализацию svg-pan-zoom с корректными границами,
 * вычисляет minZoom по viewBox/размеру контейнера и предоставляет методы управления.
 */

(function(){
  function ensureLib(){
    if(!window.svgPanZoom){
      throw new Error('svg-pan-zoom library is not loaded');
    }
  }

  /**
   * Рассчитать минимальный зум, чтобы диаграмма полностью помещалась в контейнер.
   */
  function computeMinZoom(svg, container){
    const vb = (svg.getAttribute('viewBox')||'').split(/\s+/).map(Number);
    if(vb.length !== 4){ return 0.1; }
    const vbWidth = Math.max(1, vb[2]);
    const vbHeight = Math.max(1, vb[3]);
    const cw = Math.max(1, container.clientWidth);
    const ch = Math.max(1, container.clientHeight);
    const scaleW = cw / vbWidth;
    const scaleH = ch / vbHeight;
    // Берем минимальный масштаб, чтобы всё влезло
    return Math.max(0.1, Math.min(scaleW, scaleH));
  }

  function init(svg, container){
    ensureLib();

    const minZoom = computeMinZoom(svg, container);
    const maxZoom = Math.max(minZoom * 10, 2);

    const pz = svgPanZoom(svg, {
      zoomEnabled: true,
      controlIconsEnabled: true,
      panEnabled: true,
      dblClickZoomEnabled: true,
      mouseWheelZoomEnabled: true,
      minZoom,
      maxZoom,
      fit: true,
      center: true,
      // Разумные ограничения: не даём диаграмме полностью исчезнуть
      beforePan: function(oldPan, newPan){
        const zoom = pz.getZoom();
        
        // Если зум близок к минимальному, центрируем
        if(zoom <= minZoom * 1.1){
          return { x: 0, y: 0 };
        }
        
        // Иначе разрешаем панорамирование с большим допуском
        const margin = Math.min(container.clientWidth, container.clientHeight) * 0.8;
        return {
          x: Math.max(-margin, Math.min(margin, newPan.x)),
          y: Math.max(-margin, Math.min(margin, newPan.y))
        };
      }
    });

    // Принудительно исправляем размеры после инициализации svg-pan-zoom
    setTimeout(() => {
      svg.style.removeProperty('max-width');
      svg.style.removeProperty('max-height');
      svg.style.setProperty('width', '100%', 'important');
      svg.style.setProperty('height', '100%', 'important');
    }, 0);

    // При ресайзе контейнера — пересчитываем minZoom и делаем fit
    const ro = new ResizeObserver(()=>{
      try{
        pz.resize();
        const newMin = computeMinZoom(svg, container);
        pz.setMinZoom(newMin);
        pz.fit();
        pz.center();
      }catch(_){ /* ignore */ }
    });
    ro.observe(container);

    return {
      instance: pz,
      reset(){ pz.resetZoom(); pz.fit(); pz.center(); },
      destroy(){ ro.disconnect(); pz.destroy(); }
    };
  }

  window.PanZoomManager = { init };
})();


