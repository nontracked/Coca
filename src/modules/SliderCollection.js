import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import getAttrNameFromSelector from '@/utils/getAttrNameFromSelector.js'
import { Navigation } from 'swiper/modules'

const rootSelector = '[data-js-slider]'

class Slider {
  selectors = {
    previousButton: '[data-js-slider-previous-button]',
    nextButton: '[data-js-slider-next-button]',
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.previusButton = this.rootElement.querySelector(
      this.selectors.previousButton
    )
    this.nextButton = this.rootElement.querySelector(this.selectors.nextButton)
    this.config = JSON.parse(
      this.rootElement.getAttribute(getAttrNameFromSelector(rootSelector))
    )
    this.init()
    this.log()
  }

  log() {
    console.log(1213)
  }

  init() {
    new Swiper(this.rootElement, {
      ...this.config,
      modules: [Navigation],
      navigation: {
        nextEl: this.nextButton,
        prevEl: this.previusButton,
        addIcons: false,
      },
    })
  }
}

export class SliderCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Slider(element)
    })
  }
}
