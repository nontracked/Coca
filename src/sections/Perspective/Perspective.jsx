import './Perspective.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section/index.js'
import { SectionHeader } from '@/components/SectionHeader/index.js'
import { PerspectiveComponent } from '@/components/PerspectiveComponent/index.js'
import Icon from '@/components/Icon/index.js'

export const Perspective = ({}) => {
  const aria = 'perspective'
  const compItems = [
    {
      iconName: 'calendar',
      title: 'Build your date fundamental',
      desc: 'Build access to date, develop valuable business insights and drive revenue while maintaining full control over access and use of date at all times.',
      hasFill: false,
    },
    {
      iconName: 'desk',
      title: 'Measure more effective',
      desc: 'Effectively measure people-based campaigns with the freedom to choose from best-of breed partners to optimize and drive media innovation.',
      hasFill: true,
    },
    {
      iconName: 'fieldsDesk',
      title: 'Activate your date',
      desc: 'Accurately address your specific audiences at scale across any channel, platform, publisher or network and safely translate date between identity space to improve results.',
      hasFill: false,
    },
    {
      iconName: 'check',
      title: 'Strengthen consumer privacy',
      desc: 'Protect your customer date with leading privacy-preserving technologies and advanced techniques to minimize date movement while still enabling insight generation.',
      hasFill: false,
    },
  ]
  return (
    <section className="perspective" aria-labelledby={aria}>
      <div className="perspective__inner container">
        <SectionHeader
          title="Coca help our client solve complex customer problems with date that does more."
          desc="Our platform offers the modern enterprise full control of how date can be access and used with industry leading software solutions for identity, activation, and date collaboration"
          titleMobile="Sans help our client solve complex customer problems with date that does more."
          mode="default"
          id={aria}
        />
        <div className="perspective__content">
          <ul className="perspective__list">
            {compItems.map((compItems, index) => (
              <li className="perspective__item" key={index}>
                <PerspectiveComponent {...compItems} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
