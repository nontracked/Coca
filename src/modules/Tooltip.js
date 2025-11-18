const rootSelector = '[data-js-contact]'

class Tooltip {

  selectors = {
    tooltip: '[data-js-tooltip]',
    continent: '[data-js-continent]',
    title: '[data-js-tooltip-title]',
    desc: '[data-js-tooltip-desc]'
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.continentElement = this.rootElement.querySelectorAll(this.selectors.continent)
    this.tooltipElement = this.rootElement.querySelector(this.selectors.tooltip)
    this.tooltipTitleElement = this.rootElement.querySelector(this.selectors.title)
    this.tooltipDescElement = this.rootElement.querySelector(this.selectors.desc)
    this.bindEvents()
  }

  getAttrs(element) {
    //получаем внутренности дата-атрибута
    return (JSON.parse(element.dataset.jsContinent))
  }

  onContinentClick = (event) => {
    // получаем заголовок и описание из целевого элемента

    const {title, desc} = this.getAttrs(event.target)
    this.tooltipTitleElement.textContent = title
    this.tooltipDescElement.textContent = desc
    this.tooltipPosition(event)
    this.tooltipElement.classList.add('visible')

  }

  tooltipPosition(event) {
    const topPosition = event.target === this.continentElement[1]
    || event.target === this.continentElement[5] ? 150 : 170
    this.tooltipElement.style.top = (event.pageY - topPosition) + "px"
    this.tooltipElement.style.left = (event.pageX - 90) + "px"
    console.log(topPosition)
  }

  bindEvents() {
    this.continentElement.forEach((element) => {
      element.addEventListener('click', this.onContinentClick)
    })
  }

}

export class TooltipCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Tooltip(element)
    })
  }
}