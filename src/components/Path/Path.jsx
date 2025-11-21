import './Path.scss'
import clsx from 'clsx'
import { PopUp } from '@/components/PopUp/index.js'

export const Path = ({ className, data, d, dataAttrName = '', key }) => {
  return (
    <path
      className={clsx('path', className)}
      key={key}
      data-js-continent={data}
      d={d}
    ></path>
  )
}

//{...{[dataAttrName]: data}}
