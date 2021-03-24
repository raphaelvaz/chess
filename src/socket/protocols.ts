import { Socket } from 'socket.io'

export interface Controller {
    handle(socket: Socket): void
}