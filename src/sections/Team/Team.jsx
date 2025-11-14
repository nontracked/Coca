import './Team.scss'
import { SectionHeader } from '@/components/SectionHeader/index.js'
import TeamSliderCard from '@/components/TeamSliderCard/index.js'
import Slider from '@/components/Slider/index.js'
import { teamSlider } from '@/components/Slider/sliderData.js'
import { teamSliderConfig } from '@/components/Slider/sliderConfig.js'

export const Team = ({}) => {
  const aria = 'Team'
  return (
    <section className="team " aria-labelledby={aria}>
      <div className="team__inner">
        <SectionHeader
          classname="team__header container"
          title="Meet our team of creators, designers, and world-class problem solvers"
          desc="To become the company that customers want, it takes a group of passionate people. Get to know the people who lead"
          id={aria}
        />
        <div className="team__body">
          <Slider items={teamSlider} config={teamSliderConfig}>
            {(item) => <TeamSliderCard {...item} />}
          </Slider>
          <div className="team__invite container">
            <div className="team__invite-title">
              <p className="hidden-tablet">
                Join our team, The one <br /> with the master touch
              </p>
              <p className="visible-tablet">Join our team</p>
            </div>
            <div className="team__invite-content">
              <span className="team__invite-info">
                We believe it takes great people to make a great product.
                <br className="hidden-mobile" />
                That’s why we hire not only the perfect professional fits,
                <br className="hidden-mobile" />
                but people who embody our company values.
              </span>
              <a className="team__invite-link" href="/">
                See Open Position ->
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
