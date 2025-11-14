import './Badge.scss'
import clsx from "clsx";
import Icon from "@/components/Icon/index.js";
import {Image} from "minista";

export const Badge = ({className, label, imgSrc, whiteMode}) => {
  // mode: white, blue
  return (
    <div className={clsx("badge", whiteMode && "badge--blue", className)}>
      <div className="badge__inner">
        <span className={clsx("badge__label", whiteMode && "badge__label--white")}>{label}</span>
        <Image className="badge__image" src={imgSrc} />
      </div>
    </div>
  )
}