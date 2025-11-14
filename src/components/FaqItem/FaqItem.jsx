import './FaqItem.scss'

export const FaqItem = ({title, desc, id, isOpen}) => {
  const itemId = `faq-${id}`
  return (
    <div className="accordion">
      <details className="accordion__details" name="faq" open={isOpen}>
        <summary className="accordion__summary">
      <span className="accordion__title" role="term" aria-details={itemId}>
        {title}
      </span>
          <div
            className="accordion__content"
            id={itemId}
            role="definition"
          >
            <div className="accordion__content-body">
              <p>{desc}</p>
            </div>
          </div>
        </summary>
      </details>
    </div>
  )
}