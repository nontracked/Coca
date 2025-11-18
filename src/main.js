import InputMaskCollection from '@/modules/InputMaskCollection'
import {OverlayMenu} from '@/modules/OverlayMenu.js'
import {SliderCollection} from '@/modules/SliderCollection.js'
import {AnnualPricing} from "@/modules/AnnualPricing.js";
import {TooltipCollection} from "@/modules/Tooltip.js";

new OverlayMenu()
new InputMaskCollection()
new SliderCollection()
new AnnualPricing()
new TooltipCollection()

/*

document.addEventListener('DOMContentLoaded', function() {
  const parts = document.querySelectorAll('.part');
  const pin = document.getElementById('pin');
  const tooltip = document.getElementById('tooltip');
  const tooltipTitle = tooltip.querySelector('.tooltip__title');
  const tooltipDescription = tooltip.querySelector('.tooltip__description');
  const tooltipStreet = tooltip.querySelector('.tooltip__street');
  const contactMap = document.querySelector('.contact__map');

  // Обработчик клика по материкам
  parts.forEach(part => {
    part.addEventListener('click', function(e) {
      e.stopPropagation();

      // Получаем данные из data-атрибута
      const jsonData = this.getAttribute('data-js-description');
      let data;

      try {
        data = JSON.parse(jsonData);
      } catch (error) {
        console.error('Ошибка парсинга JSON:', error);
        return;
      }

      // Получаем координаты относительно карты
      const mapRect = contactMap.getBoundingClientRect();
      const svgRect = this.getBoundingClientRect();

      // Координаты клика относительно SVG
      const point = this.ownerSVGElement.createSVGPoint();
      point.x = e.clientX;
      point.y = e.clientY;
      const svgPoint = point.matrixTransform(this.ownerSVGElement.getScreenCTM().inverse());

      // Позиционируем PIN
      const pinX = svgPoint.x;
      const pinY = svgPoint.y;

      pin.style.left = pinX + 'px';
      pin.style.top = pinY + 'px';
      pin.style.display = 'block';

      // Заполняем тултип данными
      tooltipTitle.textContent = data.title || '';
      tooltipDescription.textContent = data.description || '';
      tooltipStreet.textContent = data.street || '';

      // Позиционируем тултип
      const tooltipX = pinX + 20;
      let tooltipY = pinY - tooltip.offsetHeight - 30;

      // Проверяем, чтобы тултип не выходил за границы карты
      if (tooltipY < 10) {
        tooltipY = pinY + 40;
        tooltip.querySelector('.tooltip__arrow').style.bottom = 'auto';
        tooltip.querySelector('.tooltip__arrow').style.top = '-10px';
        tooltip.querySelector('.tooltip__arrow').style.borderTop = 'none';
        tooltip.querySelector('.tooltip__arrow').style.borderBottom = '10px solid white';
      } else {
        tooltip.querySelector('.tooltip__arrow').style.bottom = '-10px';
        tooltip.querySelector('.tooltip__arrow').style.top = 'auto';
        tooltip.querySelector('.tooltip__arrow').style.borderBottom = 'none';
        tooltip.querySelector('.tooltip__arrow').style.borderTop = '10px solid white';
      }

      tooltip.style.left = tooltipX + 'px';
      tooltip.style.top = tooltipY + 'px';
      tooltip.style.display = 'block';

      // Добавляем активный класс
      parts.forEach(p => p.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Закрытие тултипа при клике вне материка
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.part') && !e.target.closest('.tooltip')) {
      hideTooltip();
    }
  });

  // Закрытие при нажатии ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      hideTooltip();
    }
  });

  function hideTooltip() {
    pin.style.display = 'none';
    tooltip.style.display = 'none';
    parts.forEach(part => part.classList.remove('active'));
  }

  // Обработчик ресайза окна
  window.addEventListener('resize', function() {
    hideTooltip();
  });
});*/
