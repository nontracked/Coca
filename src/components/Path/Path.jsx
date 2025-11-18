import './Path.scss'
import clsx from 'clsx'
import {PopUp} from "@/components/PopUp/index.js";

export const Path = ({className, data, d, dataAttrName = ""}) => {
  return (
    <path className={clsx("path", className)} data-js-continent={data} d={d}></path>
  )
}

//{...{[dataAttrName]: data}}