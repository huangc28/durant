import express from 'express'
import fetch from 'isomorphic-fetch'

import { OUTSM_BASE_URL } from '../../config/client'

const router = express.Router()

router.post('/forgot-password', (req, res) => {
  res.send('forgot password')
})

router.post('/forgot-password/validate-token', (req, res) => {
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
    .catch(error => (
      res.json({
        error: { message: error.message },
      })
    ))
})

export default router
