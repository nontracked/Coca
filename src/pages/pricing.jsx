import { PlanHero } from '@/sections/PlanHero/index.js'
import { Faq } from '@/sections/Faq/index.js'

export const metadata = {
  title: 'Pricing',
}

export default () => {
  return (
    <>
      <PlanHero />
      <Faq />
    </>
  )
}
