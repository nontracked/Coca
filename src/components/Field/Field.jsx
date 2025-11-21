import './Field.scss'
import getIdFromTitle from '@/utils/getIdFromTitle'
import clsx from 'clsx'

export const Field = ({
  className,
  label,
  id = getIdFromTitle(label),
  /**
   * undefined (default) | 'email' | 'textarea'
   */ type,
  placeholder,
  isRequired,
  inputMode,
  mask,
  autoComplete,
}) => {
  const Component = type === 'textarea' ? 'textarea' : 'input'

  const extraAttrs = {}

  if (mask) {
    extraAttrs['data-js-input-mask'] = mask
  }

  return (
    <div className={clsx('field', className)}>
      <label className="field__label" htmlFor={id}>
        {label}
        {isRequired && (
          <span
            className="field__required-star"
            aria-hidden="true"
            title="Required"
          >
            &nbsp;*
          </span>
        )}
      </label>
      <Component
        className="field__control"
        id={id}
        type={type}
        autocomplete={autoComplete}
        placeholder={placeholder}
        required={isRequired}
        inputMode={inputMode}
        {...extraAttrs}
      />
    </div>
  )
}
