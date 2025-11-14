import './Footer.scss'
import {Button} from '@/components/Button/index.js'
import clsx from 'clsx'
import Logo from '@/components/Logo/index.js'
import {FooterMenuColumn} from '@/components/FooterMenuColumn/index.js'
import {Soc1als} from '@/components/Soc1als/index.js'

export default ({title}) => {
  const privacyList = [
    {
      label: 'Privacy Policy',
      link: '/',
    },
    {
      label: 'Terms & Conditions',
      link: '/',
    },
    {
      label: 'Support',
      link: '/',
    },
  ]
  const isTransparentFooter = title === 'Home' || title === 'Blog'
  const footerColumn = [
    {
      mainLink: {label: 'Company', href: '/company'},
      links: [
        {label: 'About', href: '/about'},
        {label: 'Pricing', href: '/Pricing'},
        {label: 'Jobs', href: '/Jobs'},
        {label: 'Blog', href: '/Blog'},
      ],
    },
    {
      mainLink: {label: 'Product', href: '/product'},
      links: [
        {label: 'Sales Software', href: '/SalesSoftware'},
        {label: 'Marketplace', href: '/Marketplace'},
        {label: 'Terms & Conditions', href: '/'},
        {label: 'Privacy Policy', href: '/privacy'},
      ],
    },
    {
      mainLink: {label: 'Discover', href: '/discover'},
      links: [
        {label: 'CRM Comparison', href: '/'},
        {label: 'Partner Program', href: '/'},
        {label: 'What is CRM', href: '/'},
        {label: 'Resource', href: '/'},
      ],
    },
    {
      mainLink: {label: 'Help Center', href: '/help'},
      links: [
        {label: 'Community', href: '/'},
        {label: 'Knowledge Base', href: '/'},
        {label: 'Academy', href: '/'},
        {label: 'Support', href: '/'},
      ],
    },
  ]
  return (
    <footer
      className={clsx(
        'footer',
        isTransparentFooter ? 'footer--light' : 'footer--dark'
      )}
    >
      <div className="footer__inner container">
        <div className="footer__content">
          <div className="footer__header">
            <div className="footer__header__info">
              <h2
                className={clsx(
                  'footer__title',
                  !isTransparentFooter && 'footer__title--light'
                )}
              >
                Think beyond the wave
              </h2>
              {isTransparentFooter ? (
                <div className="footer__desc">
                  <p>
                    Ask about Sans products, pricing, implementation, or
                    anything else. Our highly trained reps are standing by,
                    ready to help
                  </p>
                </div>
              ) : (
                <div className="footer__desc footer__desc--gray">
                  <p>
                    Ask about Sans products, pricing, implementation, or
                    anything else. Our highly trained reps are standing by,
                    ready to help
                  </p>
                </div>
              )}
            </div>
            <div className="footer__header-action">
              <Button
                mode={isTransparentFooter ? 'dark' : 'light'}
                className={clsx('footer__header-button')}
              >
                Try for free
              </Button>
            </div>
          </div>
          <div className="footer__body">
            <div className="footer__logo">
              <Logo
                className={clsx(
                  'header__logo',
                  !isTransparentFooter && 'header__logo--invert'
                )}
              />
              <div
                className={clsx(
                  'footer__logo-desc',
                  !isTransparentFooter && 'footer__logo-desc--dark'
                )}
              >
                <p>
                  We built an elegant solution. Our team created a fully
                  integrated sales and marketing solution for SMBs
                </p>
              </div>
            </div>
            <div
              className={clsx(
                'footer__menu',
                !isTransparentFooter && 'footer__menu--dark'
              )}
            >
              {footerColumn.map((items, index) => (
                <FooterMenuColumn
                  className={clsx('footer-col')}
                  key={index}
                  {...items}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="footer__extra">
          <div className="footer__extra-links">
            <Soc1als mode={isTransparentFooter ? 'light' : 'dark'} />
            <ul className="privacy__list">
              {privacyList.map((item, index) => (
                <li className="privacy__item" key={index}>
                  <a
                    className={clsx(
                      'privacy__link',
                      !isTransparentFooter && 'privacy__link--dark'
                    )}
                    href={item.link}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={clsx(
              'footer__extra-copy',
              !isTransparentFooter && 'footer__extra-copy--dark'
            )}
          >
            © Copyright 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

/*
{isTransparentFooter ? (
    <div className="footer__inner container">Transparent</div>
  )
  :
  <div className="footer__inner container">Dark</div>
}*/
