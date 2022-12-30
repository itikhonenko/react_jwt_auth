import { connect } from 'react-redux'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'

import * as actions from '../actions'

const Signin = ({ handleSubmit, pristine, submitting, signin, errorMessage }) => {
  const onSubmit = (formProps) => {
    signin(formProps)
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

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(Signin)
