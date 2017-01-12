import http from 'http'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import config from '../config'
import * as routes from '../routes'
import cookieParser from 'cookie-parser'

let app = express()
app.server = http.createServer(app)
app.use(cors({
    exposedHeaders: config.cors.headers
}))
app.use(bodyParser.json({
    limit : config.bodyLimit
}))
app.use(cookieParser())

for(let key in routes){
    if(routes.hasOwnProperty(key)){
        app.use(`/${key}`, routes[key])
    }
}


app.server.listen(process.env.PORT || config.port)
console.log(`Started on port ${app.server.address().port}`)

export default app