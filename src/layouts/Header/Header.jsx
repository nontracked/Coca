import './Header.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import { Button } from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'
import Icon from '@/components/Icon'

export const Header = ({ url }) => {
  const menuItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Pricing',
      href: '/pricing',
    },
  ]

  return (
    <header className="header" data-js-mobile-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" />
        <nav className="header__menu" data-js-mobile-menu-overlay="">
          <ul className="header__menu-list">
            {menuItems.map(({ label, href }, index) => (
              <li className="header__menu__item" key={index}>
                <a
                  className={clsx(
                    'header__menu-link',
                    href === url && 'is-active'
                  )}
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a className="header__menu-link-contact" href="/">
            <span>Contact Us</span>
          </a>
        </nav>
        <BurgerButton
          className="header__burger-button visible-mobile"
          extraAttrs={{
            'data-js-mobile-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}
