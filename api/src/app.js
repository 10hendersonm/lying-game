// server
import createHttpsServer from './utils/createHttpsServer'
import configureWebSocketConnection from './controllers/webSocketController'

// express
import express from 'express'
import restController from './controllers/restController'
import staticFileController from './controllers/staticFileController'
import bodyParser from 'body-parser'
import cors from 'cors'

// misc
import chalk from 'chalk'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const server = createHttpsServer(app)
const wss = configureWebSocketConnection(server, '/websocket')

app.use((req, res, next) => {
  console.log('Request received')
  console.log(req)
  console.log()
  next()
})

app.use(cors())
app.use(bodyParser.json())
app.use('/api', restController(wss))
app.use(staticFileController)

const port = process.env.APP_PORT || 8080

app.listen(port, () => {
  // server.listen(port, () => {
  console.log(chalk.blue(`API available on port ${chalk.yellow(port)}.`))
})
