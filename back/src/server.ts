import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io'
import setUpSockets from './socket/config'

const app = express();
app.use(cors())
app.use(express.json())

const server = createServer(app)
const io = new Server(server)
setUpSockets(io)

app.get('/', (req, res) => {
    res.send("Server is up and running")
})

server.listen(process.env.PORT || 3333, () => console.log(`🎈🎈 Server started on port ${process.env.PORT || '3333'}!`));