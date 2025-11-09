import './Progress.scss'
import { SectionHeader } from '@/components/SectionHeader/index.js'
import { Image } from 'minista'
import Score from '@/components/Score/index.js'

export const Progress = ({}) => {
  const area = 'progress'
  const scoreItem = [
    {
      num: '17k',
      label: 'happy customers on worldwide',
    },
    {
      num: '15+',
      label: 'Hours of work experience',
    },
    {
      num: '50+',
      label: 'Creativity & passionate members',
    },
    {
      num: '100+',
      label: 'Integrations lorem ipsum integrations',
    },
  ]
  return (
    <section className="progress container" aria-labelledby={area}>
      <div className="progress__inner">
        <SectionHeader
          classname="progress__header"
          title="Lift your business to new heights with our digital marketing services"
          desc="To build software that gives customer facing teams in small and medium-sized businesses the ability to create rewarding and long-lasting relationships with customers"
          titleMobile="Drive sustainable growth with personal and engaging experiences"
          mode="flex"
          id={area}
        />
        <Image
          className="progress__image"
          src="src/assets/images/progress/1.jpg"
        />
        <ul className="progress__list">
          {scoreItem.map(({ num, label }) => (
            <li className="progress__item" key={label}>
              <Score label={label} num={num} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
