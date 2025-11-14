import './Soc1als.scss'
import Icon from '@/components/Icon/index.js'
import clsx from 'clsx'

export const Soc1als = ({ mode }) => {
  const soc1alsLink = [
    {
      link: '/',
      label: 'Facebook',
      iconName: 'facebook',
    },
    {
      link: '/',
      label: 'Twitter',
      iconName: 'twitter',
    },
    {
      link: '/',
      label: 'LinkedIn',
      iconName: 'linkedin',
    },
  ]
  return (
    <div className="soc1als">
      <ul className="soc1als__list">
        {soc1alsLink.map(({ link, label, iconName }, index) => (
          <li className="soc1als__item" key={index}>
            <a className="soc1als__link" href={link} title={label}>
              <Icon
                hasFill
                className={clsx(
                  'soc1als__icon',
                  mode && `soc1als__icon--${mode}`
                )}
                name={iconName}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
