import './Rating.scss'
import { Image } from 'minista'
import Icon from '@/components/Icon/index.js'

export const Rating = ({ count }) => {
  const aria = `Rating: ${count} stars`
  return (
    <div
      className="rating"
      aria-label={aria}
      title={aria}
      style={{
        '--ratingView': count,
      }}
    >
      <div className="rating__stars">
        <Image
          className="rating__stars-unfilled"
          src="src/assets/icons/stars.svg"
        />
        <Image
          className="rating__stars-filled"
          src="src/assets/icons/starsFilled.svg"
        />
      </div>
      <div className="rating__label">
        <p>{count}</p>
      </div>
    </div>
  )
}
