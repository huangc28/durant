import fetch from 'isomorphic-fetch'

/**
 * @param {string} token
 * @return {object}
 */
export const validateResetToken = token => {
  return fetch('api/reset-password/validate-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token,
    }),
  }).then(response => response.json())
}
