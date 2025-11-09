import './SectionHeader.scss'
import clsx from 'clsx'

export const SectionHeader = ({
  classname,
  title,
  titleMobile,
  desc,
  mode = '',
  id,
}) => {
  // mode : 'default', 'center', 'flex'
  return (
    <div className={clsx('section-header', classname)}>
      <header
        className={clsx('section-header', mode && `section-header--${mode}`)}
      >
        <h2
          className={clsx(
            'section-header__title',
            titleMobile && ' hidden-mobile'
          )}
          id={id}
        >
          {title}
        </h2>
        {titleMobile && (
          <h2 className="section-headear__title visible-mobile">
            {titleMobile}
          </h2>
        )}
        {desc && (
          <div className="section-header__desc">
            <p>{desc}</p>
          </div>
        )}
      </header>
    </div>
  )
}
