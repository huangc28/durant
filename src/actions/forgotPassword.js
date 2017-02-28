export const REQUEST_RESET_PASSWORD = 'REQUEST_RESET_PASSWORD'

export const VALIDATE_RESET_TOKEN = 'VALIDATE_RESET_TOKEN'
export const VALIDATE_RESET_TOKEN_SUCCESS = 'VALIDATE_RESET_TOKEN_SUCCESS'
export const VALIDATE_RESET_TOKEN_FAILED = 'VALIDATE_RESET_TOKEN_FAILED'

/**
 * @param {email}
 * @returns {object}
 */
export const requestResetPassword = email => ({
  type: REQUEST_RESET_PASSWORD,
  payload: {
    email,
  },
})

/**
 * @param {string} token
 * @returns {object}
 */
export const validateResetToken = token => ({
  type: VALIDATE_RESET_TOKEN,
  payload: {
    token,
  },
})

export const validateResetTokenSuccess = response => ({
  type: VALIDATE_RESET_TOKEN_SUCCESS,
  payload: {
    response,
  },
})

/**
 * @param {string} errorMessage
 * @returns {object}
 */
export const validateResetTokenFailed = errorMessage => ({
  type: VALIDATE_RESET_TOKEN_FAILED,
  payload: {
    errorMessage,
  },
})
