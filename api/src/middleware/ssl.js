import { Router } from 'express'

export default () => {
  const { SSL_ACME_STRING, SSL_ACME_CHALLENGE } = process.env
  const app = Router()
  app.get(`/.well-known/acme-challenge/${SSL_ACME_STRING}`, (req, res) => {
    res.contentType('application/force-download')
    res.send(SSL_ACME_CHALLENGE)
  })
  return app
}
