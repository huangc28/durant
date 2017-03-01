import { combineReducers } from 'redux'

import forgotPassword from './forgotPassword'
import appReducer from './app'

const rootReducer = combineReducers({
  appReducer,
  forgotPassword,
})

export default rootReducer
