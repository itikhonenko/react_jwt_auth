import { combineReducers } from "redux";
import { reducer as reducerForm } from "redux-form";
import auth from './auth'

export default combineReducers({
  auth,
  form: reducerForm
})
