import './SupportCard.scss'
import Icon from '@/components/Icon/index.js'
import { Image } from 'minista'

export const SupportCard = ({ imgSrc, title, desc, iconName }) => {
  return (
    <a className="support-card" href="/">
      <div className="support-card__image-wrapper">
        <Image className="support-card__image" src={imgSrc} />
        <div>
          <Icon className="support-card__icon" name={iconName} hasFill />
        </div>
      </div>
      <div className="support-card__content">
        <h4 className="support-card__title">{title}</h4>
        <div className="support-card__desc">
          <p>{desc}</p>
        </div>
      </div>
    </a>
  )
}
