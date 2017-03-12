import express from 'express'
import fetch from 'isomorphic-fetch'

import { OUTSM_BASE_URL } from '../../config/client'

/**
 * @TODOs
 *  - Extract a general error catcher.
 *
 */

const router = express.Router()

/**
 * Success response:
 * {
 *    "userId":"e233965c-f82f-40a2-8558-2506b31e8a82",
 *    "token":"..."
 * }
 *
 * Fail response:
 * {"status":"30008","message":"INVALID_REQUEST"}
 *
 */
router.post('/forgot-password/validate-token', (req, res, next) => {
  const { token } = req.body

  if (!token) {
    // should extract error to a error catcher.
    res.json({ error: { message: 'token is not specified' } })
  }

  fetch(`${OUTSM_BASE_URL}/outsm_backend/guest/resetPass/${token}`)
    .then(res => res.json())
    .then(
      response => {
        res.json(response)
      }
    )
    .catch(next)
})

/**
 * URL: https://backend.outsm.com/outsm_backend/guest/forgotPass?userMail=missingcallme%40hotmail.com
 *
 * Success response:
 *  {
 *    "status": "200",
 *    "message": "..."
 *  }
 */
router.post('/forgot-password/request-reset-password', (req, res, next) => {
  const { email } = req.body

  if (!email) {
    res.json({ error: { message: 'email is not specified' } })
  }

  fetch(`${OUTSM_BASE_URL}/outsm_backend/guest/forgotPass?userMail=${email}`)
    .then(res => res.json())
    .then(
      response => {
        res.json(response)
      }
    )
    .catch(next)
})

router.post('/forgot-password/reset', (req, res, next) => {
  const { userId, token, newPassword } = req.body

  if (!userId) {
    res.json({ error: { message: 'userId is not specified' } })
  }

  if (!token) {
    res.json({ error: { message: 'token is not specified' } })
  }

  if (!newPassword) {
    res.json({ error: { message: 'newPassword is not specified' } })
  }

  fetch(`${OUTSM_BASE_URL}/outsm_backend/guest/chpwd`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      token,
      newPass: newPassword,
    }),
  })
    .then(res => res.json())
    .then(
      response => {
        res.json(response)
      }
    )
    .catch(next)
})

router.use((error, req, res, next) => {
  res.json({ error })
})

export default router
