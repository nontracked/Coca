import './NewsSliderCard.scss'
import { Image } from 'minista'

export const NewsSliderCard = ({ imgSrc, title, published, by }) => {
  return (
    <div className="news-slider-card">
      <a className="news-slider-card__link" href="/">
        <h4 className="news-slider-card__title">{title}</h4>
        <div className="news-slider-card__info">
          <p>{published}</p>
          <p>{by}</p>
        </div>
        <Image className="news-slider-card__image" src={imgSrc} />
      </a>
    </div>
  )
}
