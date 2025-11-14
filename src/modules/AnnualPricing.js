export class AnnualPricing {
  selectors = {
    root: '[data-js-plan]',
    toggle: '[data-js-plan-toggle]',
    starter: '#starter',
    popular: '#popular',
    enter: '#enterprise'
  }

  storageKey = "annualPrice"

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    if (!this.rootElement) return
    this.toggleElement = this.rootElement.querySelector(this.selectors.toggle)
    this.starterElement = this.rootElement.querySelector(this.selectors.starter)
    this.popularElement = this.rootElement.querySelector(this.selectors.popular)
    this.enterpriseElement = this.rootElement.querySelector(this.selectors.enter)
    this.bindEvents()
    this.loadToggleState()
  }

  get pricesConfig() {
    return (
      [
        {element: this.starterElement, price: 100},
        {element: this.popularElement, price: 1400},
        {element: this.enterpriseElement, price: 2000},
      ]
    )
  }

  bindEvents() {
    this.toggleElement.addEventListener('click', this.onToggleClick)
  }

  onToggleClick = (event) => {
    const isToggleChecked = event.target.checked
    this.saveToggleState(isToggleChecked)
    this.updatePrice(isToggleChecked)
  }

  loadToggleState() {
    const savedState = localStorage.getItem(this.storageKey)
    if (savedState !== null) {
      const isAnnual = savedState === 'true'
      this.toggleElement.checked = isAnnual
      this.updatePrice(isAnnual)
    }
  }

  saveToggleState(isAnnualPrice) {
    localStorage.setItem(this.storageKey, isAnnualPrice.toString())
  }

  updatePrice(isAnnualPrice) {
    this.pricesConfig.map(({element, price}) => {
      const finalPrice = isAnnualPrice ? `$${price * 0.8}` : `$${price}`
      element.style.opacity = '0'
      element.style.transition = 'all 0.25s'
      element.style.translate = '-10px'
      setTimeout(() => {
        element.style.opacity = '1'
        element.style.translate = '0px'
        element.textContent = finalPrice
      }, 250)
    })
  }
}
