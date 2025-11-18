/*
class OverlayMenu {
  selectors = {
    root: '[data-js-overlay-menu]',
    dialog: '[data-js-overlay-menu-dialog]',
    burgerButton: '[data-js-overlay-menu-burger-button]',
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    if (!this.rootElement) {
      return
    }
    this.dialogElement = this.rootElement.querySelector(this.selectors.dialog)
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    )
    this.bindEvents()
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    this.dialogElement.open = !this.dialogElement.open
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
  }
}

export default OverlayMenu
*/

export class OverlayMenu {
  selectors = {
    root: '[data-js-mobile-menu]',
    overlay: '[data-js-mobile-menu-overlay]',
    burgerButton: '[data-js-mobile-menu-burger-button]',
  }

  states = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
    this.burgerElement = this.rootElement.querySelector(this.selectors.burgerButton)
    this.bindEvents()
  }

  onClick = () => {
    this.burgerElement.classList.toggle(this.states.isActive)
    this.overlayElement.classList.toggle(this.states.isActive)
    document.documentElement.classList.toggle(this.states.isLock)
  }

  bindEvents() {
    this.burgerElement.addEventListener('click', this.onClick)
  }
}
