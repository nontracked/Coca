import './Button.scss'
import clsx from 'clsx'

export const Button = ({
  className,
  type = 'button',
  href,
  children,
  // dark, light, light-with-border,
  mode = '',
}) => {
  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkAttributes = { href }
  const buttonAttributes = { type }
  const attributesByTag = isLink ? linkAttributes : buttonAttributes
  return (
    <Component
      className={clsx('button', className, mode && `button--${mode}`)}
      {...attributesByTag}
    >
      {children}
    </Component>
  )
}
