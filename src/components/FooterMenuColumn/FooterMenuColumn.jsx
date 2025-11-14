import './FooterMenuColumn.scss'
import clsx from 'clsx'

export const FooterMenuColumn = ({ className, mainLink, links, key }) => {
  return (
    <div className={clsx('footer-menu-column', className)} key={key}>
      <a className="footer-menu-column__main-link" href={mainLink.href}>
        {mainLink.label}
      </a>
      <ul className="footer-menu-column__list">
        {links.map(({ label, href }, index) => (
          <li className="footer-menu-column__item" key={index}>
            <a className="footer-menu-column__link" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
