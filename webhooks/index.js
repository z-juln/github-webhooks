import createWebhookHandler from 'github-webhook-handler'

import pushHandelr from './handlers/push.js'
import issuesHandelr from './handlers/issues.js'
import errorHandelr from './handlers/error.js'

export const webhookHandler = createWebhookHandler({
    path: '/webhooks/docker_cicd',
    secret: 'juln123'
})

webhookHandler.on('push', pushHandelr)
webhookHandler.on('issues', issuesHandelr)
webhookHandler.on('error', errorHandelr)

export function createWebhookController(req, res) {
    webhookHandler(req, res, err => {
        res.statusCode = 404
        res.end('WebhookController error: ', err)
    })
}