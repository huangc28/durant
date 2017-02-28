import fetch from 'isomorphic-fetch'

/**
 * @param {string} email
 * @returns {Object}
 *
 */
export const requestResetPassword = email => (
  fetch('/api/forgot-password/request-reset-password')
)

/**
 * @param {string} token
 * @return {Object}
 */
export const validateResetToken = token => (
  fetch('/api/forgot-password/validate-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      token,
    }),
  }).then(response => response.json())
)
