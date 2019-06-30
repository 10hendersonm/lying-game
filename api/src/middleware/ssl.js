import { Router } from 'express'

const { SSL_ACME_STRING, SSL_ACME_CHALLENGE } = process.env

const app = Router()

app.get(`/.well-known/acme-challenge/${SSL_ACME_STRING}`, (req, res) => {
  res.send(SSL_ACME_CHALLENGE)
})

export default app
