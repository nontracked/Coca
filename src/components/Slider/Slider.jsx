import './Slider.scss'
import Icon from '@/components/Icon/index.js'

export const Slider = ({hasButtons = false, items = [], config = {}, children}) => {
  return (
    <div
      className="news__content swiper container"
      data-js-slider={JSON.stringify(config)}
    >
      <ul className="news__list swiper-wrapper">
        {items.map((item, index) => (
          <li className="news__item swiper-slide" key={index}>
            {children(item)}
          </li>
        ))}
      </ul>
      {hasButtons && (
        <div className="news__buttons">
          <div className="swiper-button-prev" data-js-slider-previous-button="">
            <Icon className="button__prev" hasFill name="prevDisable" />
          </div>
          <div className="swiper-button-next" data-js-slider-next-button="">
            <Icon className="button__next" name="next" />
          </div>
        </div>
      )}
    </div>
  )
}
