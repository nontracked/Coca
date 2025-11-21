import './PricingPlanCard.scss'
import clsx from 'clsx'
import { Button } from '@/components/Button/index.js'
import Icon from '@/components/Icon/index.js'
import Badge from '@/components/Badge/index.js'

export const PricingPlanCard = ({
  variant,
  desc,
  title,
  iconName,
  isBest = false,
  items = {},
  data,
  key,
}) => {
  return (
    <article
      className={clsx('pricing-plan-card', isBest && 'pricing-plan-card--blue')}
      key={key}
    >
      <div className="pricing-plan-card__content plan-card">
        <header className="plan-card__header">
          <div className="plan-card__title-wrapper">
            <h2
              className={clsx(
                'plan-card__title',
                isBest && 'plan-card__title--best'
              )}
              id={data}
            >
              {title}
            </h2>
            <span
              className={clsx(
                'plan-card__subtitle',
                isBest && 'plan-card__subtitle--best'
              )}
            >
              /mo
            </span>
          </div>
          <div className="plan-card__info">
            <h3
              className={clsx(
                'plan-card__subtitle',
                isBest && 'plan-card__subtitle--best'
              )}
            >
              {variant}
            </h3>
            <div className="plan-card__desc">
              <p>{desc}</p>
            </div>
          </div>
          <div
            className={clsx(
              'plan-card__icon-wrapper',
              isBest && 'plan-card__icon-wrapper--best'
            )}
          >
            <Icon
              className={clsx(
                'plan-card__icon',
                isBest && 'plan-card__icon--best'
              )}
              name={iconName}
            />
            {isBest && (
              <Badge
                label="Best Offers"
                imgSrc="src/assets/images/badge/fire.png"
                whiteMode
              />
            )}
          </div>
        </header>
        <div className="plan-card__body">
          <span
            className={clsx(
              'plan-card__includes',
              isBest && 'plan-card__includes--best'
            )}
          >
            What’s included:
          </span>
          <ul className="plan-card__list">
            {items.map(({ label, lineThrough }, index) => (
              <li
                className={clsx(
                  'plan-card__item',
                  isBest && 'plan-card__item--best'
                )}
                key={index}
              >
                <Icon
                  className={clsx(
                    'plan-card__item-icon',
                    lineThrough && 'plan-card__item-icon--line-through'
                  )}
                  hasFill
                  name="mark"
                />
                <span
                  className={clsx(
                    'plan-card__item-label',
                    lineThrough && 'plan-card__item-label--line-through'
                  )}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button
        className="plan-card__item-button"
        href="/"
        mode="light-with-border"
      >
        Chose Plan
      </Button>
    </article>
  )
}
