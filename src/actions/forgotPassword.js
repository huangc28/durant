/**
 * @TODOs
 *  - Import redux-actions: https://github.com/acdlite/redux-actions to remove repetitive process of creating actions.
 */
export const REQUEST_RESET_PASSWORD = 'REQUEST_RESET_PASSWORD'
export const REQUEST_FORGOT_PASSWORD_SUCCESS = 'REQUEST_FORGOT_PASSWORD_SUCCESS'
export const REQUEST_FORGOT_PASSWORD_FAILED = 'REQUEST_FORGOT_PASSWORD_FAILED'

export const VALIDATE_RESET_TOKEN = 'VALIDATE_RESET_TOKEN'
export const VALIDATE_RESET_TOKEN_SUCCESS = 'VALIDATE_RESET_TOKEN_SUCCESS'
export const VALIDATE_RESET_TOKEN_FAILED = 'VALIDATE_RESET_TOKEN_FAILED'

export const RESET_PASSWORD = 'RESET_PASSWORD'
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS'
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED'

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
 * @returns {Object}
 */
export const requestResetPasswordSuccess = token => ({
  type: REQUEST_FORGOT_PASSWORD_SUCCESS,
  payload: {
    token,
  },
})

/**
 * @param {string} errorMessage
 * @returns {Object}
 */
export const requestResetPasswordFailed = errorMessage => ({
  type: REQUEST_FORGOT_PASSWORD_FAILED,
  payload: {
    errorMessage,
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

export const validateResetTokenSuccess = (userId, token) => ({
  type: VALIDATE_RESET_TOKEN_SUCCESS,
  payload: {
    userId,
    token,
  },
})

/**
 * @param {string} errorMessage
 * @returns {Object}
 */
export const validateResetTokenFailed = errorMessage => ({
  type: VALIDATE_RESET_TOKEN_FAILED,
  payload: {
    errorMessage,
  },
})

/**
 * @param {string} userId
 * @param {string} token
 * @param {string} newPassword
 * @returns {Object}
 */
export const resetPassword = (userId, token, newPassword) => ({
  type: RESET_PASSWORD,
  payload: {
    userId,
    token,
    newPassword,
  },
})

/**
 * @param {Object} response
 * @returns {Object}
 */
export const resetPasswordSuccess = response => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: {
    response,
  },
})

/**
 * @param {String} errorMessage
 * @returns {Object}
 */
export const resetPasswordFailed = errorMessage => ({
  type: RESET_PASSWORD_FAILED,
  payload: {
    errorMessage,
  },
})
