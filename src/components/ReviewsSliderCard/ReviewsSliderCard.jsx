import './ReviewsSliderCard.scss'
import { Rating } from '@/components/Rating/index.js'
import Author from '@/components/Author/index.js'

export const ReviewsSliderCard = ({
  rating,
  quote,
  authorImage,
  authorName,
  authorPosition,
}) => {
  return (
    <div className="reviews-slider-card">
      <div className="reviews-slider-card__info">
        <Rating count={rating} />
        <div className="reviews-slider-card__quote">
          <p>{quote}</p>
        </div>
      </div>
      <div className="reviews-slider-card__author">
        <Author
          authorName={authorName}
          authorPosition={authorPosition}
          authorImage={authorImage}
        />
      </div>
    </div>
  )
}
