import './News.scss'
import { SectionHeader } from '@/components/SectionHeader/index.js'
import { NewsSliderCard } from '@/components/NewsSliderCard/index.js'
import Slider from '@/components/Slider/index.js'
import { trendingSlider } from '@/components/Slider/sliderData.js'
import { trendingSliderConfig } from '@/components/Slider/sliderConfig.js'

export const News = ({}) => {
  const area = 'News'
  return (
    <section className="news" aria-labelledby={area}>
      <div className="news__inner">
        <SectionHeader
          classname="news__header"
          title="Trending news from Coca"
          desc="we have some new Service to pamper you"
          id={area}
          mode="center"
        />
        <Slider config={trendingSliderConfig} items={trendingSlider}>
          {(item) => <NewsSliderCard {...item} />}
        </Slider>
      </div>
    </section>
  )
}
