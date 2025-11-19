export class CopyFromClick {
  selectors = {
    mailLink: '[data-js-appeal-mail-link]',
    tooltip: '[data-js-appeal-mail-link-tooltip]'
  }

  constructor() {
    this.mailLinkElement = document.querySelector(this.selectors.mailLink)
    if (!this.mailLinkElement) return
    this.tooltipElement = document.querySelector(this.selectors.tooltip)
    this.bindEvents()
  }

  onMailLinkClick = (event) => {
    navigator.clipboard.writeText(event.target.textContent)
      .then(() => {
        this.tooltipElement.classList.add('visible')
        setTimeout(() => {
          this.tooltipElement.classList.remove('visible')
        }, 2000)
      })
      .catch(err => {
        console.error(err)
      })

  }

  bindEvents() {
    this.mailLinkElement.addEventListener('click', this.onMailLinkClick)
  }
}