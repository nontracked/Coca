import { AboutHero } from '@/sections/AboutHero/index.js'
import Ideas from '@/sections/Ideas/index.js'
import { Team } from '@/sections/Team/index.js'

export const metadata = {
  title: 'About',
}

export default () => {
  return (
    <>
      <AboutHero />
      <Ideas />
      <Team />
    </>
  )
}
