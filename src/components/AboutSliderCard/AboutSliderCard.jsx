import './AboutSliderCard.scss'
import { Image } from 'minista'
import { Button } from '@/components/Button/index.js'
import clsx from 'clsx'

export const AboutSliderCard = ({ imgSrc, title, desc }) => {
  return (
    <div className={clsx('about-slider-card')}>
      <div className="about-slider-card__inner">
        <Image className="about-slider-card__image" src={imgSrc} />
        <div className="about-slider-card__content">
          <div className="about-slider-card__info">
            <h3 className="about-slider-card__title">{title}</h3>
            <div className="about-slider-card__desc">{desc}</div>
          </div>
          <Button mode="dark" className="about-slider-card__button">
            See Details >
          </Button>
        </div>
      </div>
    </div>
  )
}
