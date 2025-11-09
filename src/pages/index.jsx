import { Hero } from '@/sections/Hero/index.js'
import { Perspective } from '@/sections/Perspective/index.js'
import { Benefits } from '@/sections/Benefits/index.js'
import Progress from '@/sections/Progress/index.js'
import { Partners } from '@/sections/Partners/index.js'
import { Support } from '@/sections/Support/index.js'
import News from '@/sections/News/index.js'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Perspective />
      <Benefits />
      <Progress />
      <Partners />
      <Support />
      <News />
    </>
  )
}
