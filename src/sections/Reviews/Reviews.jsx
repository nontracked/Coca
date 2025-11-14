import './Reviews.scss'
import { SectionHeader } from '@/components/SectionHeader/index.js'
import Icon from '@/components/Icon/index.js'
import Author from '@/components/Author/index.js'
import { reviewsSlider } from '@/components/Slider/sliderData.js'
import { ReviewsSliderCard } from '@/components/ReviewsSliderCard/index.js'
import Slider from '@/components/Slider/index.js'
import { reviewsSliderConfig } from '@/components/Slider/sliderConfig.js'

export const Reviews = ({}) => {
  const aria = 'Reviews'
  return (
    <section className="reviews container" aria-labelledby={aria}>
      <div className="reviews__inner">
        <SectionHeader
          classname="reviews__header"
          title="What our customer are saying"
          desc="We are trusted numerous companies from different business to meet their needs"
          mode="flex"
          id={aria}
        />
        <div className="reviews__content">
          <div className="reviews__content-quotes">
            <Icon className="reviews__content-icon" name="quotes" hasFill />
            <Slider
              items={reviewsSlider}
              hasButtons
              config={reviewsSliderConfig}
            >
              {(items) => <ReviewsSliderCard {...items} />}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}
