import './Partners.scss'
import { SectionHeader } from '@/components/SectionHeader/index.js'
import { Image } from 'minista'
import Icon from '@/components/Icon/index.js'

export const Partners = ({}) => {
  const aria = 'Partners'
  const partners = [
    {
      imgSrc: 'src/assets/images/partners/1.png',
      label: 'Formula 1',
    },
    {
      imgSrc: 'src/assets/images/partners/2.png',
      label: 'Amazon',
    },
    {
      imgSrc: 'src/assets/images/partners/3.png',
      label: 'Fedex',
    },
    {
      imgSrc: 'src/assets/images/partners/4.png',
      label: 'Mircosoft',
    },
    {
      imgSrc: 'src/assets/images/partners/5.png',
      label: 'Google',
    },
    {
      imgSrc: 'src/assets/images/partners/6.png',
      label: 'OLA',
    },
    {
      imgSrc: 'src/assets/images/partners/7.png',
      label: 'Walmart',
    },
    {
      imgSrc: 'src/assets/images/partners/8.png',
      label: 'OYO',
    },
  ]
  return (
    <section className="partner container" aria-labelledby={aria}>
      <div className="partner__inner">
        <SectionHeader
          classname="partner__header"
          title="890+"
          desc="some big companies that we work with, and trust us very much"
          id={aria}
        />
        <ul className="partner__list">
          {partners.map(({ imgSrc, label }) => (
            <li className="partner__item" key={label}>
              <Image
                className="partner__image"
                src={imgSrc}
                title={label}
                aria-label={label}
                alt={label}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
