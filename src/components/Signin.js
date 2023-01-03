import { connect, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { signin } from '../actions'

const Signin = ({ handleSubmit, pristine, submitting, signin }) => {
  const navigate = useNavigate()
  const errorMessage = useSelector(({ auth: { errorMessage } }) => errorMessage)

  const onSubmit = (formProps) => {
    signin(formProps, () => { navigate('/heart') })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input" />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input" />
        </fieldset>
        <div>{errorMessage}</div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default compose(
  connect(null, { signin }),
  reduxForm({ form: 'signin' })
)(Signin)
