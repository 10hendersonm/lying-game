// server
import http from 'http'
import configureWebSocketConnection from './controllers/webSocketController'

// express
import express from 'express'
import restController from './controllers/restController'
import staticFileController from './controllers/staticFileController'
import bodyParser from 'body-parser'
import cors from 'cors'
import ssl from './middleware/ssl'

// misc
import chalk from 'chalk'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const server = http.createServer(app)
const wss = configureWebSocketConnection(server)

app.use(cors())
app.use(ssl())
app.use(bodyParser.json())
app.use('/api', restController(wss))
app.use(staticFileController)

const port = process.env.APP_PORT || 8080

app.listen(port, () => {
  // server.listen(port, () => {
  console.log(chalk.blue(`API available on port ${chalk.yellow(port)}.`))
})
