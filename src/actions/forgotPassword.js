export const REQUEST_RESET_PASSWORD = 'REQUEST_RESET_PASSWORD'
export const VALIDATE_RESET_TOKEN = 'VALIDATE_RESET_TOKEN'

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
