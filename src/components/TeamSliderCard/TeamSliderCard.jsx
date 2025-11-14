import './TeamSliderCard.scss'
import { Image } from 'minista'
import { Soc1als } from '@/components/Soc1als/index.js'

export const TeamSliderCard = ({ imgSrc, fullName, position }) => {
  return (
    <article className="team-slider-card">
      <Image className="team-slider-card__image" src={imgSrc} />
      <div className="team-slider-card__content">
        <div className="team-slider-card__info">
          <span className="team-slider-card__name">{fullName}</span>
          <span className="team-slider-card__position">{position}</span>
        </div>
        <div className="team-slider-card__soc1als">
          <Soc1als />
        </div>
      </div>
    </article>
  )
}
