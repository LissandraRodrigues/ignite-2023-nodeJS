import http from 'node:http'
import { Transform } from 'node:stream'

const port = 3334

class InverseNumberStream extends Transform {

    _transform(chunk, enconding, callback) {

        const transformed = Number(chunk.toString()) * -1
       
        console.log(transformed)
       
        callback(null, Buffer.from(String(transformed)))

    }

}

const server = http.createServer((request, response) => {
    
    return request
        .pipe(new InverseNumberStream())
        .pipe(response)

})

server.listen(port, (() => {
    console.log('Running on port: ', port)
}))
