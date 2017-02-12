import express from 'express'

const router = express.Router()

router.post('/forgot-password', (req, res) => {
  res.send('forgot password')
})

export default router
