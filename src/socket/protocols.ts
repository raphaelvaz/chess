import { Server, Socket } from 'socket.io'

export interface socketData {
    socket: Socket
    io: Server
}

export interface Controller {
    handle(server: socketData): void
}