import http from 'node:http'
import { json } from './middlewares/json.js'

const port = 3333

const users = []

const server = http.createServer(async (request, response) => {

    const { method, url } = request

    await json(request, response)

    if (method === 'GET' && url === '/users') {
        return response.end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {

        const { name, email } = request.body

        const user = {
            id: 1,
            name,
            email
        }

        users.push(user)

        return response.writeHead(201).end('User created.')

    }

    return response.writeHead(404).end('Not found.')

})

server.listen(port, (() => {
    console.log('Running on port: ', port)
}))
