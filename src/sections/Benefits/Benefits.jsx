import './Benefits.scss'
import { Image } from 'minista'
import { SectionHeader } from '@/components/SectionHeader/index.js'

export const Benefits = ({}) => {
  const aria = 'benefits'
  const benefitsLabel = [
    {
      label: 'Close more deals with single - page contact management',
    },
    {
      label: 'Enjoy one-click calling, call scripts and voicemail automation',
    },
    {
      label:
        'Take stages and milestones of your deals to keep the sales process an track',
    },
  ]
  return (
    <section className="benefits container" aria-labelledby={aria}>
      <div className="benefits__inner">
        <Image
          className="benefits__image"
          src="/src/assets/images/benefits/benefit.png"
        />
        <div className="benefits__content">
          <SectionHeader
            classname="benefits__header"
            title="Passion to increase company revenue up to 85%"
            desc="Automate your sales, marketing and service in one platform. Avoid date leaks and enable consistent messaging"
            id={aria}
          />
          <ul className="benefits__list">
            {benefitsLabel.map((item, index) => (
              <li className="benefits__item" key={index}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#46B277"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="benefits__paragraph">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
