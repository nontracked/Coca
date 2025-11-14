import './Support.scss'
import { SectionHeader } from '@/components/SectionHeader/index.js'
import { SupportCard } from '@/components/SupportCard/index.js'

export const Support = ({}) => {
  const cards = [
    {
      imgSrc: 'src/assets/images/support/1.jpg',
      title: 'Lead happiness for customers',
      desc: 'Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster',
      iconName: 'smile',
    },
    {
      imgSrc: 'src/assets/images/support/2.jpg',
      title: 'Mutually support each other',
      desc: 'Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster',
      iconName: 'trends',
    },
    {
      imgSrc: 'src/assets/images/support/3.jpg',
      title: 'Have fun growing together',
      desc: 'Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster',
      iconName: 'peopleGroup',
    },
    {
      imgSrc: 'src/assets/images/support/4.jpg',
      title: 'Make Your Business Grow',
      desc: 'Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster',
      iconName: 'dashboard',
    },
  ]
  const aria = 'Support'
  return (
    <section className="support container" aria-labelledby={aria}>
      <div className="support__inner">
        <SectionHeader
          classname="support__header"
          title="Advertise, analyze, and optimize! We do it all for you"
          desc="Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster"
          titleMobile="Here’s how Sans can benefit your busines"
          id={aria}
        />
        <ul className="support__list">
          {cards.map((items, index) => (
            <li className="support__item" key={index}>
              <SupportCard {...items} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
