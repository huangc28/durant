import fetch from 'isomorphic-fetch'

/**
 * @param {string} email
 * @returns {Object}
 */
export const requestResetPassword = email => (
  fetch('/api/forgot-password/request-reset-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  })
  .then(response => response.json())
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
  })
  .then(response => response.json())
)

/**
 * @param {string} userId
 * @param {string} token
 * @param {string} newPassword
 */
export const resetPassword = (userId, token, newPassword) => (
  fetch('/api/forgot-password/reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      token,
      newPassword,
    }),
  })
  .then(response => response.json())
)
