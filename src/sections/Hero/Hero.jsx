import './Hero.scss'
import { Button } from '@/components/Button/index.js'
import { Image } from 'minista'

export const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__info">
          <header className="hero__header">
            <h1 className="hero__title" id="hero-title">
              Digitally forward creative
            </h1>
            <div className="hero__desc h3">
              <p>
                When it comes to interactive marketing, we've got you covered.
                Be where the world is going
              </p>
            </div>
          </header>
          <div className="hero__field">
            <label className="hero__label visually-hidden" htmlFor="hero-email">
              Email
            </label>
            <input
              className="hero__input"
              id="hero-email"
              name="hero-email"
              placeholder="Enter your email"
              type="email"
            />
            <Button className="hero__button" type="button" mode="dark">
              Try for free
            </Button>
          </div>
        </div>
        <div className="hero__gallery">
          <Image
            className="hero__gallery-top"
            src="src/assets/images/hero/top.png"
          />
          <Image
            className="hero__gallery-bottom"
            src="src/assets/images/hero/bottom.png"
          />
        </div>
      </div>
    </section>
  )
}
