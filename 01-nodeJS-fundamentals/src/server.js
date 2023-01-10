import http from 'node:http'

const port = 3333

const server = http.createServer((request, response) => {

    return response.end('Hello')

})

server.listen(port, (() => {
    console.log("Running on port: ", port)
}))
