import http from 'http'

import { webhookHandler, createWebhookController } from './webhooks/index.js'

const port = 8800

http.createServer((req, res) => {
    console.log('url: ', req.url)
    createWebhookController(req, res)
})
.listen(port, () => {
    console.log('github-webhooks-server is running, port: ', port)
})