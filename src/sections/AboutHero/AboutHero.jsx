import './AboutHero.scss'
import { AboutSliderCard } from '@/components/AboutSliderCard/index.js'
import Slider from '@/components/Slider/index.js'
import { aboutSliderConfig } from '@/components/Slider/sliderConfig.js'
import { aboutSlider } from '@/components/Slider/sliderData.js'

export const AboutHero = ({}) => {
  const aria = 'About Hero'
  return (
    <section className="about-hero container" aria-labelledby={aria}>
      <div className="about-hero__inner">
        <div className="about-hero__header">
          <h1 className="about-hero__title" title={aria}>
            Everything you need to get <br /> the attention of your audience
          </h1>
          <div className="about-hero__desc h3">
            Our digital agency helps clients develop, implement and maintain
            successful digital marketing strategies across all channels. Also
            work with you to build your website and create online businesses
            that grow.
          </div>
        </div>
        <div className="about-hero__content">
          <h2 className="visually-hidden" title={aria}>
            {aria}
          </h2>
          <Slider config={aboutSliderConfig} items={aboutSlider}>
            {(item) => <AboutSliderCard {...item} />}
          </Slider>
        </div>
      </div>
    </section>
  )
}
