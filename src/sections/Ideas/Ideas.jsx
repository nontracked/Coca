import './Ideas.scss'
import { SectionHeader } from '@/components/SectionHeader/index.js'

export const Ideas = ({}) => {
  const aria = 'Ideas'
  return (
    <section className="ideas container" aria-labelledby={aria}>
      <SectionHeader
        classname="ideas__header"
        desc="We are a software development firm specializing in digital products. We build beautiful, functional and cross-platform solutions that are accessible to all."
        title="Powerful ideas & sales acceleration"
        mode="flex"
        id={aria}
      />
    </section>
  )
}
