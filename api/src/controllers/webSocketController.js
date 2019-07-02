import WebSocket from 'ws'

const createServer = (server, path) => {
  const wss = new WebSocket.Server({ server, path })
  server.on('upgrade', (req, socket, head) => {
    wss.handleUpgrade(req, socket, head, ws => {
      wss.emit('connection', ws, req)
    })
  })

  wss.broadcast = data => {
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        sendMessage(client)(data)
      }
    })
  }

  return wss
}

const sendMessage = client => data => {
  if (typeof data === 'object') data = JSON.stringify(data)
  client.send(data)
}

export default createServer
