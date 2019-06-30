import WebSocket from 'ws'

const createServer = server => {
  const wss = new WebSocket.Server({ server })
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
