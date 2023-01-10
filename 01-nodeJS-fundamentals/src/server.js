import http from 'node:http'

const port = 3333

const users = []

const server = http.createServer((request, response) => {

    const { method, url } = request

    if (method === 'GET' && url === '/users') {

        return response
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))

    }

    if (method === 'POST' && url === '/users') {

        const user = {
            id: 1,
            name: 'John Doe',
            email: 'john@gmail.com'
        }

        users.push(user)

        return response.writeHead(201).end('Criação de usuário')

    }

    return response.writeHead(404).end('Not found.')

})

server.listen(port, (() => {
    console.log('Running on port: ', port)
}))
