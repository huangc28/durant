import * as actionTypes from '../actions/forgotPassword'

const INIT_STATE = {
  token: null,
  errorMessage: null,
}

const forgotPassword = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      }
    case actionTypes.REQUEST_FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }
    default:
      return state
  }
}

export default forgotPassword
