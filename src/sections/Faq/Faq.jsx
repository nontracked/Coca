import './Faq.scss'
import { SectionHeader } from '@/components/SectionHeader/index.js'
import faqItems from './data.json'
import { FaqItem } from '@/components/FaqItem/index.js'

export const Faq = ({}) => {
  const aria = 'Frequently asked questions'

  return (
    <section className="faq container" aria-labelledby={aria}>
      <div className="faq__inner">
        <SectionHeader
          classname="faq__header"
          title="Frequently asked questions"
          desc="Everything you need to know about the product and billing."
          mode="center"
        />
        <ul className="faq__list">
          {faqItems.map((item, index) => (
            <li className="faq__item" key={index}>
              <FaqItem {...item} isOpen={index === 0} />
            </li>
          ))}
        </ul>
        <div className="faq__accordion accordion"></div>
      </div>
    </section>
  )
}
