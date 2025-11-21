import { Partners } from '@/sections/Partners/index.js'
import { Contact } from '@/sections/Contact/index.js'
import { Appeal } from '@/sections/Appeal/index.js'

export const metadata = {
  title: 'Contact Us',
}

export default () => {
  return (
    <>
      <Contact />
      <Partners />
      <Appeal />
    </>
  )
}
