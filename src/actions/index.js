import axios from 'axios'
import { AUTH_ERROR, AUTH_USER } from './types'

const signin = (formProps) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3001/user_token', {
      auth: formProps
    })
    dispatch({ type: AUTH_USER, payload: response.data.jwt })
  } catch {
    dispatch({ type: AUTH_ERROR, payload: 'Email or password is incorrect!' })
  }
}

export {
  signin
}
