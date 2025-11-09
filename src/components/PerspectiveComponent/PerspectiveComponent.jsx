import './PerspectiveComponent.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon/index.js'

export const PerspectiveComponent = ({
  iconName,
  title,
  desc,
  hasFill = false,
}) => {
  return (
    <div className="perspective-component">
      <Icon name={iconName} hasFill={hasFill} />
      <h3 className="perspective-component__title h4">{title}</h3>
      <div className="perspective-component__desc">
        <p>{desc}</p>
      </div>
    </div>
  )
}
