import './Appeal.scss'
import {Field} from "@/components/Field/Field.jsx";
import {Button} from "@/components/Button/index.js";

export const Appeal = ({}) => {
  const formId = "user-info"
  return (
    <section className="appeal container" aria-labelledby="Appeal">
      <div className="appeal__inner">
        <header className="appeal__header">
          <h3 className="appeal__title">Let’s level up your brand</h3>
          <div className="appeal__desc">
            <p>You can reach us anytime {' '}
              <span className="appeal__mail-link" title="Click to copy" data-js-appeal-mail-link="">
                hellosansbrothers@gmail.com
              </span>
              <span className="appeal__mail-link-tooltip" data-js-appeal-mail-link-tooltip="">Copy!</span>
            </p>
          </div>
        </header>
        <div className="appeal__body">
          <form className="appeal__form" name={formId} id={formId} action="">
            <Field
              className="appeal__form-cell " label="First Name" placeholder="Ivan"
              isRequired autoComplete="given-name"
            />
            <Field className="appeal__form-cell" label="Last name" placeholder="Ivanov" />
            <Field
              className="appeal__form-cell appeal__form-cell--wide" label="Email" placeholder="you@company.com"
              isRequired
            />
            <Field
              className="appeal__form-cell appeal__form-cell--wide" label="Phone number"
              placeholder="(999) 999-99-99" inputMode="tel" mask="(000) 000-00-00"
            />
            <Field
              className="appeal__form-cell appeal__form-cell--wide" label="Message" type="textarea"
              placeholder="Leave us a message..."
            />
          </form>
          <Button formId={formId} className="appeal__form-button" type="submit" mode="dark">Get Started</Button>
        </div>
      </div>
    </section>
  )
}